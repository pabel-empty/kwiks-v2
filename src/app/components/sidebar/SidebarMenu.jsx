import Link from "next/link";
export default function SidebarMenu() {
  return (
    <ul className='sidebar-main-menu py-5 [&>li]:pb-3'>
      <li>
        <Link
          className='flex items-center [&>img]:block [&>img]:w-8 [&>img]:pr-2 text-lg'
          href='#'
        >
          <img src='./star.svg' alt='' />
          <span>Trending</span>
        </Link>
      </li>
      <li>
        <Link
          className='flex items-center [&>img]:block [&>img]:w-8 [&>img]:pr-2 text-lg'
          href='#'
        >
          <img src='./user.svg' alt='' />
          <span>Following</span>
        </Link>
      </li>
      <li>
        <Link
          className='flex items-center [&>img]:block [&>img]:w-8 [&>img]:pr-2 text-lg'
          href='#'
        >
          <img src='./play.svg' alt='' />
          <span>Explore</span>
        </Link>
      </li>
    </ul>
  );
}
