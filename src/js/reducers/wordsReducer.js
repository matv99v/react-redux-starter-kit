export default function wordsReducer(state=['one', 'two', 'three'], action) {
    switch (action.type) {
        case 'ADD_WORD':

            return action.payload ? [...state, action.payload] : state;
        case 'DEL_WORD':
            return [...state].filter(el => el !== action.payload)
        default:
            return state;
    }
};
