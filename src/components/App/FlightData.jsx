/* eslint-disable no-console */
import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import moment from 'moment';
import 'moment-duration-format';
import data from '../data/flights.json';

const divStyle = {
  margin: '10px',
  border: '1px solid grey',
};

const card = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  padding: '16px',
  backgroundColor: 'White',
  marginBottom: '30px',
  width: '40%',
};

const spanText = {
  justifyContent: 'space-between',
};

const pStyle = {
  fontSize: '15px',
  textAlign: 'left',
  paddingLeft: '10px',
};
const colorDirect = {
  color: '#379465',
};

const spacingText = {
  paddingLeft: '50px',
};
const spacingTextEx = {
  paddingLeft: '140px',
};
const PriceText = {
  fontSize: '30px',
  paddingTop: '10px',
};
const button = {
  backgroundColor: '#379465',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer',
  marginLeft: '210px',
};

const data1 = [1, 2, 3, 4, 5, 6, 7];

const FlightData = ({ fid, startflight, reternflight }) => (
  <div>
    {data1.reduce((result, current, i) => {
      if (i < 8) {
        result.push(
          <div style={card}>
            {data.legs.map(flightStart => (
              <div>
                {flightStart.id === startflight[i] ? (
                  <div>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              {flightStart.departure_time.slice(-5)}
                              <br />
                              {flightStart.departure_airport}
                            </td>
                            <td style={spacingText}>
                              <FaArrowRight />
                            </td>
                            <td style={spacingText}>
                              {flightStart.arrival_time.slice(-5)}
                              <br />
                              {flightStart.arrival_airport}
                            </td>
                            <td style={spacingTextEx}>
                              {moment
                                .duration(flightStart.duration_mins, 'minutes')
                                .format('h[h] m')}
                              <br />
                              {flightStart.stops === 0 ? (
                                <div style={colorDirect}>{'Direct'}</div>
                              ) : (
                                <div>
                                  {flightStart.stops}
                                  {' Stop'}
                                </div>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {data.legs.map(flightReturn => (
                      <div>
                        {flightReturn.id === reternflight[i] ? (
                          <div>
                            <br />
                            <div>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>
                                      {flightReturn.departure_time.slice(-5)}
                                      <br />
                                      {flightReturn.departure_airport}
                                    </td>
                                    <td style={spacingText}>
                                      <FaArrowRight />
                                    </td>
                                    <td style={spacingText}>
                                      {flightReturn.arrival_time.slice(-5)}
                                      <br />
                                      {flightReturn.arrival_airport}
                                    </td>
                                    <td style={spacingTextEx}>
                                      {moment
                                        .duration(
                                          flightReturn.duration_mins,
                                          'minutes',
                                        )
                                        .format('h[h] m')}
                                      <br />
                                      {flightReturn.stops === 0 ? (
                                        <div style={colorDirect}>
                                          {'Direct'}
                                        </div>
                                      ) : (
                                        <div>
                                          {flightReturn.stops}
                                          {' Stop'}
                                        </div>
                                      )}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {data.itineraries.map(flightData => (
                              <div>
                                {flightData.id === fid[i] ? (
                                  <div>
                                    <div>
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td style={PriceText}>
                                              {flightData.price}
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>{flightData.agent}</td>
                                            <td style={button}>Select</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>,
        );
      }
      return result;
    }, [])}
  </div>
);

export default FlightData;
