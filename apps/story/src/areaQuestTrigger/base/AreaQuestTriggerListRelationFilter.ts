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
import { AreaQuestTriggerWhereInput } from "./AreaQuestTriggerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AreaQuestTriggerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AreaQuestTriggerWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaQuestTriggerWhereInput)
  @IsOptional()
  @Field(() => AreaQuestTriggerWhereInput, {
    nullable: true,
  })
  every?: AreaQuestTriggerWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaQuestTriggerWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaQuestTriggerWhereInput)
  @IsOptional()
  @Field(() => AreaQuestTriggerWhereInput, {
    nullable: true,
  })
  some?: AreaQuestTriggerWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaQuestTriggerWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaQuestTriggerWhereInput)
  @IsOptional()
  @Field(() => AreaQuestTriggerWhereInput, {
    nullable: true,
  })
  none?: AreaQuestTriggerWhereInput;
}
export { AreaQuestTriggerListRelationFilter as AreaQuestTriggerListRelationFilter };
