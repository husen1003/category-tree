import { useState } from 'react';
import Category from './components/Category';

function App() {
    let cat = [
        {
            name: '1',
            level: 1,
            subCategories: [
                { name: 'sub-1', level: 2 },
                { name: 'sub-2', level: 2 },
                { name: 'sub-3', level: 2 },
            ],
        },
        { name: '2', level: 1 },
        {
            name: '3',
            level: 1,
            subCategories: [
                { name: 'sub-2-1', level: 2 },
                { name: 'sub-2-2', level: 2 },
                { name: 'sub-2-3', level: 2 },
            ],
        },
        { name: '4', level: 1 },
        { name: '5', level: 1 },
    ];

    const [data, setData] = useState(cat);

    return (
        <div>
            <Category data={data} setData={setData} />
        </div>
    );
}

export default App;
