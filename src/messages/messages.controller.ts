import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List Of Messages';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return 'Hello Get Message by ID ' + id;
  }

  @Post()
  createMessege(@Body() body: any) {
    return `Hello Body ${JSON.stringify(body)}`;
  }
}
