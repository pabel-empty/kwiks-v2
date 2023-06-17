"use client";
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Function to handle video play
    const playVideo = () => {
      video.play();
      // video.muted = false;
    };

    // Intersection Observer options
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    // Intersection Observer callback
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo();
          observer.unobserve(entry.target);
        }
      });
    };

    // Create Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the video element
    observer.observe(video);

    // Clean up the Intersection Observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      playsInline
      ref={videoRef}
      muted={true}
      controls
      loop
      className='w-[60%] rounded-[26px]'
    >
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
