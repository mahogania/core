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
import { QuestUpdateManyWithoutEpicsInput } from "./QuestUpdateManyWithoutEpicsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EpicUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QuestUpdateManyWithoutEpicsInput,
  })
  @ValidateNested()
  @Type(() => QuestUpdateManyWithoutEpicsInput)
  @IsOptional()
  @Field(() => QuestUpdateManyWithoutEpicsInput, {
    nullable: true,
  })
  quests?: QuestUpdateManyWithoutEpicsInput;
}

export { EpicUpdateInput as EpicUpdateInput };
