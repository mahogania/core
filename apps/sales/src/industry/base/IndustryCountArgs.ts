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
import { IndustryWhereInput } from "./IndustryWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class IndustryCountArgs {
  @ApiProperty({
    required: false,
    type: () => IndustryWhereInput,
  })
  @Field(() => IndustryWhereInput, { nullable: true })
  @Type(() => IndustryWhereInput)
  where?: IndustryWhereInput;
}

export { IndustryCountArgs as IndustryCountArgs };