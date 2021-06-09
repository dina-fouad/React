import React from 'react';
import HornedBeast from './HornedBeast';
import rowData from './data.json';
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

