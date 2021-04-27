const userResolver = {
  Query: {
    users(/* parent, args, context */) {
      return [{ name: 'Yoda' }]
    },
  },
}

export default userResolver