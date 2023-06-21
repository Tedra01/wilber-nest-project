import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, FindOneOptions  }  from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  findAll(): Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  findOne(options: FindOneOptions<PostEntity>): Promise<PostEntity> {
    return this.postsRepository.findOne(options);
  }

  create(post: PostEntity): Promise<PostEntity> {
    return this.postsRepository.save(post);
  }

  update(post: PostEntity): Promise<PostEntity> {
    return this.postsRepository.save(post);
  }

  delete(id: number):  Promise<DeleteResult> {
    return this.postsRepository.delete(id);
  }
}
