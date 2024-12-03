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
import { PosInvoiceReferenceWhereInput } from "./PosInvoiceReferenceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PosInvoiceReferenceOrderByInput } from "./PosInvoiceReferenceOrderByInput";

@ArgsType()
class PosInvoiceReferenceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PosInvoiceReferenceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PosInvoiceReferenceWhereInput, { nullable: true })
  @Type(() => PosInvoiceReferenceWhereInput)
  where?: PosInvoiceReferenceWhereInput;

  @ApiProperty({
    required: false,
    type: [PosInvoiceReferenceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PosInvoiceReferenceOrderByInput], { nullable: true })
  @Type(() => PosInvoiceReferenceOrderByInput)
  orderBy?: Array<PosInvoiceReferenceOrderByInput>;

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

export { PosInvoiceReferenceFindManyArgs as PosInvoiceReferenceFindManyArgs };
