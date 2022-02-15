import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { Button } from "grommet";
import Link from "next/link";
import { useEffect, useState } from "react";




export const Authenticate = () => {
  const [provider, setProvider] = useState<Web3Provider | null>(null);
  const [login, setLogin] = useState(false)


  // TODO This is very VERY ugly.  Research a better implementation of how to take care of this
  useEffect(
    () => {
      setProvider(new ethers.providers.Web3Provider(window.ethereum))
      const isLoggedIn = async () => setLogin(!!(await provider!?.listAccounts())?.length)
      isLoggedIn();
    },
    [provider, login, setProvider]
  );

  const getAccount = async () => {
    await provider!.send("eth_requestAccounts", []);
  }


  return (
    <>
      {login ? (
        <Link href={"/search"} passHref>
          <Button primary label="Find Tables" />
        </Link>
      ) : (
        <>
          <h2>Please authenticate with MetaMask 🦊</h2>
          <Button secondary onClick={() => getAccount()} label="Authenticate" />
        </>
      )}
    </>
  );
};
