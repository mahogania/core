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
import { AllowedToTransactWithWhereInput } from "./AllowedToTransactWithWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AllowedToTransactWithListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AllowedToTransactWithWhereInput,
  })
  @ValidateNested()
  @Type(() => AllowedToTransactWithWhereInput)
  @IsOptional()
  @Field(() => AllowedToTransactWithWhereInput, {
    nullable: true,
  })
  every?: AllowedToTransactWithWhereInput;

  @ApiProperty({
    required: false,
    type: () => AllowedToTransactWithWhereInput,
  })
  @ValidateNested()
  @Type(() => AllowedToTransactWithWhereInput)
  @IsOptional()
  @Field(() => AllowedToTransactWithWhereInput, {
    nullable: true,
  })
  some?: AllowedToTransactWithWhereInput;

  @ApiProperty({
    required: false,
    type: () => AllowedToTransactWithWhereInput,
  })
  @ValidateNested()
  @Type(() => AllowedToTransactWithWhereInput)
  @IsOptional()
  @Field(() => AllowedToTransactWithWhereInput, {
    nullable: true,
  })
  none?: AllowedToTransactWithWhereInput;
}
export { AllowedToTransactWithListRelationFilter as AllowedToTransactWithListRelationFilter };