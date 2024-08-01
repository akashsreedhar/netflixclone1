import React, { useEffect ,useState} from 'react';
import instance from '../instance';
import './Banner.css'

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
    <div style={{height:'600px',backgroundImage: `url(${image_base_url}${movie?.backdrop_path})`,backgroundSize:'cover'}}>
<div className='banner_content'>
<h2 style={{color:'white'}}>{movie?.name} </h2>
<button className='btn btn-danger me-2'>PLAY <i class="fa-solid fa-play ms-2"></i></button>
<button className='btn btn-outline-light'>More info<i class="fa-solid fa-caret-down ms-2"></i></button>
<h3 style={{color:'white'}}>{movie?.overview?.slice(0,200)}...</h3>
</div>
    </div>
  )
}

export default Banner
