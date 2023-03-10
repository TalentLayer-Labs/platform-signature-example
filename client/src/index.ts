import dotenv from "dotenv";
import { Contract, Wallet, JsonRpcProvider } from "ethers";
import { TalentLayerServiceAbi } from "./abis/talent-layer-service";

import axios from "axios";

dotenv.config();

const talentLayerServiceAddress = "0x0c698D3509afee201Fd3EC8fdae8f88add54D734";

// Sample typescript type definitions
type EnvInfo = {
  PRIVATE_KEY: string;
  AUTOTASK_URL: string;
  ALCHEMY_API_KEY: string;
};

async function main() {
  const {
    PRIVATE_KEY: privateKey,
    AUTOTASK_URL: autotaskUrl,
    ALCHEMY_API_KEY: alchemyApiKey,
  } = process.env as EnvInfo;

  const profileId = 1;
  const platformId = 3;
  const cid = "QmUGje8oVhUqy4TcV2NUWeCeZz3s5E3hFXZjrSuVD2YwJy";

  const res = await axios.post(autotaskUrl, {
    profileId,
    cid,
  });
  const { signature } = JSON.parse(res.data.result);

  const provider = new JsonRpcProvider(
    `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}`
  );
  const signer = new Wallet(privateKey, provider);

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
