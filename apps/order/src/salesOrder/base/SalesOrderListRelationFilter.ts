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
import { SalesOrderWhereInput } from "./SalesOrderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalesOrderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SalesOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesOrderWhereInput)
  @IsOptional()
  @Field(() => SalesOrderWhereInput, {
    nullable: true,
  })
  every?: SalesOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesOrderWhereInput)
  @IsOptional()
  @Field(() => SalesOrderWhereInput, {
    nullable: true,
  })
  some?: SalesOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesOrderWhereInput)
  @IsOptional()
  @Field(() => SalesOrderWhereInput, {
    nullable: true,
  })
  none?: SalesOrderWhereInput;
}
export { SalesOrderListRelationFilter as SalesOrderListRelationFilter };
