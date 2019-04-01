# TO-DO LIST

## httpAndAjax  (https://jsonplaceholder.typicode.com/)

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

## Routing

1. Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
2. Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
3. Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
4. Pass the course ID to the "Course" page and output it there
5. Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
6. Load the "Course" component as a nested component of "Courses"
7. Add a 404 error page and render it for any unknown routes
8. Redirect requests to /all-courses to /courses (=> Your "Courses" page)

## LazyLoading with React Suspense

+ [ ] Load Posts and User components only when needed
    with Routing
    with toggle button
    