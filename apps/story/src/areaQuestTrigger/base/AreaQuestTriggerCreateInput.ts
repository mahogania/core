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
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuestWhereUniqueInput } from "../../quest/base/QuestWhereUniqueInput";

@InputType()
class AreaQuestTriggerCreateInput {
  @ApiProperty({
    required: false,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @IsOptional()
  @Field(() => AreaWhereUniqueInput, {
    nullable: true,
  })
  area?: AreaWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestWhereUniqueInput, {
    nullable: true,
  })
  quest?: QuestWhereUniqueInput | null;
}

export { AreaQuestTriggerCreateInput as AreaQuestTriggerCreateInput };