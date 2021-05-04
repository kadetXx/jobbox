import { User } from "@/api/models";

const userResolver = {
  Query: {
    users(/* parent, args, context */) {
      const users = User.find();

      return users;
    },
  },

  Mutation: {
    async createUser(parent: any, args: any, context: any, info: any) {
      const user = new User({ ...args });

      const response = await user.save();

      return response;
    },
  },
};

export default userResolver;
