import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { hot } from "react-hot-loader";

import { Container, Header, Icon, Title, A } from "App.style";
import StoryList from "components/StoryList";
import StoryDetail from "components/StoryDetail";

const HN = "https://news.ycombinator.com";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Icon src="https://news.ycombinator.com/y18.gif" />
          <Title>Hacker News</Title>
          <span>
            <A href={`${HN}/newest`}> new </A>
            |<A href={`${HN}/newcomments}`}> comments </A>
            |<A href={`${HN}/show`}> show </A>
            |<A href={`${HN}/ask`}> ask </A>
            |<A href={`${HN}/jobs`}> jobs </A>
            |<A href={`${HN}/submit`}> submit </A>
          </span>
        </Header>
        <Switch>
          <Route path="/item/:id" component={StoryDetail} />
          <Route path="/" component={StoryList} />
        </Switch>
      </Container>
    );
  }
}

export default hot(module)(App);
