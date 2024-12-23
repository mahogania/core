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
import { WorldWhereInput } from "./WorldWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorldOrderByInput } from "./WorldOrderByInput";

@ArgsType()
class WorldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorldWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorldWhereInput, { nullable: true })
  @Type(() => WorldWhereInput)
  where?: WorldWhereInput;

  @ApiProperty({
    required: false,
    type: [WorldOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorldOrderByInput], { nullable: true })
  @Type(() => WorldOrderByInput)
  orderBy?: Array<WorldOrderByInput>;

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

export { WorldFindManyArgs as WorldFindManyArgs };
