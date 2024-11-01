import Loading from "@/app/[locale]/loading"
import { useScroll } from "./chat-hooks/use-scroll"
// import { useParams } from "next/navigation"
import { FC, useEffect, useState } from "react"

type ChatUIProps = object;

export const ChatUI: FC<ChatUIProps> = ({}) => {

  const {
    messagesStartRef,
    messagesEndRef
  } = useScroll()

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="relative flex h-full flex-col items-center">
      <div
        className="flex size-full flex-col overflow-auto border-b"
      >
        <div ref={messagesStartRef} />
        <div ref={messagesEndRef} />
      </div>

    </div>
  )
}
