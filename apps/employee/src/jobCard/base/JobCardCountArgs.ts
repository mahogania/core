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
import { JobCardWhereInput } from "./JobCardWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class JobCardCountArgs {
  @ApiProperty({
    required: false,
    type: () => JobCardWhereInput,
  })
  @Field(() => JobCardWhereInput, { nullable: true })
  @Type(() => JobCardWhereInput)
  where?: JobCardWhereInput;
}

export { JobCardCountArgs as JobCardCountArgs };
