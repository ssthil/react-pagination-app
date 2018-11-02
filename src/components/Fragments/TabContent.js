import React from 'react'

const TabContent = (props) => {
  return (
    <React.Fragment>
      <p className="heading">Hi</p>
      <p className="name-tag">{props.name}</p>
      <p>this service {props.serviceName} calling your name</p>
    </React.Fragment>
  );
};

export default TabContent;