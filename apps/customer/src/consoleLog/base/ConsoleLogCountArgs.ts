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
import { ConsoleLogWhereInput } from "./ConsoleLogWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ConsoleLogCountArgs {
  @ApiProperty({
    required: false,
    type: () => ConsoleLogWhereInput,
  })
  @Field(() => ConsoleLogWhereInput, { nullable: true })
  @Type(() => ConsoleLogWhereInput)
  where?: ConsoleLogWhereInput;
}

export { ConsoleLogCountArgs as ConsoleLogCountArgs };