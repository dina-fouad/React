import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        counter : 0
    }
}

increaseNumber =() => {
    this.setState({
        counter: this.state.counter+1
    })
}



render(){ return( <div>
           
    {/*   {/* {this.props.title}
   <br></br>
   <img src={this.props.imgUrl} alt=''/>
   <br></br>
   {this.props.title} */}



    <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={this.props.imgUrl} onClick={this.increaseNumber} />
    <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
     ❤️ = {this.state.counter}
           {this.props.description}
    </Card.Text>
    <Button onClick={this.increasNumOfHorned} variant="info">Vote</Button>
    </Card.Body>
    </Card>

   </div>

)
}}



export default HornedBeast;