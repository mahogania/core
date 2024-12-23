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
import { LinkedRespawnWhereInput } from "./LinkedRespawnWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LinkedRespawnListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LinkedRespawnWhereInput,
  })
  @ValidateNested()
  @Type(() => LinkedRespawnWhereInput)
  @IsOptional()
  @Field(() => LinkedRespawnWhereInput, {
    nullable: true,
  })
  every?: LinkedRespawnWhereInput;

  @ApiProperty({
    required: false,
    type: () => LinkedRespawnWhereInput,
  })
  @ValidateNested()
  @Type(() => LinkedRespawnWhereInput)
  @IsOptional()
  @Field(() => LinkedRespawnWhereInput, {
    nullable: true,
  })
  some?: LinkedRespawnWhereInput;

  @ApiProperty({
    required: false,
    type: () => LinkedRespawnWhereInput,
  })
  @ValidateNested()
  @Type(() => LinkedRespawnWhereInput)
  @IsOptional()
  @Field(() => LinkedRespawnWhereInput, {
    nullable: true,
  })
  none?: LinkedRespawnWhereInput;
}
export { LinkedRespawnListRelationFilter as LinkedRespawnListRelationFilter };
