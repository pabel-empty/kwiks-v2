import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

export default async function SingleVideo() {
  const videoList = [
    {
      name: "Makenna Rosser",
      userName: "rosser_makenna",
      caption: "Good Morning! Here is my latest magic video.",
      videoUrl: "./v1.mp4",
      userImg: "./p1.png",
      totalLove: "22 M",
      totalComment: "15.5 K",
      totalShare: "3.5 K",
    },
    {
      name: "Desirae Bator",
      userName: "batorbaby",
      caption: "Good Morning! Here is my latest magic video.",
      videoUrl: "./v2.mp4",
      userImg: "./p2.png",
      totalLove: "21 K",
      totalComment: "25 k",
      totalShare: "5 K",
    },
    {
      name: "Makenna Rosser",
      userName: "rosser_makenna",
      caption: "Good Morning! Here is my latest magic video.",
      videoUrl: "./v3.mp4",
      userImg: "./p3.png",
      totalLove: "2 M",
      totalComment: "5.5 K",
      totalShare: "5 K",
    },
    {
      name: "Makenna Rosser",
      userName: "rosser_makenna",
      caption: "Good Morning! Here is my latest magic video.",
      videoUrl: "./v4.mp4",
      userImg: "./p4.png",
      totalLove: "1.1 M",
      totalComment: "1.5 K",
      totalShare: "2.5 K",
    },
  ];
  return (
    <div>
      {videoList.map((videoList, index) => (
        <div className='mb-8' key={index}>
          <div className='flex justify-between items-start'>
            <div className='flex items-start'>
              <div>
                <img src={videoList.userImg} alt='' />
              </div>
              <div className='ml-2'>
                <h4>{videoList.name}</h4>
                <h6 className='text-[12px] text-gray-300'>
                  @{videoList.userName}
                </h6>
                <div className='caaption mt-4'>
                  <p>{videoList.caption}</p>
                </div>
              </div>
            </div>
            <Link className='followBtn' href='#'>
              Follow
            </Link>
          </div>
          <div className='flex justify-center mt-4'>
            <div className='video-wrap w-9/12 mx-auto flex justify-center'>
              <VideoPlayer src={videoList.videoUrl} />
              <div className='reaction-wrap flex items-end pl-5'>
                <ul className='[&>li]:pt-5 [&>li]:text-[11px] [&>li]:text-center'>
                  <li>
                    <Link href='#'>
                      <img src='./loveIcon.svg' alt='' />
                      <span>{videoList.totalLove}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <img src='./commentIcon.svg' alt='' />
                      <span>{videoList.totalComment}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <img src='./shareIcon.svg' alt='' />
                      <span>{videoList.totalShare}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
