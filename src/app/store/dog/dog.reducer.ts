import { DogActions } from './dog.actions';

export interface DogState {
  list: number[];
}

const initialState: DogState = {
  list: []
};

export function dogReducer(state = initialState, action: DogActions) {
  switch (action.type) {
    case 'LOAD_DOG_LIST':
      return state;

    case 'LOAD_DOG_LIST_SUCCESS':
      return {
        ...state,
        list: action.payload.result
      };

    default:
      return {
        ...state
      };
  }
}

export const getDogList = (state: DogState) => state.list;
