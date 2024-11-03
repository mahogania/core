/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScenarioWhereUniqueInput } from "../../scenario/base/ScenarioWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ScenarioUpdateManyWithoutUsersInput {
  @Field(() => [ScenarioWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScenarioWhereUniqueInput],
  })
  connect?: Array<ScenarioWhereUniqueInput>;

  @Field(() => [ScenarioWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScenarioWhereUniqueInput],
  })
  disconnect?: Array<ScenarioWhereUniqueInput>;

  @Field(() => [ScenarioWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScenarioWhereUniqueInput],
  })
  set?: Array<ScenarioWhereUniqueInput>;
}

export { ScenarioUpdateManyWithoutUsersInput as ScenarioUpdateManyWithoutUsersInput };
