import { createStore } from 'redux';
import AllReducer from './reducers';
import ls from 'local-storage';

var creds = {
  student: ls.get('infosForms'),
};

export let initialState = creds;

const store = createStore(
  AllReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const { infosForms } = store.getState();
  ls.set('infosForms', infosForms);
});

export default store;
