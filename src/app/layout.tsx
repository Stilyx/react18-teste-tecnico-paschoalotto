import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/providers';

export const metadata: Metadata = {
	title: 'Github & Marvel',
	description:
		'A simple project to search for Github users and Marvel characters',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<html lang="pt-br">
				<body>{children}</body>
			</html>
		</Providers>
	);
}
