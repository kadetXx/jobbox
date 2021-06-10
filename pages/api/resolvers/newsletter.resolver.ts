import { Newsletter } from "@/api/models";

const newsletterResolver = {
  Query: {
    async subscribers(/* parent, args, context */) {
      const subscribers = await Newsletter.find();

      return subscribers;
    },
  },

  Mutation: {
    async subscribe(parent: any, args: any, context: any, info: any) {
      const subscriber = new Newsletter({ ...args });

      const alreadyExist = Newsletter.find({ email: args.email }).exec();
      if (!alreadyExist) {
        const response = await subscriber.save();
        return response;
      } else {
        return {
          email: args.email,
          message: 'You are already subscribed'
        }
      }
    },
  },
};

export default newsletterResolver;
