import React from 'react';
import instance from '../instance';

function Banner({fetchUrl}) {
    console.log("banner fetchUrl",fetchUrl)
    const fetchData= async() => {
        const result = await instance.get(fetchUrl)
    }
  return (
    <div>Banner</div>
  )
}

export default Banner