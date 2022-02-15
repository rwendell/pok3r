import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { Button } from "grommet";
import Link from "next/link";
import { useEffect, useState} from "react";




export const Authenticate = () => {
  const [provider, setProvider] = useState<Web3Provider|null> (null);

  useEffect(
    () => setProvider(new ethers.providers.Web3Provider(window.ethereum)),
    []
  );

  async function getAccount() {
    await provider!.send("eth_requestAccounts", []);
  }

  return (
    <>
      {provider?.listAccounts() ? (
        <Link href={"/search"} passHref>
        <Button primary label="Find Tables" />
        </Link>
      ) : (
        <>
          <h2>Please authenticate with MetaMask 🦊</h2>
          <button onClick={() => getAccount()}>Authenticate</button>
        </>
      )}
    </>
  );
};
