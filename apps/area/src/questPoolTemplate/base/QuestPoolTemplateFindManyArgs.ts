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
import { QuestPoolTemplateWhereInput } from "./QuestPoolTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuestPoolTemplateOrderByInput } from "./QuestPoolTemplateOrderByInput";

@ArgsType()
class QuestPoolTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuestPoolTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuestPoolTemplateWhereInput, { nullable: true })
  @Type(() => QuestPoolTemplateWhereInput)
  where?: QuestPoolTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [QuestPoolTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuestPoolTemplateOrderByInput], { nullable: true })
  @Type(() => QuestPoolTemplateOrderByInput)
  orderBy?: Array<QuestPoolTemplateOrderByInput>;

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

export { QuestPoolTemplateFindManyArgs as QuestPoolTemplateFindManyArgs };
