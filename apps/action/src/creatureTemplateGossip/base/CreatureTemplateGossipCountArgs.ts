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
import { CreatureTemplateGossipWhereInput } from "./CreatureTemplateGossipWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CreatureTemplateGossipCountArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateGossipWhereInput,
  })
  @Field(() => CreatureTemplateGossipWhereInput, { nullable: true })
  @Type(() => CreatureTemplateGossipWhereInput)
  where?: CreatureTemplateGossipWhereInput;
}

export { CreatureTemplateGossipCountArgs as CreatureTemplateGossipCountArgs };
