import Link from "next/link.js";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import SingleVideo from "../components/SingleVideo.jsx";
export default function v3() {
  return (
    <>
      <header className='fixed w-full top-0 bg3 py-5 bg-white'>
        <div className='container'>
          <div className='flex items-center justify-center relative'>
            <div className='w-6/12 logo-v3'>
              <Link href='/'>
                <img src='logo.svg' alt='' />
              </Link>
            </div>
            <div className='w-6/12 text-right right-menu'>
              <ul className='inline-flex [&>li]:ml-5'>
                <li>
                  <Link href='/'>Creators</Link>
                </li>
                <li className='border-l-2'>
                  <Link href='/' className='getBtn'>
                    Get App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img className='bg-img' src='./headerBg.svg' alt='' />
      </header>
      <div className='container'>
        <div className='flex v2wrapper'>
          <div className='w-2/12'>
            <div className='fixed h-full mt-[90px] sidebar-wrap sidebar-wrap2 overflow-auto mb-20'>
              <Sidebar />
            </div>
          </div>
          <div className='w-9/12 pt-24 max-lg:pt-10 content-container'>
            <div className='video-list-wrapper mx-auto w-8/12'>
              <SingleVideo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
