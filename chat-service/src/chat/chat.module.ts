import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';

@Module({
  controllers: [],
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}
