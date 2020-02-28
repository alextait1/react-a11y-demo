import React, {useEffect} from 'react';

  export const Home = () => {
    useEffect(()=>{
      document.title = "Home";
      let target = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
      target.setAttribute('tabindex', "-1");
      target.focus();
    })
    
    return (
      <div>
        <h1>React Accessibility Demos</h1>
        <p>This demo app seeks to explain and provide demonstrations of some common accessibility issues in React. Please use the navigation links to explore.</p>
      </div>
      );
  }