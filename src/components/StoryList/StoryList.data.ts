import { Query } from "react-apollo";
import gql from "graphql-tag";

export const STORIES = gql`
  query listStories($ref: String!) {
    stories @rtdbQuery(ref: $ref, type: $ref, limitToFirst: 30) @array {
      id @val
    }
  }
`;

export class StoriesQuery extends Query<
  {
    stories: Array<{ id: number }>;
  },
  {
    ref: string;
  }
> {}
