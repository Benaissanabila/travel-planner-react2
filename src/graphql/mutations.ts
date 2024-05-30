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
    prix
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
    prix
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
    prix
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
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
    id
    userId
    name
    email
    avatarUrl
    bio
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
    id
    userId
    name
    email
    avatarUrl
    bio
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
    id
    userId
    name
    email
    avatarUrl
    bio
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
