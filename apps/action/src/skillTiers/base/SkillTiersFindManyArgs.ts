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
import { SkillTiersWhereInput } from "./SkillTiersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SkillTiersOrderByInput } from "./SkillTiersOrderByInput";

@ArgsType()
class SkillTiersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SkillTiersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SkillTiersWhereInput, { nullable: true })
  @Type(() => SkillTiersWhereInput)
  where?: SkillTiersWhereInput;

  @ApiProperty({
    required: false,
    type: [SkillTiersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SkillTiersOrderByInput], { nullable: true })
  @Type(() => SkillTiersOrderByInput)
  orderBy?: Array<SkillTiersOrderByInput>;

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

export { SkillTiersFindManyArgs as SkillTiersFindManyArgs };