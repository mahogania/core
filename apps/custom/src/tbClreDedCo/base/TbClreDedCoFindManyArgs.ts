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
import { TbClreDedCoWhereInput } from "./TbClreDedCoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TbClreDedCoOrderByInput } from "./TbClreDedCoOrderByInput";

@ArgsType()
class TbClreDedCoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TbClreDedCoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TbClreDedCoWhereInput, { nullable: true })
  @Type(() => TbClreDedCoWhereInput)
  where?: TbClreDedCoWhereInput;

  @ApiProperty({
    required: false,
    type: [TbClreDedCoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TbClreDedCoOrderByInput], { nullable: true })
  @Type(() => TbClreDedCoOrderByInput)
  orderBy?: Array<TbClreDedCoOrderByInput>;

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

export { TbClreDedCoFindManyArgs as TbClreDedCoFindManyArgs };
