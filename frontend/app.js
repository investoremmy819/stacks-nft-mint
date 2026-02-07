import { showConnect } from "@stacks/connect";
import { makeContractCall } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

// TODO: replace after deploy
const CONTRACT_ADDRESS = "STXXXXXXXXXXXXXXX";
const CONTRACT_NAME = "nft";

document.getElementById("connect").onclick = () => {
  showConnect({
    appDetails: {
      name: "Stacks NFT Mint",
      icon: window.location.origin + "/logo.png",
    },
  });
};

document.getElementById("mint").onclick = async () => {
  await makeContractCall({
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "mint",
    functionArgs: [],
    network,
    onFinish: (data) => {
      document.getElementById("status").innerText =
        "NFT minted! TxID: " + data.txId;
    },
    onCancel: () => {
      document.getElementById("status").innerText = "Cancelled";
    },
  });
};
  
