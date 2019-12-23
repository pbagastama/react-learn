const redux = require('redux');
const createStore = redux.createStore; 

const initialState = {
    value: 0,
    status: 'Laki Laki',
    age: 23
}

// Reducer
const rootReducer = (state = initialState, action) => {
    // if(action.type === 'ADD_AGE'){
    //     return{
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE'){
    //     return{
    //         ...state,
    //         value: state.value + action.newvalue
    //     }
    // }
    // return state;
    
    switch(action.type){
        case 'ADD_AGE':
            return{
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return{
                ...state,
                value: state.value + action.newvalue
            }
        default:
            return state;
    }
}

// Store (Global Store untuk menyimpan nilai dll )
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription (Melihat Perubahan Store)
store.subscribe(() => {
    console.log('store change :', store.getState()) 
})

// Dispatch (Untuk Merubah Value)
store.dispatch({type : 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newvalue: 12})
console.log(store.getState());


