import mutations from './mutations';

const schemaDefinitions = [];
const Resolvers = {};
const schemas = [];

mutations.forEach((mutation) => {
  schemas.push(mutation.Input.schema);
  schemas.push(mutation.Payload.schema);
  schemaDefinitions.push(`${mutation.resolverName}(input: ${mutation.name}Input!): ${mutation.name}Payload`);
  Resolvers[mutation.resolverName] = mutation.resolver;
});

export default class RootMutation {
  static schema = () => [`
    type RootMutation {
      ${schemaDefinitions.join('\n')}
    }`,
  ...schemas,
  ];

  static Resolvers = Resolvers;
}
