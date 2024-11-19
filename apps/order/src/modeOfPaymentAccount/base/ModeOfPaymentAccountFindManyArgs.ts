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
import { ModeOfPaymentAccountWhereInput } from "./ModeOfPaymentAccountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ModeOfPaymentAccountOrderByInput } from "./ModeOfPaymentAccountOrderByInput";

@ArgsType()
class ModeOfPaymentAccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ModeOfPaymentAccountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ModeOfPaymentAccountWhereInput, { nullable: true })
  @Type(() => ModeOfPaymentAccountWhereInput)
  where?: ModeOfPaymentAccountWhereInput;

  @ApiProperty({
    required: false,
    type: [ModeOfPaymentAccountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ModeOfPaymentAccountOrderByInput], { nullable: true })
  @Type(() => ModeOfPaymentAccountOrderByInput)
  orderBy?: Array<ModeOfPaymentAccountOrderByInput>;

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

export { ModeOfPaymentAccountFindManyArgs as ModeOfPaymentAccountFindManyArgs };
