/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Discount } from "../../discount/base/Discount";
import { Feature } from "../../feature/base/Feature";
import { Price } from "../../price/base/Price";
import { Product } from "../../product/base/Product";

@ObjectType()
class Option {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Discount,
  })
  @ValidateNested()
  @Type(() => Discount)
  @IsOptional()
  discount?: Discount | null;

  @ApiProperty({
    required: false,
    type: () => Feature,
  })
  @ValidateNested()
  @Type(() => Feature)
  @IsOptional()
  feature?: Feature | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Price,
  })
  @ValidateNested()
  @Type(() => Price)
  @IsOptional()
  price?: Price | null;

  @ApiProperty({
    required: false,
    type: () => Product,
  })
  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  product?: Product | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Option as Option };
