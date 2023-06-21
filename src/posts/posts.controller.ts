import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './post.entity'; // Cambiar el nombre de la entidad importada
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { RolesDecorator } from '../auth/roles.decorator'; // Importa el decorador correctamente
import { DeleteResult } from 'typeorm';

@Controller('posts')
@UseGuards(AuthGuard, RolesGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(id: number): Promise<PostEntity> {
    return this.postsService.findOne({ where: { id } });
  }

  @Post()
  create(post: PostEntity): Promise<PostEntity> {
    return this.postsService.create(post);
  }

  @Put(':id')
  update(id: number, post: PostEntity): Promise<PostEntity> {
    post.id = id;
    return this.postsService.update(post);
  }

  @Delete(':id')
  delete(id: number): Promise<DeleteResult> {
    return this.postsService.delete(id);
  }
}

