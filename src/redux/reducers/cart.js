const initialState = {
    itemsCart:{},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

switch(action.type){
    case 'ADD_PIZZA_CART' : { 
        const currentPizzaItems = 
            !state.itemsCart[action.payload.id] ? 
            [action.payload] :
            [...state.itemsCart[action.payload.id].itemsCart, action.payload]
        

        const newItems = {
            
                ...state.itemsCart,
                [action.payload.id]: {
                    itemsCart: currentPizzaItems,
                    totalPrice: currentPizzaItems.reduce((sum, arr) => arr.price + sum, 0)
            
            }
            
        };

      const  allpizz = [].concat.apply([], Object.values(newItems).map((obj) => obj.itemsCart));
        return{
            ...state,
            itemsCart: newItems,
            totalCount: allpizz.length,
            totalPrice: allpizz.reduce((sum, arr) => arr.price + sum, 0)
            
        }  };   
        
        case 'CLEAR_CART' :
            return{
                totalCount:0,
                totalPrice:0,
                itemsCart: {},
            };

            case 'REMOVE_CART_ITEM' :
                const objForDel = {
                    ...state.itemsCart
                }
               
                const sumAfterDel = state.totalPrice - objForDel[action.payload.id].totalPrice;
                const countAfterDel = state.totalCount - action.payload.totalCountPizz
                delete objForDel[action.payload.id]
            return{
               ...state,
               itemsCart: objForDel,
               totalPrice: sumAfterDel,
               totalCount: countAfterDel,
            };

            case 'TYPE_COUNT_ITEM':

              const  objCounter = {
                ...state.itemsCart,
              }
              console.log(action.payload.id);
              console.log(action.payload.ect);
            const pizzaPL =  objCounter[action.payload.id].itemsCart[0];

            const dataPizz = [...state.itemsCart[action.payload.id].itemsCart];

            const forMinPizza = dataPizz.pop();
              console.log(dataPizz);
           const counterPlus =  [...state.itemsCart[action.payload.id].itemsCart, pizzaPL] 
        
         
           


           const counterPLMN = (objPIZZ) => {

           return [].concat.apply([], Object.values(objPIZZ).map((obj) => obj.itemsCart)).length
        }
const pricePLMN = ( objPIZZ) => {
    console.log(objPIZZ);
 return   objPIZZ.reduce((sum, arr) => arr.price + sum, 0);

}
const totalPrice = (objj) => {

}

const updatetotoal = {
    ...state.itemsCart,
                [action.payload.id]: {
                    itemsCart: action.payload.ect === "plus" ? counterPlus : dataPizz,
                    totalPrice:action.payload.ect === "plus" ? pricePLMN(counterPlus) : pricePLMN(dataPizz)
}
}

        const totalPiz = [].concat.apply([], Object.values(updatetotoal).map((obj) => obj.itemsCart));
                return{
                    ...state,
                 
                    itemsCart:  updatetotoal,
                    totalPrice: totalPiz.reduce((sum, arr) => arr.price + sum, 0),
                    totalCount: totalPiz.length
                  
                                                
            

                    // totalCount: action.payload.ect === "plus" ? counterPLMN(counterPlus)
                    //                                          : counterPLMN(counterMinus),

}



                

            default: 
            return state
}
}




export default cart;