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
import { ShipmentDeliveryNoteWhereUniqueInput } from "./ShipmentDeliveryNoteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShipmentDeliveryNoteUpdateInput } from "./ShipmentDeliveryNoteUpdateInput";

@ArgsType()
class UpdateShipmentDeliveryNoteArgs {
  @ApiProperty({
    required: true,
    type: () => ShipmentDeliveryNoteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShipmentDeliveryNoteWhereUniqueInput)
  @Field(() => ShipmentDeliveryNoteWhereUniqueInput, { nullable: false })
  where!: ShipmentDeliveryNoteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShipmentDeliveryNoteUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShipmentDeliveryNoteUpdateInput)
  @Field(() => ShipmentDeliveryNoteUpdateInput, { nullable: false })
  data!: ShipmentDeliveryNoteUpdateInput;
}

export { UpdateShipmentDeliveryNoteArgs as UpdateShipmentDeliveryNoteArgs };