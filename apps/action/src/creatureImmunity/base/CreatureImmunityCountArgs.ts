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
import { CreatureImmunityWhereInput } from "./CreatureImmunityWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CreatureImmunityCountArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureImmunityWhereInput,
  })
  @Field(() => CreatureImmunityWhereInput, { nullable: true })
  @Type(() => CreatureImmunityWhereInput)
  where?: CreatureImmunityWhereInput;
}

export { CreatureImmunityCountArgs as CreatureImmunityCountArgs };
