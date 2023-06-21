import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { RolesDecorator } from '../auth/roles.decorator';
import { DeleteResult } from 'typeorm';
 

@Controller('comments')
@UseGuards(AuthGuard, RolesGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(id: number): Promise<Comment> {
    return this.commentsService.findOne({ where: { id } });
  }

  @Post()
  create(comment: Comment): Promise<Comment> {
    return this.commentsService.create(comment);
  }

  @Put(':id')
  update(id: number, comment: Comment): Promise<Comment> {
    comment.id = id;
    return this.commentsService.update(comment);
  }

  @Delete(':id')
  delete(id: number): Promise<DeleteResult> {
    return this.commentsService.delete(id);
  }
}
