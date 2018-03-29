const userReducer = (state = { name: '' }, action) => {
    switch (action.type) {
        case 'SET_NAME':

            return Object.assign({}, state, {
                'name': action.name
            });

        default:
            return state
    }
};

export default userReducer