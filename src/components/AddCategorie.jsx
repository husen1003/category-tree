import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/actions/categories';

const AddCategorie = () => {
    const dispatch = useDispatch();
    const inputEl = useRef(null);
    const [showTextBox, setShowTextBox] = useState(false);
    const [value, setValue] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (showTextBox) {
            console.log(value);
            dispatch(addCategory({ name: value, parentId: '0' }));
            setValue('');
            setShowTextBox(false);
        } else {
            await setShowTextBox(true);
            inputEl.current.focus();
        }
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col w-6/12 justify-center items-center mx-auto my-10'
            >
                <button
                    className='bg-green-300 px-10 py-2 rounded-lg'
                    type='submit'
                >
                    Add Category
                </button>
                {showTextBox && (
                    <input
                        ref={inputEl}
                        className='border-2 mt-4 outline-none w-full p-1 text-base'
                        type={'text'}
                        value={value}
                        placeholder='Enter category...'
                        onChange={(e) => setValue(e.target.value)}
                    />
                )}
            </form>
        </div>
    );
};

export default AddCategorie;
