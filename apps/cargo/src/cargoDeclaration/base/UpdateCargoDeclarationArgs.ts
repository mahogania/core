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
import { CargoDeclarationWhereUniqueInput } from "./CargoDeclarationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CargoDeclarationUpdateInput } from "./CargoDeclarationUpdateInput";

@ArgsType()
class UpdateCargoDeclarationArgs {
  @ApiProperty({
    required: true,
    type: () => CargoDeclarationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CargoDeclarationWhereUniqueInput)
  @Field(() => CargoDeclarationWhereUniqueInput, { nullable: false })
  where!: CargoDeclarationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CargoDeclarationUpdateInput,
  })
  @ValidateNested()
  @Type(() => CargoDeclarationUpdateInput)
  @Field(() => CargoDeclarationUpdateInput, { nullable: false })
  data!: CargoDeclarationUpdateInput;
}

export { UpdateCargoDeclarationArgs as UpdateCargoDeclarationArgs };