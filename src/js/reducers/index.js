import { combineReducers } from 'redux';

import valueReducer from './valueReducer.js';
import wordsReducer from './wordsReducer.js';
import colorReducer from './colorReducer.js';

export default combineReducers({
    value: valueReducer,
    words: wordsReducer,
    color: colorReducer
});
