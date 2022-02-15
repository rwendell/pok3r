import { Box, List, Spinner } from "grommet";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Tables: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  console.log(loading);

  return (
    <Box border="all" align="center" basis="full">
      <Box justify="center" basis="full">
        {loading ? (
          <Spinner />
        ) : (
          <List
            primaryKey="name"
            secondaryKey="players"
            data={[
              { name: "Alan's Game", players: 5 },
              { name: "Bryan's Game", players: 6 },
              { name: "Chris's Game", players: 3 },
              { name: "Eric's Game", players: 8 },
            ]}
          />
        )}
      </Box>
    </Box>
  );
};

export default Tables;
