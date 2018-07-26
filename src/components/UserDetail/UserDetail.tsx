import { RouteComponentProps } from "react-router";
import React, { Component, SFC } from "react";
import format from "date-fns/format";

import { Detail, Label, Value } from "./UserDetail.style";
import { UserQuery, UserData } from "./UserDetail.data";
import Markup from "components/Markup";
import { External } from "App.style";

const HN = "https://news.ycombinator.com";

export interface Props extends UserData {}

export class UserDetail extends Component<Props> {
  render() {
    const { id, created, karma, about } = this.props;
    return (
      <Detail>
        <Label>user</Label>
        <Value>{id}</Value>
        <Label>created</Label>
        <Value>{format(created * 1000, "MMMM d, yyyy")}</Value>
        <Label>karma</Label>
        <Value>{karma}</Value>
        <Label>about</Label>
        <Value>
          <Markup html={about} />
        </Value>
        <Value>
          <External href={`${HN}/submitted?id=${id}`}>submissions</External>
        </Value>
        <Value>
          <External href={`${HN}/threads?id=${id}`}>comments</External>
        </Value>
        <Value>
          <External href={`${HN}/favorites?id=${id}`}>favorites</External>
        </Value>
      </Detail>
    );
  }
}

export const UserDetailSkeleton = () => {
  return <Detail>...</Detail>;
};

const UserDetailContainer: SFC<RouteComponentProps<{ id: string }>> = ({ match }) => (
  <UserQuery id={match.params.id}>
    {({ error, data }) => {
      if (data && data.user) {
        return <UserDetail {...data.user} />;
      }
      return error ? "Boom!" : <UserDetailSkeleton />;
    }}
  </UserQuery>
);

export default UserDetailContainer;
