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
import { TbClreDedVhclWhereInput } from "./TbClreDedVhclWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TbClreDedVhclListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TbClreDedVhclWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVhclWhereInput)
  @IsOptional()
  @Field(() => TbClreDedVhclWhereInput, {
    nullable: true,
  })
  every?: TbClreDedVhclWhereInput;

  @ApiProperty({
    required: false,
    type: () => TbClreDedVhclWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVhclWhereInput)
  @IsOptional()
  @Field(() => TbClreDedVhclWhereInput, {
    nullable: true,
  })
  some?: TbClreDedVhclWhereInput;

  @ApiProperty({
    required: false,
    type: () => TbClreDedVhclWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedVhclWhereInput)
  @IsOptional()
  @Field(() => TbClreDedVhclWhereInput, {
    nullable: true,
  })
  none?: TbClreDedVhclWhereInput;
}
export { TbClreDedVhclListRelationFilter as TbClreDedVhclListRelationFilter };