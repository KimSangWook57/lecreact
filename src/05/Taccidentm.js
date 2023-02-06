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
                <Tc1 c1={c1} selC1={selC1} setSelC1={setSelC1}/>
                {selC2A && <Tc2 selC2A={selC2A} selC2={selC2} setSelC2={setSelC2}/>}
                {selData && <Tdata selData={selData}/>}
            </div>
        </>
    )
}

export default Taccidentm;