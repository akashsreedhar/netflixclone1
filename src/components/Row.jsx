import React, { useState } from 'react'
import instance from '../instance'
function Row({title,fetchUrl}) {
  console.log(title)
  console.log(fetchUrl)

  const [allMovies, setAllMovies]=useState();
  const fetchData=async()=>{
    const response=await instance.get(fetchUrl);
    console.log("response")
    console.log(response)
  }
  return (
    <div>Row</div>
  )
}

export default Row