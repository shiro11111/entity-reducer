import { List } from '../../models/list.model';
import { Dog } from '../../models/dog.model';

export class DogUtil {
  static getDogList(): List<Dog> {
    return {
      TotalCount: 5,
      list: [
        {
          id: 1,
          breed: 'samoyed',
          color: 'white'
        },
        {
          id: 2,
          breed: 'daschound',
          color: 'brown'
        },
        {
          id: 3,
          breed: 'collie',
          color: 'tricolor'
        },
        {
          id: 4,
          breed: 'doberman',
          color: 'black'
        },
        {
          id: 5,
          breed: 'rottweiler',
          color: 'black'
        }
      ]
    };
  }

  static getDogDetails(): Dog {
    return {
      id: 1,
      owner: 'Siuzi',
      name: 'Siuzi Tsi'
    };
  }
}
