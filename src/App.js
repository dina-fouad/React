import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast'
import Footer from './components/Footer';
import Data from './components/data.json';



class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          Data: Data,
          beastData: Data,
          selectedBeast: {}
          
        };
      }
    
      showModal = (name) => {
        const selectedBeast = Data.find(beast => beast.title === name);
        this.setState({selectedBeast, show:true});
      }
    
      hide = () => {
        this.setState({show: false});
      }

   
    render(){
        return(
            <div>
                <Header />
                <Main showModal={this.showModal}/>
                <SelectedBeast show={this.state.show} hide={this.hide} selectedBeast={this.state.selectedBeast} />
                <Footer/>
            </div>
        )
    }
}

export default App;