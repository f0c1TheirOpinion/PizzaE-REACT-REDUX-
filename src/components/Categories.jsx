import React, { useState } from 'react'

const Categories = React.memo((props) => {
  const {items, activeCategory, reduxSetCategory} = props;

 const [activeItem, setActiveItem] = useState(activeCategory);

const updCategory = (index) =>{
  setActiveItem(index);
  reduxSetCategory(index);
}
return (
  <div className="categories">
            <ul>
              <li className={activeItem === null ? 'active' : '' } onClick={() => updCategory(null)}>Все</li>
             { items && items.map((ctg, index) => (   
             <li className={activeItem === index ? 'active' : '' } key={`${ctg}_${index}`} onClick={() => updCategory(index)}> {ctg}</li>))}
            </ul>
          </div>
)
})

export default Categories;