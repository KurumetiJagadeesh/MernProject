import React from 'react'
import Navbar from './Navbar'
import './mern.css';
export default function MP() {
    
  return (
    <>
    
        <img src="https://images.hindustantimes.com/img/2021/04/08/1600x900/KL_University_HT_1617871537419_1617871542598.jpg" alt="Aleq"  className='background' />
    <div>
        <Navbar/>
        </div>
        <h2>
            This is Mern
        </h2>


<br>
</br>
<div class="container">
 <center><h1>CNS</h1></center>
 <br />
 <h4>DAA stands for Computer Networks.</h4>
 <br />
 <h2>What is meant by Algorithm Analysis?</h2><p>Algorithm analysis is an important part of computational complexity theory, which provides theoretical estimation for the required resources of an algorithm to solve a specific computational problem. Analysis of algorithms is the determination of the amount of time and space resources required to execute it.</p><h2>Why Analysis of Algorithms is important?</h2><ul><li>To predict the behavior of an algorithm without implementing it on a specific computer.</li><li>It is much more convenient to have simple measures for the efficiency of an algorithm than to implement the algorithm and test the efficiency every time a certain parameter in the underlying computer system changes.</li><li>It is impossible to predict the exact behavior of an algorithm. There are too many influencing factors.</li><li>The analysis is thus only an approximation; it is not perfect.</li><li>More importantly, by analyzing different algorithms, we can compare them to determine the best one for our purpose.</li></ul><h2>Types of Algorithm Analysis:</h2><ol><li>Best case</li><li>Worst case</li><li>Average case</li></ol>
</div>
<br />
<center>
<div className="container1">
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        CO-1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the basics of this cource.</strong> Fundamentals of Web Applications: Overview of HTML, CSS Single Page Application (SPA), JavaScript, and ES6. Full-Stack Web Development. Introduction to React JS: class, functions, arrays, DOM methods, Components, and Multiple components JSX, Passing data to components-props. De structuring, Page re-rendering, Stateful component, Event handling Event handler as a function, passing state to child components, Refactoring the components, Rendering Collections, Key-attribute, Map Controlled component Filtering Displayed Elements npm Axios and promises.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      CO-2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the CO-2 topics.</strong> Form handling, Effect-hooks, Material UI Components: Inputs, Feedback, Data Display, Surface, Navigation, Layout, Utils, MUI X. Working with Server using Node JS and Express: Simple Web server, About Node JS, modules, routes, Streaming, Files, Express, Web and express, nodemon, REST, Fetching and deleting resources, Postman, receiving data, HTTP Request types, same origin policy, and CORS, authentication and authorization, Token based authentication. Storing in MongoDB: MongoDB, Schema, CRUD operations on objects from the database, other data operations, Backend connectivity with database, Database configuration into its own module, using database in route handlers, verifying frontend and backend integration,
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      CO-3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>These are CO-3 Topics.</strong>  Rendering MaterialUI using RESTful API, Error handling, error handling into middleware, GraphQL, Apollo Server, Apollo Studio Explorer, Parameters resolver, Mutations, other queries, React and GraphQL, Apollo Client, Named Queries and Variables, Cache, Mutations, MongoDB and Apollo, Validation, Subscriptions Server and Client, REDUX: Flux-architecture and Redux, communicating with a server in a redux application, Asynchronous actions, and redux-thunk, connect function in Redux, Redux, the component state. TESTING: Validation, debugging and ESLint, Project Structure, Testing React apps, State management, router, custom hooks.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      CO-4
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>These are CO-4 topics.</strong> Testing backend applications, async / await, Testing React apps, End to end – testing, Type Scripting, react with typescript, React Native basics, communicating with the server, Testing, and extending, Handling dependencies in tests Cursor-based pagination Infinite scrolling, Introduction to CI/CD, Getting started with GitHub Actions, Deployment of both client-server apps in Heroku.
      </div>
    </div>
  </div>
</div>
    
</div></center>
    
    </>
  )
}
