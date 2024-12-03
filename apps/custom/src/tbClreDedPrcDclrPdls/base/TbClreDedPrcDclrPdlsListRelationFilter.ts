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
import { TbClreDedPrcDclrPdlsWhereInput } from "./TbClreDedPrcDclrPdlsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TbClreDedPrcDclrPdlsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrPdlsWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedPrcDclrPdlsWhereInput)
  @IsOptional()
  @Field(() => TbClreDedPrcDclrPdlsWhereInput, {
    nullable: true,
  })
  every?: TbClreDedPrcDclrPdlsWhereInput;

  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrPdlsWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedPrcDclrPdlsWhereInput)
  @IsOptional()
  @Field(() => TbClreDedPrcDclrPdlsWhereInput, {
    nullable: true,
  })
  some?: TbClreDedPrcDclrPdlsWhereInput;

  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrPdlsWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedPrcDclrPdlsWhereInput)
  @IsOptional()
  @Field(() => TbClreDedPrcDclrPdlsWhereInput, {
    nullable: true,
  })
  none?: TbClreDedPrcDclrPdlsWhereInput;
}
export { TbClreDedPrcDclrPdlsListRelationFilter as TbClreDedPrcDclrPdlsListRelationFilter };
