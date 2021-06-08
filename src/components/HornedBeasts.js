import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeasts extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        Horned : 0
    }
}

numOfHorned= () => {
    this.setState({
       Horned : this.state.Horned+1
    })
}



render(){
        return(
            <div>

             {/* <h2>title: {this.props.title}</h2>
             <img src={this.props.src} alt={this.props.description} title={this.props.title} />
             <p>description: {this.props.description}</p> */}

             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.props.src} onClick={this.numOfHorned} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
               <p>❤= {this.state.Horned}</p>
                
            
                <p>{this.props.description}</p>
             </Card.Text>

             </Card.Body>
             </Card>


             
           

            </div>

        )
    }
}


export default HornedBeasts;