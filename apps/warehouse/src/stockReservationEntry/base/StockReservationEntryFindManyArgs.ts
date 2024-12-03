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
import { StockReservationEntryWhereInput } from "./StockReservationEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StockReservationEntryOrderByInput } from "./StockReservationEntryOrderByInput";

@ArgsType()
class StockReservationEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StockReservationEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StockReservationEntryWhereInput, { nullable: true })
  @Type(() => StockReservationEntryWhereInput)
  where?: StockReservationEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [StockReservationEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StockReservationEntryOrderByInput], { nullable: true })
  @Type(() => StockReservationEntryOrderByInput)
  orderBy?: Array<StockReservationEntryOrderByInput>;

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

export { StockReservationEntryFindManyArgs as StockReservationEntryFindManyArgs };
