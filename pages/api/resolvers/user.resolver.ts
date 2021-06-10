import { User } from "@/api/models";

const userResolver = {
  Query: {
    users(/* parent, args, context */) {
      const users = User.find();

      return users;
    },

    async user(parent: any, args: any, context: any ) {
      const user = await User.find({ uid: args.uid }).exec();
      return user;
    },
  },

  Mutation: {
    async createUser(parent: any, args: any, context: any, info: any) {
      const user = new User({ ...args });

      const response = await user.save();

      console.log(response);
      
      return response;
    },

    async updateUser(parent: any, args: any, context: any, info: any) {
      const user = await User.findOneAndUpdate({ uid: args.uid }, { ...args }, { new: true });

      return user;
    },
  }
};

export default userResolver;
