/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserTrip = /* GraphQL */ `query GetUserTrip($id: ID!) {
  getUserTrip(id: $id) {
    id
    name
    description
    date
    location
    image
    prix
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserTripQueryVariables,
  APITypes.GetUserTripQuery
>;
export const listUserTrips = /* GraphQL */ `query ListUserTrips(
  $filter: ModelUserTripFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      date
      location
      image
      prix
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserTripsQueryVariables,
  APITypes.ListUserTripsQuery
>;
export const syncUserTrips = /* GraphQL */ `query SyncUserTrips(
  $filter: ModelUserTripFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserTrips(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      date
      location
      image
      prix
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserTripsQueryVariables,
  APITypes.SyncUserTripsQuery
>;
