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
import { EmailAccountWhereInput } from "./EmailAccountWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EmailAccountCountArgs {
  @ApiProperty({
    required: false,
    type: () => EmailAccountWhereInput,
  })
  @Field(() => EmailAccountWhereInput, { nullable: true })
  @Type(() => EmailAccountWhereInput)
  where?: EmailAccountWhereInput;
}

export { EmailAccountCountArgs as EmailAccountCountArgs };