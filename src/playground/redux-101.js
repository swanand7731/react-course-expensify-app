import { createStore } from "redux";

//Action generators - function that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type:'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type:'RESET'
});


const countReducer = (state = { count: 0 }, action) => {
  console.log(action);  
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
      case 'RESET':
        return {
          count:0
        }
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{  
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy : 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 3}));
store.dispatch(resetCount());