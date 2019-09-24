import React from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class SignOut extends React.Component{

    componentDidMount = () => {
        Axios.get('/logoutadmin').then((response)=>{
            // console.log(response,'Log Out');
        });
        this.props.out();
        this.props.history.push('/');
    };
    
    render() {
        return (
            <>
                
            </>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      profile: state.auth.admin,
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      admin: (val) => dispatch({type:'ADMIN',payload:val}),
      out : () => dispatch({type:'OUT'}),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(SignOut);
