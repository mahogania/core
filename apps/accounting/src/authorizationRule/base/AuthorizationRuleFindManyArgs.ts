/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorizationRuleWhereInput } from "./AuthorizationRuleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AuthorizationRuleOrderByInput } from "./AuthorizationRuleOrderByInput";

@ArgsType()
class AuthorizationRuleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AuthorizationRuleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AuthorizationRuleWhereInput, { nullable: true })
  @Type(() => AuthorizationRuleWhereInput)
  where?: AuthorizationRuleWhereInput;

  @ApiProperty({
    required: false,
    type: [AuthorizationRuleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AuthorizationRuleOrderByInput], { nullable: true })
  @Type(() => AuthorizationRuleOrderByInput)
  orderBy?: Array<AuthorizationRuleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AuthorizationRuleFindManyArgs as AuthorizationRuleFindManyArgs };
