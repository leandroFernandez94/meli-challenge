import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Items from "./components/Items";
import SearchBar from "./components/SearchBar";
import ItemDetails from "./components/ItemDetails";
import styled from "styled-components";
import { SwrWrapper } from "./utils/swr";

const history = createBrowserHistory();

const PageContent = styled.div`
  padding: 0 10%;
`;

function App() {
  return (
    <SwrWrapper>
      <Router history={history}>
        <div className="App">
          <SearchBar />
          <PageContent>
            <Switch>
              <Route exact path="/items" component={Items} />
              <Route path="/items/:id" component={ItemDetails} />
              <Redirect to="/" />
            </Switch>
          </PageContent>
        </div>
      </Router>
    </SwrWrapper>
  );
}

export default App;
