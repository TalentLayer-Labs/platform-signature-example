import dotenv from "dotenv";
import { Contract, Wallet, JsonRpcProvider } from "ethers";
import axios from "axios";

import { TalentLayerServiceAbi } from "./abis/talent-layer-service";
import { TalentLayerIdAbi } from "./abis/talent-layer-id";

dotenv.config();

const talentLayerIdAddress = "0xd88fd79E55e2d2153EBC121bf2fAa03522B89c62";
const talentLayerServiceAddress = "0x0c698D3509afee201Fd3EC8fdae8f88add54D734";

// Sample typescript type definitions
type EnvInfo = {
  PRIVATE_KEY: string;
  AUTOTASK_URL: string;
  ALCHEMY_API_KEY: string;
  PLATFORM_ID: string;
};

async function main() {
  const {
    PRIVATE_KEY: privateKey,
    AUTOTASK_URL: autotaskUrl,
    ALCHEMY_API_KEY: alchemyApiKey,
    PLATFORM_ID: platformId,
  } = process.env as EnvInfo;

  // Get signer
  const provider = new JsonRpcProvider(
    `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}`
  );
  const signer = new Wallet(privateKey, provider);

  // Get service data
  const talentLayerId = new Contract(
    talentLayerIdAddress,
    TalentLayerIdAbi,
    provider
  );
  const profileId = await talentLayerId.ids(signer.address);
  const cid = "QmUGje8oVhUqy4TcV2NUWeCeZz3s5E3hFXZjrSuVD2YwJy";

  // Get platform signature
  const res = await axios.post(autotaskUrl, {
    profileId: Number(profileId),
    cid,
  });
  const { signature } = JSON.parse(res.data.result);

  // Create service
  const talentLayerService = new Contract(
    talentLayerServiceAddress,
    TalentLayerServiceAbi,
    signer
  );
  const tx = await talentLayerService.createService(
    profileId,
    platformId,
    cid,
    signature
  );
  await tx.wait();

  console.log("Hash: ", tx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
