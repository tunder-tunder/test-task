import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./store/index";
import { bindActionCreators } from "redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export const Currency = () => {

    const currency = useSelector((state) => state.currency);
    const dispatch = useDispatch();

    const { setCurrency } = bindActionCreators(actionCreators, dispatch);
    console.log(currency);

    return (
        <>
            <h2>Currency</h2>
            <h3> {currency} </h3>
            <button onClick={() => setCurrency('dollar')}> Dollar </button>
            <button onClick={() => setCurrency('ruble')}> Ruble </button>
            <button onClick={() => setCurrency('euro')} > Euro </button>
            <Graph />

        </>
    );
};

const Graph = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let url = "https://freecurrencyapi.net/api/v2/historical?apikey=7eb0be50-4cf6-11ec-927d-f1b73c6174cc&base_currency=USD&date_from=2020-10-01&date_to=2021-11-24"


    useEffect(() => {
        async function fetchData() {
            try {
                const asyncResponse = await axios(url);
                const value = asyncResponse.data.data;

                setItems(value);
                setIsLoaded(true);
            } catch (err) {
                setError(err);
                setIsLoaded(false);
                // console.error(err);
            }
        }

        fetchData();

    }, [items]);

    console.log(items);
   
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        if (items.length > 0) {
            console.log(items);
            return (
                <ul>
                    {items.map((data, key) => {
                        return (
                            <div key={key}>
                                <TestTable key={key}
                                    company={data.usd} />
                            </div>
                        );
                    })}
                </ul>
            );
        } else return (
            <p>Not yet returned</p>
        )
    }

    // const currency = useSelector((state) => state.currency);

    // switch (currency) {
    //     case "dollar":
    //         return (
    //             <><div>
    //                 <p> {currency} </p>
    //             </div><div>
    //                     <p> graph goes here</p>
    //                 </div>
    //             </>
    //         );
    //     case "ruble":
    //         return (
    //             <><div>
    //                 <p> {currency} </p>
    //             </div><div>
    //                     <p> graph goes here</p>
    //                 </div>
    //             </>
    //         );
    //     case "euro":
    //         return (
    //             <><div>
    //                 <p> {currency} </p>
    //             </div><div>
    //                     <p> graph goes here</p>
    //                 </div>
    //             </>
    //         );

    //     default:
    //         return (
    //             <div>
    //                 <p> choose something </p>
    //             </div>
    //         );
    // }


};

const TestTable = ({ company }) => {
    if (!company) return <div />;
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{company}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};