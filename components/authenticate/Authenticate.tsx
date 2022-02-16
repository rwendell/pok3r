import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { Button } from "grommet";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const Authenticate = () => {
  const [provider, setProvider] = useState<Web3Provider | null>(null);
  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
  }, []);

  const isLoggedIn = async () => !!(await provider!.listAccounts())?.length;
  const { data: loginData } = useSWR("isLoggedIn", isLoggedIn);

  console.log(loginData);

  console.log();
  const getAccount = async () => {
    await provider!.send("eth_requestAccounts", []);
  };

  return (
    <>
      {loginData ? (
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
