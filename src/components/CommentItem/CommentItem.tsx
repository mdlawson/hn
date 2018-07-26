import React, { SFC, PureComponent } from "react";

import Item, { ItemData, ItemToggleCollapsedMutation } from "components/Item";
import { Header, Content, ReplyList, ListItem, Collapse } from "./CommentItem.style";
import Author from "components/Author";
import Time from "components/Time";
import Skeleton from "components/Skeleton";
import Markup from "../Markup";

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
          <Markup html={text} />
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
}

export const SkeletonCommentItem = () => (
  <div>
    <Header>
      <Skeleton characters={15} variance={0.05} />
    </Header>
    <Content>
      <Skeleton characters={50} lines={3} />
    </Content>
  </div>
);

const CommentItemContainer: SFC<{ id: number }> = ({ id }) => (
  <ItemToggleCollapsedMutation id={id}>
    {toggle => (
      <Item id={id}>
        {({ data, error }) => {
          if (data && data.item) {
            return <CommentItem {...data.item} onToggleCollapsed={toggle} />;
          }
          return error ? "Boom!" : <SkeletonCommentItem />;
        }}
      </Item>
    )}
  </ItemToggleCollapsedMutation>
);

export default CommentItemContainer;
