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
import { StockReconciliationItemWhereInput } from "./StockReconciliationItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StockReconciliationItemOrderByInput } from "./StockReconciliationItemOrderByInput";

@ArgsType()
class StockReconciliationItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StockReconciliationItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StockReconciliationItemWhereInput, { nullable: true })
  @Type(() => StockReconciliationItemWhereInput)
  where?: StockReconciliationItemWhereInput;

  @ApiProperty({
    required: false,
    type: [StockReconciliationItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StockReconciliationItemOrderByInput], { nullable: true })
  @Type(() => StockReconciliationItemOrderByInput)
  orderBy?: Array<StockReconciliationItemOrderByInput>;

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

export { StockReconciliationItemFindManyArgs as StockReconciliationItemFindManyArgs };
