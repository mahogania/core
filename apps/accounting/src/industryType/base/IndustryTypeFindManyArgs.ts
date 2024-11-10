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
import { IndustryTypeWhereInput } from "./IndustryTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IndustryTypeOrderByInput } from "./IndustryTypeOrderByInput";

@ArgsType()
class IndustryTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IndustryTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IndustryTypeWhereInput, { nullable: true })
  @Type(() => IndustryTypeWhereInput)
  where?: IndustryTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [IndustryTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IndustryTypeOrderByInput], { nullable: true })
  @Type(() => IndustryTypeOrderByInput)
  orderBy?: Array<IndustryTypeOrderByInput>;

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

export { IndustryTypeFindManyArgs as IndustryTypeFindManyArgs };