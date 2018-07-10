import React, { Component, SFC } from "react";

import Item, { ItemData } from "components/Item";
import { Header, Content } from "./CommentItem.style";
import Author from "components/Author";
import Time from "components/Time";

export interface Props extends ItemData {}

export class CommentItem extends Component<Props> {
  render() {
    const { text, by, time } = this.props;
    return (
      <div>
        <Header>
          <Author id={by} /> <Time since={time} />
        </Header>
        <Content>{text}</Content>
      </div>
    );
  }
}

const CommentItemContainer: SFC<{ id: number }> = ({ id }) => (
  <Item id={id}>{data => <CommentItem {...data} />}</Item>
);

export default CommentItemContainer;
