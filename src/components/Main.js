import React from 'react';
import HotelInfo from './HotelInfo'
import Welcome from './Welcome.js'

export const Main = () => {
  return (
    <main id="wrapper">
      <Welcome />
      <HotelInfo />
    </main>
  );
}