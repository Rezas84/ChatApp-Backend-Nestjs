import { ChatClient } from '../../core/chat-client.model';
import { ChatMessage } from '../../core/chat-message.model';
export interface WelcomeDto {
  clients: ChatClient[];
  client: ChatClient;
  messages: ChatMessage[];
}
