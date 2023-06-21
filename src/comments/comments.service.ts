import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, FindOneOptions  }  from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOne(options: FindOneOptions<Comment>): Promise<Comment> {
    return this.commentsRepository.findOne(options);
  }

  create(comment: Comment): Promise<Comment> {
    return this.commentsRepository.save(comment);
  }

  update(comment: Comment): Promise<Comment> {
    return this.commentsRepository.save(comment);
  }

  delete(id: number):  Promise<DeleteResult> {
    return this.commentsRepository.delete(id);
  }
}
