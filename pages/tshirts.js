import React from 'react'
import Product from "../models/Product"
import mongoose from "mongoose";

const TSHIRTS = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg" key={index}>
                  <a href={`/product/${product.slug}`} className="block relative  rounded overflow-hidden">
                    <img alt="ecommerce" className="m-auto md:m-0 h-[30vh] md:h-[36vh]" src={product.img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.title}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.desc}</h2>
                    <p className="mt-1">{`$ ${product.amount}`}</p>
                    <div className="mt-1">
                      <span className=' border border-gray-300 px-1 mx-1'>S</span>
                      <span className=' border border-gray-300 px-1 mx-1'>M</span>
                      <span className=' border border-gray-300 px-1 mx-1'>L</span>
                      <span className=' border border-gray-300 px-1 mx-1'>XL</span>
                      <span className=' border border-gray-300 px-1 mx-1'>XXL</span>
                    </div>
                    <div className="mt-1">
                      <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  }
}

export default TSHIRTS