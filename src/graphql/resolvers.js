import RootQuery from './RootQuery';
import RootMutation from './RootMutation';

import Viewer from './models/Viewer';


export default {
  RootQuery: RootQuery.Resolvers,
  Viewer: Viewer.Resolvers,
  RootMutation: RootMutation.Resolvers,
};
