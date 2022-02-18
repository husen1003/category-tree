import React from 'react';
import { useSelector } from 'react-redux';
import AddCategorie from './components/AddCategorie';
import CategoryList from './components/CategoryList';
import 'antd/dist/antd.css';

function App() {
    let cat = useSelector((state) => state.categories.categories);
    cat = Object.values(cat).filter((n) => n.parentId === null);

    return (
        <div>
            <AddCategorie />
            <div className='flex flex-col justify-center mx-auto w-11/12 md:w-8/12 bg-green-100 rounded-xl shadow-2xl pr-4'>
                <div>
                    <h1 className='text-gray-700 text-xl pl-2 my-2 text-center'>
                        Categories
                    </h1>
                </div>
                {cat.map((cat, id) => {
                    return (
                        <>
                            <CategoryList data={cat} />
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
