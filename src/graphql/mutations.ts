/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserTrip = /* GraphQL */ `mutation CreateUserTrip(
  $input: CreateUserTripInput!
  $condition: ModelUserTripConditionInput
) {
  createUserTrip(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserTripMutationVariables,
  APITypes.CreateUserTripMutation
>;
export const updateUserTrip = /* GraphQL */ `mutation UpdateUserTrip(
  $input: UpdateUserTripInput!
  $condition: ModelUserTripConditionInput
) {
  updateUserTrip(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserTripMutationVariables,
  APITypes.UpdateUserTripMutation
>;
export const deleteUserTrip = /* GraphQL */ `mutation DeleteUserTrip(
  $input: DeleteUserTripInput!
  $condition: ModelUserTripConditionInput
) {
  deleteUserTrip(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserTripMutationVariables,
  APITypes.DeleteUserTripMutation
>;
