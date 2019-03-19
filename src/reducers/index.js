import {combineReducers} from 'redux';

function newComments(state = null, action) {
    // eslint-disable-next-line default-case
     switch (action.type) {
        case 'NEW_COMMENT':
            return action.payload;
        }
        return state;
    }
       
function newTasks(state = null, action) {
        // eslint-disable-next-line default-case
     switch (action.type) {
        case 'NEW_TASK':
             return action.payload;
            }
        return state;
     }    
function newOrders(state = null, action) {
            // eslint-disable-next-line default-case
     switch (action.type) {
        case 'NEW_ORDER':
                return action.payload;
                }
        return state;
     }
function tickets(state = null, action) {
        // eslint-disable-next-line default-case
    switch (action.type) {
         case 'TICKETS':
              return action.payload;
            }
            return state;
 }
 
function orders(state = null, action) {
    // eslint-disable-next-line default-case
switch (action.type) {
     case 'ORDERS':
          return action.payload;
        }
        return state;
}

function tasks(state = null, action) {
    // eslint-disable-next-line default-case
switch (action.type) {
     case 'ORDERS':
          return action.payload;
        }
        return state;
}

function messages(state = null, action) {
    // eslint-disable-next-line default-case
switch (action.type) {
     case 'MESSAGES':
          return action.payload;
        }
        return state;
}


const allReducers = combineReducers({
    newComments,
    newTasks,
    newOrders,
    tickets,
    orders,
    tasks,
    messages

});

export default allReducers