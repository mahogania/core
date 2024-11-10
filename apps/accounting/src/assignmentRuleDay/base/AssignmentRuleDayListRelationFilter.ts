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
import { AssignmentRuleDayWhereInput } from "./AssignmentRuleDayWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssignmentRuleDayListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssignmentRuleDayWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleDayWhereInput)
  @IsOptional()
  @Field(() => AssignmentRuleDayWhereInput, {
    nullable: true,
  })
  every?: AssignmentRuleDayWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignmentRuleDayWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleDayWhereInput)
  @IsOptional()
  @Field(() => AssignmentRuleDayWhereInput, {
    nullable: true,
  })
  some?: AssignmentRuleDayWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignmentRuleDayWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleDayWhereInput)
  @IsOptional()
  @Field(() => AssignmentRuleDayWhereInput, {
    nullable: true,
  })
  none?: AssignmentRuleDayWhereInput;
}
export { AssignmentRuleDayListRelationFilter as AssignmentRuleDayListRelationFilter };
