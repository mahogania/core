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
import { QuotationItemWhereInput } from "./QuotationItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QuotationItemOrderByInput } from "./QuotationItemOrderByInput";

@ArgsType()
class QuotationItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QuotationItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QuotationItemWhereInput, { nullable: true })
  @Type(() => QuotationItemWhereInput)
  where?: QuotationItemWhereInput;

  @ApiProperty({
    required: false,
    type: [QuotationItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QuotationItemOrderByInput], { nullable: true })
  @Type(() => QuotationItemOrderByInput)
  orderBy?: Array<QuotationItemOrderByInput>;

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

export { QuotationItemFindManyArgs as QuotationItemFindManyArgs };
