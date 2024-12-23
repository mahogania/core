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
import { QuestMailSenderWhereInput } from "./QuestMailSenderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestMailSenderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestMailSenderWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestMailSenderWhereInput)
  @IsOptional()
  @Field(() => QuestMailSenderWhereInput, {
    nullable: true,
  })
  every?: QuestMailSenderWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestMailSenderWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestMailSenderWhereInput)
  @IsOptional()
  @Field(() => QuestMailSenderWhereInput, {
    nullable: true,
  })
  some?: QuestMailSenderWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestMailSenderWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestMailSenderWhereInput)
  @IsOptional()
  @Field(() => QuestMailSenderWhereInput, {
    nullable: true,
  })
  none?: QuestMailSenderWhereInput;
}
export { QuestMailSenderListRelationFilter as QuestMailSenderListRelationFilter };
