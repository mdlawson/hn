import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { DataProxy } from "apollo-cache";

type Children<T extends Component> = { children: T["props"]["children"] };

export function createQuery<D, V = void, P = {}>(query: any, mapper?: (props: P) => V) {
  return (props: P & Children<Query<D, V>>) => (
    <Query query={query} variables={mapper && mapper(props)}>
      {props.children}
    </Query>
  );
}

export function createMutation<D, V>(mutation: any) {
  return (props: V & Children<Mutation<D, V>>) => (
    <Mutation mutation={mutation} variables={props}>
      {props.children}
    </Mutation>
  );
}

export type Resolver<D, V> = (
  config: any,
  variables: V,
  context: {
    cache: DataProxy;
    getCacheKey: (item: { __typename: string; [key: string]: any }) => string;
  },
) => D;
