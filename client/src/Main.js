import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

export const Main = () => {

    // const [indexes, updateIndexes] = useState([]);
    // const [values, updateValues] = useState({});
    // const [idx, updateIdx] = useState('');

    // const demo = [1, 2, 3, 4];

    // useEffect(() => {
    //     async function fetchValues() {
    //         const response = await axios.get('/api/values/current');
    //         updateValues(response.data);
    //         console.log('========VALUES OBJECT==========');
    //         console.log(response.data);
    //         console.log('========VALUES STATE==========');
    //         console.log(values);
    //     };
    //     async function fetchIndexes() {
    //         const response = await axios.get('/api/values/all');
    //         updateIndexes(indexes => [...indexes, response.data]);
    //         console.log('********INDEXES OBJECT*********');
    //         console.log(response.data);
    //         console.log('********INDEXES STATE***********');
    //         console.log(indexes);
    //     }
    //     fetchValues();
    //     fetchIndexes();
    // }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post('/api/values', {index: idx});
    //     updateIdx('');
    // };

    // const handleIdx = (e) => {
    //     updateIdx(e.target.value);
    // };
    
    // function renderIndexes() {
    //     return <h1>{indexes.map(({ number }) => number).join(', ')}</h1>
    // };

    // const renderDemo = () => {
    //     return demo.map((value) => value).join(', ');
    // };
    
    // const renderValues = () => {
    //     const entries = [];
    //    values.map((key) => {
    //        <ul>
    //            <li>{key}</li>
    //        </ul>
    //    })
    //     return entries;
    // };

    // const printFunc = () => {
    //     const buffer = indexes[0];
    //     console.log('==================')
    //     for (let key in values) {
    //         console.log(key + ' -> ' + values[key]);
    //     }
    //     for (let key in buffer) {
    //         console.log(buffer[key].number);
    //     }
    //     console.log(indexes[0].map(({ number }) => number).join(', '));
    // }

    return (
        <div>
            {/* <div>
                <form onSubmit={handleSubmit}>
                    <label>INDEX</label>
                    <input value={idx} onChange={handleIdx} />
                    <button onClick={printFunc}>Submit</button>
                </form>
            </div>
            <div>
                <h4>INDEXES</h4>
                {indexes.map((value) => (
                    <h6>HI {value}</h6>
                ))}
            </div>
            <div>
                <h4>INDEX : VALUE</h4>
                {renderIndexes}
            </div> */}
            <h1>HELLO! MAIN PAGE UNDER CONSTRUCTION!</h1>
        </div>
    )
}

export default Main;