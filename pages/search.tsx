import { Box, Button, RangeInput, Form } from "grommet";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";


const Search: NextPage = () => {
  const [location, setLocation] = useState<GeolocationPosition | undefined>(
    undefined
  );
  const [searchDistance, setSearchDistance] = useState<number>(15);

  return (
    <Box align="center">
      <Form>
        <h1>Select a search radius</h1>
        <RangeInput
          value={searchDistance}
          onChange={(event) => setSearchDistance(parseInt(event.target.value))}
        ></RangeInput>
        <h2>{searchDistance} Miles</h2>
        
        
        <Link href={"/tables"} passHref><Button
          primary
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (pos) => setLocation(pos),
              null
            );
          }}
          label="Search"
        />
        </Link>
      </Form>
    </Box>
  );
};

export default Search;
