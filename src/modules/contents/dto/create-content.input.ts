import { Field, InputType } from '@nestjs/graphql';
import { SetLessonContentInput } from './set-content-lesson.input';

@InputType()
export class CreateContentInput {
  description?: string;
  linkContent?: string;

  @Field(() => SetLessonContentInput)
  lesson: SetLessonContentInput;
}
