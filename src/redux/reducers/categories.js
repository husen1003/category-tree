import { createReducer } from '@reduxjs/toolkit';
import {
    addMainCategory,
    updateCategories,
    addCategory,
    editCategory,
    removeCategory,
} from '../actions/categories';

const initialState = {
    categories: {
        0: {
            id: '0',
            name: 'Jungle',
            type: 'Jungle',
            value: '',
            valueType: 'string',
            parentId: null,
            children: [],
        },
    },
};

const categories = createReducer(initialState, (builder) => {
    builder
        .addCase(updateCategories, (state, { payload }) => {
            state.categories = payload;
        })
        .addCase(addMainCategory, (state, { payload }) => {
            state.categories = [...state.categories, payload];
        })
        .addCase(addCategory, (state, { payload }) => {
            let { name, parentId } = payload;
            let uniqueId = new Date().getTime().toString();
            const id = String(uniqueId);
            let newState = {
                ...state.categories,
                [id]: { name, id, parentId, children: [] },
            };
            if (parentId) {
                newState[parentId] = {
                    ...state.categories[parentId],
                    children: [id, ...state.categories[parentId].children],
                };
                state.categories = { ...newState };
            }
        })
        .addCase(editCategory, (state, { payload }) => {
            let { id, name } = payload;
            state.categories = {
                ...state.categories,
                [id]: {
                    ...state.categories[id],
                    name,
                },
            };
        })
        .addCase(removeCategory, (state, { payload }) => {
            let newState = {};
            let { id } = payload;
            let parentId = state.categories[id].parentId;

            // Removing id from its parent category

            if (parentId) {
                const siblings = state.categories[parentId].children;
                let index = siblings.indexOf(id);
                siblings.splice(index, 1);
                newState = {
                    ...state.categories,
                    [parentId]: {
                        ...state.categories[parentId],
                        children: [...siblings],
                    },
                };
            } else {
                newState = { ...state.categories };
            }

            // Removing all subCategories by id

            const removeKeys = (state, node) => {
                let newState = { ...state };
                for (let childId of node.children) {
                    newState = removeKeys(newState, state[childId]);
                }
                delete newState[node.id];
                return newState;
            };

            newState = removeKeys(newState, state.categories[id]);
            state.categories = { ...newState };
        });
});

export default categories;
