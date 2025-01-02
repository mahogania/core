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
import { PaymentLedgerEntryWhereInput } from "./PaymentLedgerEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentLedgerEntryOrderByInput } from "./PaymentLedgerEntryOrderByInput";

@ArgsType()
class PaymentLedgerEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentLedgerEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentLedgerEntryWhereInput, { nullable: true })
  @Type(() => PaymentLedgerEntryWhereInput)
  where?: PaymentLedgerEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentLedgerEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentLedgerEntryOrderByInput], { nullable: true })
  @Type(() => PaymentLedgerEntryOrderByInput)
  orderBy?: Array<PaymentLedgerEntryOrderByInput>;

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

export { PaymentLedgerEntryFindManyArgs as PaymentLedgerEntryFindManyArgs };