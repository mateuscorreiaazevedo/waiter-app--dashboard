import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center rounded-full px-4 py-2 transition-all disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary font-bold text-base text-white hover:bg-primary-dark hover:text-white',
        secondary:
          'text-base text-primary hover:bg-gray-100 hover:text-primary-dark',
      },
    },
  }
);

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  );
}
