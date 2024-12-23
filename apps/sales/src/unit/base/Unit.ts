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
import { Address } from "../../address/base/Address";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Catalog } from "../../catalog/base/Catalog";
import { Business } from "../../business/base/Business";
import { Deal } from "../../deal/base/Deal";
import { Opportunity } from "../../opportunity/base/Opportunity";
import { Threat } from "../../threat/base/Threat";

@ObjectType()
class Unit {
  @ApiProperty({
    required: false,
    type: () => Address,
  })
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  address?: Address | null;

  @ApiProperty({
    required: false,
    type: () => [Catalog],
  })
  @ValidateNested()
  @Type(() => Catalog)
  @IsOptional()
  catalogs?: Array<Catalog>;

  @ApiProperty({
    required: false,
    type: () => Business,
  })
  @ValidateNested()
  @Type(() => Business)
  @IsOptional()
  competitor?: Business | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Deal],
  })
  @ValidateNested()
  @Type(() => Deal)
  @IsOptional()
  deals?: Array<Deal>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Opportunity],
  })
  @ValidateNested()
  @Type(() => Opportunity)
  @IsOptional()
  opportunities?: Array<Opportunity>;

  @ApiProperty({
    required: false,
    type: () => [Threat],
  })
  @ValidateNested()
  @Type(() => Threat)
  @IsOptional()
  threats?: Array<Threat>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Unit as Unit };
