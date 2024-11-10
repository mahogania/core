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
import { CurrencyExchangeSettingsResultWhereUniqueInput } from "./CurrencyExchangeSettingsResultWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CurrencyExchangeSettingsResultUpdateInput } from "./CurrencyExchangeSettingsResultUpdateInput";

@ArgsType()
class UpdateCurrencyExchangeSettingsResultArgs {
  @ApiProperty({
    required: true,
    type: () => CurrencyExchangeSettingsResultWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyExchangeSettingsResultWhereUniqueInput)
  @Field(() => CurrencyExchangeSettingsResultWhereUniqueInput, {
    nullable: false,
  })
  where!: CurrencyExchangeSettingsResultWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CurrencyExchangeSettingsResultUpdateInput,
  })
  @ValidateNested()
  @Type(() => CurrencyExchangeSettingsResultUpdateInput)
  @Field(() => CurrencyExchangeSettingsResultUpdateInput, { nullable: false })
  data!: CurrencyExchangeSettingsResultUpdateInput;
}

export { UpdateCurrencyExchangeSettingsResultArgs as UpdateCurrencyExchangeSettingsResultArgs };
