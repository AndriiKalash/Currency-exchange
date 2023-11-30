import React from 'react';
import { getRateStatick } from '../utils/getRateStatick';

export const Header = ({ data }) => (
  <div className="header">
    <h1>Currency Exchange</h1>
    <div className="header-rates">
      <div className="header-rate">
        <h2>USD</h2>
        <p>{getRateStatick('USD', data)}</p>
      </div>
      <div className="header-rate">
        <h2>EUR</h2>
        <p>{getRateStatick('EUR', data)}</p>
      </div>
    </div>
  </div>
);
