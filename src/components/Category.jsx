import React, { useState } from 'react';

const Category = ({ data }) => {
    // const handleClick = (selectedCat) => {
    //     setShow(!show);
    //     console.log(data);
    //     let newData = [];
    //     data.forEach((cat) => {
    //         if (cat.name === selectedCat.name) {
    //             newData.push({
    //                 ...cat,
    //                 show: cat.show ? false : true,
    //             });
    //         } else newData.push(cat);
    //     });
    //     console.log(newData);
    //     setData(newData);
    // };

    return (
        <div>
            {data.map((cat, id) => {
                return (
                    <>
                        <CategoryTree data={cat} />
                    </>
                );
            })}
        </div>
    );
};

const CategoryTree = ({ data }) => {
    const [show, setShow] = useState(false);
    const hasSubCategory = data.subCategories ? true : false;
    return (
        <div className='mx-4'>
            <div onClick={() => setShow(!show)}>
                {data.name}
                {hasSubCategory && <span>{show ? '\u2304' : '\u27A4'}</span>}
            </div>
            {hasSubCategory && show && <Category data={data.subCategories} />}
        </div>
    );
};

export default Category;
