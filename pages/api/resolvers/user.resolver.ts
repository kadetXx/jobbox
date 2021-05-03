import { User } from '@/api/models'

const userResolver = {

  Query: {
    users(/* parent, args, context */) {
      const users = User.find((err, users) => {
        err && console.log(err);

        return users
      });

      return users
    },
  },

  Mutation: {
    async createUser(parent: any, args: any, context: any, info: any) {
      const user = new User({...args})

      await user.save((err: any, user: any) => {
        err && console.log(err);
        
        return user
      });
    }
  }
};

export default userResolver;
