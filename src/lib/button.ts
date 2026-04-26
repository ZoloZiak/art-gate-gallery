import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'border-2 border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md',
        cta: 'border-2 border-transparent bg-cta text-white shadow-sm hover:bg-cta-hover hover:-translate-y-0.5 hover:shadow-lg',
        destructive: 'border-2 border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border-2 border-primary text-primary bg-transparent shadow-sm hover:bg-primary hover:text-primary-foreground',
        secondary: 'border-2 border-transparent bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'border-2 border-transparent hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-[48px] px-6 py-2',
        sm: 'min-h-[44px] rounded-md px-4 text-xs',
        lg: 'min-h-[56px] rounded-lg px-8 text-lg',
        icon: 'w-10 min-w-[48px] min-h-[48px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
}
