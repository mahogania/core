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
import { FragmentWhereInput } from "./FragmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FragmentOrderByInput } from "./FragmentOrderByInput";

@ArgsType()
class FragmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FragmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FragmentWhereInput, { nullable: true })
  @Type(() => FragmentWhereInput)
  where?: FragmentWhereInput;

  @ApiProperty({
    required: false,
    type: [FragmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FragmentOrderByInput], { nullable: true })
  @Type(() => FragmentOrderByInput)
  orderBy?: Array<FragmentOrderByInput>;

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

export { FragmentFindManyArgs as FragmentFindManyArgs };