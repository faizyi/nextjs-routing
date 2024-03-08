import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link';

async function getData(productid){
  try {
    const res = await fetch(`https://dummyjson.com/products/${productid}`)
    if(!res.ok){
      console.log("Failed to fetch data");
    }
    return res.json()
  } catch (error) {
    console.log(error);
  }
}
export const generateMetadata= async({params})=>{
  const data = await getData(params.productid);
  return {
    title : `Product | ${data.title}`
  }
}
export default async function Productdetailpage({params}) {
  console.log(params);
  const data = await getData(params.productid);
    if(!data.id){
        notFound()
    }
  return (
    <div>
        <h1>Detail of Product {data.title}</h1>
        <p>{JSON.stringify(data)}</p>
        <p>Go to product review</p>
        <Link href={'/products'}><p>Go to product Page</p></Link>
    </div>
  )
}
