import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, All_MUSEUMS, DC_MUSEUMS } from './actions/types';
// import artworks from '../data/artworks';


const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      return state.filter(painting => painting.id !== action.id)
    case All_MUSEUMS:
      return [...action.payload]
    case DC_MUSEUMS:
      return state.filter(painting => painting.museum.name === 'National Gallery of Art, Washington D.C.')
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    default:
      return state;
  }
};

// const deletePainting = (state = [], action) => {
//   switch (action.type) {
//     case DELETE_PAINTING:
//       return state.filter(painting => painting.id !== action.id);
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer
  // updatedPaintins: deletePainting
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
