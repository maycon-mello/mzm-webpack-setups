import { graphql } from 'graphql';
import { expect } from 'chai';
import mock from './mock';
import schema from '../schema';

describe('Graphql', () => {
  describe('Viewer Model', () => {
    it('should fetch userName from viewer', async () => {
      const query = `
        query {
          viewer {
            userName
          }
        }
      `;
      const { data } = await graphql(schema, query, null, null, null, null);
      expect(data.viewer.userName).to.equal(mock.userName);
    });
  });
});
