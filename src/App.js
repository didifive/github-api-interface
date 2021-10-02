import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import GlobalStyle from "./global/globalStyles";
import { ResetCSS } from "./global/resetCSS.js";

const App = () => {
  const { githubState } = useGithub();
  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
        )}
      </Layout>
    </>
  );
};

export default App;
