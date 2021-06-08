import React from 'react';
import HornedBeasts from './HornedBeasts';
import rawData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns ';



class Main extends React.Component{
    render(){
        return(
        <div>

        <CardColumns>

    {rawData.map((items,inde)=>{
    return(
    <HornedBeasts 
    
    title={items.title} 
    src={items.image_url}
    description={items.description} />)
    })}
       </CardColumns>


        </div>
        )
    }
}

export default Main;
