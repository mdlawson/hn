import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { hot } from "react-hot-loader";

import { Container, Header, Icon, Title, Internal, Link } from "App.style";
import StoryList from "components/StoryList";
import StoryDetail from "components/StoryDetail";
import UserDetail from "components/UserDetail";

const HN = "https://news.ycombinator.com";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Icon src="https://news.ycombinator.com/y18.gif" />
          <Title>
            <Link to="/">Hacker News</Link>
          </Title>
          <span>
            <Internal href={`${HN}/newest`}> new </Internal>
            |<Internal href={`${HN}/newcomments}`}> comments </Internal>
            |<Internal href={`${HN}/show`}> show </Internal>
            |<Internal href={`${HN}/ask`}> ask </Internal>
            |<Internal href={`${HN}/jobs`}> jobs </Internal>
            |<Internal href={`${HN}/submit`}> submit </Internal>
          </span>
        </Header>
        <Switch>
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/item/:id" component={StoryDetail} />
          <Route path="/" component={StoryList} />
        </Switch>
      </Container>
    );
  }
}

export default hot(module)(App);
