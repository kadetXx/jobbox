import { Newsletter } from "@/api/models";

const newsletterResolver = {
  Query: {
    subscribers(/* parent, args, context */) {
      const subscribers = Newsletter.find();
      return subscribers;
    }
  },

  Mutation: {
    async subscribe(parent: any, args: any, context: any, info: any) {
      const subscriber = new Newsletter({ ...args });

      const response = await subscriber.save();

      return response;
    }
  }
};

export default newsletterResolver;