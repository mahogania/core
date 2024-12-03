/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestGreetingWhereInput } from "./QuestGreetingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestGreetingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestGreetingWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingWhereInput)
  @IsOptional()
  @Field(() => QuestGreetingWhereInput, {
    nullable: true,
  })
  every?: QuestGreetingWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestGreetingWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingWhereInput)
  @IsOptional()
  @Field(() => QuestGreetingWhereInput, {
    nullable: true,
  })
  some?: QuestGreetingWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestGreetingWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestGreetingWhereInput)
  @IsOptional()
  @Field(() => QuestGreetingWhereInput, {
    nullable: true,
  })
  none?: QuestGreetingWhereInput;
}
export { QuestGreetingListRelationFilter as QuestGreetingListRelationFilter };
