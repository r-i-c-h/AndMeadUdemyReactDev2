import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const SomeComponent = (props) => ( <div> <h1>Message:</h1> <p> The message is: " {props.info} "" </p> </div> );

// v2: *** CONDITIONAL ***  Modification. ( Put a flag in props )
const withModification = (WrappedComponent) => {
    return (props) => (
      <div>
        { props.shouldBeModifiedFlag && <p>This version is Modified from whatever Component was passed in to this function:</p> }
        <WrappedComponent {...props} />
      </div>
    );
  };
  
  const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
        { props.isAuthenticated ? (
            <WrappedComponent {...props} />
          ) : (
            <p>Please LOGIN to see this magic stuff</p>
          )
        }
      </div>
    );
  };    

const ModifiedComponent = withModification(SomeComponent);
const Authed = requireAuthentication(ModifiedComponent);
ReactDOM.render(<Authed isAuthenticated={true} shouldBeModifiedFlag={true} info="Magic Info Prop" />, document.getElementById('app'));



// v1:
// const withModification = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       <p>Here is a modified version of the whatever Component was passed in to this function:</p>
//       <WrappedComponent {...props} />
//     </div>;
//   );
// };
// ReactDOM.render(<ModifiedComponent info="Magic Info Prop" />, document.getElementById('app'));