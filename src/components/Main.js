import React from 'react';
import HornedBeast from './HornedBeast'
import rowData from './data.json';
import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component{
    render(){

   
        return(
          <div><CardGroup>
            {rowData.map((items)=>{
              return(
              < HornedBeast showModal={this.props.showModal}  
              imgUrl={items.image_url}
               title={items.title} 
               description={items.description} 
               horns={items.horns} 
              />
                )})}
         </CardGroup></div>

        )
    }
}

export default Main;




