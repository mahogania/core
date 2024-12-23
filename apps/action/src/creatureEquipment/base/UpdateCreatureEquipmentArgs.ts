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
import { CreatureEquipmentWhereUniqueInput } from "./CreatureEquipmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatureEquipmentUpdateInput } from "./CreatureEquipmentUpdateInput";

@ArgsType()
class UpdateCreatureEquipmentArgs {
  @ApiProperty({
    required: true,
    type: () => CreatureEquipmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureEquipmentWhereUniqueInput)
  @Field(() => CreatureEquipmentWhereUniqueInput, { nullable: false })
  where!: CreatureEquipmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CreatureEquipmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => CreatureEquipmentUpdateInput)
  @Field(() => CreatureEquipmentUpdateInput, { nullable: false })
  data!: CreatureEquipmentUpdateInput;
}

export { UpdateCreatureEquipmentArgs as UpdateCreatureEquipmentArgs };
