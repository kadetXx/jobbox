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

      const alreadyExist = await Newsletter.find({ email: args.email }).exec();

      if (alreadyExist.length === 0) {
        const response = await subscriber.save();
        console.log(response);

        return {
          email: response.email,
          message: "success",
          status: true,
        };
      } else {
        return {
          email: args.email,
          message: "You've already subscribed with this email",
          status: false,
        };
      }
    },
  },
};

export default newsletterResolver;
