const { createStore, combineReducers, applyMiddleware } = Redux;

/* the shape of root reducer will then look like:
{
  userInterface: {
    bbId: String,
    bbAd: String,
    ddId: String,
    ddAd: String,
    eeItem: {}
  }
  bbDocs: []
  ddDocs: []
  eeDocs: []
  ssDocs: []
*/

const rootReducer = combineReducers({
  userInterface: Reducers.userInterface,
  bbDocs: Reducers.bbDocs,
  ddDocs: Reducers.ddDocs,
  eeDocs: Reducers.eeDocs,
  ssDocs: Reducers.ssDocs,
});

store = createStore(rootReducer);
