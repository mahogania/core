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
import { QuestRequestItemsConditionalWhereInput } from "./QuestRequestItemsConditionalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuestRequestItemsConditionalOrderByInput } from "./QuestRequestItemsConditionalOrderByInput";

@ArgsType()
class QuestRequestItemsConditionalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestRequestItemsConditionalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuestRequestItemsConditionalWhereInput, { nullable: true })
  @Type(() => QuestRequestItemsConditionalWhereInput)
  where?: QuestRequestItemsConditionalWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestRequestItemsConditionalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuestRequestItemsConditionalOrderByInput], { nullable: true })
  @Type(() => QuestRequestItemsConditionalOrderByInput)
  orderBy?: Array<QuestRequestItemsConditionalOrderByInput>;

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

export { QuestRequestItemsConditionalFindManyArgs as QuestRequestItemsConditionalFindManyArgs };
