import Link from "next/link"
import Image from "next/image"

export default function AbandonedStudyPage() {
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
            <span className="text-bronze-gradient">废弃书房</span>
          </h1>
          <p className="text-[#e8e8ec]/60 text-lg font-light max-w-2xl">
            维多利亚风格废弃书房，细节丰富的环境叙事。通过模块化墙壁系统与程序化材质，构建可复用的场景资产，展现真实的岁月痕迹与氛围感。
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-xs rounded-full border border-[#c4a35a]/30 text-[#c4a35a]">UE5 场景</span>
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">模块化墙壁</span>
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">程序化材质</span>
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">Substance Designer</span>
          </div>
        </div>

        {/* 主视频展示 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/abandoned-study-main-v2.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
          </div>
          <p className="text-center text-[#e8e8ec]/40 text-sm mt-4">场景漫游视频</p>
        </section>

        {/* 渲染图展示 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">渲染图</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] group w-80">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/abandoned-study-render3.png"
                  alt="渲染图1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] group w-80">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/abandoned-study-render4.png"
                  alt="渲染图2"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] group w-80">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/abandoned-study-render5.png"
                  alt="渲染图3"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 模块化墙壁 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">模块化墙壁</h2>
          <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
            <div className="aspect-[4780/2000] relative overflow-hidden">
              <Image
                src="/abandoned-study-wall.png"
                alt="模块化墙壁"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 材质展示 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">材质展示</h2>
          <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
            <div className="aspect-[4780/2000] relative overflow-hidden">
              <Image
                src="/abandoned-study-material.png"
                alt="材质展示"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 制作过程 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">制作过程</h2>
          <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
            <div className="aspect-video relative">
              <Image
                src="/abandoned-study-process.gif"
                alt="制作过程"
                fill
                className="object-contain bg-[#0a0a0f]"
              />
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
                <p className="text-[#e8e8ec]">Unreal Engine 5 / Substance Designer</p>
              </div>
              <div>
                <p className="text-[#e8e8ec]/40 text-sm mb-2">项目类型</p>
                <p className="text-[#e8e8ec]">游戏场景设计</p>
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
