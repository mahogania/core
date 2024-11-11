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
import { PaymentEntryDeductionWhereInput } from "./PaymentEntryDeductionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentEntryDeductionOrderByInput } from "./PaymentEntryDeductionOrderByInput";

@ArgsType()
class PaymentEntryDeductionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentEntryDeductionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentEntryDeductionWhereInput, { nullable: true })
  @Type(() => PaymentEntryDeductionWhereInput)
  where?: PaymentEntryDeductionWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentEntryDeductionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentEntryDeductionOrderByInput], { nullable: true })
  @Type(() => PaymentEntryDeductionOrderByInput)
  orderBy?: Array<PaymentEntryDeductionOrderByInput>;

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

export { PaymentEntryDeductionFindManyArgs as PaymentEntryDeductionFindManyArgs };