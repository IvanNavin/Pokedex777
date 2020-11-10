import React from 'react';

interface HeadingProps {
  tag: string;
  className?: string
}

const Heading: React.FC<HeadingProps> = ({tag, children, ...props}) => {
  return React.createElement(tag, {...props}, children);
};

export default Heading;
