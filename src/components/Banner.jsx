import React, { useEffect ,useState} from 'react';
import instance from '../instance';

function Banner({fetchUrl}) {
    console.log("banner fetchUrl",fetchUrl)
    const [movie,setMovie]=useState({})
    const image_base_url="https://image.tmdb.org/t/p/original"
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
    <div style={{height:'600px',backgroundImage: `url(${image_base_url}${movie?.backdrop_path})`}}>

    </div>
  )
}

export default Banner
