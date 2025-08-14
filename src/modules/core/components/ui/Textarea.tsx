import clsx from 'clsx';
import type * as React from 'react';

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string;
};

function Textarea({ className, label, ...props }: TextareaProps) {
  return (
    <label className="flex flex-col gap-1">
      {!!label && <span className="text-sm text-text">{label}</span>}
      <textarea
        className={clsx(
          'field-sizing-content flex min-h-16 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-primary-dark aria-invalid:ring-primary-dark/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-primary-dark/40',
          className
        )}
        data-slot="textarea"
        {...props}
      />
    </label>
  );
}

export { Textarea };
