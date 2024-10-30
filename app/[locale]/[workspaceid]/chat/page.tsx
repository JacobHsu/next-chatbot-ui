"use client"

import { ChatUI } from "@/components/chat/chat-ui"

import { Brand } from "@/components/ui/brand"
import { ChatbotUIContext } from "@/context/context"

import { useTheme } from "next-themes"
import { useContext } from "react"

export default function ChatPage() {

  const { chatMessages } = useContext(ChatbotUIContext)

  const { theme } = useTheme()

  return (
    <>
      {chatMessages.length === 0 ? (
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="top-50% left-50% -translate-x-50% -translate-y-50% absolute mb-20">
            <Brand theme={theme === "dark" ? "dark" : "light"} />
          </div>
        </div>
      ) : (
        <ChatUI />
      )}
    </>
  )
}
