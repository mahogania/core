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
import { AuthorizationRuleWhereInput } from "./AuthorizationRuleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AuthorizationRuleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AuthorizationRuleWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthorizationRuleWhereInput)
  @IsOptional()
  @Field(() => AuthorizationRuleWhereInput, {
    nullable: true,
  })
  every?: AuthorizationRuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuthorizationRuleWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthorizationRuleWhereInput)
  @IsOptional()
  @Field(() => AuthorizationRuleWhereInput, {
    nullable: true,
  })
  some?: AuthorizationRuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuthorizationRuleWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthorizationRuleWhereInput)
  @IsOptional()
  @Field(() => AuthorizationRuleWhereInput, {
    nullable: true,
  })
  none?: AuthorizationRuleWhereInput;
}
export { AuthorizationRuleListRelationFilter as AuthorizationRuleListRelationFilter };
