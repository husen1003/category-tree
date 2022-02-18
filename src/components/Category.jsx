import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, updateCategories } from '../redux/actions/categories';

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
    const inputEl = useRef(null);
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.categories.categories);
    const [value, setValue] = useState('');
    const [showTextBox, setShowTextBox] = useState(false);
    const [show, setShow] = useState(false);
    const hasSubCategory = data.children?.length > 0 ? true : false;

    const handleSubmit = (e) => {
        e.preventDefault();
        let filteredCat = allCategories || [];
        let findId = (arr) => {
            let data = arr
                .map((cat) => {
                    if (cat.id === value.id) return cat;
                    else if (cat.children) return findId(cat.children);
                })
                .filter((cat) => cat);
            console.log(data);
            // let result = arr.find((cat) => cat.id === value.id);
            // if (result) return result;
            // else findId(result);
        };
        findId(filteredCat);

        // dispatch(updateCategories([]));
    };

    return (
        <div className={`${hasSubCategory ? 'mx-4' : 'mx-8'}`}>
            <div onClick={() => setShow(!show)} className='flex items-center'>
                {hasSubCategory && <span>{show ? '\u2304' : '\u27A4'}</span>}
                {data.name}
                <span
                    onClick={async (e) => {
                        e.stopPropagation();
                        await setShowTextBox(!showTextBox);
                        inputEl.current.focus();
                    }}
                    className='ml-2 border border-black px-1 cursor-pointer rounded-full'
                >
                    +
                </span>
                {showTextBox && (
                    <form onSubmit={handleSubmit}>
                        <input
                            ref={inputEl}
                            className='border-4 mb-4 outline-none'
                            type={'text'}
                            value={value.name}
                            placeholder='Enter category...'
                            onChange={(e) => {
                                setValue({ name: e.target.value, id: data.id });
                            }}
                        />
                        <button type='submit'>Add</button>
                    </form>
                )}
            </div>
            {hasSubCategory && show && <Category data={data.children} />}
        </div>
    );
};

export default Category;
