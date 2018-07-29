import React, { Component, SFC } from "react";

import { Site, Subtext, Title } from "./StoryItem.style";
import Item, { ItemData } from "components/Item";
import Author from "components/Author";
import Time from "components/Time";
import Skeleton from "components/Skeleton";
import Link from "components/Link";

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
          <Link.Plain href={url || "foo"}>{title} </Link.Plain>
          {this.renderSite()}
        </Title>
        <Subtext>
          {score} points by <Author id={by} /> <Time since={time} />
          {" | "}
          <Link.Minimal href={`${ALGOLIA}&query=${title}`}>past</Link.Minimal>
          {" | "}
          <Link.Minimal href={`${GOOGLE}?q=${title}`}>web</Link.Minimal>
          {" | "}
          <Link.Minimal to={`/item/${id}`}>{this.commentsLinkText()}</Link.Minimal>
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
        (<Link.Minimal href={`${HN}/from?site=${site}`}>{site}</Link.Minimal>)
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
