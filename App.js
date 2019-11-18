import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import StoriesReducer from './store/reducers/stories';
import UserReducer from './store/reducers/user';
import MainNavigator from './navigation/MainNavigator';

const rootReducer = combineReducers({
  stories: StoriesReducer,
  user: UserReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;