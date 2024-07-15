import React from 'react'
import Card from './Card'
import Modal from './Modal'

const Productlist = () => {
    const products=[
        {
            name:"casque",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTc7CuD0x4uADYrn5xj2LQV2LgP5Xl2XyWQ&s",
            price:120
        },
        {
            name:"souris",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCIvBFpWXNFe_QnvR22KCWcJRSQ14m2nT5Q&s",
            price:70
        },
        {
            name:"clavier",
            img:"https://www.scoopgaming.com.tn/11862-large_default/clavier-semi-mecanique-slim-rgb-metal-pro-k7.jpg",
            price:90
        },
    ]
  return (
    <div className='list'>
        {products.map(el=><Card el={el}/>)}
    </div>
  )
}

export default Productlist
