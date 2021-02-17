
import './App.css';
import pic from './pic.jpg';
import React, { Fragment, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import { LaunchTile, Header, Button, Loading } from '../components';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';


export const LAUNCH_DATA = gql`
  Result{
    id
  }
`;

const Launches = () => {
  return <div />;
};

export default Launches;

export const GetResults = gql`
  query ResultList($after: String) {
    Result(after: $after) {
      cursor
      hasMore
      Result{
          id
    symbol
    name
    nameid
    rank
    price_usd
    percent_change_24h
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

function App() {
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
