
import {
  ChatMessage,
} from "@/types"
import {  createContext } from "react"

interface ChatbotUIContext {
  // ACTIVE CHAT STORE
  isGenerating: boolean
  // PASSIVE CHAT STORE
  userInput: string
  chatMessages: ChatMessage[]

}

export const ChatbotUIContext = createContext<ChatbotUIContext>({
  // ACTIVE CHAT STORE
  isGenerating: false,
  // PASSIVE CHAT STORE
  userInput: "",
  chatMessages: [],
})
