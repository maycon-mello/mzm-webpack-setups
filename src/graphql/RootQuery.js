import Viewer from './models/Viewer';

export default class RootQuery {
  static schema() {
    return [`
      type RootQuery {
        viewer(param1: String): Viewer
    }`,
    Viewer.schema,
    ];
  }

  static Resolvers = {
    viewer(_, args) {
      return {};
    },
  };
}
