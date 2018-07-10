import { Query } from "react-apollo";
import gql from "graphql-tag";

import { ItemData } from ".";

export const ITEM = gql`
  query queryItem($ref: String!) {
    item @rtdbQuery(ref: $ref, type: "item") {
      id @key
      deleted
      type
      by
      time
      text
      dead
      parent
      kids @array
      url
      score
      title
      descendants
    }
  }
`;

export class ItemQuery extends Query<
  {
    item: ItemData;
  },
  {
    ref: string;
  }
> {}
