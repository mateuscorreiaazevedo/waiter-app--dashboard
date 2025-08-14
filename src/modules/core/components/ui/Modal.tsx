import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useEffect, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickoutside';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  modalType?: 'dialog' | 'sheet';
}

export function Modal({
  visible,
  onClose,
  children,
  className,
  modalType = 'dialog',
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  useClickOutside<HTMLDivElement>(contentRef, onClose);

  useEffect(() => {
    function handleEscapeClose(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-xs transition-all duration-1000',
        modalType === 'dialog' ? 'items-center' : 'justify-end',
        visible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            animate={
              modalType === 'dialog'
                ? { opacity: 1, y: '0%' }
                : { opacity: 1, x: '0%' }
            }
            className={clsx(className, modalType === 'sheet' && 'h-screen')}
            exit={
              modalType === 'dialog'
                ? { opacity: 0, y: '-100%' }
                : { opacity: 0, x: '100%' }
            }
            initial={
              modalType === 'dialog'
                ? { opacity: 0, y: '-100%' }
                : { opacity: 0, x: '100%' }
            }
            ref={contentRef}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
