export default (state = [], action) => {
    if(action.type === 'FETCH_POST') {
        return action.payload;
    }

    return state;
};