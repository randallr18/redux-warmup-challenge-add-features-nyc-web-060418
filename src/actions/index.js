import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, DC_MUSEUMS, All_MUSEUMS } from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(deleteID) {
  return { type: DELETE_PAINTING, id: deleteID };
}

export function allMuseums() {
  return { type: All_MUSEUMS, payload: artworks };
}

export function dcMuseums() {
  return { type: DC_MUSEUMS };
}
