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
import { QuestRequestItemsLocaleWhereInput } from "./QuestRequestItemsLocaleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuestRequestItemsLocaleOrderByInput } from "./QuestRequestItemsLocaleOrderByInput";

@ArgsType()
class QuestRequestItemsLocaleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestRequestItemsLocaleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuestRequestItemsLocaleWhereInput, { nullable: true })
  @Type(() => QuestRequestItemsLocaleWhereInput)
  where?: QuestRequestItemsLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestRequestItemsLocaleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuestRequestItemsLocaleOrderByInput], { nullable: true })
  @Type(() => QuestRequestItemsLocaleOrderByInput)
  orderBy?: Array<QuestRequestItemsLocaleOrderByInput>;

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

export { QuestRequestItemsLocaleFindManyArgs as QuestRequestItemsLocaleFindManyArgs };
