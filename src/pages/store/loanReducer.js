const initialState = {
    loan: false
};

function loanReducer(state = initialState, action) {
    switch (action.type) {
        case "APPLY":
            return { loan: !state.loan }
        default: return state
    }
}

export default loanReducer;