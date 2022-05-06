import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class SetLessonContentInput {
  @Field(() => ID)
  id: string;
}
