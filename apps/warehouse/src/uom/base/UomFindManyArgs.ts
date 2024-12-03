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
import { UomWhereInput } from "./UomWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UomOrderByInput } from "./UomOrderByInput";

@ArgsType()
class UomFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UomWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UomWhereInput, { nullable: true })
  @Type(() => UomWhereInput)
  where?: UomWhereInput;

  @ApiProperty({
    required: false,
    type: [UomOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UomOrderByInput], { nullable: true })
  @Type(() => UomOrderByInput)
  orderBy?: Array<UomOrderByInput>;

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

export { UomFindManyArgs as UomFindManyArgs };
