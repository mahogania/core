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
import { ClreDedPrcDclrWhereInput } from "./ClreDedPrcDclrWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClreDedPrcDclrListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClreDedPrcDclrWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedPrcDclrWhereInput)
  @IsOptional()
  @Field(() => ClreDedPrcDclrWhereInput, {
    nullable: true,
  })
  every?: ClreDedPrcDclrWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClreDedPrcDclrWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedPrcDclrWhereInput)
  @IsOptional()
  @Field(() => ClreDedPrcDclrWhereInput, {
    nullable: true,
  })
  some?: ClreDedPrcDclrWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClreDedPrcDclrWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedPrcDclrWhereInput)
  @IsOptional()
  @Field(() => ClreDedPrcDclrWhereInput, {
    nullable: true,
  })
  none?: ClreDedPrcDclrWhereInput;
}
export { ClreDedPrcDclrListRelationFilter as ClreDedPrcDclrListRelationFilter };
