import { DefenderRelayProvider, DefenderRelaySigner } from "defender-relay-client/lib/ethers";
import { RelayerParams } from "defender-relay-client/lib/relayer";
import { AutotaskEvent } from "defender-autotask-utils";
import { Contract } from "ethers";
import dotenv from "dotenv";

import { getSignatureForProposal, getSignatureForService } from "./utils/signature";
import { TalentLayerServiceAbi } from "./abis/talent-layer-service";

const talentLayerServiceAddress = "0x0c698D3509afee201Fd3EC8fdae8f88add54D734";

interface CreateServiceArgs {
  profileId: number;
  cid: string;
}

interface CreateProposalArgs {
  profileId: number;
  serviceId: number;
  cid: string;
}

type RequestBody =
  | {
      method: "createService";
      args: CreateServiceArgs;
    }
  | {
      method: "createProposal";
      args: CreateProposalArgs;
    };

type Event = RelayerParams &
  AutotaskEvent & {
    request?: {
      body?: RequestBody;
    };
  };

// Entrypoint for the Autotask
export async function handler(event: Event) {
  const { method, args } = event.request?.body || {};
  const { profileId, cid } = args || {};

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

  if (method === "createService") {
    const nonce = await talentLayerService.nonce(profileId);
    // Sign message
    return await getSignatureForService(signer, profileId, nonce, cid);
  } else if (method === "createProposal") {
    const { serviceId } = args || {};

    if (!serviceId) {
      return {
        error: "serviceId is required",
      };
    }

    return await getSignatureForProposal(signer, profileId, serviceId, cid);
  } else {
    return {
      error: "Invalid method",
    };
  }
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
        args: {
          profileId: 1,
          cid: "QmUGje8oVhUqy4TcV2NUWeCeZz3s5E3hFXZjrSuVD2YwJy",
          serviceId: 1,
        },
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
