import React, { useState } from 'react';

const AddCategorie = () => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setValue('');
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col w-6/12 justify-center items-center mx-auto my-10'
            >
                <input
                    className='border-4 mb-4 outline-none'
                    type={'text'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddCategorie;
