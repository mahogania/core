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
import { ProspectingLootTemplateWhereInput } from "./ProspectingLootTemplateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProspectingLootTemplateCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProspectingLootTemplateWhereInput,
  })
  @Field(() => ProspectingLootTemplateWhereInput, { nullable: true })
  @Type(() => ProspectingLootTemplateWhereInput)
  where?: ProspectingLootTemplateWhereInput;
}

export { ProspectingLootTemplateCountArgs as ProspectingLootTemplateCountArgs };