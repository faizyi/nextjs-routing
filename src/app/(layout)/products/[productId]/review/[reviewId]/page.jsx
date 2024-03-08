import React from 'react'
import { notFound } from 'next/navigation'
export const generateMetadata=({params})=>{
  return {
    title : `Review | ${params.reviewid}`
  }
}
export default function Reviewdetailspage({params}) {
    console.log(params);
    if(params.reviewid > 3){
        notFound()
    }
  return (
    <div>Review details {params.reviewid} of Product {params.productid} </div>
  )
}
