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
import { AssetActivityWhereInput } from "./AssetActivityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssetActivityOrderByInput } from "./AssetActivityOrderByInput";

@ArgsType()
class AssetActivityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssetActivityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssetActivityWhereInput, { nullable: true })
  @Type(() => AssetActivityWhereInput)
  where?: AssetActivityWhereInput;

  @ApiProperty({
    required: false,
    type: [AssetActivityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssetActivityOrderByInput], { nullable: true })
  @Type(() => AssetActivityOrderByInput)
  orderBy?: Array<AssetActivityOrderByInput>;

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

export { AssetActivityFindManyArgs as AssetActivityFindManyArgs };
