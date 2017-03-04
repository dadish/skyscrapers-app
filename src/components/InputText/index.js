import React from 'react';
import { Input as SemanticInput } from 'semantic-ui-react';

const Input = (props) => {
  const {
    input,
    meta, // eslint-disable-line no-unused-vars
    ...rest,
  } = props
  return (
    <SemanticInput
      {...input}
      {...rest}
    />
  );
}

export default Input;