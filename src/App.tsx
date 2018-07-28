import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { hot } from "react-hot-loader";

import { Container, Header, Icon, Title } from "App.style";
import StoryList from "components/StoryList";
import StoryDetail from "components/StoryDetail";
import UserDetail from "components/UserDetail";
import Link from "components/Link";

const HN = "https://news.ycombinator.com";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Icon src="https://news.ycombinator.com/y18.gif" />
          <Title>
            <Link.Plain to={{ foo: 1 }}>Hacker News</Link.Plain>
          </Title>
          <span>
            <Link.Plain href={`${HN}/newest`}> new </Link.Plain>
            |<Link.Plain href={`${HN}/newcomments}`}> comments </Link.Plain>
            |<Link.Plain href={`${HN}/show`}> show </Link.Plain>
            |<Link.Plain href={`${HN}/ask`}> ask </Link.Plain>
            |<Link.Plain href={`${HN}/jobs`}> jobs </Link.Plain>
            |<Link.Plain href={`${HN}/submit`}> submit </Link.Plain>
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
