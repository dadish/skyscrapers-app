import React from 'react';
import { Segment as SemanticSegment } from 'semantic-ui-react';
import * as s from 'components/styles';
import "./style.css";

const Segment = ({ children, style, raise, ...rest }) => {
  raise = raise || 0;
  return (
    <SemanticSegment
      className="sgmnt"
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
      className="sgmnt"
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