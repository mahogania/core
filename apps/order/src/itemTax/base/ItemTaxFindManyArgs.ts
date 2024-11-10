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
import { ItemTaxWhereInput } from "./ItemTaxWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemTaxOrderByInput } from "./ItemTaxOrderByInput";

@ArgsType()
class ItemTaxFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemTaxWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItemTaxWhereInput, { nullable: true })
  @Type(() => ItemTaxWhereInput)
  where?: ItemTaxWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemTaxOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItemTaxOrderByInput], { nullable: true })
  @Type(() => ItemTaxOrderByInput)
  orderBy?: Array<ItemTaxOrderByInput>;

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

export { ItemTaxFindManyArgs as ItemTaxFindManyArgs };
