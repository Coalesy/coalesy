import React from 'react'
import ItemCard from '../components/ItemCard';


function page() {
  return (
    <div className=''>
       {data.map((item, index) => (
        <ItemCard
          key={index}
          logo={item.logo}
          name={item.name}
          price={item.price}
          items={item.items}
          minted={item.minted}
        />
      ))}

    </div>
  )
}

export default page
