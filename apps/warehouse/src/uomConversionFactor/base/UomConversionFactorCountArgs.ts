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
import { UomConversionFactorWhereInput } from "./UomConversionFactorWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UomConversionFactorCountArgs {
  @ApiProperty({
    required: false,
    type: () => UomConversionFactorWhereInput,
  })
  @Field(() => UomConversionFactorWhereInput, { nullable: true })
  @Type(() => UomConversionFactorWhereInput)
  where?: UomConversionFactorWhereInput;
}

export { UomConversionFactorCountArgs as UomConversionFactorCountArgs };