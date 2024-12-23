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
import { EmailGroupWhereInput } from "./EmailGroupWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmailGroupListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmailGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => EmailGroupWhereInput)
  @IsOptional()
  @Field(() => EmailGroupWhereInput, {
    nullable: true,
  })
  every?: EmailGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmailGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => EmailGroupWhereInput)
  @IsOptional()
  @Field(() => EmailGroupWhereInput, {
    nullable: true,
  })
  some?: EmailGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmailGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => EmailGroupWhereInput)
  @IsOptional()
  @Field(() => EmailGroupWhereInput, {
    nullable: true,
  })
  none?: EmailGroupWhereInput;
}
export { EmailGroupListRelationFilter as EmailGroupListRelationFilter };
