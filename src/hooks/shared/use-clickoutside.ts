import { type RefObject, useEffect, useRef } from 'react';

type EventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend';

type EventMap = {
  mousedown: MouseEvent;
  mouseup: MouseEvent;
  touchstart: TouchEvent;
  touchend: TouchEvent;
};

type EventHandler<T extends EventType> = (event: EventMap[T]) => void;

interface UseClickOutsideOptions {
  capture?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

export function useOnClickOutside<
  T extends HTMLElement = HTMLElement,
  E extends EventType = 'mousedown',
>(
  refs: RefObject<T | null> | RefObject<T | null>[],
  handler: EventHandler<E>,
  eventType: E = 'mousedown' as E,
  options: UseClickOutsideOptions = {}
): void {
  const {
    capture = false,
    preventDefault = false,
    stopPropagation = false,
  } = options;

  const handlerRef = useRef(handler);
  const optionsRef = useRef({ preventDefault, stopPropagation });

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    optionsRef.current = { preventDefault, stopPropagation };
  }, [preventDefault, stopPropagation]);

  useEffect(() => {
    const handleEvent = (event: Event) => {
      const target = event.target as Node;

      if (!target?.isConnected) {
        return;
      }

      const refArray = Array.isArray(refs) ? refs : [refs];

      const clickedOutside = refArray
        .filter(ref => ref.current)
        .every(ref => !ref.current!.contains(target));

      if (!clickedOutside) {
        return;
      }

      const { preventDefault: shouldPrevent, stopPropagation: shouldStop } =
        optionsRef.current;

      if (shouldPrevent) {
        event.preventDefault();
      }
      if (shouldStop) {
        event.stopPropagation();
      }

      handlerRef.current(event as EventMap[E]);
    };

    document.addEventListener(eventType, handleEvent, capture);
    return () => document.removeEventListener(eventType, handleEvent, capture);
  }, [refs, eventType, capture]);
}

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent) => void
): void {
  useOnClickOutside(ref, handler, 'mousedown');
}
