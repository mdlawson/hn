import React, { Component, SFC } from "react";
import formatDistance from "date-fns/formatDistance";

import { Link, A } from "App.style";
import { Site, Subtext, Title } from "./StoryItem.style";
import Item, { ItemData } from "components/Item";

const HN = "https://news.ycombinator.com";
const ALGOLIA = "https://hn.algolia.com/?sort=byDate&storyText=false";
const GOOGLE = "https://www.google.com/search";

const SITE_REGEX = /.+\/\/(?:www\.)?([^\/]+)/;

export interface Props extends ItemData {}

export class StoryItem extends Component<Props> {
  render() {
    const { title, by, id, score, url } = this.props;
    return (
      <div>
        <Title>
          <A href={url}>{title} </A>
          {this.renderSite()}
        </Title>
        <Subtext>
          {score} points by <A href={`${HN}/user?id=${by}`}>{by}</A>
          {this.timeAgo()}
          |<A href={`${ALGOLIA}&query=${title}`}> past </A>
          |<A href={`${GOOGLE}?q=${title}`}> web </A>
          |<Link to={`/item/${id}`}> {this.commentsLinkText()} </Link>
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
        (<A href={`${HN}/from?site=${site}`}>{site}</A>)
      </Site>
    );
  }
}

const StoryItemContainer: SFC<{ id: number }> = ({ id }) => (
  <Item id={id}>{data => <StoryItem {...data} />}</Item>
);

export default StoryItemContainer;
