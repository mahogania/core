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
import { CargoDeclarationWhereInput } from "./CargoDeclarationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CargoDeclarationCountArgs {
  @ApiProperty({
    required: false,
    type: () => CargoDeclarationWhereInput,
  })
  @Field(() => CargoDeclarationWhereInput, { nullable: true })
  @Type(() => CargoDeclarationWhereInput)
  where?: CargoDeclarationWhereInput;
}

export { CargoDeclarationCountArgs as CargoDeclarationCountArgs };
