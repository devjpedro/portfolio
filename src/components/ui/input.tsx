/* eslint-disable prettier/prettier */
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-light-primary dark:bg-dark-primary px-4 py-5 text-base placeholder:text-dark-primary/60 dark:text-light-primary/60 outline-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }

