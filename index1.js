//const axios = require('axios');
require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const Coindata = require("./Coin.js");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
 
  # This "Coin" type defines the queryable fields for every book in our data source.
  type Result{
      id: String
    symbol: String
    name: String
    nameid: String
    rank: String
    price_usd: String
    percent_change_24h: String
    percent_change_1h: String
    percent_change_7d: String
    price_btc: String
    market_cap_usd: String
    volume24: String
    volume24a: String
    csupply: String
    tsupply: String
    msupply: String

    
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "coin" query returns an array of zero or more coins (defined above).
  type Query {
    getResult(id: String): Result
    getResults(people:Int, id:String): [Result]
  }
`;
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves coins from the "coins" array above.
const resolvers = {
  Query: {
    getResult: async (_, { id }, { dataSources }) =>
      dataSources.Coindata.getResult(id),
      getResults: async (_, { people, id }, { dataSources }) =>
      dataSources.Coindata.getResults(people, id)
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Coindata: new Coindata()
  })
});

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves coins from the "coins" array above.
//const resolvers = {
  //Query: {
     // coins: () => axios.get(
         // 'https://api.coinlore.net/api/global/',
     // )
     // .then(res =>res.data)
      
    //coins: () => coins,
  //},
//};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
//const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});