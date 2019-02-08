import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const renderDismissable = props => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Alert isOpen={isOpen}
           toggle={() => setIsOpen(false)}
           {...props}>
      {props.message}
    </Alert>
  )
}

export const VsAlert = props => {
  if (props.toggle) {
    return renderDismissable(props);
  }

  return (
  <Alert {...props}>
    {props.message}
  </Alert>
  )
};
