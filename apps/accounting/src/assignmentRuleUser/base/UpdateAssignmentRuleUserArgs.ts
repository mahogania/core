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
import { AssignmentRuleUserWhereUniqueInput } from "./AssignmentRuleUserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssignmentRuleUserUpdateInput } from "./AssignmentRuleUserUpdateInput";

@ArgsType()
class UpdateAssignmentRuleUserArgs {
  @ApiProperty({
    required: true,
    type: () => AssignmentRuleUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleUserWhereUniqueInput)
  @Field(() => AssignmentRuleUserWhereUniqueInput, { nullable: false })
  where!: AssignmentRuleUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AssignmentRuleUserUpdateInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleUserUpdateInput)
  @Field(() => AssignmentRuleUserUpdateInput, { nullable: false })
  data!: AssignmentRuleUserUpdateInput;
}

export { UpdateAssignmentRuleUserArgs as UpdateAssignmentRuleUserArgs };
