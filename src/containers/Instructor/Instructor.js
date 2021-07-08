import { Component } from 'react';

class instructor extends Component {
    state = {
        instructors: null ,
        loading : false
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        axios.get("http://localhost:8080/api/v1/instructor")
            .then(response => {
                const instructors = Object.values(response.data)
                this.setState({
                    instructors,
                    loading:false
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            })
    }
  
  render() {
    return (
          <>
            
          </>
        );
  }
  
}

export default instructor;