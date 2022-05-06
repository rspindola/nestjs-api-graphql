import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Content extends BaseEntity {
  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  linkContent: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;
}