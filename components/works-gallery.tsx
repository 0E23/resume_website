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
    category: "游戏场景",
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
    category: "游戏场景",
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
          <VideoCard
            key="blood-scene"
            project={{...projects[0], thumbnail: "/DT_02.png", hoverImage: "/DT_02.png", title: "血案现场", slug: "blood-scene"}}
            isHovered={hoveredId === 201}
            onHoverChange={(hovered) => setHoveredId(hovered ? 201 : null)}
          />
          {projects.slice(0, 4).map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverChange={(hovered) => setHoveredId(hovered ? project.id : null)}
            />
          ))}
        </div>
        <div className="flex gap-4 items-stretch mt-8">
          <VideoCard
            key="classical-dresser"
            project={projects[4]}
            isHovered={hoveredId === 5}
            onHoverChange={(hovered) => setHoveredId(hovered ? 5 : null)}
          />
          <VideoCard
            key="black-1"
            project={{...projects[0], thumbnail: "/home-blood-scene.png", hoverImage: "/home-blood-scene.png", title: "西班牙小镇", slug: "home-blood-scene"}}
            isHovered={hoveredId === 202}
            onHoverChange={(hovered) => setHoveredId(hovered ? 202 : null)}
          />
          <VideoCard
            key="black-2"
            project={{...projects[1], thumbnail: "", hoverImage: "", title: "……"}}
            isHovered={hoveredId === 203}
            onHoverChange={(hovered) => setHoveredId(hovered ? 203 : null)}
          />
          <VideoCard
            key="black-3"
            project={{...projects[2], thumbnail: "", hoverImage: "", title: "……"}}
            isHovered={hoveredId === 204}
            onHoverChange={(hovered) => setHoveredId(hovered ? 204 : null)}
          />
          <VideoCard
            key="black-4"
            project={{...projects[3], thumbnail: "", hoverImage: "", title: "……"}}
            isHovered={hoveredId === 205}
            onHoverChange={(hovered) => setHoveredId(hovered ? 205 : null)}
          />
        </div>
      </div>
    </>
  )
}
