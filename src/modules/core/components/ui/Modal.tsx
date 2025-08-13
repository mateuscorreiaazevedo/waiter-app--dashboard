import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useEffect, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickoutside';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ visible, onClose, children, className }: ModalProps) {
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

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-xs"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            animate={{ opacity: 1, y: '0%' }}
            className={className}
            exit={{ opacity: 0, y: '-100%' }}
            initial={{ opacity: 0, y: '-100%' }}
            ref={contentRef}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
