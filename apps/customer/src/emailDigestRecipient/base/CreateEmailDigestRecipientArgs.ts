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
import { EmailDigestRecipientCreateInput } from "./EmailDigestRecipientCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEmailDigestRecipientArgs {
  @ApiProperty({
    required: true,
    type: () => EmailDigestRecipientCreateInput,
  })
  @ValidateNested()
  @Type(() => EmailDigestRecipientCreateInput)
  @Field(() => EmailDigestRecipientCreateInput, { nullable: false })
  data!: EmailDigestRecipientCreateInput;
}

export { CreateEmailDigestRecipientArgs as CreateEmailDigestRecipientArgs };
