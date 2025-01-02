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
import { QuestRewardDisplaySpellWhereInput } from "./QuestRewardDisplaySpellWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestRewardDisplaySpellListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestRewardDisplaySpellWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestRewardDisplaySpellWhereInput)
  @IsOptional()
  @Field(() => QuestRewardDisplaySpellWhereInput, {
    nullable: true,
  })
  every?: QuestRewardDisplaySpellWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestRewardDisplaySpellWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestRewardDisplaySpellWhereInput)
  @IsOptional()
  @Field(() => QuestRewardDisplaySpellWhereInput, {
    nullable: true,
  })
  some?: QuestRewardDisplaySpellWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestRewardDisplaySpellWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestRewardDisplaySpellWhereInput)
  @IsOptional()
  @Field(() => QuestRewardDisplaySpellWhereInput, {
    nullable: true,
  })
  none?: QuestRewardDisplaySpellWhereInput;
}
export { QuestRewardDisplaySpellListRelationFilter as QuestRewardDisplaySpellListRelationFilter };