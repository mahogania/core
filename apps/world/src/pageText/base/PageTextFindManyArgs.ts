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
import { PageTextWhereInput } from "./PageTextWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PageTextOrderByInput } from "./PageTextOrderByInput";

@ArgsType()
class PageTextFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PageTextWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PageTextWhereInput, { nullable: true })
  @Type(() => PageTextWhereInput)
  where?: PageTextWhereInput;

  @ApiProperty({
    required: false,
    type: [PageTextOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PageTextOrderByInput], { nullable: true })
  @Type(() => PageTextOrderByInput)
  orderBy?: Array<PageTextOrderByInput>;

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

export { PageTextFindManyArgs as PageTextFindManyArgs };
