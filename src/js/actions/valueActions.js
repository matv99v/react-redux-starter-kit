export function incrementValue(val) {
    return {
        type: 'INC_VAL',
        payload: val
    };
}


export function decrementValue(val) {
    return {
        type: 'DEC_VAL',
        payload: val
    };
}
