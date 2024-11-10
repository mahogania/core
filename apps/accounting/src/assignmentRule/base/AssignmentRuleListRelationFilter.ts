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
import { AssignmentRuleWhereInput } from "./AssignmentRuleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssignmentRuleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssignmentRuleWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleWhereInput)
  @IsOptional()
  @Field(() => AssignmentRuleWhereInput, {
    nullable: true,
  })
  every?: AssignmentRuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignmentRuleWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleWhereInput)
  @IsOptional()
  @Field(() => AssignmentRuleWhereInput, {
    nullable: true,
  })
  some?: AssignmentRuleWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignmentRuleWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleWhereInput)
  @IsOptional()
  @Field(() => AssignmentRuleWhereInput, {
    nullable: true,
  })
  none?: AssignmentRuleWhereInput;
}
export { AssignmentRuleListRelationFilter as AssignmentRuleListRelationFilter };
