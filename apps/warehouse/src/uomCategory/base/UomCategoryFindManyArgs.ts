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
import { UomCategoryWhereInput } from "./UomCategoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UomCategoryOrderByInput } from "./UomCategoryOrderByInput";

@ArgsType()
class UomCategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UomCategoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UomCategoryWhereInput, { nullable: true })
  @Type(() => UomCategoryWhereInput)
  where?: UomCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [UomCategoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UomCategoryOrderByInput], { nullable: true })
  @Type(() => UomCategoryOrderByInput)
  orderBy?: Array<UomCategoryOrderByInput>;

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

export { UomCategoryFindManyArgs as UomCategoryFindManyArgs };