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
import { ShipmentParcelTemplateWhereInput } from "./ShipmentParcelTemplateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ShipmentParcelTemplateCountArgs {
  @ApiProperty({
    required: false,
    type: () => ShipmentParcelTemplateWhereInput,
  })
  @Field(() => ShipmentParcelTemplateWhereInput, { nullable: true })
  @Type(() => ShipmentParcelTemplateWhereInput)
  where?: ShipmentParcelTemplateWhereInput;
}

export { ShipmentParcelTemplateCountArgs as ShipmentParcelTemplateCountArgs };
