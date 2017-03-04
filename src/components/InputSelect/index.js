import React from 'react';
import { Form } from 'semantic-ui-react';

const InputSelect = (props) => {
  const {
    meta, // eslint-disable-line no-unused-vars
    input,
    options,
    label,
  } = props;

  return (
    <Form.Field>
      <label>{label}</label>
      <select
        {...input}
      >
        {options.map(item => <option key={item.key || item.value} value={item.value}>{item.text}</option>)}
      </select>
    </Form.Field>
  );
}

export default InputSelect;