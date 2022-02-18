import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddCategorie from './components/AddCategorie';
import Category from './components/Category';
import Tree from './components/Tree';

function App() {
    let cat = useSelector((state) => state.categories.categories);
    // console.log(Object.values(cat).filter((n) => n.parentId === null)[0]);
    cat = Object.values(cat).filter((n) => n.parentId === null);

    return (
        <div>
            <AddCategorie />
            {cat.map((cat, id) => {
                return (
                    <>
                        <Tree data={cat} />
                    </>
                );
            })}
            {/* <Category data={cat} /> */}
        </div>
    );
}

export default App;
