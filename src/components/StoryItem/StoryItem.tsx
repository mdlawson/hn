import React, { Component, SFC } from "react";

import { Link, Internal } from "App.style";
import { Site, Subtext, Title } from "./StoryItem.style";
import Item, { ItemData } from "components/Item";
import Author from "components/Author";
import Time from "components/Time";
import Skeleton from "components/Skeleton";

const HN = "https://news.ycombinator.com";
const ALGOLIA = "https://hn.algolia.com/?sort=byDate&storyText=false";
const GOOGLE = "https://www.google.com/search";

const SITE_REGEX = /.+\/\/(?:www\.)?([^\/]+)/;

export interface Props extends ItemData {}

export class StoryItem extends Component<Props> {
  render() {
    const { title, by, id, score, url, time } = this.props;

    return (
      <div>
        <Title>
          <Internal href={url}>{title} </Internal>
          {this.renderSite()}
        </Title>
        <Subtext>
          {score} points by <Author id={by} /> <Time since={time} />
          {" | "}
          <Internal href={`${ALGOLIA}&query=${title}`}>past</Internal>
          {" | "}
          <Internal href={`${GOOGLE}?q=${title}`}>web</Internal>
          {" | "}
          <Link to={`/item/${id}`}>{this.commentsLinkText()}</Link>
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

  renderSite() {
    const { url } = this.props;
    const match = SITE_REGEX.exec(url);

    if (!match) {
      return;
    }

    const [, site] = match;

    return (
      <Site>
        (<Internal href={`${HN}/from?site=${site}`}>{site}</Internal>)
      </Site>
    );
  }
}

export const SkeletonStoryItem = () => (
  <div>
    <Title>
      <Skeleton characters={30} />
      <Site>
        <Skeleton characters={10} />
      </Site>
    </Title>
    <Subtext>
      <Skeleton characters={30} variance={0.05} />
    </Subtext>
  </div>
);

const StoryItemContainer: SFC<{ id?: number }> = ({ id }) =>
  id ? (
    <Item id={id}>
      {({ error, data }) => {
        if (data && data.item) {
          return <StoryItem {...data.item} />;
        }
        return error ? "Boom!" : <SkeletonStoryItem />;
      }}
    </Item>
  ) : (
    <SkeletonStoryItem />
  );

export default StoryItemContainer;
