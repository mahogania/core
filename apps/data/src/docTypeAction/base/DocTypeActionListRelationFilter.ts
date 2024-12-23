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
import { DocTypeActionWhereInput } from "./DocTypeActionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DocTypeActionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DocTypeActionWhereInput,
  })
  @ValidateNested()
  @Type(() => DocTypeActionWhereInput)
  @IsOptional()
  @Field(() => DocTypeActionWhereInput, {
    nullable: true,
  })
  every?: DocTypeActionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DocTypeActionWhereInput,
  })
  @ValidateNested()
  @Type(() => DocTypeActionWhereInput)
  @IsOptional()
  @Field(() => DocTypeActionWhereInput, {
    nullable: true,
  })
  some?: DocTypeActionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DocTypeActionWhereInput,
  })
  @ValidateNested()
  @Type(() => DocTypeActionWhereInput)
  @IsOptional()
  @Field(() => DocTypeActionWhereInput, {
    nullable: true,
  })
  none?: DocTypeActionWhereInput;
}
export { DocTypeActionListRelationFilter as DocTypeActionListRelationFilter };
