export function resolver(_, { input }) {
  return {
    clientMutationId: input.clientMutationId,
    userName: `${input.userName}`,
  };
}

export class Payload {
  static schema() {
    return [`
      type UpdateUserNameMutationPayload {
        userName: String
        clientMutationId: String
      }`,
    ];
  }
}

export class Input {
  static schema() {
    return [`
      input UpdateUserNameMutationInput {
        userName: String
        clientMutationId: String
      }`,
    ];
  }
}

export const name = 'UpdateUserNameMutation';
export const resolverName = 'updateUserNameMutation';
