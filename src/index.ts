import {
  DefenderRelayProvider,
  DefenderRelaySigner,
} from "defender-relay-client/lib/ethers";
import { RelayerParams } from "defender-relay-client/lib/relayer";
import { AutotaskEvent } from "defender-autotask-utils";
import { getSignatureForService } from "./utils/signature";

interface RequestBody {
  profileId: number;
  cid: string;
}

type Event = RelayerParams &
  AutotaskEvent & {
    request?: {
      body?: RequestBody;
    };
  };

// Entrypoint for the Autotask
export async function handler(event: Event) {
  const { profileId, cid } = event.request?.body || {};

  if (!profileId || !cid)
    return {
      statusCode: 400,
      errors: {
        profileId: "profileId is required",
        cid: "cid is required",
      },
    };

  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider);

  const signature = await getSignatureForService(signer, profileId, 0, cid);
  return signature;
}

// Sample typescript type definitions
type EnvInfo = {
  RELAYER_API_KEY: string;
  RELAYER_API_SECRET: string;
};

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  require("dotenv").config();
  const { RELAYER_API_KEY: apiKey, RELAYER_API_SECRET: apiSecret } =
    process.env as EnvInfo;

  handler({
    apiKey,
    apiSecret,
    autotaskId: "local",
    autotaskName: "local",
    autotaskRunId: "local",
    request: {
      body: {
        profileId: 1,
        cid: "ipfs://test",
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
