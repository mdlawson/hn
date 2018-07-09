import { Query, Subscription } from "react-apollo";
import gql from "graphql-tag";

export const STORIES = gql`
  subscription listStories($ref: String!) {
    stories @rtdbSub(ref: $ref, type: $ref, limitToFirst: 30, event: "value") @array {
      id @val
    }
  }
`;

export class Stories extends Subscription<
  {
    stories: Array<{ id: number }>;
  },
  {
    ref: string;
  }
> {}
