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
import { CreatureModelInfoWhereInput } from "./CreatureModelInfoWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CreatureModelInfoCountArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureModelInfoWhereInput,
  })
  @Field(() => CreatureModelInfoWhereInput, { nullable: true })
  @Type(() => CreatureModelInfoWhereInput)
  where?: CreatureModelInfoWhereInput;
}

export { CreatureModelInfoCountArgs as CreatureModelInfoCountArgs };
