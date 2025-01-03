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
import { ConstraintWhereInput } from "./ConstraintWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConstraintListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConstraintWhereInput,
  })
  @ValidateNested()
  @Type(() => ConstraintWhereInput)
  @IsOptional()
  @Field(() => ConstraintWhereInput, {
    nullable: true,
  })
  every?: ConstraintWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConstraintWhereInput,
  })
  @ValidateNested()
  @Type(() => ConstraintWhereInput)
  @IsOptional()
  @Field(() => ConstraintWhereInput, {
    nullable: true,
  })
  some?: ConstraintWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConstraintWhereInput,
  })
  @ValidateNested()
  @Type(() => ConstraintWhereInput)
  @IsOptional()
  @Field(() => ConstraintWhereInput, {
    nullable: true,
  })
  none?: ConstraintWhereInput;
}
export { ConstraintListRelationFilter as ConstraintListRelationFilter };
