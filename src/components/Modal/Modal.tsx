import { PropsWithChildren, useEffect } from 'react';
import './Modal.scss';
import classNames from 'classnames';

interface IModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: IModalProps) {
  const modalClasses = classNames(
    'modal',
    {
      'modal__visible': open,
      'modal__invisible': !open
    }
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [open]);


  return (
    <div
    className={modalClasses}
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal__container"
      >
        {children}
      </div>
    </div>
  );
}