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
import { CreatureTextLocaleWhereInput } from "./CreatureTextLocaleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CreatureTextLocaleCountArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureTextLocaleWhereInput,
  })
  @Field(() => CreatureTextLocaleWhereInput, { nullable: true })
  @Type(() => CreatureTextLocaleWhereInput)
  where?: CreatureTextLocaleWhereInput;
}

export { CreatureTextLocaleCountArgs as CreatureTextLocaleCountArgs };