"use client";

import React, { useEffect, useState } from 'react';

function main() {

  const [message, setmessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setmessage(data.message);
      }
    )
  }, [])

  return (
    <div className='text-gray-600'>
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <div>
          <h4>Latest Recipes</h4>

          <div>

            <div>
              <img src="/img/stew.jpg" alt="stew" />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4>Most Popular</h4>

          <div>

          </div>

          <div>
            <div>Load more</div>
          </div>
        </div>

        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>
      </main>
    </div>
  );
}

export default main