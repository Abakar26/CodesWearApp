import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const toggleButton = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
    }
  }
  return (
    <div className='flex flex-col justify-center items-center md:justify-start md:flex-row p-4 sticky top-0 bg-white z-10'>
      <div className='logo mx-5 my-2'>
        <Image src='logo.svg' width={150} height={40}></Image>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-4 font-bold md:text-sm'>
          <Link href={'/tshirts'} legacyBehavior><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'} legacyBehavior><a><li>Hoodies</li></a></Link>
          <Link href={'/mugs'} legacyBehavior><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className='cart absolute right-0 top-3 mx-5 flex'>
        <Link href='/login'><MdAccountCircle className='text-xl md:text-3xl cursor-pointer mx-2' /></Link>
        <AiOutlineShoppingCart onClick={toggleButton} className='text-xl md:text-3xl cursor-pointer' />
      </div>

      <div ref={ref} className='w-72 sideCart absolute top-0 right-0 transform translate-x-full bg-red-400 
      transition-transform px-8 py-10 z-10 rounded-2xl'>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleButton} className='absolute top-5 right-2 cursor-pointer'><AiFillCloseCircle className=' text-xl' /></span>
        <ol className='list-decimal text-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4'>No Items in Cart</div>}
          {
            Object.keys(cart).map((k) => {
              return (<li key={k}>
                <div className='flex my-3'>
                  <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                  <div className='w-1/3 flex justify-center items-center font-semibold'>
                    <AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient) }}
                      className=' cursor-pointer' />
                    <span className='mx-2'>{cart[k].qty}</span>
                    <AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient) }}
                      className=' cursor-pointer' />
                  </div>
                </div>
              </li>)
            })
          }
          {/* <li>
            <div className='flex my-3'>
              <div className='w-2/3 font-semibold'>T Shirts</div>
              <div className='w-1/3 flex justify-center items-center font-semibold'>
                <AiOutlinePlusCircle className=' cursor-pointer' />
                <span className='mx-2'>1</span>
                <AiOutlineMinusCircle className=' cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='flex my-3'>
              <div className='w-2/3 font-semibold'>Hoodies</div>
              <div className='w-1/3 flex justify-center items-center font-semibold'>
                <AiOutlinePlusCircle className=' cursor-pointer' />
                <span className='mx-2'>1</span>
                <AiOutlineMinusCircle className=' cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='flex my-3'>
              <div className='w-2/3 font-semibold'>Mugs</div>
              <div className='w-1/3 flex justify-center items-center font-semibold'>
                <AiOutlinePlusCircle className=' cursor-pointer' />
                <span className='mx-2'>1</span>
                <AiOutlineMinusCircle className=' cursor-pointer' />
              </div>
            </div>
          </li> */}
        </ol>
        <div className='flex '>
          <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">
            Checkout </button>
          <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">
            Clear Cart </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar