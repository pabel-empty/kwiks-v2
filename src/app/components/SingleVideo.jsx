"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import axios from 'axios';
import user from '../../../public/p1.png';

export default function SingleVideo() {

  const [ videos, setVideos ] = useState( null );

  function getVideos( type, skip, limit ) {
    axios.get( `https://staging.kwiks-data.com/video?type=${ type }&skip=${ skip }&limit=${ limit }` )
      .then( ( res ) => {
        setVideos( res.data.data );
      } )
      .catch( err => console.log( err ) );
  }

  useEffect( () => {
    getVideos( 'popular', 0, 50 );
    console.log( user );
  }, [] );


  return (

    <div>
      { videos === null ? <h3>Loading....</h3> : videos.map( ( videoList, index ) => (
        <div className='mb-8' key={ index }>
          <div className='flex justify-between items-start'>
            <div className='flex items-start'>
              <div>
                <img src={ user.src } alt='' />
              </div>
              <div className='ml-2'>
                <h4>{ videoList.uploader?.name }</h4>
                <h6 className='text-[12px] text-gray-300'>
                  @{ videoList.uploader?.username }
                </h6>
                <div className='caaption mt-4'>
                  <p>Good Morning! Here is my latest magic video.</p>
                </div>
              </div>
            </div>
            <Link className='followBtn' href='#'>
              Follow
            </Link>
          </div>
          <div className='flex justify-center mt-4'>
            <div className='video-wrap w-9/12 mx-auto flex justify-center'>
              <VideoPlayer src={ videoList.playbackUrls?.[ 720 ][ 0 ] } />
              <div className='reaction-wrap flex items-end pl-5'>
                <ul className='[&>li]:pt-5 [&>li]:text-[11px] [&>li]:text-center'>
                  <li>
                    <Link href='#'>
                      <img src='./loveIcon.svg' alt='' />
                      <span>{ videoList.likes.length }</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <img src='./commentIcon.svg' alt='' />
                      <span>{ videoList.comments }</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <img src='./shareIcon.svg' alt='' />
                      <span>1.2K</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) ) }
    </div>
  );
}
