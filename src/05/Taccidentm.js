import './Taccident.css';
import Theader from './Theader';
import Tc1 from './Tc1';
import Tc2 from './Tc2';
import Tdata from './Tdata';
import { useState, useEffect } from 'react';

const Taccidentm = ({c1, c2, data}) => {

    console.log(c1)
    console.log(c2)
    console.log(data)

    // c1을 클릭하면 c1의 값에 따른 c2의 리스트가 나타나게 한다.

    // c2를 클릭하면 c2에 값에 지정된 data가 나타나게 한다.

    return (
        <>
            <Theader />
            <div className="main">
                <Tc1 c1={c1}/>
                <Tc2 c2={c2}/>
                <Tdata data={data}/>
            </div>
        </>
    )
}

export default Taccidentm;