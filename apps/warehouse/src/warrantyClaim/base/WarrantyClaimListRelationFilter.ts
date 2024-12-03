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
import { WarrantyClaimWhereInput } from "./WarrantyClaimWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WarrantyClaimListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WarrantyClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => WarrantyClaimWhereInput)
  @IsOptional()
  @Field(() => WarrantyClaimWhereInput, {
    nullable: true,
  })
  every?: WarrantyClaimWhereInput;

  @ApiProperty({
    required: false,
    type: () => WarrantyClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => WarrantyClaimWhereInput)
  @IsOptional()
  @Field(() => WarrantyClaimWhereInput, {
    nullable: true,
  })
  some?: WarrantyClaimWhereInput;

  @ApiProperty({
    required: false,
    type: () => WarrantyClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => WarrantyClaimWhereInput)
  @IsOptional()
  @Field(() => WarrantyClaimWhereInput, {
    nullable: true,
  })
  none?: WarrantyClaimWhereInput;
}
export { WarrantyClaimListRelationFilter as WarrantyClaimListRelationFilter };
