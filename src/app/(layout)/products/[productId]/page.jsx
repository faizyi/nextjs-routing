import React from 'react'
import { notFound } from 'next/navigation'
export default function Productdetailpage({params}) {
    console.log(params);
    if(params.productId > 1000){
        notFound()
    }
  return (
    <div>
        <h1>Detail of Product {params.productId}</h1>
        <p>Go to product review</p>
    </div>
  )
}
