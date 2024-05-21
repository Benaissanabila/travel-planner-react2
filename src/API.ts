/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserTripInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  date?: string | null,
  location?: string | null,
  image?: string | null,
  prix?: number | null,
  _version?: number | null,
};

export type ModelUserTripConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  image?: ModelStringInput | null,
  prix?: ModelFloatInput | null,
  and?: Array< ModelUserTripConditionInput | null > | null,
  or?: Array< ModelUserTripConditionInput | null > | null,
  not?: ModelUserTripConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserTrip = {
  __typename: "UserTrip",
  id: string,
  name?: string | null,
  description?: string | null,
  date?: string | null,
  location?: string | null,
  image?: string | null,
  prix?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserTripInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  date?: string | null,
  location?: string | null,
  image?: string | null,
  prix?: number | null,
  _version?: number | null,
};

export type DeleteUserTripInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserTripFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  image?: ModelStringInput | null,
  prix?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserTripFilterInput | null > | null,
  or?: Array< ModelUserTripFilterInput | null > | null,
  not?: ModelUserTripFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserTripConnection = {
  __typename: "ModelUserTripConnection",
  items:  Array<UserTrip | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUserTripFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  prix?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserTripFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserTripFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserTripMutationVariables = {
  input: CreateUserTripInput,
  condition?: ModelUserTripConditionInput | null,
};

export type CreateUserTripMutation = {
  createUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserTripMutationVariables = {
  input: UpdateUserTripInput,
  condition?: ModelUserTripConditionInput | null,
};

export type UpdateUserTripMutation = {
  updateUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserTripMutationVariables = {
  input: DeleteUserTripInput,
  condition?: ModelUserTripConditionInput | null,
};

export type DeleteUserTripMutation = {
  deleteUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserTripQueryVariables = {
  id: string,
};

export type GetUserTripQuery = {
  getUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserTripsQueryVariables = {
  filter?: ModelUserTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserTripsQuery = {
  listUserTrips?:  {
    __typename: "ModelUserTripConnection",
    items:  Array< {
      __typename: "UserTrip",
      id: string,
      name?: string | null,
      description?: string | null,
      date?: string | null,
      location?: string | null,
      image?: string | null,
      prix?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserTripsQueryVariables = {
  filter?: ModelUserTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserTripsQuery = {
  syncUserTrips?:  {
    __typename: "ModelUserTripConnection",
    items:  Array< {
      __typename: "UserTrip",
      id: string,
      name?: string | null,
      description?: string | null,
      date?: string | null,
      location?: string | null,
      image?: string | null,
      prix?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserTripSubscriptionVariables = {
  filter?: ModelSubscriptionUserTripFilterInput | null,
};

export type OnCreateUserTripSubscription = {
  onCreateUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserTripSubscriptionVariables = {
  filter?: ModelSubscriptionUserTripFilterInput | null,
};

export type OnUpdateUserTripSubscription = {
  onUpdateUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserTripSubscriptionVariables = {
  filter?: ModelSubscriptionUserTripFilterInput | null,
};

export type OnDeleteUserTripSubscription = {
  onDeleteUserTrip?:  {
    __typename: "UserTrip",
    id: string,
    name?: string | null,
    description?: string | null,
    date?: string | null,
    location?: string | null,
    image?: string | null,
    prix?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
