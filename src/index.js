import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicComponent from './components/BasicComponent';
import ComponentWithProps from './components/ComponentWithProps';
import ComponentStateValues from './components/ComponentStateValues';
import LifeCycleComponent from './components/LifeCycleComponent';
import EventComponent from './components/EventComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListComponent from './components/ListComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasicComponent />
    <ComponentWithProps firstProp="Snoweden"/>
    <ComponentWithProps firstProp="Joseph"/>
    <ComponentStateValues />
    <LifeCycleComponent />
    <EventComponent />
    <ConditionalRendering />
    <ListComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
