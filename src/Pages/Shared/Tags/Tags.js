import React from 'react';

const Tags = () => {
    return (
      <div>
        <div className="ml-3 flex items-center justify-center text-center">
          <div>
            <h2 className="text-center text-3xl font-semibold">Tags</h2>
            <div className="">
              <button className="btn">SALAD</button>
              <button className="btn">RECIPE</button>
              <button className="btn">PLACES</button>
              <button className="btn">FRIENDS</button>
              <button className="btn">EXERCISE</button>
              <button className="btn">TRAVEL</button>
              <button className="btn">TRAVEL</button>
            </div>
            <div>
              <button className="btn">TIPS</button>
              <button className="btn">READING</button>
              <button className="btn">RUNNING</button>
              <button className="btn">SELF-HELP</button>
              <button className="btn">VACATION</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Tags;