import mock from './mock.json';

export default class Viewer {
  static schema = () => [`
    type Viewer {
      userName: String
    }`,
  ];

  static Resolvers = {
    userName(_, args) {
      return mock.userName;
    },
  };
}
