1. What problem does the context API help solve?

It avoids the need to pass data down as props through the component tree. For small applications this works fine. As applications get larger the requirement to pass data and functions down from parent to child in order to maintain state at the top level gets clunky very quickly.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are things you can do to state. Reducers are functions which take in an action and current state and return new state. Store is the current state of the application. The store is referred to as the the single source of truth because it's the single place all components store their data, which means that any component can have access to any piece of data as long as it has access to the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state of the application, usually stored in the top level component or in a state store. Component state is state that lives within an individual component. Component state can be used if the state is only ever going to be used by that specific component, for example the state of fields in a form before submitting. As soon as other components need access to the data it's better to store it in application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware that sits between an action-creator and reducer. It intercepts the created action, decides what to do based on its type and either allows it to proceed unimpeded or modifies it in some way before either sending the same action onwards, stopping it or sending a different action (or actions) to the reducer. A classic usecase is getting data from an API. The action-creator dispatches an action like 'getUsers' which is intercepted by redux-thunk. It uses something like axios to call the API and retrieve the list of users then sends the action 'setUsers' to the reducer with a payload of the API response.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. It's the only one I know so far, and as Gabe and others have pointed out if you don't use it you'll end up reinventing it on your own and inevitably will do a worse job.
