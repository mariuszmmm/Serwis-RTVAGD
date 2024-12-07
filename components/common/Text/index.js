import React from 'react';
import formatText from '../../../utils/formatText';
import { StyledText } from './styled';

export const Text = ({ children, ...props }) => {
  const formattedText = React.useMemo(() => {
    if (typeof children === 'string') {
      return formatText(children);
    }
    return children;
  }, [children]);

  return <StyledText {...props}>{formattedText}</StyledText>;
};
