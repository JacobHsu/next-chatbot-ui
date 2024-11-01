"use client"

import { Dashboard } from "@/components/ui/dashboard"
// import { useParams } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import Loading from "../loading"

interface WorkspaceLayoutProps {
  children: ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  // const router = useRouter()

  // const params = useParams()
  // const searchParams = useSearchParams()
  // const workspaceId = params.workspaceid as string

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => await fetchWorkspaceData())()
  }, [])

  const fetchWorkspaceData = async () => {
    setLoading(true)

    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  return <Dashboard>{children}</Dashboard>
}
