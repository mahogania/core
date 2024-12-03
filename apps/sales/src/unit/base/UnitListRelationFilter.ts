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
import { UnitWhereInput } from "./UnitWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UnitListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UnitWhereInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereInput)
  @IsOptional()
  @Field(() => UnitWhereInput, {
    nullable: true,
  })
  every?: UnitWhereInput;

  @ApiProperty({
    required: false,
    type: () => UnitWhereInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereInput)
  @IsOptional()
  @Field(() => UnitWhereInput, {
    nullable: true,
  })
  some?: UnitWhereInput;

  @ApiProperty({
    required: false,
    type: () => UnitWhereInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereInput)
  @IsOptional()
  @Field(() => UnitWhereInput, {
    nullable: true,
  })
  none?: UnitWhereInput;
}
export { UnitListRelationFilter as UnitListRelationFilter };
