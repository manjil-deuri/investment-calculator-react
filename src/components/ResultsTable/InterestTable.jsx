import React from 'react';
import classes from './InterestTable.module.css';
import InterestTableData from './InterestTableData';

const InterestTable = (props) => {
  return ( 
    <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    {props.data.map(yearData => {
        return <InterestTableData data = {yearData} initialInvestment={props.initialInvestment}/>
    })}
    
  </table>
  )
}

export default InterestTable