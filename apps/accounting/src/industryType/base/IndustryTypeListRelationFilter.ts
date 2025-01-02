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
import { IndustryTypeWhereInput } from "./IndustryTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IndustryTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IndustryTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => IndustryTypeWhereInput)
  @IsOptional()
  @Field(() => IndustryTypeWhereInput, {
    nullable: true,
  })
  every?: IndustryTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => IndustryTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => IndustryTypeWhereInput)
  @IsOptional()
  @Field(() => IndustryTypeWhereInput, {
    nullable: true,
  })
  some?: IndustryTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => IndustryTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => IndustryTypeWhereInput)
  @IsOptional()
  @Field(() => IndustryTypeWhereInput, {
    nullable: true,
  })
  none?: IndustryTypeWhereInput;
}
export { IndustryTypeListRelationFilter as IndustryTypeListRelationFilter };