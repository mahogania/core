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
import { BankTransactionPaymentsWhereInput } from "./BankTransactionPaymentsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BankTransactionPaymentsOrderByInput } from "./BankTransactionPaymentsOrderByInput";

@ArgsType()
class BankTransactionPaymentsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BankTransactionPaymentsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BankTransactionPaymentsWhereInput, { nullable: true })
  @Type(() => BankTransactionPaymentsWhereInput)
  where?: BankTransactionPaymentsWhereInput;

  @ApiProperty({
    required: false,
    type: [BankTransactionPaymentsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BankTransactionPaymentsOrderByInput], { nullable: true })
  @Type(() => BankTransactionPaymentsOrderByInput)
  orderBy?: Array<BankTransactionPaymentsOrderByInput>;

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

export { BankTransactionPaymentsFindManyArgs as BankTransactionPaymentsFindManyArgs };