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
import { JobCardOperationWhereUniqueInput } from "./JobCardOperationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JobCardOperationUpdateInput } from "./JobCardOperationUpdateInput";

@ArgsType()
class UpdateJobCardOperationArgs {
  @ApiProperty({
    required: true,
    type: () => JobCardOperationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobCardOperationWhereUniqueInput)
  @Field(() => JobCardOperationWhereUniqueInput, { nullable: false })
  where!: JobCardOperationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JobCardOperationUpdateInput,
  })
  @ValidateNested()
  @Type(() => JobCardOperationUpdateInput)
  @Field(() => JobCardOperationUpdateInput, { nullable: false })
  data!: JobCardOperationUpdateInput;
}

export { UpdateJobCardOperationArgs as UpdateJobCardOperationArgs };