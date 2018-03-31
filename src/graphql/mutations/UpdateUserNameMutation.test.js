import { graphql } from 'graphql';
import { expect } from 'chai';
import schema from '../schema';

describe('Graphql', () => {
  describe('UpdateUserNameMutation', () => {
    it('should update userName ', async () => {
      const query = `
        mutation testMutation($args: UpdateUserNameMutationInput!) {
          updateUserNameMutation(input: $args) {
            userName
            clientMutationId
          }
        }
      `;
      const args = {
        userName: 'Test',
        clientMutationId: '123',
      };

      const { data } = await graphql(schema, query, null, null, { args }, null);

      expect(data.updateUserNameMutation.userName).to.equal(args.userName);
    });
  });
});
