import { Box, List, Spinner } from "grommet";
import { NextPage } from "next";
import router from "next/router";
import { useEffect, useState } from "react";

const Tables: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Box align="center" basis="full">
      {loading ? (
        <Box justify="center" basis="full">
          <Spinner />
        </Box>
      ) : (
        <List
          alignSelf="stretch"
          primaryKey="name"
          secondaryKey="players"
          onClickItem={(item: any) => router.push(`table/${item.item.id}`)}
          data={[
            { name: "Alan's Game", players: 5, id: "asd123" },
            { name: "Bryan's Game", players: 6, id: "awc123" },
            { name: "Chris's Game", players: 3, id: "gbc123" },
            { name: "Eric's Game", players: 8, id: "aec123" },
          ]}
        />
      )}
    </Box>
  );
};

export default Tables;
