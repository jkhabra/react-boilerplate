import c from 'classnames';
import React from 'react';
import { MdCheckCircle, MdClose, MdError } from 'react-icons/md';
import { FlashMessage as FullFlashMessageType } from 'src/duck/flashMessages';

import s from './style.module.scss';

export type FlashMessageType = Omit<FullFlashMessageType, 'duration'>;

export interface FlashMessageProps extends FlashMessageType {
  onClose: (id: string) => void;
}

export const FlashMessage: React.FC<FlashMessageProps> = (p) => {
  const Icon =
    p.type === 'success' ? (
      <MdCheckCircle className={c(s['flash-icon'])} />
    ) : (
        <MdError className={c(s['flash-icon'])} />
      );

  return (
    <div className={s.container}>
      <div className={c(s['status-icon'], s[p.type])}>{Icon}</div>

      <div className={s.message}>
        <div className={s.title}>{p.title}</div>
        <div className={s.body}>{p.body}</div>
      </div>

      <MdClose className={s['close-icon']} onClick={() => p.onClose(p.id)} title="Close" />
    </div>
  );
};

export default FlashMessage;
