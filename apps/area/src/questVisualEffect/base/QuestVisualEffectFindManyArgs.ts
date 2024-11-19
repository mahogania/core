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
import { QuestVisualEffectWhereInput } from "./QuestVisualEffectWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuestVisualEffectOrderByInput } from "./QuestVisualEffectOrderByInput";

@ArgsType()
class QuestVisualEffectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestVisualEffectWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuestVisualEffectWhereInput, { nullable: true })
  @Type(() => QuestVisualEffectWhereInput)
  where?: QuestVisualEffectWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestVisualEffectOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuestVisualEffectOrderByInput], { nullable: true })
  @Type(() => QuestVisualEffectOrderByInput)
  orderBy?: Array<QuestVisualEffectOrderByInput>;

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

export { QuestVisualEffectFindManyArgs as QuestVisualEffectFindManyArgs };
