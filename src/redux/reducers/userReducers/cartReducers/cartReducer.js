//reducer is function that takes care off all dispatched actions related to cartReducer`
//depending on action type/name returns new state. state is hidden (by default is true)
export const cartReducer = (state = { hidden: true }, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN'://if dispatched action type/name is ..
            return {//return new state (hidden). set it to opposite of what it was
                hidden: !state.hidden
            }
        default:
            return {
                state;
            }
    }
}