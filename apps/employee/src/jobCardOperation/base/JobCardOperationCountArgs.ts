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
import { JobCardOperationWhereInput } from "./JobCardOperationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class JobCardOperationCountArgs {
  @ApiProperty({
    required: false,
    type: () => JobCardOperationWhereInput,
  })
  @Field(() => JobCardOperationWhereInput, { nullable: true })
  @Type(() => JobCardOperationWhereInput)
  where?: JobCardOperationWhereInput;
}

export { JobCardOperationCountArgs as JobCardOperationCountArgs };