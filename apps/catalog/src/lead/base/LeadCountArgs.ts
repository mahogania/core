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
import { LeadWhereInput } from "./LeadWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LeadCountArgs {
  @ApiProperty({
    required: false,
    type: () => LeadWhereInput,
  })
  @Field(() => LeadWhereInput, { nullable: true })
  @Type(() => LeadWhereInput)
  where?: LeadWhereInput;
}

export { LeadCountArgs as LeadCountArgs };