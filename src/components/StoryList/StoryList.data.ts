import gql from "graphql-tag";
import { createQuery } from "apollo/utils";

export enum Stories {
  TOP,
  NEW,
  SHOW,
  ASK,
  JOB,
}

export const StoriesQuery = createQuery<
  { stories: Array<{ id: number }> },
  { ref: string },
  { show: Stories }
>(
  gql`
    query ListStories($ref: String!) {
      stories @rtdbQuery(ref: $ref, type: $ref, limitToFirst: 30) @array {
        id @val
      }
    }
  `,
  ({ show }) => ({ ref: `/v0/${Stories[show].toLowerCase()}stories` }),
);
