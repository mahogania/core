/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AreaQuestTriggerWhereUniqueInput } from "../../areaQuestTrigger/base/AreaQuestTriggerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AreaQuestTriggerUpdateManyWithoutAreasInput {
  @Field(() => [AreaQuestTriggerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AreaQuestTriggerWhereUniqueInput],
  })
  connect?: Array<AreaQuestTriggerWhereUniqueInput>;

  @Field(() => [AreaQuestTriggerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AreaQuestTriggerWhereUniqueInput],
  })
  disconnect?: Array<AreaQuestTriggerWhereUniqueInput>;

  @Field(() => [AreaQuestTriggerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AreaQuestTriggerWhereUniqueInput],
  })
  set?: Array<AreaQuestTriggerWhereUniqueInput>;
}

export { AreaQuestTriggerUpdateManyWithoutAreasInput as AreaQuestTriggerUpdateManyWithoutAreasInput };
