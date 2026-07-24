import Link from "next/link"
import Image from "next/image"

export default function UELightingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ec]">
      {/* 导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 px-6 py-6">
        <nav className="flex items-center gap-8 text-sm font-mono tracking-wider">
          <Link href="/" className="text-white hover:text-white/60 transition-colors">
            首页
          </Link>
          <Link href="/about" className="text-white hover:text-white/60 transition-colors">
            关于我
          </Link>
          <Link href="/portfolio" className="text-white hover:text-white/60 transition-colors font-semibold">
            作品集
          </Link>
          <Link href="/" className="w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" fill="white" />
              <rect x="12" width="8" height="8" fill="white" />
              <rect y="12" width="8" height="8" fill="white" />
              <rect x="12" y="12" width="8" height="8" fill="white" />
            </svg>
          </Link>
        </nav>
      </header>

      {/* 主内容 */}
      <main className="pt-32 pb-20">
        {/* 标题区域 */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#e8e8ec]/60 hover:text-[#c4a35a] transition-colors text-sm mb-6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回作品集
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-bronze-gradient">UE灯光</span>
          </h1>
          <p className="text-[#e8e8ec]/60 text-lg font-light max-w-2xl">
            UE5 灯光练习场景，探索 Lumen 全局光照与体积雾效果，营造独特的氛围光影。
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">Unreal Engine 5</span>
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">Lumen</span>
          </div>
        </div>

        {/* 渲染图展示 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">渲染图</h2>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] w-[72rem]">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/ue-lighting-01.png"
                  alt="UE灯光渲染图"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* UE物理灯光 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-bronze-gradient">UE物理灯光</h2>
          <p className="text-[#e8e8ec]/60 text-lg font-light max-w-2xl mb-4">
            UE 基于物理值的打光原则，固定EV100，仅使用 &ldquo;天空球&rdquo; &ldquo;天空光照&rdquo; &ldquo;定向光源&rdquo; ，通过后期处理体积，调整室内外曝光，用最少的灯光资源为场景关卡打造基础的灯光环境。
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/ue-lighting-02.png"
                  alt="UE物理灯光渲染图1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/ue-lighting-03.png"
                  alt="UE物理灯光渲染图2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/ue-lighting-04.png"
                  alt="UE物理灯光渲染图3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/ue-lighting-05.png"
                  alt="UE物理灯光渲染图4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 项目信息 */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">项目信息</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[#e8e8ec]/40 text-sm mb-2">软件工具</p>
                <p className="text-[#e8e8ec]">Unreal Engine 5</p>
              </div>
              <div>
                <p className="text-[#e8e8ec]/40 text-sm mb-2">项目类型</p>
                <p className="text-[#e8e8ec]">灯光练习</p>
              </div>
              <div>
                <p className="text-[#e8e8ec]/40 text-sm mb-2">创作时间</p>
                <p className="text-[#e8e8ec]">2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* 返回作品集 */}
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#e8e8ec]/60 hover:text-bronze-gradient transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回作品集
          </Link>
        </div>
      </main>
    </div>
  )
}
