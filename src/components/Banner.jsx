import React, { useEffect } from 'react';
import instance from '../instance';

function Banner({fetchUrl}) {
    console.log("banner fetchUrl",fetchUrl)
    const [movie,setMovie]=useState()
    const fetchData= async() => {
        const result = await instance.get(fetchUrl)
        const{data}=result;
        setMovie(data.results[0])
        console.log(movie)
    }
useEffect(()=>{

  fetchData()
},[])
console.log("testing")
console.log("movie")

  return (
    <div>Banner</div>
  )
}

export default Banner
