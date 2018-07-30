import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { hot } from "react-hot-loader";

import { Container, Header, Icon, Title, active } from "App.style";
import StoryList, { Stories } from "components/StoryList";
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
            <Link.Plain to="/">Hacker News</Link.Plain>
          </Title>
          <span>
            <Link.Nav to="/newest"> new </Link.Nav>
            |<Link.Plain href={`${HN}/newcomments`}> comments </Link.Plain>
            |<Link.Nav to="/show"> show </Link.Nav>
            |<Link.Nav to="/ask"> ask </Link.Nav>
            |<Link.Nav to="/jobs"> jobs </Link.Nav>
            |<Link.Plain href={`${HN}/submit`}> submit </Link.Plain>
          </span>
        </Header>
        <Switch>
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/item/:id" component={StoryDetail} />
          <Route path="/newest" render={() => <StoryList show={Stories.NEW} />} />
          <Route path="/show" render={() => <StoryList show={Stories.SHOW} />} />
          <Route path="/ask" render={() => <StoryList show={Stories.ASK} />} />
          <Route path="/jobs" render={() => <StoryList show={Stories.JOB} />} />
          <Route path="/" render={() => <StoryList show={Stories.TOP} />} />
        </Switch>
      </Container>
    );
  }
}

export default hot(module)(App);
