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

export type CreateUserProfileInput = {
  id?: string | null,
  userId: string,
  name?: string | null,
  email?: string | null,
  avatarUrl?: string | null,
  bio?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ModelUserProfileConditionInput = {
  userId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  userId: string,
  name?: string | null,
  email?: string | null,
  avatarUrl?: string | null,
  bio?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserProfileInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  email?: string | null,
  avatarUrl?: string | null,
  bio?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteUserProfileInput = {
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

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
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

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      name?: string | null,
      email?: string | null,
      avatarUrl?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserProfilesQuery = {
  syncUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      name?: string | null,
      email?: string | null,
      avatarUrl?: string | null,
      bio?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    name?: string | null,
    email?: string | null,
    avatarUrl?: string | null,
    bio?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
