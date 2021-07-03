export const fetchMonthlyExpenses = (() => {
    return async (dispatch) => {
        await fetch(process.env.REACT_APP_API + '/monthly/expenses')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            // if (result.status === 200) {
            //     dispatch(fetchMonthlySuccess(result.data));
            // }
        })
        .catch((e) => {
            console.error("Error", e);
        });
    }
});

export const fetchMonthlySuccess = (data) => ({
    type: 'FETCH_MONTHLY',
    payload: data
});