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
import { EmailUnsubscribeWhereInput } from "./EmailUnsubscribeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EmailUnsubscribeCountArgs {
  @ApiProperty({
    required: false,
    type: () => EmailUnsubscribeWhereInput,
  })
  @Field(() => EmailUnsubscribeWhereInput, { nullable: true })
  @Type(() => EmailUnsubscribeWhereInput)
  where?: EmailUnsubscribeWhereInput;
}

export { EmailUnsubscribeCountArgs as EmailUnsubscribeCountArgs };