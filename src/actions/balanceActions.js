export function loading() {
    return {
        type: "LOADING"
    }
}

export function deposit(name) {
    return ({ type: "DEPOSIT", payload: 10, name: name });
}

export function depositAsync() {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(deposit());
        }, 2000);
    }
}