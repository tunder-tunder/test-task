import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./store/index";
import { bindActionCreators } from "redux";



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

    const currency = useSelector((state) => state.currency);

    switch (currency) {
        case "dollar":
            return (
                <><div>
                    <p> {currency} </p>
                </div><div>
                        <p> graph goes here</p>
                    </div>
                </>
            );
        case "ruble":
            return (
                <><div>
                    <p> {currency} </p>
                </div><div>
                        <p> graph goes here</p>
                    </div>
                </>
            );
        case "euro":
            return (
                <><div>
                    <p> {currency} </p>
                </div><div>
                        <p> graph goes here</p>
                    </div>
                </>
            );

        default:
            return (
                <div>
                    <p> choose something </p>
                </div>
            );
    }

    
};