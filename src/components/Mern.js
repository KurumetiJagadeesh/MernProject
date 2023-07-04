import React from 'react'
import Navbar from './Navbar'
import './mern.css';
export default function Mern() {
    
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
 <center><h1>MERN</h1></center>
 <br />
<h2>
What is the MERN stack?
</h2>
<br />
<h4>
MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
</h4>
<ul class="bullets"><li>MongoDB — document database</li><li>Express(.js) — Node.js web framework</li><li>React(.js) — a client-side JavaScript framework</li><li>Node(.js) — the premier JavaScript web server</li></ul>
<br />
<br />
<p>Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.</p>
<h4>How does the MERN stack work?</h4>
<p>The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON.</p>
<br />
<center><img src="https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress" alt="Aleq"  className='imgmern' /></center>
<br />
<h3>React.js front end</h3>
<p>The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML. </p>
<p>React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.</p>
<h3 id="expressjs-and-nodejs-server-tier">Express.js and Node.js server tier</h3><p>The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses. </p><p>By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.</p>
<h3 id="mongodb-database-tier">MongoDB database tier</h3><p>If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, <a target="_target" href="https://www.mongodb.com/compatibility/express">Express</a>, and Node. </p><p>That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!</p><br/>
<h2 id="is-mern-a-fullstack-solution" >Is MERN a full-stack solution?</h2><p>Yes, MERN is a full stack, following the traditional three-tier architectural pattern, including the front-end display tier (React.js), application tier (Express.js and Node.js), and database tier (MongoDB).</p><br /><br />
<h2 id="why-choose-the-mern-stack" >Why choose the MERN stack?</h2><p>Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively (it technically uses a binary version of JSON called <a target="_target" href="https://www.mongodb.com/json-and-bson">BSON</a>), and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript. </p><p>MongoDB works extremely well with Node.js, and makes storing, manipulating, and representing JSON data at every tier of your application incredibly easy. For cloud-native applications, <a target="_target" href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> makes it even easier, by giving you an auto-scaling MongoDB cluster on the cloud provider of your choice, as easy as a few button clicks.</p><p>Express.js (running on Node.js) and React.js make the JavaScript/JSON application MERN full stack, well, full. Express.js is a server-side application framework that wraps HTTP requests and responses, and makes it easy to map URLs to server-side functions. React.js is a front end JavaScript framework for building interactive user interfaces in HTML, and communicating with a remote server. </p><p>The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!</p><p>MERN is the stack of choice for today’s web developers looking to move quickly, particularly for those with React.js experience.</p>
<br /><h3 id="mern-use-cases">MERN use cases</h3><p>Like any web stack, you can build whatever you want in MERN — though it’s ideally suited for cases that are JSON-heavy, cloud-native, and that have dynamic web interfaces.</p><p>Examples include workflow management, news aggregation, to-do apps and calendars, and interactive forums/social products — and whatever else you can dream up!</p>
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
