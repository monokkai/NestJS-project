import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class ChatGateway {
  constructor(private readonly chstService: ChatService) {}
  @WebSocketServer()
  server: Server


  @SubscribeMessage('searchProduct')
  async handleSearchProduct(client: Socket, payload: { query: string }): Promise<void> {
    const products = await this.chstService.searchProducts(payload.query);
    client.emit('productSearchResult', products);
  }
}
