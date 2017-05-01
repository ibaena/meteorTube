import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>Hello Guys!</div>
  )
}


Meteor.startup(function(){
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
