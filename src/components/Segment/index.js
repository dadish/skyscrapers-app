import React from 'react';
import { Segment as SemanticSegment } from 'semantic-ui-react';
import { flatBox } from 'components/styles';

const Segment = ({ children }) => (
  <SemanticSegment style={flatBox}>
    {children}
  </SemanticSegment>
);

export const Group = ({ children }) => (
  <SemanticSegment.Group style={flatBox}>
    {children}
  </SemanticSegment.Group>
);

Segment.Group = Group;

export default Segment;