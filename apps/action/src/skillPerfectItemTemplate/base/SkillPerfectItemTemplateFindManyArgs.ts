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
import { SkillPerfectItemTemplateWhereInput } from "./SkillPerfectItemTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SkillPerfectItemTemplateOrderByInput } from "./SkillPerfectItemTemplateOrderByInput";

@ArgsType()
class SkillPerfectItemTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SkillPerfectItemTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SkillPerfectItemTemplateWhereInput, { nullable: true })
  @Type(() => SkillPerfectItemTemplateWhereInput)
  where?: SkillPerfectItemTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [SkillPerfectItemTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SkillPerfectItemTemplateOrderByInput], { nullable: true })
  @Type(() => SkillPerfectItemTemplateOrderByInput)
  orderBy?: Array<SkillPerfectItemTemplateOrderByInput>;

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

export { SkillPerfectItemTemplateFindManyArgs as SkillPerfectItemTemplateFindManyArgs };