import React, { SFC, ReactNode } from "react";

import { ItemQuery, ITEM } from "./Item.data";

export interface ItemData {
  id: number;
  title: string;
  by: string;
  time: number;
  url: string;
  score: number;
  descendants: number;
}

interface Props {
  id: number;
  children: (data: ItemData) => ReactNode;
}

const ItemContainer: SFC<Props> = ({ id, children }) => (
  <ItemQuery query={ITEM} variables={{ ref: `/v0/item/${id}` }}>
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
