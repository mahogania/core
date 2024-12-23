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
import { AreaScenarioTriggerWhereUniqueInput } from "./AreaScenarioTriggerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAreaScenarioTriggerArgs {
  @ApiProperty({
    required: true,
    type: () => AreaScenarioTriggerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaScenarioTriggerWhereUniqueInput)
  @Field(() => AreaScenarioTriggerWhereUniqueInput, { nullable: false })
  where!: AreaScenarioTriggerWhereUniqueInput;
}

export { DeleteAreaScenarioTriggerArgs as DeleteAreaScenarioTriggerArgs };
