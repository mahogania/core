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
import { FactionWhereInput } from "./FactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FactionWhereInput,
  })
  @ValidateNested()
  @Type(() => FactionWhereInput)
  @IsOptional()
  @Field(() => FactionWhereInput, {
    nullable: true,
  })
  every?: FactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FactionWhereInput,
  })
  @ValidateNested()
  @Type(() => FactionWhereInput)
  @IsOptional()
  @Field(() => FactionWhereInput, {
    nullable: true,
  })
  some?: FactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FactionWhereInput,
  })
  @ValidateNested()
  @Type(() => FactionWhereInput)
  @IsOptional()
  @Field(() => FactionWhereInput, {
    nullable: true,
  })
  none?: FactionWhereInput;
}
export { FactionListRelationFilter as FactionListRelationFilter };