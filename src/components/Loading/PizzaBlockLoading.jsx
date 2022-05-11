import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaBlockLoading = (props) => {
  return (
     <ContentLoader 
     className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="140" /> 
    <rect x="0" y="294" rx="3" ry="3" width="334" height="26" /> 
    <rect x="0" y="337" rx="6" ry="6" width="292" height="84" /> 
    <rect x="4" y="431" rx="0" ry="0" width="105" height="95" /> 
    <rect x="172" y="431" rx="20" ry="20" width="105" height="95" />
  </ContentLoader>
  )
}



export default PizzaBlockLoading