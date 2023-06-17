import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";
import PopularCreator from "./PopularCreator";
export default function Sidebar() {
  return (
    <>
      <SidebarMenu />
      <PopularCreator />
      <div className='downLinks mb-5'>
        <h4 className='font-semibold py-2'>Download Kwiks App</h4>
        <div className='flex'>
          <Link href='#'>
            <Image
              src='/appStore.svg'
              className='pr-1'
              width={100}
              height={100}
              alt='Picture of the author'
            />
          </Link>
          <Link href='#'>
            <Image
              src='/Gplay.svg'
              className='pl-1'
              width={100}
              height={100}
              alt='Picture of the author'
            />
          </Link>
        </div>
      </div>
      <div className='sidebar-menu font-semibold py-2 pb-20'>
        <h4>About Kwiks</h4>
        <ul className='text-[11px] flex flex-wrap font-light gap-3 mt-2'>
          <li>
            <Link href='#'>About Us</Link>
          </li>
          <li>
            <Link href='#'>Partnership</Link>
          </li>
          <li>
            <Link href='#'>Help</Link>
          </li>
          <li>
            <Link href='#'>Safety</Link>
          </li>
          <li>
            <Link href='#'>Community Guidelines</Link>
          </li>
        </ul>
        <div className='flex items-center py-4'>
          <span className='text-[11px] font-light'>Follow us</span>
          <ul className='flex pl-2 [&>li]:pr-1'>
            <li>
              <Link href='#'>
                <img src='./fb.svg' alt='facebook' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <img src='./ln.svg' alt='Linkdin' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <img src='./insta.svg' alt='Instagram' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <img src='./tw.svg' alt='Twitter' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
