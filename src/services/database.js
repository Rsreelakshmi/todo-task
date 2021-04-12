import Dexie from 'dexie';

// Create  instance of the dexie indexed DB library
const db = new Dexie('GaleTodos');

// Create todos table with index as id
db.version(1).stores({ todos: '++id' });

export default db;
