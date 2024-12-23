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
import { SkillDiscoveryTemplateWhereInput } from "./SkillDiscoveryTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SkillDiscoveryTemplateOrderByInput } from "./SkillDiscoveryTemplateOrderByInput";

@ArgsType()
class SkillDiscoveryTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SkillDiscoveryTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SkillDiscoveryTemplateWhereInput, { nullable: true })
  @Type(() => SkillDiscoveryTemplateWhereInput)
  where?: SkillDiscoveryTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [SkillDiscoveryTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SkillDiscoveryTemplateOrderByInput], { nullable: true })
  @Type(() => SkillDiscoveryTemplateOrderByInput)
  orderBy?: Array<SkillDiscoveryTemplateOrderByInput>;

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

export { SkillDiscoveryTemplateFindManyArgs as SkillDiscoveryTemplateFindManyArgs };
