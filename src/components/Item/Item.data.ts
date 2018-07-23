import gql from "graphql-tag";

import { ItemData } from ".";
import { createQuery, createMutation, Resolver } from "apollo/utils";

type ItemIdObject = { id: number };

export const ItemQuery = createQuery<{ item?: ItemData }, { ref: string }, ItemIdObject>(
  gql`
    query ItemFromRef($ref: String!) {
      item @rtdbQuery(ref: $ref, type: "Item") {
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
        collapsed @client
      }
    }
  `,
  ({ id }) => ({ ref: `/v0/item/${id}` }),
);

export const ItemToggleCollapsedMutation = createMutation<void, ItemIdObject>(
  gql`
    mutation ToggleItemCollapsed($id: Int!) {
      toggleItemCollapsed(id: $id) @client
    }
  `,
);

const toggleItemCollapsed: Resolver<void, ItemIdObject> = (
  config,
  variables,
  { cache, getCacheKey },
) => {
  const id = getCacheKey({ __typename: "Item", id: variables.id });
  const fragment = gql`
    fragment collapsedItem on Item {
      collapsed
    }
  `;
  const item = cache.readFragment<ItemData>({ fragment, id });
  if (item) {
    const data = { ...item, collapsed: !item.collapsed };
    cache.writeData({ id, data });
  }
  return null;
};

export const resolvers = {
  Item: {
    collapsed: () => false,
  },
  Mutation: {
    toggleItemCollapsed,
  },
};
