import userResolver from './user.resolver'
import newsletterResolver from './newsletter.resolver'

export const resolvers = {
  ...userResolver,
  ...newsletterResolver
}