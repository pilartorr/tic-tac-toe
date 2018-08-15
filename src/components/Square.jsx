import React, {Component} from 'react';


const Square = ({value}) =>
(<button className="square" onClick ={() => console.log(value)}>{value}</button>);

export default Square;
