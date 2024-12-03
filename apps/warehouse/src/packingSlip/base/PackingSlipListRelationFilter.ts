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
import { PackingSlipWhereInput } from "./PackingSlipWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PackingSlipListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PackingSlipWhereInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipWhereInput)
  @IsOptional()
  @Field(() => PackingSlipWhereInput, {
    nullable: true,
  })
  every?: PackingSlipWhereInput;

  @ApiProperty({
    required: false,
    type: () => PackingSlipWhereInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipWhereInput)
  @IsOptional()
  @Field(() => PackingSlipWhereInput, {
    nullable: true,
  })
  some?: PackingSlipWhereInput;

  @ApiProperty({
    required: false,
    type: () => PackingSlipWhereInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipWhereInput)
  @IsOptional()
  @Field(() => PackingSlipWhereInput, {
    nullable: true,
  })
  none?: PackingSlipWhereInput;
}
export { PackingSlipListRelationFilter as PackingSlipListRelationFilter };