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
import { PhaseAreaWhereInput } from "./PhaseAreaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PhaseAreaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PhaseAreaWhereInput,
  })
  @ValidateNested()
  @Type(() => PhaseAreaWhereInput)
  @IsOptional()
  @Field(() => PhaseAreaWhereInput, {
    nullable: true,
  })
  every?: PhaseAreaWhereInput;

  @ApiProperty({
    required: false,
    type: () => PhaseAreaWhereInput,
  })
  @ValidateNested()
  @Type(() => PhaseAreaWhereInput)
  @IsOptional()
  @Field(() => PhaseAreaWhereInput, {
    nullable: true,
  })
  some?: PhaseAreaWhereInput;

  @ApiProperty({
    required: false,
    type: () => PhaseAreaWhereInput,
  })
  @ValidateNested()
  @Type(() => PhaseAreaWhereInput)
  @IsOptional()
  @Field(() => PhaseAreaWhereInput, {
    nullable: true,
  })
  none?: PhaseAreaWhereInput;
}
export { PhaseAreaListRelationFilter as PhaseAreaListRelationFilter };
