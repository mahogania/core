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
import { Business } from "../../business/base/Business";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Contact } from "../../contact/base/Contact";
import { Order } from "../../order/base/Order";
import { Proposal } from "../../proposal/base/Proposal";

@ObjectType()
class Opportunity {
  @ApiProperty({
    required: false,
    type: () => [Business],
  })
  @ValidateNested()
  @Type(() => Business)
  @IsOptional()
  competitor?: Array<Business>;

  @ApiProperty({
    required: false,
    type: () => Contact,
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contact?: Contact | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Array<Order>;

  @ApiProperty({
    required: false,
    type: () => [Proposal],
  })
  @ValidateNested()
  @Type(() => Proposal)
  @IsOptional()
  proposals?: Array<Proposal>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Opportunity as Opportunity };
