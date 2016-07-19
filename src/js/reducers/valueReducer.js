export default function valueReducer(state = 0, action) {
    switch (action.type) {
        case 'INC_VAL':
            return state + action.payload;
        case 'DEC_VAL':
            return state - action.payload;
        default :
            return state;
    }
};
