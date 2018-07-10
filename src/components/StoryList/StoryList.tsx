import React, { Component, SFC } from "react";

import StoryItem from "components/StoryItem";
import { StoriesQuery, STORIES } from "./StoryList.data";
import { List, ListItem } from "./StoryList.style";

export interface Props {
  items: number[];
}

export class StoryList extends React.Component<Props> {
  render() {
    const { items } = this.props;
    return (
      <List>
        {items.map(item => (
          <ListItem key={item}>
            <StoryItem id={item} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const StoryListContainer: SFC = () => (
  <StoriesQuery query={STORIES} variables={{ ref: "/v0/topstories" }}>
    {({ loading, error, data }) => {
      if (error) {
        return `Boom! ${error.message}`;
      }
      if (loading || !data) {
        return "Loading...";
      }
      return <StoryList items={data.stories.map(story => story.id)} />;
    }}
  </StoriesQuery>
);

export default StoryListContainer;
