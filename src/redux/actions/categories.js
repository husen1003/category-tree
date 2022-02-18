import { createAction } from '@reduxjs/toolkit';

const updateCategories = createAction('updateCategories');
const addMainCategory = createAction('addMainCategory');
const addCategory = createAction('addCategory');
const removeCategory = createAction('removeCategory');
const editCategory = createAction('editCategory');

export {
    updateCategories,
    addMainCategory,
    addCategory,
    removeCategory,
    editCategory,
};
