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
import { GameEventModelEquipWhereUniqueInput } from "./GameEventModelEquipWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GameEventModelEquipUpdateInput } from "./GameEventModelEquipUpdateInput";

@ArgsType()
class UpdateGameEventModelEquipArgs {
  @ApiProperty({
    required: true,
    type: () => GameEventModelEquipWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameEventModelEquipWhereUniqueInput)
  @Field(() => GameEventModelEquipWhereUniqueInput, { nullable: false })
  where!: GameEventModelEquipWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GameEventModelEquipUpdateInput,
  })
  @ValidateNested()
  @Type(() => GameEventModelEquipUpdateInput)
  @Field(() => GameEventModelEquipUpdateInput, { nullable: false })
  data!: GameEventModelEquipUpdateInput;
}

export { UpdateGameEventModelEquipArgs as UpdateGameEventModelEquipArgs };
