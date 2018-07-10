import React, { Component, SFC } from "react";
import Interweave, { TransformCallback } from "interweave";

import Item, { ItemData } from "components/Item";
import { Header, Content, ReplyList, ListItem } from "./CommentItem.style";
import Author from "components/Author";
import Time from "components/Time";
import { External } from "App.style";

export interface Props extends ItemData {}

export class CommentItem extends Component<Props> {
  render() {
    const { text, by, time, kids, dead, deleted } = this.props;

    if (dead || deleted) {
      return null;
    }

    return (
      <div>
        <Header>
          <Author id={by} /> <Time since={time} />
        </Header>
        <Content>
          <Interweave transform={this.transform} content={text} />
        </Content>
        <ReplyList>
          {(kids || []).map(id => (
            <ListItem key={id}>
              <CommentItemContainer id={id} />
            </ListItem>
          ))}
        </ReplyList>
      </div>
    );
  }

  transform: TransformCallback = (node, children) => {
    if (node.tagName === "A") {
      return (
        <External href={node.getAttribute("href") || undefined}>{children}</External>
      );
    }
  };
}

const CommentItemContainer: SFC<{ id: number }> = ({ id }) => (
  <Item id={id}>{data => <CommentItem {...data} />}</Item>
);

export default CommentItemContainer;
