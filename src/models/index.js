// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserTrip } = initSchema(schema);

export {
  UserTrip
};