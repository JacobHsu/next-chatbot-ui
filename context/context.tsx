
import {
  ChatMessage,
} from "@/types"
import {  createContext } from "react"

interface ChatbotUIContext {
  // PASSIVE CHAT STORE
  userInput: string
  chatMessages: ChatMessage[]

}

export const ChatbotUIContext = createContext<ChatbotUIContext>({
  // PASSIVE CHAT STORE
  userInput: "",
  chatMessages: [],
})
