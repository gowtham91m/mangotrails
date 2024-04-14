import React from 'react';
import ReactWordcloud, {OptionsProp} from 'react-wordcloud';
import words from './words';

const options: OptionsProp = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Courier",
    fontSizes: [20, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 0,
    rotations: 10,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 0,
};


const WordCloud= ()=> {
    
    return  <ReactWordcloud options={options} words={words} />
}

export default WordCloud;