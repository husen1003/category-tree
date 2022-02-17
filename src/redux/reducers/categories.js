import { createReducer } from '@reduxjs/toolkit';
import { updateCategories } from '../actions/categories';

const initialState = {
    categories: [
        {
            name: '1',
            level: 1,
            subCategories: [
                { name: 'sub-1', level: 2 },
                {
                    name: 'sub-2',
                    level: 2,
                    subCategories: [
                        { name: 'sub-1', level: 2 },
                        { name: 'sub-2', level: 2 },
                        { name: 'sub-3', level: 2 },
                    ],
                },
                { name: 'sub-3', level: 2 },
            ],
        },
        { name: '2', level: 1 },
        {
            name: '3',
            level: 1,
            subCategories: [
                { name: 'sub-2-1', level: 2 },
                { name: 'sub-2-2', level: 2 },
                { name: 'sub-2-3', level: 2 },
            ],
        },
        { name: '4', level: 1 },
        { name: '5', level: 1 },
    ],
};

const categories = createReducer(initialState, (builder) => {
    builder.addCase(updateCategories, (state, { payload }) => {
        state.categories = payload;
    });
});

export default categories;
