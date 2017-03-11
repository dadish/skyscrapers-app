import React from 'react';
import { Segment as SemanticSegment } from 'semantic-ui-react';
import * as s from 'components/styles';

const Segment = ({ children, style, raise, ...rest }) => {
  raise = raise || 0;
  return (
    <SemanticSegment
      style={{
        ...s.flatBox,
        ...s[`elevation${raise}`],
        ...style,
      }}
      {...rest}
    >
      {children}
    </SemanticSegment>
  );
};

export const Group = ({ children, style, raise, ...rest }) => {
  raise = raise || 0;
  return (
    <SemanticSegment.Group
      style={{
        ...s.flatBox,
        ...s[`elevation${raise}`],
        ...style,
      }}
      {...rest}
    >
      {children}
    </SemanticSegment.Group>
  )
};

Segment.Group = Group;

export default Segment;