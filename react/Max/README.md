# TO-DO LIST

## httpAndAjax

STARTER
 
- Create a Http Request to GET Data
- Render Fetched Data to the Screen
- Fetch Data on Update (without Creating Infinite Loops)
- POST Data to the Server
- Send a DELETE Request
- Handle Errors Locally (Blog.js)
- Add Interceptors to Execute Code Globally
- Set up a Default Global Configuration for Axios
- Create and Use Axios Instances

MID: 
I've turned all components in components folder into containers, because they will be distinct pages 
which typically have subcomponents distributing their state to them.
A posts container has also been added.

- ***load either all posts or a single post or the new post page***
- set up the Router Package
- start by displaying dynamically different components (like Posts, NewPost)
  in Blog.js, depending on the path in the url (without reloading)
- output in the console Routing-related props for NewPost and Posts
- output Routing-related props for Post component in two different ways
- add styles to active route
- make sure that after clicking on a single post, a full post will appear
  ( pass route parameter first, and then extract route parameter into FullPost component )
- load only one rout at a time
- use an alternative method to load a single post in Posts.js (navigating programmatically)
- create nested rout - render FullPost inside Posts.js (beneath)
- make sure you have Dynamic Nested Routes