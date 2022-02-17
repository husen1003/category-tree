import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddCategorie from './components/AddCategorie';
import Category from './components/Category';

function App() {
    const cat = useSelector((state) => state.categories.categories);

    return (
        <div>
            <AddCategorie />
            <Category data={cat} />
        </div>
    );
}

export default App;
