"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Header() {


  const [ showModal, setShowModal ] = useState( false );
  const [ isLogin, setIsLogin ] = useState( true );

  return (
    <header className='fixed w-full top-0 bg-white'>
      <div className='flex w-full justify-center items-center'>
        <div className='w-9/12 bg-2 px-4 py-2 m-2'>
          <div className='flex items-center justify-center'>
            <div className='w-4/12 max-lg:w-3/12'>
              <Link href='/'>
                <img class='w-10 logo2' src='logo2.svg' alt='' />
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
                  <Link href="/" onClick={ () => setShowModal( true ) } className='getBtn'>
                    Get App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      {/* Login and Signup Modal */ }
      { showModal ? (
        <>
          <div className="closed_layer" onClick={ () => setShowModal( false ) }></div>
          <div className="input_box">

            <div className="header_part">
              <button onClick={ () => setShowModal( false ) }>+</button>
            </div>

            {/*body*/ }
            <div className="relative p-6 flex-auto">
              <div className="lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-center">
                  { isLogin ? 'Login' : 'Sign up' } to Kwiks
                </h3>
                <p className="text-center">Inter your valid email address and password<br />{ isLogin ? 'login' : 'register' } to your account</p>
                <form action="#">
                  {
                    isLogin ? <><div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className=""
                        placeholder="email / username / phone"
                      />
                    </div>
                      <div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="password"
                          className=""
                        />
                      </div></> : <><div>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          className=""
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="createEmail"
                          id="createEmail"
                          className=""
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          name="createPassword"
                          id="createPassword"
                          placeholder="Create Password"
                          className=""
                        />
                      </div></>
                  }

                  <button
                    type="submit"
                    className="w-full text-white"
                  >
                    { isLogin ? 'Login' : 'Create Account' }
                  </button>

                  <p className="text-center temrs_condition_para">
                    By clicking here and continuing,<br /> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                  </p>

                  {
                    isLogin ? <h4 className="text-center">Dont have an account? <a onClick={ () => setIsLogin( false ) } href="javascript:void(0)">Sign up</a></h4> : <h4 className="text-center">Already have an account? <a onClick={ () => setIsLogin( true ) } href="javascript:void(0)">Login</a></h4>
                  }
                </form>
              </div>

            </div>
          </div>
        </>
      ) : null }
    </header>
  );
}
