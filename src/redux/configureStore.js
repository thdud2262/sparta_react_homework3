import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";



export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
})

const middlewares = [thunk.withExtraArgument({history: history})];

const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
  // 로거를 불러오면 미들웨어에 추가해줘
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
// 위에 있는 미들웨어 모아서 묶어놓음
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// store만들기 (reducer + middleware)
let store = (initialStore) => createStore(rootReducer, enhancer);
export default store();