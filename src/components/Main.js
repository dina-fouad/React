import React from 'react';
import HornedBeast from './HornedBeast'

import CardGroup from 'react-bootstrap/CardGroup'
import Forms from "./Formd";

class Main extends React.Component{


    constructor (props) {
        super(props)
        this.state = {
        filteredData : this.props.rowData,
        }
    }
    
    filterResult = (value) => {
        let newFilteredData = [];
        this.props.Data.forEach((beast) => {
            switch(value) {
                case "One":
                    if (beast.horns === 1) {
                        newFilteredData.push(beast);
                    }
                    break;
                case "Tow":
                    if (beast.horns === 2) {
                        newFilteredData.push(beast);
                    }
                    break;
                case "Three":
                    if (beast.horns === 3) {
                        newFilteredData.push(beast);
                    }
                    break;
    
                case "More":
                    if (beast.horns === 100) {
                        newFilteredData.push(beast);
                    }
                    break;
                default:
                    newFilteredData.push(beast);
            }
        })  
        this.setState({
            filteredData : newFilteredData,
          })
    }



    
    render(){

   
        return(
          <div>
              <Forms filterResult = {this.filterResult} />
              <CardGroup style={{display: 'flex', flexWrap: 'wrap' }}>
              {this.state.filteredData.map((items) => {

              return(
              < HornedBeast showModal={this.props.showModal}  
              imgUrl={items.image_url}
               title={items.title} 
               description={items.description} 
               horns={items.horns} 
               />
               );
             })}
           </CardGroup>
         </div>
       );
     }
   }

export default Main;

