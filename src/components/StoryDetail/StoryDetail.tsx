import React, { Component, SFC } from "react";
import { RouteComponentProps } from "react-router";

import Item, { ItemData } from "components/Item";
import { StoryItem } from "components/StoryItem";
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

const StoryDetailContainer: SFC<RouteComponentProps<{ id: string }>> = ({ match }) => (
  <Item id={Number(match.params.id)}>{data => <StoryDetail {...data} />}</Item>
);

export default StoryDetailContainer;
