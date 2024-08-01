import React, { useEffect ,useState} from 'react';
import instance from '../instance';

function Banner({fetchUrl}) {
    console.log("banner fetchUrl",fetchUrl)
    const [movie,setMovie]=useState({})
    const image_base_url="https://image.tmdb.org/t/p/original"
    const fetchData= async() => {
        const result = await instance.get(fetchUrl)
        const{data}=result;
        console.log(data)
        console.log("--total length---",data.results.length)
        console.log(data.results[Math.floor(Math.random()*data.results.length)]);
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
        
    }
useEffect(()=>{

  fetchData()
},[])
console.log("testing")
console.log("movie")

  return (
    <div style={{height:'600px',backgroundImage: `url(${image_base_url}${movie?.backdrop_path})`}}>
<div className='banner_content'>
<h2>{movie?.name} </h2>
<button className='btn btn-danger me-2'>PLAY <i class="fa-solid fa-play ms-2"></i></button>
<button className='btn btn-outline-light'>More info<i class="fa-solid fa-caret-down ms-2"></i></button>
</div>
    </div>
  )
}

export default Banner
