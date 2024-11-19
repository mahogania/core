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
import { DocFieldWhereInput } from "./DocFieldWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DocFieldListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DocFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => DocFieldWhereInput)
  @IsOptional()
  @Field(() => DocFieldWhereInput, {
    nullable: true,
  })
  every?: DocFieldWhereInput;

  @ApiProperty({
    required: false,
    type: () => DocFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => DocFieldWhereInput)
  @IsOptional()
  @Field(() => DocFieldWhereInput, {
    nullable: true,
  })
  some?: DocFieldWhereInput;

  @ApiProperty({
    required: false,
    type: () => DocFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => DocFieldWhereInput)
  @IsOptional()
  @Field(() => DocFieldWhereInput, {
    nullable: true,
  })
  none?: DocFieldWhereInput;
}
export { DocFieldListRelationFilter as DocFieldListRelationFilter };