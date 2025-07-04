import React from 'react';

const RenderField = ({ props }) => {

  //console.log('props@renfield: ',props);
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        if (value !== props.form) {
          return (
            <p key={key} className={key}>
              {props[key]}
            </p>
          );
        }
      })}
    </>
  );
};

export default RenderField;
