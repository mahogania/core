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
import { ScenarioRegionWhereUniqueInput } from "./ScenarioRegionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ScenarioRegionUpdateInput } from "./ScenarioRegionUpdateInput";

@ArgsType()
class UpdateScenarioRegionArgs {
  @ApiProperty({
    required: true,
    type: () => ScenarioRegionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScenarioRegionWhereUniqueInput)
  @Field(() => ScenarioRegionWhereUniqueInput, { nullable: false })
  where!: ScenarioRegionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ScenarioRegionUpdateInput,
  })
  @ValidateNested()
  @Type(() => ScenarioRegionUpdateInput)
  @Field(() => ScenarioRegionUpdateInput, { nullable: false })
  data!: ScenarioRegionUpdateInput;
}

export { UpdateScenarioRegionArgs as UpdateScenarioRegionArgs };
