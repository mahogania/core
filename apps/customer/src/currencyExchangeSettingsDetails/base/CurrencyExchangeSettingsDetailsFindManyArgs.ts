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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CurrencyExchangeSettingsDetailsOrderByInput } from "./CurrencyExchangeSettingsDetailsOrderByInput";

@ArgsType()
class CurrencyExchangeSettingsDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CurrencyExchangeSettingsDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CurrencyExchangeSettingsDetailsWhereInput, { nullable: true })
  @Type(() => CurrencyExchangeSettingsDetailsWhereInput)
  where?: CurrencyExchangeSettingsDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [CurrencyExchangeSettingsDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CurrencyExchangeSettingsDetailsOrderByInput], {
    nullable: true,
  })
  @Type(() => CurrencyExchangeSettingsDetailsOrderByInput)
  orderBy?: Array<CurrencyExchangeSettingsDetailsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CurrencyExchangeSettingsDetailsFindManyArgs as CurrencyExchangeSettingsDetailsFindManyArgs };