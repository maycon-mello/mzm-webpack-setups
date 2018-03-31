import React from 'react';
import { graphql } from 'graphql';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import schema from '~/graphql/schema';

import './GraphiQL.scss';

const fetcher = graphQL =>
  graphql(schema, graphQL.query, null, null, graphQL.variables, graphQL.operationName);

export default () => <GraphiQL fetcher={fetcher} />;
