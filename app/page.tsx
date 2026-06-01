import { WorksGallery } from "@/components/works-gallery"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 px-6 py-6">
        <nav className="flex items-center gap-8 text-sm font-mono tracking-wider">
          <a href="#" className="text-white hover:text-white/60 transition-colors font-semibold">
            首页
          </a>
          <a href="/portfolio" className="text-white hover:text-white/60 transition-colors">
            作品集
          </a>

          <a href="/about" className="text-white hover:text-white/60 transition-colors">
            关于我
          </a>
          <a href="/" className="w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" fill="white" />
              <rect x="12" width="8" height="8" fill="white" />
              <rect y="12" width="8" height="8" fill="white" />
              <rect x="12" y="12" width="8" height="8" fill="white" />
            </svg>
          </a>
        </nav>
      </header>

      {/* Works Gallery */}
      <main className="pt-32 pb-16">
        <WorksGallery />
      </main>
    </div>
  )
}
