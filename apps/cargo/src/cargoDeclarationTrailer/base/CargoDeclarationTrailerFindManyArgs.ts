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
import { CargoDeclarationTrailerWhereInput } from "./CargoDeclarationTrailerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CargoDeclarationTrailerOrderByInput } from "./CargoDeclarationTrailerOrderByInput";

@ArgsType()
class CargoDeclarationTrailerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CargoDeclarationTrailerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CargoDeclarationTrailerWhereInput, { nullable: true })
  @Type(() => CargoDeclarationTrailerWhereInput)
  where?: CargoDeclarationTrailerWhereInput;

  @ApiProperty({
    required: false,
    type: [CargoDeclarationTrailerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CargoDeclarationTrailerOrderByInput], { nullable: true })
  @Type(() => CargoDeclarationTrailerOrderByInput)
  orderBy?: Array<CargoDeclarationTrailerOrderByInput>;

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

export { CargoDeclarationTrailerFindManyArgs as CargoDeclarationTrailerFindManyArgs };
