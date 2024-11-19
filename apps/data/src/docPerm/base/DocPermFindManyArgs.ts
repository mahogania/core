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
import { DocPermWhereInput } from "./DocPermWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DocPermOrderByInput } from "./DocPermOrderByInput";

@ArgsType()
class DocPermFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DocPermWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DocPermWhereInput, { nullable: true })
  @Type(() => DocPermWhereInput)
  where?: DocPermWhereInput;

  @ApiProperty({
    required: false,
    type: [DocPermOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DocPermOrderByInput], { nullable: true })
  @Type(() => DocPermOrderByInput)
  orderBy?: Array<DocPermOrderByInput>;

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

export { DocPermFindManyArgs as DocPermFindManyArgs };