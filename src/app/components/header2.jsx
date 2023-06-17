import Link from "next/link";
export default function header2() {
  return (
    <>
      <header className='fixed w-full top-0 bg-white'>
        <div className='flex w-full justify-center items-center'>
          <div className='w-9/12 bg-2 p-4 m-2'>
            <div className='flex items-center justify-center'>
              <div className='w-4/12 max-lg:w-3/12'>
                <Link href='/'>
                  <img src='logo.svg' alt='' />
                </Link>
              </div>
              <div className='w-4/12 max-lg:hidden'>
                <div className='flex items-center w-[100%] searchbox-wrapper searchbox-wrapper2 bg-white'>
                  <img
                    className='mr-4'
                    src='./searchIcon.svg'
                    alt='Search icon'
                  />
                  <input
                    className='w-full py-2 pr-4 focus-visible:outline-0'
                    type='text'
                    placeholder='Search'
                  />
                </div>
              </div>
              <div className='w-4/12 max-lg:w-9/12 max-sm:hidden text-right'>
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
        </div>
      </header>
    </>
  );
}
