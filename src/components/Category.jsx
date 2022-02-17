import React, { useState } from 'react';

const Category = ({ data, setData }) => {
    const [show, setShow] = useState(false);

    const handleClick = (selectedCat) => {
        setShow(!show);
        console.log(data);
        let newData = [];
        data.forEach((cat) => {
            if (cat.name === selectedCat.name) {
                newData.push({
                    ...cat,
                    show: cat.show ? false : true,
                });
            } else newData.push(cat);
        });
        console.log(newData);
        setData(newData);
    };

    return (
        <div>
            {data.map((cat, id) => {
                return (
                    <>
                        <li
                            key={id}
                            className={`ml-2`}
                            onClick={() => handleClick(cat)}
                        >
                            {cat.name}
                        </li>
                        {cat.subCategories && cat.show && (
                            <Category
                                data={cat.subCategories}
                                key={id}
                                setData={setData}
                            />
                        )}
                    </>
                );
            })}
            {/* {data.subCategories?.length > 0 ? (
                <Category data={data.subCategories} />
            ) : (
                data.map((cat) => <li>{cat.name}</li>)
            )} */}
        </div>
    );
};

export default Category;
