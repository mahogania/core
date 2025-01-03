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
import { CargoDeclarationTrailerWhereUniqueInput } from "./CargoDeclarationTrailerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CargoDeclarationTrailerUpdateInput } from "./CargoDeclarationTrailerUpdateInput";

@ArgsType()
class UpdateCargoDeclarationTrailerArgs {
  @ApiProperty({
    required: true,
    type: () => CargoDeclarationTrailerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CargoDeclarationTrailerWhereUniqueInput)
  @Field(() => CargoDeclarationTrailerWhereUniqueInput, { nullable: false })
  where!: CargoDeclarationTrailerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CargoDeclarationTrailerUpdateInput,
  })
  @ValidateNested()
  @Type(() => CargoDeclarationTrailerUpdateInput)
  @Field(() => CargoDeclarationTrailerUpdateInput, { nullable: false })
  data!: CargoDeclarationTrailerUpdateInput;
}

export { UpdateCargoDeclarationTrailerArgs as UpdateCargoDeclarationTrailerArgs };
