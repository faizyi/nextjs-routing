// "use client"
import Link from 'next/link';
import React from 'react'

export const metadata={
  title : "Products"
}

async function getData(){
  try {
    const res = await fetch('https://dummyjson.com/products')
    if(!res.ok){
      console.log("Failed to fetch data");
    }
    return res.json()
  } catch (error) {
    console.log(error);
  }
}
export default async function Productspage() {
  const data = await getData()
  const allProducts = data.products
  return (
    <div>
        <h1>Products page</h1>
        {
          allProducts.map((items)=>{
            return <div key={items.id}><Link href={`/products/${items.id}`}>{items.title}</Link></div>
          })
        }
    </div>
  )
}
