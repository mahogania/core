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
import { AssetFinanceBookWhereInput } from "./AssetFinanceBookWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssetFinanceBookOrderByInput } from "./AssetFinanceBookOrderByInput";

@ArgsType()
class AssetFinanceBookFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssetFinanceBookWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssetFinanceBookWhereInput, { nullable: true })
  @Type(() => AssetFinanceBookWhereInput)
  where?: AssetFinanceBookWhereInput;

  @ApiProperty({
    required: false,
    type: [AssetFinanceBookOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssetFinanceBookOrderByInput], { nullable: true })
  @Type(() => AssetFinanceBookOrderByInput)
  orderBy?: Array<AssetFinanceBookOrderByInput>;

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

export { AssetFinanceBookFindManyArgs as AssetFinanceBookFindManyArgs };