import React from 'react';

import HornedBeasts from './HornedBeasts';
import rawData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns ';


import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component{
    render(){
        return(
        <div>


    
        <CardGroup>

    {rowData.map((items)=>{
    return(<HornedBeast title={items.title} 
        description={items.description} 
        imgUrl={items.image_url}/>)
    })}
       </CardGroup>




        </div>
        )
    }
}

export default Main;

