export const resolvers = {
  Query: {
    users(/* parent, args, context */) {
      return [{ name: 'Nextjs' }]
    },
  },
}