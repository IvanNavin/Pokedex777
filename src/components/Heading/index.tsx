import React from 'react';

interface HeadingProps {
  tag: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { tag, children } = props;
  return React.createElement(tag, {}, children);
};

export default Heading;
