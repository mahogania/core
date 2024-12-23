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
import { WarehouseTypeWhereInput } from "./WarehouseTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WarehouseTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WarehouseTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => WarehouseTypeWhereInput)
  @IsOptional()
  @Field(() => WarehouseTypeWhereInput, {
    nullable: true,
  })
  every?: WarehouseTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => WarehouseTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => WarehouseTypeWhereInput)
  @IsOptional()
  @Field(() => WarehouseTypeWhereInput, {
    nullable: true,
  })
  some?: WarehouseTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => WarehouseTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => WarehouseTypeWhereInput)
  @IsOptional()
  @Field(() => WarehouseTypeWhereInput, {
    nullable: true,
  })
  none?: WarehouseTypeWhereInput;
}
export { WarehouseTypeListRelationFilter as WarehouseTypeListRelationFilter };
