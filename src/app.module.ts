import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotService } from 'bot/bot.service';

@Module({
  imports: [],
  controllers: [AppController],
  components: [BotService],
})
export class AppModule {}
