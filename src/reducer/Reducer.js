export const initialState = {
    whichPage : 0
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'WHICH_PAGE':
            return {
                ...state, whichPage: action.payload
            }
        default:
            return { state };
    }
}

export default reducer;