import { Subscription } from "react-apollo";
import gql from "graphql-tag";

export interface Story {
  id: number;
  title: string;
  by: string;
  time: number;
  url: string;
  score: number;
  descendants: number;
}

export const STORY_DETAILS = gql`
  subscription storyDetails($ref: String!) {
    story @rtdbSub(ref: $ref, type: "story", event: "value") {
      id @key
      title
      by
      time
      url
      score
      descendants
    }
  }
`;

export class StorySubscription extends Subscription<
  {
    story: Story;
  },
  {
    ref: string;
  }
> {}
