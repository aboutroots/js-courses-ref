<div align="center">

# TO-DO LIST

</div>

***

<p align="center">
🎉A set of very simple tasks to do, to learn how hooks work.🎉
</p>

* [useState](#-useState)
* [useState-2-end](#-useState-2-end)
* [useState-3-end](#-useState-3-end)
* [useEffect](#-useEffect)
* [useEffect-mid](#-useEffect-mid)
* [simpleApp](#-simpleApp)
* [useContext](#-useContext)
* [customHooks](#-customHooks)
* [customHooks2](#-customHooks2)
* [todoApp](#-todoApp)


***

## 🚀 useState 

START:

You want to have an activated button or an inactivated button. And when the button is active it will display one piece of text like active and when is inactive it will display another piece of text like inactive. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useState-end/src/App.js

## 🚀 useState-2-end 

START:

1. Write an app where you're going to use a button to increment a numeric count.
Begin with a class based react component and then refactor that to a component with hook.
2.  Add two more buttons to your interface. The first button should have the text decrease and it should decrease the count by one. Another button with the text reset that is going to reset the count. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useState-2-end/src/App.js

## 🚀 useState-3-end 

START:

1. Build a basic form which is going to ask the user for their city and their country of residence.
And as the user fills out these two text input fields, you want to take that information the city and 
the country and display it on the page.
2. Use a plain javascript object to store the state.
3. Uther solution: invoke useState multiple times. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useState-3-end/src/App.js

## 🚀 useEffect 

START:

1. Output in the console the value of count state variable from the useEffect function body.
2. Output in the console the value of count state variable from teardown function.
3. Make the counter component visible and invisible (to simulate the process of mounting and unmounting. <br />
***Consider when exactly does React clean up an effect?*** <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useEffect-mid/src/App.js

## 🚀 useEffect-mid

START:

4. Add a button that changes the color of the number.
5. Have your side effect to run only when a specific piece of state changes. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useEffect-end/src/App.js

## 🚀 simpleApp

START:

- Build an app where the user can type any lowercase letter or a space with their keyboard. 
- Then you want to take all the letters the user has type and output them to the screen in a fancy blog quote.
(so as the user presses characters they're going to see their text appear on the screen )
- you have to remember to tear down everything that you set up, so as not to broke the application <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/simpleApp-mid/src/App.js

MID: (custom hook)

- Let's say you wanted to build a second react component that has the exact same typing functionality
but a different UI. For example you want an H2 tag and a regular div instead of a blockquote. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/simpleApp-end/src/App.js

## 🚀 useContext

START:

1. Create nested component structure so you can demonstrate how with context
you can pass information from the very top of the tree an app to button at the very bottom of the tree.
- with class components <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useContext-mid/src/App.js

MID:

2. Refactor the work that you created into functional hooks based components. 
Introduce the useContext hook for creating a consumer to receive your context. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/useContext-end/src/App.js

## 🚀 customHooks

1. Extract this counter functionality to live outside of your app component.
2. Let's say you want the component to specify starting value of the count.
3. Render two counters - both relying on the use counter state hook
4. Let's say that you want each of your display components to start off with a custom count. <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/customHook-end/src/App.js

## 🚀 customHooks2

Move all of the logic for keeping track of each input and its value to a separate user input custom hook.
(fill out useInput) <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/customHook2-end/src/App.js

## 🚀 todoApp

START:

1. Create Todo App with React Hooks.
- add the ability to add items
- save items on the server (whenever you add a new one)
- then fetch this data (when component gets loaded) and display it

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/todo-mid/src/components/Todo.js

MID:

2. Fake a very simple multi-page, single page application.
- start by adding two new components - Header.js and Auth.js
- the Header contains two buttons - todo lists and auth
- Auth contains log in button
- useState to switch between the todo and the auth state to decide which of the two components to show
3. When you press the button in Auth.js, set the state to being logged in and you want to set the state through the context API.
- for this, create a new file, auth-context.js in the src folder
- output your auth status: let's say you only want to unlock the to-do list button (in Header.js) if you are authenticated

MID-2: (before the problem with closure) <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/todo-mid-2/src/App.js

MID-3: (after) <br />

***SOLUTION:*** https://github.com/Had3r/Learning-Code/blob/master/react/reactHooks/todo-mid-3/src/components/Todo.js

4. Add features to delete the item using useReducer Hook
- start with creating a reducer
- now register this reducer and use it correctly
- then to delete items, You want to make it clickable (remove it on the back-end too)
5. If you use a reducer and dispatch, simplify submittedTodo logic.

MID-4: (useRef hook) <br />

***SOLUTION:***

6. Let's say for input, you don't want to get the value and set the value through todoName,
but use a reference.

MID-5: (customHook, useMemo) <br />

***SOLUTION:***

7. Outsource Todo.js into a new List.js file 
- add validation on an input (whether the input is invalid or not - introduce useState for this)
- create your own hook that deals with input validation (for this create a new folder named hooks with forms.js)
- in form.js manage the state and validity of form input
8. Make sure that you don't unnecessarily re-render list.
