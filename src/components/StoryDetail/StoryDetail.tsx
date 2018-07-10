import React, { Component, SFC } from "react";
import { RouteComponentProps } from "react-router";

import Item, { ItemData } from "components/Item";
import { StoryItem } from "../StoryItem";
import { Detail } from "./StoryDetail.style";

export interface Props extends ItemData {}

export class StoryDetail extends Component<Props> {
  render() {
    return (
      <Detail>
        <StoryItem {...this.props} />
      </Detail>
    );
  }
}

const StoryDetailContainer: SFC<RouteComponentProps<{ id: string }>> = ({ match }) => (
  <Item id={Number(match.params.id)}>{data => <StoryDetail {...data} />}</Item>
);

export default StoryDetailContainer;
