import { makeExecutableSchema } from 'graphql-tools';
import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import resolvers from './resolvers';

const Schema = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

const typeDefs = [Schema, RootQuery.schema, RootMutation.schema];
const resolverValidationOptions = {
  requireResolversForNonScalar: false,
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  console,
  resolverValidationOptions,
});

// query {
//   viewer(param1: "test") {
//     firstName
//   }
// }
