import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTrip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly prix?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserTrip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTrip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly prix?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserTrip = LazyLoading extends LazyLoadingDisabled ? EagerUserTrip : LazyUserTrip

export declare const UserTrip: (new (init: ModelInit<UserTrip>) => UserTrip) & {
  copyOf(source: UserTrip, mutator: (draft: MutableModel<UserTrip>) => MutableModel<UserTrip> | void): UserTrip;
}