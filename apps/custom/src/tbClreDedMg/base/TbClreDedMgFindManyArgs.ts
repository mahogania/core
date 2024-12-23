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
import { TbClreDedMgWhereInput } from "./TbClreDedMgWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TbClreDedMgOrderByInput } from "./TbClreDedMgOrderByInput";

@ArgsType()
class TbClreDedMgFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TbClreDedMgWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TbClreDedMgWhereInput, { nullable: true })
  @Type(() => TbClreDedMgWhereInput)
  where?: TbClreDedMgWhereInput;

  @ApiProperty({
    required: false,
    type: [TbClreDedMgOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TbClreDedMgOrderByInput], { nullable: true })
  @Type(() => TbClreDedMgOrderByInput)
  orderBy?: Array<TbClreDedMgOrderByInput>;

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

export { TbClreDedMgFindManyArgs as TbClreDedMgFindManyArgs };
