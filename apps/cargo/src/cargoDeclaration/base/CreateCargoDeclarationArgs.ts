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
import { CargoDeclarationCreateInput } from "./CargoDeclarationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCargoDeclarationArgs {
  @ApiProperty({
    required: true,
    type: () => CargoDeclarationCreateInput,
  })
  @ValidateNested()
  @Type(() => CargoDeclarationCreateInput)
  @Field(() => CargoDeclarationCreateInput, { nullable: false })
  data!: CargoDeclarationCreateInput;
}

export { CreateCargoDeclarationArgs as CreateCargoDeclarationArgs };
