export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
    
});

export const removeCartItem = (objInfDel) => ({
    type: 'REMOVE_CART_ITEM',
    payload:objInfDel,
    
});

export const counterForItemPizz = (objCount) => ({
    type: 'TYPE_COUNT_ITEM',
    payload:objCount,
    
});