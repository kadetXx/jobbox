import { userModel } from '@/api/models'

const userResolver = {

  Query: {
    users(/* parent, args, context */) {
      const users = [
        {
          uid: "2nxni92ieoqnsj29j9101js",
          firstName: "Collins",
          lastName: "Enebeli",
          email: "collynizy@gmail.com",
          accountType: "employee",
          isEmailVerified: false
        },
      ];
      
      return users;
    },
  },

  Mutation: {
    async createUser(parent: any, args: any, context: any, info: any) {
      const user = new userModel({...args})

      await user.save();

      return user
    }
  }
};

export default userResolver;
