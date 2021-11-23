import React from "react";
import "./App.css";
import { tableData } from "./data";


export const DataTable = () => {
    return (
        <>
            <Header />
            <ChooseDate />  {/* button to choose date  */}
            {tableData.map((data, key) => {
                return (
                    
                    <div key={key}>
                        <Content key={key}
                            company={data.company}
                            ticker={data.ticker}
                            stockPrice={data.stockPrice}
                            timeElapsed={data.timeElapsed}
                            date={data.date} />
                    </div>
                );
            })}
        </>
    );
};


const Header = () => {
    return (
        <header className="header">
            <h2>Табличка штук</h2>
        </header>
    );
};

const Content = ({ company, ticker, stockPrice, timeElapsed, date }) => {
    if (!company) return <div />;
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{company}</h5>
                    </td>
                    <td>
                        <h5>{ticker}</h5>
                    </td>
                    <td>
                        <h4>{stockPrice}</h4>
                    </td>
                    <td>
                        <p>{timeElapsed}</p>
                    </td>
                    <td>
                        <p>{date}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

function ChooseDate() {
    const chooseButton = () => {
      alert("clicked");
    }
  
    return (
      <><input type="date"></input><input type="date"></input><button type="submit" onClick={chooseButton}>Выборка</button></>
    );
  }