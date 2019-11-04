import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function WithdrawPage() {
    const balance = useSelector(state => state.balanceReducer.balance);
    const loan = useSelector(state => state.loanReducer.loan);
    const dispatch = useDispatch();
    function onWithdrawHandle() {
        dispatch({ type: "WITHDRAW", payload: 10 });
    }
    return <div>
        <h1>Balance is: {balance}</h1>
        <button onClick={onWithdrawHandle}>Withdraw</button>
        <div>{loan ? "Loan Applied" : ""}</div>
    </div>
}

export default WithdrawPage;