const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Query {
		hello: String
		dogPhotoUrl: String
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		dogPhotoUrl: () =>
			'https://images.dog.ceo/breeds/pomeranian/n02112018_1090.jpg'
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true
});

exports.handler = server.createHandler();
