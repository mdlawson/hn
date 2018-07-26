import gql from "graphql-tag";
import { createQuery } from "apollo/utils";

interface UserKey {
  id: string;
}

export interface UserData extends UserKey {
  delay: number;
  created: number;
  karma: number;
  about: string;
  submitted: number[];
}

export const UserQuery = createQuery<{ user: UserData }, { ref: string }, UserKey>(
  gql`
    query GetUser($ref: String!) {
      user @rtdbQuery(ref: $ref, type: "User") {
        id @key
        delay
        created
        karma
        about
        submitted
      }
    }
  `,
  ({ id }) => ({ ref: `/v0/user/${id}` }),
);
