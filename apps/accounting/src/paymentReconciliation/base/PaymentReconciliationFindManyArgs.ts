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
import { PaymentReconciliationWhereInput } from "./PaymentReconciliationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentReconciliationOrderByInput } from "./PaymentReconciliationOrderByInput";

@ArgsType()
class PaymentReconciliationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentReconciliationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentReconciliationWhereInput, { nullable: true })
  @Type(() => PaymentReconciliationWhereInput)
  where?: PaymentReconciliationWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentReconciliationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentReconciliationOrderByInput], { nullable: true })
  @Type(() => PaymentReconciliationOrderByInput)
  orderBy?: Array<PaymentReconciliationOrderByInput>;

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

export { PaymentReconciliationFindManyArgs as PaymentReconciliationFindManyArgs };
