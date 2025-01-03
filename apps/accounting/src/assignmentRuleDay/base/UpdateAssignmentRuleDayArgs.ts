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
import { AssignmentRuleDayWhereUniqueInput } from "./AssignmentRuleDayWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssignmentRuleDayUpdateInput } from "./AssignmentRuleDayUpdateInput";

@ArgsType()
class UpdateAssignmentRuleDayArgs {
  @ApiProperty({
    required: true,
    type: () => AssignmentRuleDayWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleDayWhereUniqueInput)
  @Field(() => AssignmentRuleDayWhereUniqueInput, { nullable: false })
  where!: AssignmentRuleDayWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AssignmentRuleDayUpdateInput,
  })
  @ValidateNested()
  @Type(() => AssignmentRuleDayUpdateInput)
  @Field(() => AssignmentRuleDayUpdateInput, { nullable: false })
  data!: AssignmentRuleDayUpdateInput;
}

export { UpdateAssignmentRuleDayArgs as UpdateAssignmentRuleDayArgs };
