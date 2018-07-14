import React, { SFC, PureComponent } from "react";
import Interweave, { TransformCallback } from "interweave";

import Item, { ItemData, ItemToggleCollapsedMutation } from "components/Item";
import { Header, Content, ReplyList, ListItem, Collapse } from "./CommentItem.style";
import Author from "components/Author";
import Time from "components/Time";
import { External } from "App.style";

export interface Props extends ItemData {
  onToggleCollapsed: () => void;
}

export class CommentItem extends PureComponent<Props> {
  render() {
    const {
      text,
      by,
      time,
      kids,
      dead,
      deleted,
      collapsed,
      onToggleCollapsed,
    } = this.props;

    if (dead || deleted) {
      return null;
    }

    return (
      <div>
        <Header>
          <Author id={by} /> <Time since={time} />{" "}
          <Collapse onClick={onToggleCollapsed}>{collapsed ? "+" : "-"}</Collapse>
        </Header>
        <Content collapsed={collapsed}>
          <Interweave transform={this.transform} content={text} />
          <ReplyList>
            {(kids || []).map(id => (
              <ListItem key={id}>
                <CommentItemContainer id={id} />
              </ListItem>
            ))}
          </ReplyList>
        </Content>
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
  <Item id={id}>
    {data => (
      <ItemToggleCollapsedMutation id={id}>
        {toggle => <CommentItem onToggleCollapsed={toggle} {...data} />}
      </ItemToggleCollapsedMutation>
    )}
  </Item>
);

export default CommentItemContainer;
