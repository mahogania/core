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
import { EmailRuleWhereInput } from "./EmailRuleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmailRuleOrderByInput } from "./EmailRuleOrderByInput";

@ArgsType()
class EmailRuleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmailRuleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmailRuleWhereInput, { nullable: true })
  @Type(() => EmailRuleWhereInput)
  where?: EmailRuleWhereInput;

  @ApiProperty({
    required: false,
    type: [EmailRuleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmailRuleOrderByInput], { nullable: true })
  @Type(() => EmailRuleOrderByInput)
  orderBy?: Array<EmailRuleOrderByInput>;

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

export { EmailRuleFindManyArgs as EmailRuleFindManyArgs };