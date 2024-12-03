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
import { SpawnGroupWhereInput } from "./SpawnGroupWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SpawnGroupListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SpawnGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => SpawnGroupWhereInput)
  @IsOptional()
  @Field(() => SpawnGroupWhereInput, {
    nullable: true,
  })
  every?: SpawnGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => SpawnGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => SpawnGroupWhereInput)
  @IsOptional()
  @Field(() => SpawnGroupWhereInput, {
    nullable: true,
  })
  some?: SpawnGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => SpawnGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => SpawnGroupWhereInput)
  @IsOptional()
  @Field(() => SpawnGroupWhereInput, {
    nullable: true,
  })
  none?: SpawnGroupWhereInput;
}
export { SpawnGroupListRelationFilter as SpawnGroupListRelationFilter };
