import { DefenderRelayProvider, DefenderRelaySigner } from "defender-relay-client/lib/ethers";
import { RelayerParams } from "defender-relay-client/lib/relayer";
import { AutotaskEvent } from "defender-autotask-utils";
import { Contract } from "ethers";
import dotenv from "dotenv";

import { getSignatureForProposal, getSignatureForService } from "./utils/signature";
import { TalentLayerServiceAbi } from "./abis/talent-layer-service";

const talentLayerServiceAddress = "0x0c698D3509afee201Fd3EC8fdae8f88add54D734";

interface RequestBody {
  method: "createService" | "createProposal";
  profileId: number;
  cid: string;
  serviceId?: number;
}

type Event = RelayerParams &
  AutotaskEvent & {
    request?: {
      body?: RequestBody;
    };
  };

// Entrypoint for the Autotask
export async function handler(event: Event) {
  const { profileId, cid, method, serviceId } = event.request?.body || {};

  if (!profileId) {
    return {
      error: "profileId is required",
    };
  }
  if (!cid) {
    return {
      error: "cid is required",
    };
  }

  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider);

  // Get nonce
  const talentLayerService = new Contract(talentLayerServiceAddress, TalentLayerServiceAbi, signer);
  let signature: string;

  if (method === "createService") {
    const nonce = await talentLayerService.nonce(profileId);
    // Sign message
    signature = await getSignatureForService(signer, profileId, nonce, cid);
  } else if (method === "createProposal") {
    if (!serviceId) {
      return {
        error: "serviceId is required",
      };
    }
    signature = await getSignatureForProposal(signer, profileId, serviceId, cid);
  } else {
    return {
      error: "Invalid method",
    };
  }

  return {
    signature,
  };
}

// Sample typescript type definitions
type EnvInfo = {
  RELAYER_API_KEY: string;
  RELAYER_API_SECRET: string;
};

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  dotenv.config();
  const { RELAYER_API_KEY: apiKey, RELAYER_API_SECRET: apiSecret } = process.env as EnvInfo;

  handler({
    apiKey,
    apiSecret,
    autotaskId: "local",
    autotaskName: "local",
    autotaskRunId: "local",
    request: {
      body: {
        method: "createProposal",
        profileId: 1,
        cid: "QmUGje8oVhUqy4TcV2NUWeCeZz3s5E3hFXZjrSuVD2YwJy",
        serviceId: 1,
      },
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error: Error) => {
      console.error(error);
      process.exit(1);
    });
}
