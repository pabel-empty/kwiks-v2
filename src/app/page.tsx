import Header from "./components/Header.jsx";
import Sidebar from "./components/sidebar/Sidebar";
import SingleVideo from "./components/SingleVideo";

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='flex'>
          <div className='w-2/12'>
            <div className='fixed h-full mt-[84px] sidebar-wrap overflow-auto'>
              <Sidebar />
            </div>
          </div>
          <div className='w-9/12 pt-28 max-lg:pt-10 content-container'>
            <div className='video-list-wrapper mx-auto w-8/12'>
              <SingleVideo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
