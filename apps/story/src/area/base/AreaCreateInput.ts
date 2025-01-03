/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaQuestTriggerCreateNestedManyWithoutAreasInput } from "./AreaQuestTriggerCreateNestedManyWithoutAreasInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AreaScenarioTriggerCreateNestedManyWithoutAreasInput } from "./AreaScenarioTriggerCreateNestedManyWithoutAreasInput";
import { AreaTeleportTriggerCreateNestedManyWithoutAreasInput } from "./AreaTeleportTriggerCreateNestedManyWithoutAreasInput";
import { ZoneWhereUniqueInput } from "../../zone/base/ZoneWhereUniqueInput";

@InputType()
class AreaCreateInput {
  @ApiProperty({
    required: false,
    type: () => AreaQuestTriggerCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => AreaQuestTriggerCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => AreaQuestTriggerCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  areaQuestTriggers?: AreaQuestTriggerCreateNestedManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => AreaScenarioTriggerCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => AreaScenarioTriggerCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => AreaScenarioTriggerCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  areaScenarioTriggers?: AreaScenarioTriggerCreateNestedManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => AreaTeleportTriggerCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => AreaTeleportTriggerCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => AreaTeleportTriggerCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  areaTeleportTriggers?: AreaTeleportTriggerCreateNestedManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => ZoneWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ZoneWhereUniqueInput)
  @IsOptional()
  @Field(() => ZoneWhereUniqueInput, {
    nullable: true,
  })
  zone?: ZoneWhereUniqueInput | null;
}

export { AreaCreateInput as AreaCreateInput };
