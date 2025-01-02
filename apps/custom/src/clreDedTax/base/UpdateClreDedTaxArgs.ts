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
import { ClreDedTaxWhereUniqueInput } from "./ClreDedTaxWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClreDedTaxUpdateInput } from "./ClreDedTaxUpdateInput";

@ArgsType()
class UpdateClreDedTaxArgs {
  @ApiProperty({
    required: true,
    type: () => ClreDedTaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClreDedTaxWhereUniqueInput)
  @Field(() => ClreDedTaxWhereUniqueInput, { nullable: false })
  where!: ClreDedTaxWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClreDedTaxUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClreDedTaxUpdateInput)
  @Field(() => ClreDedTaxUpdateInput, { nullable: false })
  data!: ClreDedTaxUpdateInput;
}

export { UpdateClreDedTaxArgs as UpdateClreDedTaxArgs };
