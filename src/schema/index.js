import { SchemaComposer } from 'graphql-compose';
import { UserQuery, UserMutation } from './user';
import { TaskQuery, TaskMutation } from './task';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...UserQuery,
  ...TaskQuery
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...TaskMutation
});

export default schemaComposer.buildSchema();
