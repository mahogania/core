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
import { AssetCapitalizationAssetItemWhereInput } from "./AssetCapitalizationAssetItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssetCapitalizationAssetItemOrderByInput } from "./AssetCapitalizationAssetItemOrderByInput";

@ArgsType()
class AssetCapitalizationAssetItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssetCapitalizationAssetItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssetCapitalizationAssetItemWhereInput, { nullable: true })
  @Type(() => AssetCapitalizationAssetItemWhereInput)
  where?: AssetCapitalizationAssetItemWhereInput;

  @ApiProperty({
    required: false,
    type: [AssetCapitalizationAssetItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssetCapitalizationAssetItemOrderByInput], { nullable: true })
  @Type(() => AssetCapitalizationAssetItemOrderByInput)
  orderBy?: Array<AssetCapitalizationAssetItemOrderByInput>;

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

export { AssetCapitalizationAssetItemFindManyArgs as AssetCapitalizationAssetItemFindManyArgs };
