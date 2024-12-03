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
import { GameEventWhereInput } from "./GameEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameEventOrderByInput } from "./GameEventOrderByInput";

@ArgsType()
class GameEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameEventWhereInput, { nullable: true })
  @Type(() => GameEventWhereInput)
  where?: GameEventWhereInput;

  @ApiProperty({
    required: false,
    type: [GameEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameEventOrderByInput], { nullable: true })
  @Type(() => GameEventOrderByInput)
  orderBy?: Array<GameEventOrderByInput>;

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

export { GameEventFindManyArgs as GameEventFindManyArgs };
