import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI - VidNexus',
  description: 'AI-powered video creation platform that transforms your ideas into engaging videos.',
  keywords: ['AI', 'video creation', 'technology', 'modern'],
  authors: [{ name: 'AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function