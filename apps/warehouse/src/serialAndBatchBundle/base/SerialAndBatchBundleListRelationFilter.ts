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
import { SerialAndBatchBundleWhereInput } from "./SerialAndBatchBundleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SerialAndBatchBundleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SerialAndBatchBundleWhereInput,
  })
  @ValidateNested()
  @Type(() => SerialAndBatchBundleWhereInput)
  @IsOptional()
  @Field(() => SerialAndBatchBundleWhereInput, {
    nullable: true,
  })
  every?: SerialAndBatchBundleWhereInput;

  @ApiProperty({
    required: false,
    type: () => SerialAndBatchBundleWhereInput,
  })
  @ValidateNested()
  @Type(() => SerialAndBatchBundleWhereInput)
  @IsOptional()
  @Field(() => SerialAndBatchBundleWhereInput, {
    nullable: true,
  })
  some?: SerialAndBatchBundleWhereInput;

  @ApiProperty({
    required: false,
    type: () => SerialAndBatchBundleWhereInput,
  })
  @ValidateNested()
  @Type(() => SerialAndBatchBundleWhereInput)
  @IsOptional()
  @Field(() => SerialAndBatchBundleWhereInput, {
    nullable: true,
  })
  none?: SerialAndBatchBundleWhereInput;
}
export { SerialAndBatchBundleListRelationFilter as SerialAndBatchBundleListRelationFilter };
