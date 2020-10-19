import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { hideFlashMessage } from './duck';

import FlashMessage, { FlashMessageType } from './FlashMessage';

export interface FlashMessagesProps {
  messages: FlashMessageType[];
}

const FlashMessages: React.FC<FlashMessagesProps> = (p) => {
  const dispatch = useDispatch();
  const handleClose = useCallback(
    (id) => {
      dispatch(hideFlashMessage(id));
    },
    [dispatch],
  );

  return (
    <>
      {p.messages.map((m) => (
        <FlashMessage key={m.id} onClose={handleClose} {...m} />
      ))}
    </>
  );
};

export default FlashMessages;
