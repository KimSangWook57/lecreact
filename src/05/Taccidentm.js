import './Taccident.css';
import Theader from './Theader';
import Tc1 from './Tc1';
import Tc2 from './Tc2';
import Tdata from './Tdata';
import { useState, useEffect } from 'react';

const Taccidentm = ({c1, c2, data}) => {

    // console.log(c1)
    // console.log(c2)
    // console.log(data)

    
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