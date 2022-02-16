import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Tabs,
  Accordion,
  Box,
  Card,
  Footer,
  Meter,
  Header,
  Tab,
  Text,
  AccordionPanel,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  NameValueList,
  NameValuePair,
} from "grommet";

const Table: NextPage = () => {
  const router = useRouter();
  const { tableID } = router.query;

  return (
    <>
      <Header>
        <Tabs>
          <Tab title="Table"></Tab>
          <Tab title="Chat"></Tab>
          <Tab title="Settings"></Tab>
        </Tabs>
      </Header>
      <Box pad="large" direction="column">
        <Box pad="large" direction="row">
          <Card height="xsmall" width="xsmall" pad="small" background="light-1">
            <CardHeader>J</CardHeader>
          </Card>
          <Card height="xsmall" width="xsmall" pad="small" background="light-1">
            <CardHeader >A</CardHeader>
          </Card>
          <Card height="xsmall" width="xsmall" pad="small" background="light-1">
            <CardHeader>2</CardHeader>
          </Card>
          <Card height="xsmall" width="xsmall" pad="small" background="light-1">
            <CardHeader >3</CardHeader>
          </Card>
          <Card height="xsmall" width="xsmall" pad="small" background="dark-4"/>
          
        </Box>

        <Box border="all">
          <NameValueList pairProps={{ direction: "column" }} layout="grid">
            <NameValuePair name="Player 1">
              <Text color="text-strong">Bet 0.00001 ETH</Text>
            </NameValuePair>
            <NameValuePair name="Player 2">
              <Text color="dark-6">Called</Text>
            </NameValuePair>
            <NameValuePair name="You">
              <Text color="accent-1">...</Text>
            </NameValuePair>
          </NameValueList>
        </Box>

        <Box direction="row">
          <Card height="small" width="small" background="light-1">
            <CardHeader pad="medium">4</CardHeader>
          </Card>
          <Card height="small" width="small" background="light-1">
            <CardHeader pad="medium">5</CardHeader>
          </Card>

          <Accordion>
            <AccordionPanel label="Check">
              <Box pad="medium" background="light-2">
                <Text>One</Text>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Raise">
              <Box pad="medium" background="light-2">
                <Text>Two</Text>
              </Box>
            </AccordionPanel>
            <AccordionPanel label="Fold">
              <Box pad="medium" background="light-2">
                <Text>Two</Text>
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
      </Box>

      <Footer>
        <Meter
          size="full"
          values={[
            {
              value: 60,
            },
          ]}
        />
      </Footer>
    </>
  );
};

export default Table;
