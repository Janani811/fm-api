import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { UserResolver } from './graphql/resolvers/users.resolver';

export async function graphqlServer() {
  try {
    // Build GraphQL schema
    const schema = await buildSchema({
      resolvers: [UserResolver],
      validate: false
    });

    // Create Apollo Server instance
    const server = new ApolloServer({
      schema
    });

    //  Created a Standalone server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 8000 }
    });

    console.log('🚀 GraphQL Server is running on /graphql', url);
  } catch (err) {
    console.log('Graphql setup failed', err);
  }
}
