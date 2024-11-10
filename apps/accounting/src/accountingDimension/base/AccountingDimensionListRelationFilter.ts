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
import { AccountingDimensionWhereInput } from "./AccountingDimensionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccountingDimensionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccountingDimensionWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountingDimensionWhereInput)
  @IsOptional()
  @Field(() => AccountingDimensionWhereInput, {
    nullable: true,
  })
  every?: AccountingDimensionWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccountingDimensionWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountingDimensionWhereInput)
  @IsOptional()
  @Field(() => AccountingDimensionWhereInput, {
    nullable: true,
  })
  some?: AccountingDimensionWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccountingDimensionWhereInput,
  })
  @ValidateNested()
  @Type(() => AccountingDimensionWhereInput)
  @IsOptional()
  @Field(() => AccountingDimensionWhereInput, {
    nullable: true,
  })
  none?: AccountingDimensionWhereInput;
}
export { AccountingDimensionListRelationFilter as AccountingDimensionListRelationFilter };
