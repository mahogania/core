/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestRewardSpellWhereInput } from "./QuestRewardSpellWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuestRewardSpellOrderByInput } from "./QuestRewardSpellOrderByInput";

@ArgsType()
class QuestRewardSpellFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestRewardSpellWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuestRewardSpellWhereInput, { nullable: true })
  @Type(() => QuestRewardSpellWhereInput)
  where?: QuestRewardSpellWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestRewardSpellOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuestRewardSpellOrderByInput], { nullable: true })
  @Type(() => QuestRewardSpellOrderByInput)
  orderBy?: Array<QuestRewardSpellOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { QuestRewardSpellFindManyArgs as QuestRewardSpellFindManyArgs };