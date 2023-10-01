import React from "react";
import "./InterestTableData.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InterestTableData = (props) => {
  return (
    <tbody>  
      <tr>
        <td>{props.data.year}</td>
        <td>{formatter.format(props.data.savingsEndOfYear)}</td>
        <td>{formatter.format(props.data.yearlyInterest)}</td>
        <td>
          {formatter.format(
            props.data.savingsEndOfYear -
              props.initialInvestment -
              props.data.yearlyContribution * props.data.year
          )}
        </td>
        <td>
          {formatter.format(
            props.initialInvestment +
              props.data.yearlyContribution * props.data.year
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default InterestTableData;
