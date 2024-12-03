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
import { EpicWhereInput } from "./EpicWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EpicOrderByInput } from "./EpicOrderByInput";

@ArgsType()
class EpicFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EpicWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EpicWhereInput, { nullable: true })
  @Type(() => EpicWhereInput)
  where?: EpicWhereInput;

  @ApiProperty({
    required: false,
    type: [EpicOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EpicOrderByInput], { nullable: true })
  @Type(() => EpicOrderByInput)
  orderBy?: Array<EpicOrderByInput>;

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

export { EpicFindManyArgs as EpicFindManyArgs };
