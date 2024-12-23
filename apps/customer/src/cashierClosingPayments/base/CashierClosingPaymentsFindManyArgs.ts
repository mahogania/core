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
import { CashierClosingPaymentsWhereInput } from "./CashierClosingPaymentsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CashierClosingPaymentsOrderByInput } from "./CashierClosingPaymentsOrderByInput";

@ArgsType()
class CashierClosingPaymentsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CashierClosingPaymentsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CashierClosingPaymentsWhereInput, { nullable: true })
  @Type(() => CashierClosingPaymentsWhereInput)
  where?: CashierClosingPaymentsWhereInput;

  @ApiProperty({
    required: false,
    type: [CashierClosingPaymentsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CashierClosingPaymentsOrderByInput], { nullable: true })
  @Type(() => CashierClosingPaymentsOrderByInput)
  orderBy?: Array<CashierClosingPaymentsOrderByInput>;

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

export { CashierClosingPaymentsFindManyArgs as CashierClosingPaymentsFindManyArgs };
