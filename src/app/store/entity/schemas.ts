import { schema } from 'normalizr';

export const dog = new schema.Entity('dog', {}, { idAttribute: 'id' });
