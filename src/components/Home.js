import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://play-lh.googleusercontent.com/hvK9JjjMrQ-MSP98UVqmwpgojkc89P5tYvLUbvbnAqORVx3o7mUhk_NNdSD4S9_F8pw"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              SQLiter - Mastering Queries
            </h1>
            <p class="mb-8 leading-relaxed">
              Crunch Your SQL Queries Faster Than You Have Before. Writing
              Queries Has Never Felt Better.
            </p>
            <div class="flex justify-center">
              <a
                href="/sql-editor"
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
