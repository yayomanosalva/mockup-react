import React from 'react'
import Header from '../components/header/header';
import Aside from '../components/aside/aside'
import Content from '../components/content/content'

const HelloWorld = ({name}) => (
    
 <div className="container">
    
    <Aside />
    <Header />
    <Content />
    <style jsx>
    {`
      body {
         background-color: #e5e5e5;
      }
    `}
    </style>
 </div>
);

export default HelloWorld;