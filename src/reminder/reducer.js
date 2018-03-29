const reminderReducer = (state = { reminders: {} }, action) => {
    switch (action.type) {
        case 'ADD_REMINDER':

            return Object.assign({}, state, {
                'reminders': [
                    ...state.reminders,
                    {
                        id: action.id,
                        date: action.date,
                        time: action.time,
                        description: action.description,
                    }
                ]
            });

        default:
            return state
    }
};

export default reminderReducer