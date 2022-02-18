import { createAction } from '@reduxjs/toolkit';

const addCategory = createAction('addCategory');
const removeCategory = createAction('removeCategory');
const editCategory = createAction('editCategory');

export { addCategory, removeCategory, editCategory };
