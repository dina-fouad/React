import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import arrowData from './components/data.json';
import SelectedBeast from './components/SelectedBeast ';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      src: "",
      description: "",
    };
  }
  click = (e) => {
    this.setState({
      show: !this.state.show,
      src: e.target.src,
      title: e.target.alt,
     description: e.target.name
    });

    
    this.setState({
      SelectedBeast:SelectedBeast,
      show: true,

    });
  };

  
 
  closeModal = () => {
    this.setState({ show: false });
  }

  render() {

    return (
      <div className='container'>
        <Header />
        <Main arrowData={this.state.arrowData} openModal={this.openModal} click={this.click} />
        <Footer />
        <SelectedBeast show={this.state.show}
          closeModal={this.closeModal}
          SelectedBeast={this.state.SelectedBeast}
        />
      </div>

    )
  }

}

export default App;
