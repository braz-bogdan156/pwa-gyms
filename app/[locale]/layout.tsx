import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toast/toaster'
import { NextIntlClientProvider } from 'next-intl';
import {getLocale,  getMessages } from 'next-intl/server';
import { Button } from '@/components/ui/button';





const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Додаток GYMS',
	description: 'Версія розробки'
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} data-theme="light">
			<body className={roboto.className}>
				<NextIntlClientProvider messages={messages}>
					{children}
					<Toaster />
					<Button>Hello</Button>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
