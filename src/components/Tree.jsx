import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCategory,
    editCategory,
    removeCategory,
} from '../redux/actions/categories';

const Tree = ({ data }) => {
    const allCategories = useSelector((state) => state.categories.categories);

    return (
        <div>
            {data.children.map((cat, id) => {
                return (
                    <>
                        <CategoryTree data={allCategories[cat]} />
                    </>
                );
            })}
        </div>
    );
};

const CategoryTree = ({ data }) => {
    const inputEl = useRef(null);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');
    const [showTextBox, setShowTextBox] = useState(false);
    const [show, setShow] = useState(false);
    const hasSubCategory = data?.children?.length > 0 ? true : false;

    const handleClick = async (e) => {
        e.stopPropagation();
        await setShowTextBox(!showTextBox);
        inputEl.current.focus();
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(removeCategory({ id: data.id }));
    };
    const handleEdit = async (e) => {
        e.stopPropagation();
        await setShowTextBox(!showTextBox);
        setIsEditing(true);
        setValue(data.name);
        inputEl.current.focus();
    };

    const handleAdd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isEditing) {
            dispatch(editCategory({ name: value, id: data.id }));
            setShowTextBox(false);
            setValue('');
            setIsEditing(false);
        } else {
            dispatch(addCategory({ name: value, parentId: data.id }));
            setShowTextBox(false);
            setValue('');
        }
    };

    return (
        <div className={`${hasSubCategory ? 'mx-4' : 'mx-8'}`}>
            <div onClick={() => setShow(!show)} className='flex items-center'>
                {hasSubCategory && <span>{show ? '\u2304' : '\u27A4'}</span>}
                {data?.name}
                <span
                    onClick={handleClick}
                    className='ml-2 border border-black px-1 cursor-pointer rounded-full'
                >
                    +
                </span>
                <span
                    onClick={handleEdit}
                    className='ml-2 border border-black px-1 cursor-pointer rounded-full'
                >
                    edit
                </span>
                <span
                    onClick={handleDelete}
                    className='ml-2 border border-black px-1 cursor-pointer rounded-full'
                >
                    -
                </span>
                {showTextBox && (
                    <form onSubmit={handleAdd}>
                        <input
                            ref={inputEl}
                            className='border-4 mb-4 outline-none'
                            type={'text'}
                            value={value}
                            placeholder='Enter category...'
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                        <button type='submit'>
                            {isEditing ? 'Submit' : 'Add'}
                        </button>
                    </form>
                )}
            </div>
            {hasSubCategory && show && <Tree data={data} />}
        </div>
    );
};

export default Tree;
