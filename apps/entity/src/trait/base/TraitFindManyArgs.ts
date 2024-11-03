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
import { TraitWhereInput } from "./TraitWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TraitOrderByInput } from "./TraitOrderByInput";

@ArgsType()
class TraitFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TraitWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TraitWhereInput, { nullable: true })
  @Type(() => TraitWhereInput)
  where?: TraitWhereInput;

  @ApiProperty({
    required: false,
    type: [TraitOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TraitOrderByInput], { nullable: true })
  @Type(() => TraitOrderByInput)
  orderBy?: Array<TraitOrderByInput>;

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

export { TraitFindManyArgs as TraitFindManyArgs };