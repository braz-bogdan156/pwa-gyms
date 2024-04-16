import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'

export const textareaStyles = cva(
	[
		'w-full',
		'min-h-[80px]',
		'px-4',
		'py-2',
		'overflow',
		'text-md',
		'border',
		'rounded',
		'outline-none',
		'bg-input-primary',
		'placeholder:text-secondary',
		'focus:ring-offset-white',
		'focus:ring-black',
		'focus:ring-offset-2',
		'focus:ring-2',
		'focus:bg-input-primary-focus',
		'disabled:cursor-not-allowed disabled:opacity-50'
	],
	{
		variants: {
			error: {
				true: 'bg-danger-light border-danger focus:bg-danger-light placeholder:text-transparent'
			}
		}
	}
)

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		VariantProps<typeof textareaStyles> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
	return <textarea className={cn(textareaStyles({ error }), className)} ref={ref} {...props} />
})
Textarea.displayName = 'Textarea'

export { Textarea }
