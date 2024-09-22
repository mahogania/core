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
import { GameEventPoolWhereInput } from "./GameEventPoolWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameEventPoolOrderByInput } from "./GameEventPoolOrderByInput";

@ArgsType()
class GameEventPoolFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameEventPoolWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameEventPoolWhereInput, { nullable: true })
  @Type(() => GameEventPoolWhereInput)
  where?: GameEventPoolWhereInput;

  @ApiProperty({
    required: false,
    type: [GameEventPoolOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameEventPoolOrderByInput], { nullable: true })
  @Type(() => GameEventPoolOrderByInput)
  orderBy?: Array<GameEventPoolOrderByInput>;

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

export { GameEventPoolFindManyArgs as GameEventPoolFindManyArgs };
