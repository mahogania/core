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
import { PackingSlipItemWhereInput } from "./PackingSlipItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PackingSlipItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PackingSlipItemWhereInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipItemWhereInput)
  @IsOptional()
  @Field(() => PackingSlipItemWhereInput, {
    nullable: true,
  })
  every?: PackingSlipItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => PackingSlipItemWhereInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipItemWhereInput)
  @IsOptional()
  @Field(() => PackingSlipItemWhereInput, {
    nullable: true,
  })
  some?: PackingSlipItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => PackingSlipItemWhereInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipItemWhereInput)
  @IsOptional()
  @Field(() => PackingSlipItemWhereInput, {
    nullable: true,
  })
  none?: PackingSlipItemWhereInput;
}
export { PackingSlipItemListRelationFilter as PackingSlipItemListRelationFilter };
