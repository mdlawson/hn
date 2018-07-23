import React, { Component, SFC } from "react";

import StoryItem from "components/StoryItem";
import { StoriesQuery, STORIES } from "./StoryList.data";
import { List, ListItem } from "./StoryList.style";

export interface Props {
  items: Array<number | undefined>;
}

export class StoryList extends React.Component<Props> {
  render() {
    const { items } = this.props;
    return (
      <List>
        {items.map((item, index) => (
          <ListItem key={item || index}>
            <StoryItem id={item} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const StoryListContainer: SFC = () => (
  <StoriesQuery>
    {({ error, data }) => {
      if (error) {
        return `Boom! ${error.message}`;
      }
      const items =
        data && data.stories
          ? data.stories.map(story => story.id)
          : Array(30).fill(undefined);

      return <StoryList items={items} />;
    }}
  </StoriesQuery>
);

export default StoryListContainer;
