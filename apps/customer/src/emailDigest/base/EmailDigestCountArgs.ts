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
import { EmailDigestWhereInput } from "./EmailDigestWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EmailDigestCountArgs {
  @ApiProperty({
    required: false,
    type: () => EmailDigestWhereInput,
  })
  @Field(() => EmailDigestWhereInput, { nullable: true })
  @Type(() => EmailDigestWhereInput)
  where?: EmailDigestWhereInput;
}

export { EmailDigestCountArgs as EmailDigestCountArgs };
