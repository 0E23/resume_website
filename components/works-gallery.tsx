"use client"

import { useState } from "react"
import { VideoCard } from "./video-card"
import { CustomCursor } from "./custom-cursor"

const projects = [
  {
    id: 1,
    title: "诡异走廊",
    category: "游戏场景",
    year: "2024",
    yearImage: "/ue-logo-final.png",
    yearImage2: "/pt-logo.png",
    yearImage3: "/maya-logo-new.png",
    thumbnail: "/fashion-new.png",
    video: "",
    hoverImage: "/fashion-new.png",
    slug: "eerie-corridor",
  },
  {
    id: 2,
    title: "废弃书房",
    category: "游戏场景",
    year: "2024",
    yearImage: "/ue-logo-final.png",
    yearImage2: "/sd-logo-new.png",
    yearImage3: "/maya-logo-new.png",
    yearImage4: "/pt-logo.png",
    thumbnail: "/abandoned-room.png",
    video: "",
    hoverImage: "/abandoned-room.png",
    slug: "abandoned-study",
  },
  {
    id: 3,
    title: "深夜楼梯间",
    category: "创意",
    year: "2024",
    yearImage: "/ue-logo-final.png",
    yearImage2: "/pt-logo.png",
    yearImage3: "/maya-logo-new.png",
    thumbnail: "/product-new.png",
    video: "",
    hoverImage: "/product-new.png",
    slug: "late-night-stairs",
  },
  {
    id: 4,
    title: "建筑寺庙",
    category: "营销",
    year: "2024",
    yearImage: "/ue-logo-final.png",
    yearImage2: "/sd-logo-new.png",
    yearImage3: "/maya-logo-new.png",
    yearImage4: "/pt-logo.png",
    thumbnail: "/studio-vale-new.png",
    video: "",
    hoverImage: "/studio-vale-new.png",
    slug: "temple-architecture",
  },
  {
    id: 5,
    title: "材质表现",
    category: "Ds作品",
    year: "2024",
    yearImage: "/sd-logo-v2.png",
    thumbnail: "/automotive-new.png",
    video: "",
    hoverImage: "/automotive-new.png",
    slug: "classical-dresser",
  },
]

export function WorksGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      <CustomCursor isActive={hoveredId !== null} />
      <div className="container mx-auto px-6">
        <div className="flex gap-4 items-stretch">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverChange={(hovered) => setHoveredId(hovered ? project.id : null)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
