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
import { AreaTriggerTavernWhereInput } from "./AreaTriggerTavernWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AreaTriggerTavernCountArgs {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerTavernWhereInput,
  })
  @Field(() => AreaTriggerTavernWhereInput, { nullable: true })
  @Type(() => AreaTriggerTavernWhereInput)
  where?: AreaTriggerTavernWhereInput;
}

export { AreaTriggerTavernCountArgs as AreaTriggerTavernCountArgs };
