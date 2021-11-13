import { useWeb3React } from "@web3-react/core";
import { formatAddress } from "src/helpers";
import ConnectWalletModal from "../ConnectWalletModal";
import { useState } from "react";
import { Button } from "@mui/material";

const ConnectWalletButton = () => {
  const { account } = useWeb3React();

  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)} variant="contained" sx={{ height: "100%", borderRadius: "0" }}>
        {account ? formatAddress(account) : "Connect wallet"}
      </Button>
      <ConnectWalletModal show={show} setShow={setShow} />
    </>
  );
};

export default ConnectWalletButton;
