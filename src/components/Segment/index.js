import React from 'react';
import { Segment as SemanticSegment } from 'semantic-ui-react';
import * as s from 'components/styles';

const Segment = ({ children, style, raise, loading }) => {
  raise = raise || 0;
  return (
    <SemanticSegment
      style={{
        ...s.flatBox,
        ...s[`elevation${raise}`],
        ...style,
      }}
      loading={loading}
    >
      {children}
    </SemanticSegment>
  );
};

export const Group = ({ children, style, raise }) => {
  raise = raise || 0;
  return (
    <SemanticSegment.Group
      style={{
        ...s.flatBox,
        ...s[`elevation${raise}`],
        ...style,
      }}
    >
      {children}
    </SemanticSegment.Group>
  )
};

Segment.Group = Group;

export default Segment;