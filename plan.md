## Component or Page:

- Dispatch & useEffect

  1. contains useEffect() to call a thunk creator that has a thunk function (= fetchPost(id) ) ready to fetch data from the API
  2. It dispatches the fetchPost function in UseEffect

- useSelector & selector
  1. Component has a variable that captures the useSelector function that contains a specific selector (= useSelector(selectPostandComments) )
  2. This variable contains the current state derived from the store and is used to dispaly the data

## Actions file

- Thunk creator, fetching API & dispatching types

  1. Contains a variable with the API URL
  2. Contains the action functions with the pre-defined type & payload
  3. Contains function that fetches the data from API. It also receives the parameters (dispatch, getState)
  4. this function also contains the thunk creator function that contains the action functions from 2.
  5. The data gets captured annd assigned to the action function as payload
  6. The action functions get dispatched

## Store & reducer files

- Reducer & State

  1. The action type from actions file gets captured by reducer
  2. The payload gets copied i.e. the state gets overridden

## Selectors

- Selectors file & useSelectors

  1. The selectors file contains the selector function.
  2. This selector function contains the logic itself as to which specific state has to be selected from the store.
  3. Then useSelector from the component is used to grab a specific state using a specific selector (=read specific logic)
