import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const CategoryList = ({ data }) => {
    const allCategories = useSelector((state) => state.categories.categories);

    return (
        <div>
            {data.children.map((cat) => {
                return (
                    <>
                        <Category data={allCategories[cat]} key={cat.id} />
                    </>
                );
            })}
        </div>
    );
};

export default CategoryList;
