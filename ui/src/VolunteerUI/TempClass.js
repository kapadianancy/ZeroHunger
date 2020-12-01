import React, { Component } from 'react';
import * as actions from '../Actions/LandmarkAction';
import {LandmarkDispatchContext, LandmarkStateContext,useLandmarkDispatch} from '../Context/LandmarkContext';

class TempClass extends Component {

 
    static contextType=LandmarkStateContext;
    
   // static contextType=LandmarkDispatchContext;
  
    componentDidMount=async()=>
    {
        console.log(this.state)
    
       // var landmarkdispatch=this.context;
       await actions.temp();
       this.State=this.context
        //var dispatch=this.props.value;
        //console.log(dispatch);
   
        // console.log("data====="+data)
    }
    
    

    render() {
        this.state=this.context;
        //this.dispatch=this.context;
        console.log(this.state.landmark)
        
       
        // console.log(error)
        return (
            <div>
             
            </div>
        );
    }
}

export default TempClass;