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
import { ClreDedRwmWhereInput } from "./ClreDedRwmWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClreDedRwmListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClreDedRwmWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedRwmWhereInput)
  @IsOptional()
  @Field(() => ClreDedRwmWhereInput, {
    nullable: true,
  })
  every?: ClreDedRwmWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClreDedRwmWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedRwmWhereInput)
  @IsOptional()
  @Field(() => ClreDedRwmWhereInput, {
    nullable: true,
  })
  some?: ClreDedRwmWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClreDedRwmWhereInput,
  })
  @ValidateNested()
  @Type(() => ClreDedRwmWhereInput)
  @IsOptional()
  @Field(() => ClreDedRwmWhereInput, {
    nullable: true,
  })
  none?: ClreDedRwmWhereInput;
}
export { ClreDedRwmListRelationFilter as ClreDedRwmListRelationFilter };