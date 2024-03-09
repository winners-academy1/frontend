
import {React,useEffect,useState} from 'react';
import '../../styles/shared/loading-state.css';

function LoadingState() {
    

    return(
        <div className="loading-circular">
        <div className="circular-group">
          <div className="circular_1"></div>
          <div className="circular_2"></div>
          <div className="circular_3"></div>
          <div className="circular_4"></div>
          <div className="circular_5"></div>
          <div className="circular_6"></div>
          <div className="circular_7"></div>
          <div className="circular_8"></div>
        </div>
        </div>
    )
}

export default LoadingState;