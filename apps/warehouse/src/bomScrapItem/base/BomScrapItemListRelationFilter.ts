/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BomScrapItemWhereInput } from "./BomScrapItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BomScrapItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BomScrapItemWhereInput,
  })
  @ValidateNested()
  @Type(() => BomScrapItemWhereInput)
  @IsOptional()
  @Field(() => BomScrapItemWhereInput, {
    nullable: true,
  })
  every?: BomScrapItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => BomScrapItemWhereInput,
  })
  @ValidateNested()
  @Type(() => BomScrapItemWhereInput)
  @IsOptional()
  @Field(() => BomScrapItemWhereInput, {
    nullable: true,
  })
  some?: BomScrapItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => BomScrapItemWhereInput,
  })
  @ValidateNested()
  @Type(() => BomScrapItemWhereInput)
  @IsOptional()
  @Field(() => BomScrapItemWhereInput, {
    nullable: true,
  })
  none?: BomScrapItemWhereInput;
}
export { BomScrapItemListRelationFilter as BomScrapItemListRelationFilter };
