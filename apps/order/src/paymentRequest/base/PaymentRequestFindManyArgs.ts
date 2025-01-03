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
import { PaymentRequestWhereInput } from "./PaymentRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PaymentRequestOrderByInput } from "./PaymentRequestOrderByInput";

@ArgsType()
class PaymentRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PaymentRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PaymentRequestWhereInput, { nullable: true })
  @Type(() => PaymentRequestWhereInput)
  where?: PaymentRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [PaymentRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PaymentRequestOrderByInput], { nullable: true })
  @Type(() => PaymentRequestOrderByInput)
  orderBy?: Array<PaymentRequestOrderByInput>;

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

export { PaymentRequestFindManyArgs as PaymentRequestFindManyArgs };
