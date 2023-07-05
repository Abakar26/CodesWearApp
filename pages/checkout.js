import React from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';


const Checkout = ({ cart, clearCart, addToCart, removeFromCart }) => {
  return (
    <div className='container m-auto'>
      <h1 className=' font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
        <div class="mb-4">
          <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="textarea" name="textarea" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
          <div class="relative mb-4">
            <label for="Phone" class="leading-7 text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class="relative mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
          <div class="relative mb-4">
            <label for="State" class="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class="relative mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="number" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className='font-semibold text-xl'>2. Review Cart Items</h2>
      <div className='w-full sideCart bg-red-400 px-8 py-10 rounded-2xl'>
        <ol className='list-decimal text-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4'>No Items in Cart</div>}
          {
            Object.keys(cart).map((k) => {
              return (<li key={k}>
                <div className='flex item my-5'>
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

export default Checkout