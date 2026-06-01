import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sc',
})

export const metadata: Metadata = {
  title: '时培亚 | 3D场景与材质设计师',
  description: '专业游戏3D场景设计师，擅长二次设计还原概念设计图与Substance Designer程序化材质开发。构建模块化程序化材质库，为游戏美术提供高品质资产。',
  keywords: ['3D场景设计', '游戏美术', 'Substance Designer', '程序化材质', '概念设计还原', '时培亚'],
  authors: [{ name: '时培亚' }],
  openGraph: {
    title: '时培亚 | 3D场景与材质设计师',
    description: '专业游戏3D场景设计师作品集',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} font-sans antialiased bg-[#0a0a0f] text-[#e8e8ec]`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
