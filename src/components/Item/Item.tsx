import React, { SFC, ReactNode } from "react";

import { ItemQuery } from "./Item.data";

export interface ItemData {
  id: number;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  descendants: number;
  collapsed: boolean;
}

interface Props {
  id: number;
  children: (data: ItemData) => ReactNode;
}

const ItemContainer: SFC<Props> = ({ id, children }) => (
  <ItemQuery id={id}>
    {({ loading, error, data }) => {
      if (error) {
        return `Boom! ${error.message}`;
      }
      if (loading || !data) {
        return "Loading...";
      }
      return children(data.item);
    }}
  </ItemQuery>
);

export default ItemContainer;
