import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rishabh Patel - AI & IT Professional',
	description:
		'AI & IT professional with an MSc in Artificial Intelligence and Robotics, experienced in both healthcare technology and software engineering. Passionate developer creating simple and effective solutions.',
	keywords: [
		'Software Developer',
		'Web Developer',
		'AI Data Engineer',
		'Machine Learning',
		'Enterprise IT',
		'Python',
		'TypeScript',
		'React',
		'Next.js',
		'TensorFlow',
		'Rishabh Patel',
	],
	authors: [{ name: 'Rishabh Patel' }],
	creator: 'Rishabh Patel',
	openGraph: {
		title: "Rishabh Patel - AI & IT Professional",
		description: "Portfolio of Rishabh Patel, showcasing experience in applied Machine Learning, managing enterprise systems, and infrastructure reliability.",
		url: "https://rish.click",
		siteName: "Rishabh Patel Portfolio",
		images: [
			{
				url: "/portrait.jpeg", // Must be an absolute URL or starting with '/'
				width: 1200,
				height: 630,
				alt: "Rishabh Patel - AI & IT Professional",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rishabh Patel - AI & IT Professional",
		description: "Portfolio of Rishabh Patel, showcasing experience in applied Machine Learning, managing enterprise systems, and infrastructure reliability.",
		images: ["/portrait.jpeg"], // Must be an absolute URL or starting with '/'
		creator: "@rishabhpatel9",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
