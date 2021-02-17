import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery} from '@apollo/client';



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

client
  .query({
    query: gql`
      {
        getResults{
          id,
          symbol, 
          name,
          nameid,
          rank,
          price_usd,
          percent_change_24h,
          percent_change_1h,
          percent_change_7d,
          price_btc,
          market_cap_usd,
          volume24,
          volume24a,
          csupply,
          tsupply
        }
      }
    `
  })
  .then(result => console.log(result));
  
  const App = () => (
  <ApolloProvider client={client}>
    <div>
    <form className ="form1">
      <h2>My first Apollo app 🚀</h2>
        <button className ="ShowCoin-Button" type="submit">ShowCoin</button>
         <button className ="HideCoin-Button" type="submit">HideCoin</button>
    </form>
    
    </div>
  </ApolloProvider>
);


render(<App />, document.getElementById('root'));
//requesting data
const EXCHANGE_RATES = gql`
  {
    getResults {
      id
      symbol
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ id, symbol }) => (
    <div key={id}>
      <p>
        {id}: {symbol}
      </p>
    </div>
  ));
}





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
