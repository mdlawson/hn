import React, { Component, SFC } from "react";
import { RouteComponentProps } from "react-router";

import Item, { ItemData } from "components/Item";
import { StoryItem, SkeletonStoryItem } from "components/StoryItem";
import { Detail, CommentList, ListItem } from "./StoryDetail.style";
import CommentItem from "components/CommentItem";

export interface Props extends ItemData {}

export class StoryDetail extends Component<Props> {
  render() {
    const { kids } = this.props;
    return (
      <Detail>
        <StoryItem {...this.props} />
        <CommentList>
          {kids.map(id => (
            <ListItem key={id}>
              <CommentItem id={id} />
            </ListItem>
          ))}
        </CommentList>
      </Detail>
    );
  }
}

export const StoryDetailSkeleton = () => {
  return (
    <Detail>
      <SkeletonStoryItem />
    </Detail>
  );
};

const StoryDetailContainer: SFC<RouteComponentProps<{ id: string }>> = ({ match }) => (
  <Item id={Number(match.params.id)}>
    {({ error, data }) => {
      if (data && data.item) {
        return <StoryDetail {...data.item} />;
      }
      return error ? "Boom!" : <StoryDetailSkeleton />;
    }}
  </Item>
);

export default StoryDetailContainer;
