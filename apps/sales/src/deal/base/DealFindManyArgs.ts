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
import { DealWhereInput } from "./DealWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DealOrderByInput } from "./DealOrderByInput";

@ArgsType()
class DealFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DealWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DealWhereInput, { nullable: true })
  @Type(() => DealWhereInput)
  where?: DealWhereInput;

  @ApiProperty({
    required: false,
    type: [DealOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DealOrderByInput], { nullable: true })
  @Type(() => DealOrderByInput)
  orderBy?: Array<DealOrderByInput>;

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

export { DealFindManyArgs as DealFindManyArgs };
