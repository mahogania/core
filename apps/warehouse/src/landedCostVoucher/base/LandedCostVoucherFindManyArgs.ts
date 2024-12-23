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
import { LandedCostVoucherWhereInput } from "./LandedCostVoucherWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LandedCostVoucherOrderByInput } from "./LandedCostVoucherOrderByInput";

@ArgsType()
class LandedCostVoucherFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LandedCostVoucherWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LandedCostVoucherWhereInput, { nullable: true })
  @Type(() => LandedCostVoucherWhereInput)
  where?: LandedCostVoucherWhereInput;

  @ApiProperty({
    required: false,
    type: [LandedCostVoucherOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LandedCostVoucherOrderByInput], { nullable: true })
  @Type(() => LandedCostVoucherOrderByInput)
  orderBy?: Array<LandedCostVoucherOrderByInput>;

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

export { LandedCostVoucherFindManyArgs as LandedCostVoucherFindManyArgs };
