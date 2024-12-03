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
import { PurchaseTaxesAndChargesTemplateWhereInput } from "./PurchaseTaxesAndChargesTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PurchaseTaxesAndChargesTemplateOrderByInput } from "./PurchaseTaxesAndChargesTemplateOrderByInput";

@ArgsType()
class PurchaseTaxesAndChargesTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchaseTaxesAndChargesTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PurchaseTaxesAndChargesTemplateWhereInput, { nullable: true })
  @Type(() => PurchaseTaxesAndChargesTemplateWhereInput)
  where?: PurchaseTaxesAndChargesTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [PurchaseTaxesAndChargesTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PurchaseTaxesAndChargesTemplateOrderByInput], {
    nullable: true,
  })
  @Type(() => PurchaseTaxesAndChargesTemplateOrderByInput)
  orderBy?: Array<PurchaseTaxesAndChargesTemplateOrderByInput>;

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

export { PurchaseTaxesAndChargesTemplateFindManyArgs as PurchaseTaxesAndChargesTemplateFindManyArgs };
