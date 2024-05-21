/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserTrip = /* GraphQL */ `subscription OnCreateUserTrip($filter: ModelSubscriptionUserTripFilterInput) {
  onCreateUserTrip(filter: $filter) {
    id
    name
    description
    date
    location
    image
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserTripSubscriptionVariables,
  APITypes.OnCreateUserTripSubscription
>;
export const onUpdateUserTrip = /* GraphQL */ `subscription OnUpdateUserTrip($filter: ModelSubscriptionUserTripFilterInput) {
  onUpdateUserTrip(filter: $filter) {
    id
    name
    description
    date
    location
    image
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserTripSubscriptionVariables,
  APITypes.OnUpdateUserTripSubscription
>;
export const onDeleteUserTrip = /* GraphQL */ `subscription OnDeleteUserTrip($filter: ModelSubscriptionUserTripFilterInput) {
  onDeleteUserTrip(filter: $filter) {
    id
    name
    description
    date
    location
    image
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserTripSubscriptionVariables,
  APITypes.OnDeleteUserTripSubscription
>;
