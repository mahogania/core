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
import { PosProfileUserWhereInput } from "./PosProfileUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PosProfileUserOrderByInput } from "./PosProfileUserOrderByInput";

@ArgsType()
class PosProfileUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PosProfileUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PosProfileUserWhereInput, { nullable: true })
  @Type(() => PosProfileUserWhereInput)
  where?: PosProfileUserWhereInput;

  @ApiProperty({
    required: false,
    type: [PosProfileUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PosProfileUserOrderByInput], { nullable: true })
  @Type(() => PosProfileUserOrderByInput)
  orderBy?: Array<PosProfileUserOrderByInput>;

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

export { PosProfileUserFindManyArgs as PosProfileUserFindManyArgs };
