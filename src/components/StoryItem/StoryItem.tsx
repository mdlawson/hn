import React, { Component, SFC } from "react";
import formatDistance from "date-fns/formatDistance";

import { Link } from "App.style";
import { StorySubscription, STORY_DETAILS, Story } from "./StoryItem.data";
import { Site, Subtext, Title } from "./StoryItem.style";

const HN = "https://news.ycombinator.com";
const ALGOLIA = "https://hn.algolia.com/?sort=byDate&storyText=false";
const GOOGLE = "https://www.google.com/search";

const SITE_REGEX = /.+\/\/(?:www\.)?([^\/]+)/;

export interface Props extends Story {}

export class StoryItem extends Component<Props> {
  render() {
    const { title, by, id, score, url } = this.props;
    const site = "example.com";
    return (
      <div>
        <Title>
          <Link href={url}>{title} </Link>
          {this.renderSite()}
        </Title>
        <Subtext>
          {score} points by <Link href={`${HN}/user?id=${by}`}>{by}</Link>
          {this.timeAgo()}
          |<Link href={`${ALGOLIA}&query=${title}`}> past </Link>
          |<Link href={`${GOOGLE}?q=${title}`}> web </Link>
          |<Link href={`${HN}/item?id=${id}`}> {this.commentsLinkText()} </Link>
        </Subtext>
      </div>
    );
  }

  commentsLinkText() {
    const { descendants } = this.props;
    switch (descendants) {
      case 0:
        return "discuss";
      case 1:
        return "1 comment";
      default:
        return `${descendants} comments`;
    }
  }

  timeAgo() {
    const { time } = this.props;
    return formatDistance(time * 1000, new Date(), { addSuffix: true }) + " ";
  }

  renderSite() {
    const { url } = this.props;
    const match = SITE_REGEX.exec(url);

    if (!match) {
      return;
    }

    const [, site] = match;

    return (
      <Site>
        (<Link href={`${HN}/from?site=${site}`}>{site}</Link>)
      </Site>
    );
  }
}

const StoryItemContainer: SFC<{ id: number }> = ({ id }) => (
  <StorySubscription subscription={STORY_DETAILS} variables={{ ref: `/v0/item/${id}` }}>
    {({ loading, error, data }) => {
      if (error) {
        return `Boom! ${error.message}`;
      }
      if (loading || !data) {
        return "Loading...";
      }
      return <StoryItem {...data.story} />;
    }}
  </StorySubscription>
);

export default StoryItemContainer;
