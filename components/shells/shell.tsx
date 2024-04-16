import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const shellVariants = cva('flex flex-col gap-8 pb-8 pt-6 md:py-8', {
	variants: {
		variant: {
			default: 'container',
			centered: 'container flex min-h-[100dvh] max-w-[600px] flex-col justify-center'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

interface ShellProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof shellVariants> {
	as?: React.ElementType
}

function Shell({ className, as: Comp = 'div', variant, ...props }: ShellProps) {
	return <Comp className={cn(shellVariants({ variant }), className)} {...props} />
}

export { Shell, shellVariants }
