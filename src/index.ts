import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    # graphql <- this is a comment!
    type Movie{
        title: String,
        year: Int,
        description: String
    }

    type Query{
        Movies: [Movie]
    }
`;

const movies = [
    {
        title: 'Puss in Boots: The Last Wish',
        year: 2022,
        description: 'When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.'
    },
    {
        title: 'The enforcer',
        year: 2022,
        description: 'An enforcer has to sacrifice everything to save a young girl he has befriended.'
    },
    {
        title: 'Devotion',
        year: 2022,
        description: 'A pair of U.S. Navy fighter pilots risk their lives during the Korean War and become some of the Navy"s most celebrated wingmen.'
    }
];

const resolvers = {
    Query: {
        Movies: () => movies
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 9000 }
});

console.log(`🚀  Server ready at: ${url}`);
