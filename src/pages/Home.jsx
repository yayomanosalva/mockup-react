import React from 'react'
import Header from '../components/header';
import Aside from '../components/aside'
import Content from '../components/content'

const HelloWorld = ({name}) => (
    
 <div className="container">
    <Header />
    <Aside />
    <Content />
 </div>
);

export default HelloWorld;