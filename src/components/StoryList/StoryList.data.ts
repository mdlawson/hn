import gql from "graphql-tag";
import { createQuery } from "apollo/utils";

export const STORIES = gql`
  query listStories($ref: String!) {
    stories @rtdbQuery(ref: $ref, type: $ref, limitToFirst: 30) @array {
      id @val
    }
  }
`;

export const StoriesQuery = createQuery<
  { stories: Array<{ id: number }> },
  { ref: string }
>(STORIES, () => ({ ref: `/v0/topstories` }));
