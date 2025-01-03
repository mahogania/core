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
import { PosInvoiceWhereInput } from "./PosInvoiceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PosInvoiceOrderByInput } from "./PosInvoiceOrderByInput";

@ArgsType()
class PosInvoiceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PosInvoiceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PosInvoiceWhereInput, { nullable: true })
  @Type(() => PosInvoiceWhereInput)
  where?: PosInvoiceWhereInput;

  @ApiProperty({
    required: false,
    type: [PosInvoiceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PosInvoiceOrderByInput], { nullable: true })
  @Type(() => PosInvoiceOrderByInput)
  orderBy?: Array<PosInvoiceOrderByInput>;

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

export { PosInvoiceFindManyArgs as PosInvoiceFindManyArgs };
