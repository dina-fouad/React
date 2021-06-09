
import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';



class Main extends React.Component {
    render() {
        return (
            <div>

                <CardGroup>

                    {this.props.rowData.map((items) => {
                         return(<HornedBeast title={items.title} 
                            description={items.description} 
                            imgUrl={items.image_url}
                            openModal={this.props.openModal}
                            click={this.props.click} />)
            
                    })}
                </CardGroup>


            </div>
        )
    }
}

export default Main;


