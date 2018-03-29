const reminderReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REMINDER':
            return [
                ...state,
                {
                    id: action.id,
                    date: action.date,
                    time: action.time,
                    description: action.description,
                }
            ];
        default:
            return state
    }
};

export default reminderReducer