import gql from "graphql-tag";
import { createQuery } from "apollo/utils";

export const StoriesQuery = createQuery<
  { stories: Array<{ id: number }> },
  { ref: string }
>(
  gql`
    query ListStories($ref: String!) {
      stories @rtdbQuery(ref: $ref, type: $ref, limitToFirst: 30) @array {
        id @val
      }
    }
  `,
  () => ({ ref: `/v0/topstories` }),
);
