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
import { CreatureSummonGroupsWhereInput } from "./CreatureSummonGroupsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CreatureSummonGroupsCountArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureSummonGroupsWhereInput,
  })
  @Field(() => CreatureSummonGroupsWhereInput, { nullable: true })
  @Type(() => CreatureSummonGroupsWhereInput)
  where?: CreatureSummonGroupsWhereInput;
}

export { CreatureSummonGroupsCountArgs as CreatureSummonGroupsCountArgs };
