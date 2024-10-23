"use client"

// import { Button } from "@/components/ui/button"
// import { Tabs } from "@/components/ui/tabs"
// import useHotkey from "@/lib/hooks/use-hotkey"
import { cn } from "@/lib/utils" // 可能代表 class names
import { ContentType } from "@/types"
// import { IconChevronCompactRight } from "@tabler/icons-react"
// import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FC, useState } from "react"

// import { CommandK } from "../utility/command-k"

export const SIDEBAR_WIDTH = 350

interface DashboardProps {
  children: React.ReactNode
}

export const Dashboard: FC<DashboardProps> = ({ children }) => {
  // useHotkey("s", () => setShowSidebar(prevState => !prevState))


  const [showSidebar, setShowSidebar] = useState(
    localStorage.getItem("showSidebar") === "true"
  )
  const [isDragging, setIsDragging] = useState(false)


  const handleToggleSidebar = () => {
    setShowSidebar(prevState => !prevState)
    localStorage.setItem("showSidebar", String(!showSidebar))
  }

  return (
    <div className="flex size-full">
      {/* <CommandK /> */}


      <div
        className={cn(
          "duration-200 dark:border-none " + (showSidebar ? "border-r-2" : "")
        )}
        style={{
          // Sidebar
          minWidth: showSidebar ? `${SIDEBAR_WIDTH}px` : "0px",
          maxWidth: showSidebar ? `${SIDEBAR_WIDTH}px` : "0px",
          width: showSidebar ? `${SIDEBAR_WIDTH}px` : "0px"
        }}
      >

      </div>
    </div>
  )
}
