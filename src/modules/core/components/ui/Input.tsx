import clsx from 'clsx';
import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label?: string;
};

function Input({ className, type, label, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1">
      {!!label && <span className="text-sm text-text">{label}</span>}
      <input
        className={clsx(
          'flex h-9 w-full min-w-0 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-text file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
          'focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-primary/50',
          'aria-invalid:border-primary-dark aria-invalid:ring-primary-dark/20 dark:aria-invalid:ring-primary-dark/40',
          className
        )}
        data-slot="input"
        type={type}
        {...props}
      />
    </label>
  );
}
export { Input };
