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
import { TbClreDedPrcDclrWhereInput } from "./TbClreDedPrcDclrWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TbClreDedPrcDclrListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedPrcDclrWhereInput)
  @IsOptional()
  @Field(() => TbClreDedPrcDclrWhereInput, {
    nullable: true,
  })
  every?: TbClreDedPrcDclrWhereInput;

  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedPrcDclrWhereInput)
  @IsOptional()
  @Field(() => TbClreDedPrcDclrWhereInput, {
    nullable: true,
  })
  some?: TbClreDedPrcDclrWhereInput;

  @ApiProperty({
    required: false,
    type: () => TbClreDedPrcDclrWhereInput,
  })
  @ValidateNested()
  @Type(() => TbClreDedPrcDclrWhereInput)
  @IsOptional()
  @Field(() => TbClreDedPrcDclrWhereInput, {
    nullable: true,
  })
  none?: TbClreDedPrcDclrWhereInput;
}
export { TbClreDedPrcDclrListRelationFilter as TbClreDedPrcDclrListRelationFilter };
