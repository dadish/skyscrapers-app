import React from 'react';
import { Segment as SemanticSegment } from 'semantic-ui-react';
import { flatBox } from 'components/styles';

const Segment = ({ children, style }) => (
  <SemanticSegment style={{...flatBox, ...style}}>
    {children}
  </SemanticSegment>
);

export const Group = ({ children, style }) => (
  <SemanticSegment.Group style={{...flatBox, ...style}}>
    {children}
  </SemanticSegment.Group>
);

Segment.Group = Group;

export default Segment;