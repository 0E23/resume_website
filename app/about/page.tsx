import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ec]">
      {/* 导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 px-6 py-6">
        <nav className="flex items-center gap-8 text-sm font-mono tracking-wider">
          <Link href="/" className="text-white hover:text-white/60 transition-colors font-semibold">
            首页
          </Link>
          <Link href="/about" className="text-white hover:text-white/60 transition-colors">
            关于我
          </Link>
          <Link href="/portfolio" className="text-white hover:text-white/60 transition-colors">
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
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-16 flex items-start gap-12">
          {/* Logo 和描述 */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <img src="/spy-logo.png" alt="关于我" className="h-72 object-contain" />
            </h1>
            <p className="text-[#e8e8ec]/60 text-sm font-light mt-3">
              游戏3D场景设计师 / SD 材质设计师
            </p>
          </div>
          {/* 联系我 */}
          <div className="flex flex-col gap-4 pt-4">
            <p className="text-[#c4a35a] text-base font-medium">联系我</p>
            <p className="text-[#e8e8ec]/60 text-sm">电话&nbsp;&nbsp;17511657317</p>
            <p className="text-[#e8e8ec]/60 text-sm">邮箱&nbsp;&nbsp;2926507096@qq.com</p>
          </div>
        </div>

        {/* 个人简介 */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">个人简介</h2>
          <div className="space-y-4 text-[#e8e8ec]/80 leading-relaxed">
            <p>
              我是时培亚，一名专注于游戏3D场景设计与Substance Designer程序化材质开发的设计师。
              拥有丰富的游戏美术开发经验，擅长从概念设计图出发进行高质量的二次设计还原。
            </p>
            <p>
              在材质设计领域，我专注于构建模块化程序化材质库，通过Substance Designer的节点化工作流，
              为游戏项目提供可复用、高品质的材质资产，有效提升团队开发效率。
            </p>
          </div>
        </section>

        {/* 核心能力 */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">核心能力</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-glow rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg font-medium mb-3">3D场景设计</h3>
              <p className="text-[#e8e8ec]/60 text-sm leading-relaxed">
                精通Unreal Engine 5场景搭建，擅长从概念设计图进行高精度二次还原，
                注重光影氛围营造与环境叙事。
              </p>
            </div>
            <div className="card-glow rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg font-medium mb-3">程序化材质</h3>
              <p className="text-[#e8e8ec]/60 text-sm leading-relaxed">
                深入掌握Substance Designer，能够创建模块化、可复用的程序化材质球，
                构建完整的材质库体系。
              </p>
            </div>
            <div className="card-glow rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg font-medium mb-3">概念设计还原</h3>
              <p className="text-[#e8e8ec]/60 text-sm leading-relaxed">
                具备优秀的概念图解读能力，能够准确把握原画意图，
                在3D空间中完美还原设计氛围与细节。
              </p>
            </div>
            <div className="card-glow rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg font-medium mb-3">模块化工作流</h3>
              <p className="text-[#e8e8ec]/60 text-sm leading-relaxed">
                建立标准化的材质开发流程，通过模块化节点组合，
                实现材质的快速迭代与批量生产。
              </p>
            </div>
          </div>
        </section>

        {/* 技能标签 */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-bronze-gradient">技能工具</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Unreal Engine 5",
              "Substance Designer",
              "Substance Painter",
              "3ds Max",
              "Maya",
              "ZBrush",
              "Photoshop",
              "Marmoset Toolbag",
              "程序化生成",
              "PBR材质流程",
              "模块化环境",
              "光照与渲染",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#e8e8ec]/70 hover:border-[#c4a35a]/30 hover:text-[#c4a35a] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 返回首页 */}
        <div className="pt-8 border-t border-white/5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#e8e8ec]/60 hover:text-bronze-gradient transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回首页
          </Link>
        </div>
      </main>
    </div>
  )
}
