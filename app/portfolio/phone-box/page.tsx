import Link from "next/link"
import Image from "next/image"

export default function PhoneBoxPage() {
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
            <span className="text-bronze-gradient">破旧电话亭</span>
          </h1>
          <p className="text-[#e8e8ec]/60 text-lg font-light max-w-2xl">
            复古电话亭场景，展示岁月侵蚀的金属质感与玻璃材质。通过 Substance Designer 程序化材质，呈现真实的锈迹、划痕与风化效果。
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-xs rounded-full border border-[#c4a35a]/30 text-[#c4a35a]">SD 材质</span>
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">程序化材质</span>
            <span className="px-3 py-1 text-xs rounded-full border border-white/10 text-[#e8e8ec]/60">风化效果</span>
          </div>
        </div>

        {/* 渲染图展示 */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">渲染图</h2>
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <div className="aspect-[4780/2000] relative overflow-hidden">
                <Image
                  src="/phone-box-01.png"
                  alt="渲染图1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
              <div className="aspect-[4780/2000] relative overflow-hidden">
                <Image
                  src="/phone-box-02.png"
                  alt="渲染图2"
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
                <p className="text-[#e8e8ec]">Substance Designer</p>
              </div>
              <div>
                <p className="text-[#e8e8ec]/40 text-sm mb-2">项目类型</p>
                <p className="text-[#e8e8ec]">程序化材质</p>
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
