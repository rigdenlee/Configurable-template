const initialState = {
    image: null,
    url: ''
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPLOAD') {
        return {
            ...state,
            url: action.propUrl
        }
    }
    return state;
};

export default reducer;