import React, { useState } from 'react';
import CategoryList from './CategoryList';
import Controls from './Controls';
import {
    CaretDownOutlined,
    CaretRightOutlined,
    PlusOutlined,
    MinusOutlined,
} from '@ant-design/icons';

const Category = ({ data }) => {
    const [show, setShow] = useState(false);
    const hasSubCategory = data?.children?.length > 0 ? true : false;

    return (
        <div className={`ml-4`}>
            <div className='flex justify-between items-center border-gray-400 border-b-2 my-1 py-1 text-base'>
                <div className='flex items-center'>
                    {hasSubCategory && (
                        <span onClick={() => setShow(!show)}>
                            {show ? (
                                <CaretDownOutlined />
                            ) : (
                                <CaretRightOutlined />
                            )}
                        </span>
                    )}
                    {data?.name}{' '}
                    <span className='text-sm mx-2'>
                        ({data.children.length})
                    </span>
                    <Controls data={data} />
                </div>
                <div className='flex items-center mr-2'>
                    {hasSubCategory && (
                        <span onClick={() => setShow(!show)}>
                            {show ? <MinusOutlined /> : <PlusOutlined />}
                        </span>
                    )}
                </div>
            </div>
            {hasSubCategory && show && <CategoryList data={data} />}
        </div>
    );
};

export default Category;
