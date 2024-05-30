// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserTrip, UserProfile } = initSchema(schema);

export {
  UserTrip,
  UserProfile
};