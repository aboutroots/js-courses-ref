<div align="center">

# TO-DO LIST

</div>

***

<p align="center">
🎉List of tasks to be done below. Everything comes from the courses.🎉
</p>

* [httpAndAjax](#-httpAndAjax)
* [Routing](#-routing)
* [LazyLoading with React Suspense](#-lazyLoading-with-react-suspense)
* [Redux-building blocks](#-redux-building-blocks)
* [Redux assignment](#-redux-assignment)
* [Redux assignment-2](#-redux-assignment-2)
* [Redux Middleware](#-redux-middleware)

***

## 🚀 httpAndAjax  
(https://jsonplaceholder.typicode.com/)

STARTER
 
+ [ ] Create a Http Request to GET Data
+ [ ] Render Fetched Data to the Screen
+ [ ] Fetch Data on Update (without Creating Infinite Loops)
+ [ ] POST Data to the Server
+ [ ] Send a DELETE Request
+ [ ] Handle Errors Locally (Blog.js)
+ [ ] Add Interceptors to Execute Code Globally
+ [ ] Set up a Default Global Configuration for Axios
+ [ ] Create and Use Axios Instances

MID  ***load either all posts or a single post or the new post page***

+ [x] I've turned all components in components folder into containers, because they will be distinct pages 
which typically have subcomponents distributing their state to them.
A posts container has also been added.
+ [ ] set up the Router Package
+ [ ] start by displaying dynamically different components (like Posts, NewPost)
  in Blog.js, depending on the path in the url (without reloading)
+ [ ] output in the console Routing-related props for NewPost and Posts
+ [ ] output Routing-related props for Post component in two different ways
+ [ ] add styles to active route
+ [ ] make sure that after clicking on a single post, a full post will appear
  (pass route parameter first, and then extract route parameter into FullPost component)
+ [ ] load only one rout at a time
+ [ ] use an alternative method to load a single post in Posts.js (navigating programmatically)
+ [ ] create nested rout - render FullPost inside Posts.js (beneath)
+ [ ] make sure you have Dynamic Nested Routes

## 🚀 Routing

1. Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
2. Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
3. Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
4. Pass the course ID to the "Course" page and output it there
5. Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
6. Load the "Course" component as a nested component of "Courses"
7. Add a 404 error page and render it for any unknown routes
8. Redirect requests to /all-courses to /courses (=> Your "Courses" page)

## 🚀 LazyLoading with React Suspense

+ [ ] Load Posts and User components only when needed
- with Routing
- with toggle button

## 🚀 Redux-building blocks

***write all the building blocks of redux*** <br />
***execute this file in node.js***

***create everything that need to use redux***
	(store, reducer, action, subscription)

1. First create a store with a reducer and initialize the state
2. Dispatch actions
3. Add subscriptions

## 🚀 Redux assignment

START:

1. connect react app to redux (redux package)
2. start from creating: store and reducer (separate folder)
3. connect store to react app (with react-redux package and connect)
4. output state from redux in counter.js file
5. dispatch actions:
	- increase the number by one
	- decrement
	- add
	- subtract <br />
(add hardcoded value in the reducer function)
6. pass and retrieve data (payload) with action
7. add switch-case in the reducer (if you have not done it before)
8. Add a button that adds the value of the counter below. To do this, add another item to state, for example results: []
   Update state immutably - ***do it in two ways***
9. Additionally, when click on the result, remove it from the above array
  (update array immutably ***in to ways*** - with spread op. and filter method)
10. Outsource your action types into constants you can use in your application, 
	so that you always just import a constant (into reducer.js and Counter.js) and eliminate the
    danger of mistyping.
	(If you only have two types of actions you dispatch, you might not need that)
	- start by adding the action.js file in the store folder
	
MID:

11. Use multiple reducers
	- one for the counter
	- one for the results
	- add a new reducers folder (in store), and then add counter.js and result.js files
12. Connect reducers using the helper function from the redux package

## 🚀 Redux assignment-2

***Turn this app into one which does NOT use local state (in components) but instead uses Redux***

START

1. First, install redux and react redux.
2. Create a reducer and store (start by adding a new store folder, and in it reducer.js).
3. For the action, create a separate file in the store folder.
4. Connect React App to the state.
5. Create mapStateToProps and mapDispatchToProps to manage persons array and actions related to it.

MID:

***Combining Local UI State and Redux*** Whatever the user entered into these inputs below, probably isn't relevant to the entire
application, there is no need to store this in the global Redux store

6. Add input fields to the application to add values (name and age) - It's a typical case of local UI state.
7. Turn AddPerson.js into a component using the class keyword to manage the state of these inputs
	(that is, you must have a state and two methods that add age and name to your state).
8. ***Combine both, local UI state to handle the input and then still Redux to handle the created person which affects broader parts of our application.***
- by passing data (name and age) as arguments
- handle this data in the Persons.js container
9. Then in the reducer, extract the value that the user entered

## 🚀 Redux Middleware

START:

1. Add Redux Middleware to the current project
2. Create your own middleware (in index.js), which simply logs each action you issue.
3. Apply this middleware to store.
- first of all, you need to import something from redux,
- add an enhancer
4. Output in the console two logs:
- the first one is the dispatching log where you see the action youe dispatched
- the second one is the next state where you see the updated state
5. Set up Redux DevTools (https://github.com/zalmoxisus/redux-devtools-extension)
- install the extension
- inform this extension that there is a store in your web app
  to do this, create your own constant, with a variable injected by the extension <br />
  create a CreateStore and use the created constant, to then pass applyMiddleware to it - as in the documentation <br />