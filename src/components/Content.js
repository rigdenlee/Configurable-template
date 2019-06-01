import React from 'react';
import './Content.css';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
       <h1 className="title">Popular Items</h1>
       <div className="imageContainer">
        <div className="container1" >
          {/* <img src={require('/')} alt='' /> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare condimentum aliquam. Maecenas ultricies augue. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="container2" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare condimentum aliquam. Maecenas ultricies augue."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          </p>
        </div>
        <div className="container3" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare condimentum aliquam. Maecenas ultricies augue. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          </p>
        </div>
        <div className="container4" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare condimentum aliquam. Maecenas ultricies augue. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          </p>
        </div>
      </div>
     </div>
    );
  }
}
