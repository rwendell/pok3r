import { Box } from "grommet";
import type { NextPage } from "next";
import { Authenticate } from "../components/authenticate/Authenticate";
import { Header } from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <Box align="center">
      <Header />
      <Authenticate />
    </Box>
  );
};

export default Home;
