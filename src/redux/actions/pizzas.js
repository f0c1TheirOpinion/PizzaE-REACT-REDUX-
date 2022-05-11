import axios from 'axios';


export const setLoaded = val => (
    {
        type: 'SET_LOADED',
        payload: val,
    }
)
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    console.log(sortBy, category);
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${category != null ? 
    `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({data}) => {   
        dispatch(setPizzas(data));
    });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,

})
