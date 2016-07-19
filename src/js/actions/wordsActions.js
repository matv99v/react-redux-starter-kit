export function addWord(word) {
    return {
        type: 'ADD_WORD',
        payload: word
    };
}

export function deleteWord(word) {
    return {
        type: 'DEL_WORD',
        payload: word
    };
}
