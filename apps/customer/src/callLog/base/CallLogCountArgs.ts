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
import { CallLogWhereInput } from "./CallLogWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CallLogCountArgs {
  @ApiProperty({
    required: false,
    type: () => CallLogWhereInput,
  })
  @Field(() => CallLogWhereInput, { nullable: true })
  @Type(() => CallLogWhereInput)
  where?: CallLogWhereInput;
}

export { CallLogCountArgs as CallLogCountArgs };
