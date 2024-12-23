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
import { ShipmentParcelTemplateWhereUniqueInput } from "./ShipmentParcelTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShipmentParcelTemplateUpdateInput } from "./ShipmentParcelTemplateUpdateInput";

@ArgsType()
class UpdateShipmentParcelTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => ShipmentParcelTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShipmentParcelTemplateWhereUniqueInput)
  @Field(() => ShipmentParcelTemplateWhereUniqueInput, { nullable: false })
  where!: ShipmentParcelTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShipmentParcelTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShipmentParcelTemplateUpdateInput)
  @Field(() => ShipmentParcelTemplateUpdateInput, { nullable: false })
  data!: ShipmentParcelTemplateUpdateInput;
}

export { UpdateShipmentParcelTemplateArgs as UpdateShipmentParcelTemplateArgs };
