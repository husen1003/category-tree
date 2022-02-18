import React from 'react';
import { Modal } from 'antd';
import { addCategory, editCategory } from '../redux/actions/categories';
import { useDispatch } from 'react-redux';

const AddCategoryModal = ({ isVisible, setIsVisible, data, ...props }) => {
    const dispatch = useDispatch();

    const handleCancel = () => {
        setIsVisible(false);
        props.setValue('');
    };

    const handleAdd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (props.isEditing) {
            dispatch(editCategory({ name: props.value, id: data.id }));
            setIsVisible(false);
            props.setIsEditing(false);
        } else {
            dispatch(addCategory({ name: props.value, parentId: data.id }));
            setIsVisible(false);
        }
        props.setValue('');
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Modal
                title='Add Category'
                visible={isVisible}
                onOk={handleAdd}
                okText={props.isEditing ? 'Update' : 'Add Category'}
                onCancel={handleCancel}
            >
                <form onSubmit={handleAdd}>
                    <input
                        ref={props.inputEl}
                        className='border-2 mb-4 outline-none w-full p-1 text-base'
                        type={'text'}
                        value={props.value}
                        placeholder='Enter category...'
                        onChange={(e) => {
                            props.setValue(e.target.value);
                        }}
                    />
                </form>
            </Modal>
        </div>
    );
};

export default AddCategoryModal;
