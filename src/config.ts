import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "G7oNorqF73EpuTZKLzuS87bvHsoyRNzfKCmk3N5VGkc8"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "8qZZYsLxMBE4vBbWzz7FXFbR7NrMGbEhgGvhVxsPZ4xf"
// "4i36qPmC4B4AyjhRV1eSfaCw3B7jcUSfRgXcEu8wxWQ5"
// "2mWemAEQW131oKvcNzYTR7EpeK26ugRQvmCW5U5oLg6a"

export const whitelistedWallets = [
  "53VVFtLzzi3nL2p1QF591PAB8rbcbsirYepwUphtHU9Q",
  "85gHs1pKkZcNCDEbcfxqhfFNPWCsNFqPTMMbTQARspWy",
  "FXoth7ba7LALmJGFaidCcMnhsxEagBDBDKCmkpr2QuDr",
  "232Z5QNvQ4wRyraGWFpC5i3HEbqozEWgBCV95eWASaG1",
  "D8ivzpXkG66VknRdVjEF1HjqS3T1tzcqraVR6FYaeLsV",
  "sTAKERL4U8fbn2nUte6rPVdcrz2z3fEh1adQEDrGULr",
];
