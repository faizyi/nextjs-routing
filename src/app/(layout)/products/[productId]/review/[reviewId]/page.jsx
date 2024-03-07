import React from 'react'
import { notFound } from 'next/navigation'
export default function Reviewdetailspage({params}) {
    console.log(params);
    if(params.reviewId > 3){
        notFound()
    }
  return (
    <div>Review details {params.reviewId} of Product {params.productId} </div>
  )
}
