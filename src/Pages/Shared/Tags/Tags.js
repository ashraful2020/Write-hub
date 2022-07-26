import React from 'react';
import { Link } from 'react-router-dom';

const Tags = () => {
    return (
      <div>
        <div className="ml-3 flex items-center justify-center text-center">
          <div>
            <h2 className="text-center text-3xl font-semibold">Tags</h2>
            <div className="max-w-4xl">
              <button className="btn"><Link to="/salad"> SALAD</Link> </button> 
              <button className="btn"><Link to="/recipe"> RECIPE</Link> </button> 
              <button className="btn"><Link to="/places"> PLACES</Link> </button> 
              <button className="btn"><Link to="/friends"> FRIENDS</Link> </button> 
              <button className="btn"><Link to="/exercise"> EXERCISE</Link> </button> 
              <button className="btn"><Link to="/travel"> TRAVEL</Link> </button> 
              <button className="btn"><Link to="/travel"> TRAVEL</Link> </button> 
              <button className="btn"><Link to="/tips"> TIPS</Link> </button> 
              <button className="btn"><Link to="/reading"> READING</Link> </button> 
              <button className="btn"><Link to="/running"> RUNNING</Link> </button> 
              <button className="btn"><Link to="/self-help" > SELF-HELP</Link> </button> 
              <button className="btn"><Link to="/vacation"> VACATION</Link> </button> 
            </div>
          </div>
        </div>
      </div>
    );
};

export default Tags;