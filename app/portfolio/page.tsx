import Link from "next/link"
import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "血案现场",
    category: "UE5 场景",
    description: "犯罪现场重建场景，注重细节表现与氛围营造",
    image: "/DT_02.png",
    tools: ["Unreal Engine 5", "Lumen", "Nanite"],
    slug: "blood-scene",
  },
  {
    id: 2,
    title: "诡异走廊",
    category: "UE5 场景",
    description: "废弃医院走廊场景，注重光影氛围与恐怖感营造",
    image: "/fashion-new.png",
    tools: ["Unreal Engine 5", "Lumen", "Nanite"],
    slug: "eerie-corridor",
  },
  {
    id: 2,
    title: "废弃书房",
    category: "UE5 场景",
    description: "维多利亚风格废弃书房，细节丰富的环境叙事",
    image: "/abandoned-room.png",
    tools: ["Unreal Engine 5", "Substance Painter", "ZBrush"],
    slug: "abandoned-study",
  },
  {
    id: 3,
    title: "深夜楼梯间",
    category: "UE5 场景",
    description: "现代建筑楼梯间，冷色调灯光设计",
    image: "/product-new.png",
    tools: ["Unreal Engine 5", "Lumen"],
    slug: "late-night-stairs",
  },
  {
    id: 4,
    title: "建筑寺庙",
    category: "UE5 场景",
    description: "东方风格寺庙建筑，程序化材质应用",
    image: "/studio-vale-new.png",
    tools: ["Unreal Engine 5", "Lumen", "Substance Designer"],
    slug: "temple-architecture",
  },
  {
    id: 5,
    title: "材质表现",
    category: "SD 材质",
    description: "Substance Designer 程序化材质库展示",
    image: "/automotive-new.png",
    tools: ["Substance Designer", "Substance Painter"],
    slug: "classical-dresser",
  },
  {
    id: 6,
    title: "西班牙小镇",
    category: "UE5 场景",
    description: "风格化西班牙小镇，明亮的场景氛围，鲜艳的颜色处理",
    image: "/home-blood-scene.png",
    tools: ["Unreal Engine 5", "Maya", "Substance Designer", "Painter"],
    slug: "home-blood-scene",
  },
]

export default function PortfolioPage() {
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
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-bronze-gradient">作品集</span>
          </h1>
          <p className="text-[#e8e8ec]/60 text-lg font-light max-w-2xl mx-auto">
            精选 3D 场景设计与程序化材质作品，展示从概念到成品的完整创作流程
          </p>
        </div>

        {/* 作品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] card-glow cursor-pointer block"
            >
              {/* 图片 */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>

              {/* 内容 */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#c4a35a] font-mono">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#e8e8ec] group-hover:text-[#c4a35a] transition-colors">{item.title}</h3>
                <p className="text-[#e8e8ec]/60 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                {/* 工具标签 */}
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs rounded border border-white/10 bg-white/[0.03] text-[#e8e8ec]/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover 边框效果 */}
              <div className="absolute inset-0 border-2 border-[#c4a35a]/0 group-hover:border-[#c4a35a]/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* 返回首页 */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
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
