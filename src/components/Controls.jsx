import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCategory } from '../redux/actions/categories';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AddCategoryModal from './AddCategoryModal';

const Controls = ({ data }) => {
    const dispatch = useDispatch();
    const inputEl = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');
    const [showTextBox, setShowTextBox] = useState(false);
    const handleClick = async (e) => {
        await setShowTextBox(!showTextBox);
        inputEl.current.focus();
    };

    const handleDelete = (e) => {
        dispatch(removeCategory({ id: data.id }));
    };
    const handleEdit = async (e) => {
        await setShowTextBox(!showTextBox);
        setIsEditing(true);
        setValue(data.name);
        inputEl.current.focus();
    };
    return (
        <div>
            <AddCategoryModal
                isVisible={showTextBox}
                setIsVisible={setShowTextBox}
                data={data}
                inputEl={inputEl}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                value={value}
                setValue={setValue}
            />
            <div className='flex items-center bg-green-300 p-2 rounded-lg'>
                <PlusOutlined className='mx-1' onClick={handleClick} key={1} />
                <EditOutlined className='mx-1' onClick={handleEdit} key={2} />
                <DeleteOutlined
                    className='mx-1'
                    onClick={handleDelete}
                    key={3}
                />
            </div>
        </div>
    );
};

export default Controls;
