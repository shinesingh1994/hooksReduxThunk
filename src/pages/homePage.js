import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomePage() {
    const balance = useSelector(state => state.balanceReducer.balance);
    const loan = useSelector(state => state.loanReducer.loan);
    const dispatch = useDispatch();

    function applyLoanHandle() {
        dispatch({ type: "APPLY" });
    }

    return <>
        <h1>Balance is: {balance}</h1>
        <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
        <button disabled={loan} onClick={applyLoanHandle}>Apply loan</button>
    </>
}

export default HomePage;