import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { Container, Header, Icon, Title, Link } from "App.style";
import StoryList from "components/StoryList";

const HN = "https://news.ycombinator.com";

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Icon src="https://news.ycombinator.com/y18.gif" />
          <Title>Hacker News</Title>
          <span>
            <Link href={`${HN}/newest`}> new </Link>
            |<Link href={`${HN}/newcomments}`}> comments </Link>
            |<Link href={`${HN}/show`}> show </Link>
            |<Link href={`${HN}/ask`}> ask </Link>
            |<Link href={`${HN}/jobs`}> jobs </Link>
            |<Link href={`${HN}/submit`}> submit </Link>
          </span>
        </Header>
        <StoryList />
      </Container>
    );
  }
}

export default hot(module)(App);
