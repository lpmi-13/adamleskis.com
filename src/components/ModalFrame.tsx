import React, { useEffect, useRef } from 'react';

type ModalFrameProps = {
  children: React.ReactNode;
  modalId: string;
  onClose: () => void;
  title: string;
};

const ModalFrame = ({ children, modalId, onClose, title }: ModalFrameProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = `${modalId}-title`;

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const handleBackdropMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="portfolio-modal show-modal modal fade in"
      id={modalId}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={handleBackdropMouseDown}
    >
      <div className="modal-content">
        <button
          type="button"
          ref={closeButtonRef}
          className="close-modal"
          onClick={onClose}
          aria-label={`Close ${title} details`}
        >
          <span className="lr" aria-hidden="true">
            <span className="rl"></span>
          </span>
        </button>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="modal-body">
                <h2 id={titleId}>{title}</h2>
                <hr className="star-primary" />
                {children}
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-default"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFrame;
