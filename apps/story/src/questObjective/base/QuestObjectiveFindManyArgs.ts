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
import { QuestObjectiveWhereInput } from "./QuestObjectiveWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuestObjectiveOrderByInput } from "./QuestObjectiveOrderByInput";

@ArgsType()
class QuestObjectiveFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestObjectiveWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuestObjectiveWhereInput, { nullable: true })
  @Type(() => QuestObjectiveWhereInput)
  where?: QuestObjectiveWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestObjectiveOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuestObjectiveOrderByInput], { nullable: true })
  @Type(() => QuestObjectiveOrderByInput)
  orderBy?: Array<QuestObjectiveOrderByInput>;

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

export { QuestObjectiveFindManyArgs as QuestObjectiveFindManyArgs };
