import React from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import FlightData from './FlightData';
import STYLES from './App.scss';

import data from '../data/flights.json';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const fid = ['it_1', 'it_2', 'it_3', 'it_4', 'it_5', 'it_6', 'it_7'];
const startflight = [
  'leg_1',
  'leg_2',
  'leg_3',
  'leg_1',
  'leg_1',
  'leg_2',
  'leg_3',
];
const reternflight = [
  'leg_4',
  'leg_5',
  'leg_6',
  'leg_5',
  'leg_6',
  'leg_4',
  'leg_4',
];

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <BpkText tagName="p">Available Flights</BpkText>

      <FlightData
        fid={fid}
        startflight={startflight}
        reternflight={reternflight}
      />
    </main>
  </div>
);

export default App;
