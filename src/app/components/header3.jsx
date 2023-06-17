import Link from "next/link";
export default function header3() {
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
    </>
  );
}
