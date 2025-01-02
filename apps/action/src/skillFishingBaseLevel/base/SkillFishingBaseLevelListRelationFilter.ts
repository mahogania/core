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
import { SkillFishingBaseLevelWhereInput } from "./SkillFishingBaseLevelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SkillFishingBaseLevelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SkillFishingBaseLevelWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillFishingBaseLevelWhereInput)
  @IsOptional()
  @Field(() => SkillFishingBaseLevelWhereInput, {
    nullable: true,
  })
  every?: SkillFishingBaseLevelWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkillFishingBaseLevelWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillFishingBaseLevelWhereInput)
  @IsOptional()
  @Field(() => SkillFishingBaseLevelWhereInput, {
    nullable: true,
  })
  some?: SkillFishingBaseLevelWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkillFishingBaseLevelWhereInput,
  })
  @ValidateNested()
  @Type(() => SkillFishingBaseLevelWhereInput)
  @IsOptional()
  @Field(() => SkillFishingBaseLevelWhereInput, {
    nullable: true,
  })
  none?: SkillFishingBaseLevelWhereInput;
}
export { SkillFishingBaseLevelListRelationFilter as SkillFishingBaseLevelListRelationFilter };