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
import { EmployeeEducationWhereUniqueInput } from "./EmployeeEducationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeEducationUpdateInput } from "./EmployeeEducationUpdateInput";

@ArgsType()
class UpdateEmployeeEducationArgs {
  @ApiProperty({
    required: true,
    type: () => EmployeeEducationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeEducationWhereUniqueInput)
  @Field(() => EmployeeEducationWhereUniqueInput, { nullable: false })
  where!: EmployeeEducationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmployeeEducationUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmployeeEducationUpdateInput)
  @Field(() => EmployeeEducationUpdateInput, { nullable: false })
  data!: EmployeeEducationUpdateInput;
}

export { UpdateEmployeeEducationArgs as UpdateEmployeeEducationArgs };
