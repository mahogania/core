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
import { CurrencyExchangeSettingsDetailsWhereInput } from "./CurrencyExchangeSettingsDetailsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CurrencyExchangeSettingsDetailsCountArgs {
  @ApiProperty({
    required: false,
    type: () => CurrencyExchangeSettingsDetailsWhereInput,
  })
  @Field(() => CurrencyExchangeSettingsDetailsWhereInput, { nullable: true })
  @Type(() => CurrencyExchangeSettingsDetailsWhereInput)
  where?: CurrencyExchangeSettingsDetailsWhereInput;
}

export { CurrencyExchangeSettingsDetailsCountArgs as CurrencyExchangeSettingsDetailsCountArgs };
