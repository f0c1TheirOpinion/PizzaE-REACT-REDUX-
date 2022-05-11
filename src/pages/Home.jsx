import React, { useEffect } from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import {addPizzaToCart} from '../redux/actions/cart'
import PizzaBlockLoading from '../components/Loading/PizzaBlockLoading';

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [{
  name:'популярности',
  type: 'popular'
},
{
  name:'цене',
  type:'price'
},
{
  name:'алфавит',
  type: 'name'
}
];


function Home(props) {
  const itemsInfo = useSelector(({pizzas}) => pizzas);
  const cartItems = useSelector(({cart}) => cart);

  const {category, sortBy} = useSelector(({ filters }) => filters);
  
  const dispatch = useDispatch();


  useEffect(() => {
    console.log(category);
    dispatch(fetchPizzas(sortBy, category));
    
     }, [category, sortBy])
   

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type))
  }, [])


  const onSelectCart = (objPizzaInf) => {
    dispatch(addPizzaToCart(objPizzaInf))
  };
     


  return (
    <div className="container">
    <div className="content__top">
     
      <Categories items={categoryNames}
      activeCategory = {category}
      reduxSetCategory = {onSelectCategory}
      
      />

    <SortPopup items={sortItems}
    activeSortBy = {sortBy}
    reduxSetSort = {onSelectSortType}
    />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
    


    {
      itemsInfo.isLoaded === false ? Array(10).fill(0).map((_, index) => <PizzaBlockLoading key={index}  /> ) :
      itemsInfo.items.map((obj, index) => <PizzaBlock 
      onAddPizza={onSelectCart} 
      key={obj.id} 
      items={obj} 
      inCartCount={cartItems.itemsCart[obj.id] && cartItems.itemsCart[obj.id].itemsCart.length }
      />)
    }









</div>
</div>
   
    
 
  )
}

export default Home