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
import { AssetCategoryWhereInput } from "./AssetCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssetCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssetCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => AssetCategoryWhereInput)
  @IsOptional()
  @Field(() => AssetCategoryWhereInput, {
    nullable: true,
  })
  every?: AssetCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssetCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => AssetCategoryWhereInput)
  @IsOptional()
  @Field(() => AssetCategoryWhereInput, {
    nullable: true,
  })
  some?: AssetCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssetCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => AssetCategoryWhereInput)
  @IsOptional()
  @Field(() => AssetCategoryWhereInput, {
    nullable: true,
  })
  none?: AssetCategoryWhereInput;
}
export { AssetCategoryListRelationFilter as AssetCategoryListRelationFilter };
