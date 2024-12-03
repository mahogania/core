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
import { SubcontractingOrderSuppliedItemWhereInput } from "./SubcontractingOrderSuppliedItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SubcontractingOrderSuppliedItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SubcontractingOrderSuppliedItemWhereInput,
  })
  @ValidateNested()
  @Type(() => SubcontractingOrderSuppliedItemWhereInput)
  @IsOptional()
  @Field(() => SubcontractingOrderSuppliedItemWhereInput, {
    nullable: true,
  })
  every?: SubcontractingOrderSuppliedItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubcontractingOrderSuppliedItemWhereInput,
  })
  @ValidateNested()
  @Type(() => SubcontractingOrderSuppliedItemWhereInput)
  @IsOptional()
  @Field(() => SubcontractingOrderSuppliedItemWhereInput, {
    nullable: true,
  })
  some?: SubcontractingOrderSuppliedItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubcontractingOrderSuppliedItemWhereInput,
  })
  @ValidateNested()
  @Type(() => SubcontractingOrderSuppliedItemWhereInput)
  @IsOptional()
  @Field(() => SubcontractingOrderSuppliedItemWhereInput, {
    nullable: true,
  })
  none?: SubcontractingOrderSuppliedItemWhereInput;
}
export { SubcontractingOrderSuppliedItemListRelationFilter as SubcontractingOrderSuppliedItemListRelationFilter };
