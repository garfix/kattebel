const memoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MEMORY':
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

export default memoryReducer