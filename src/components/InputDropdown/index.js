import React from 'react';
import { List } from 'immutable';
import { Dropdown } from 'semantic-ui-react';

const InputDropdown = (props) => {
  const {
    input,
    meta, // eslint-disable-line no-unused-vars
    ...rest,
  } = props;

  const { onChange } = input;

  input.value = input.value.toArray();

  return (
    <Dropdown
      {...input}
      {...rest}
      onChange={(ev, { value }) => onChange(new List(value))}
      onBlur={() => {}}
    />
  );
};

export default InputDropdown;