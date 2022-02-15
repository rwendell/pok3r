import { Grommet, Main } from "grommet";
import type { AppProps } from "next/app";
import { acme } from "../acme-theme";

const theme = {
  global: {
    colors: {
      brand: "#4c566a",

      "accent-1": "#8fbcbb",
      "accent-2": "#88c0d0",
      "accent-3": "#81a1c1",
      "accent-4": "#5e81ac",

      "neutral-1": "#8fbcbb",
      "neutral-2": "#88c0d0",
      "neutral-3": "#81a1c1",
      "neutral-4": "#5e81ac",

      "status-critical": "#d08770",
      "status-error": "#bf616a",
      "status-warning": "#ebcb8b",
      "status-ok": "#a3be8c",
      "status-unknown": "#b48ead",
      "status-disabled": "#3b4252", //temporary

      "light-1": "#eceff4",
      "light-2": "#eceff4",
      "light-3": "#e5e9f0",
      "light-4": "#e5e9f0",
      "light-5": "#d8dee9",
      "light-6": "#d8dee9",

      "dark-1": "#2e3440",
      "dark-2": "#2e3440",
      "dark-3": "#3b4252",
      "dark-4": "#3b4252",
      "dark-5": "#434c5e",
      "dark-6": "#4c566a",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={theme}>
      {/* This is probably going to be a temporary fix, maybe idk */}
      <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        margin: 0px;
      }

      
    `}</style>
      <Main background="dark-1" basis="3/4">
        <Component {...pageProps} />
      </Main>
    </Grommet>
  );
}

export default MyApp;
