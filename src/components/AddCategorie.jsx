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
                {showTextBox && (
                    <input
                        ref={inputEl}
                        className='border-4 mb-4 outline-none'
                        type={'text'}
                        value={value}
                        placeholder='Enter category...'
                        onChange={(e) => setValue(e.target.value)}
                    />
                )}
                <button
                    className='bg-orange-500 px-10 py-2 rounded-lg'
                    type='submit'
                >
                    {!showTextBox ? 'Add Category' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default AddCategorie;
