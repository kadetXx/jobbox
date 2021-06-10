import { merge } from 'lodash'
import userResolver from './user.resolver'
import newsletterResolver from './newsletter.resolver'

export const resolvers = merge(userResolver, newsletterResolver)