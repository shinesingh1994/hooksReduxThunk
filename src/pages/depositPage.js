import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as balanceActions from '../actions/balanceActions';

function DepositPage() {
    const balance = useSelector(state => state.balanceReducer.balance);
    const loan = useSelector(state => state.loanReducer.loan);
    const loading = useSelector(state => state.balanceReducer.loading);

    const dispatch = useDispatch();
    function onDepositHandle() {
        dispatch(balanceActions.depositAsync());
        // dispatch({ type: "DEPOSIT", payload: 10 });
    }
    return <div>
        {
            loading ? <h1>Balance is: Loading...</h1> : <h1>Balance is: {balance}</h1>
        }
        <button onClick={onDepositHandle}>Deposit</button>
        <div>{loan ? "Loan Applied" : ""}</div>
    </div>
}

export default DepositPage;