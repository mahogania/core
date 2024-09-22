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
import { GameTeleWhereInput } from "./GameTeleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameTeleOrderByInput } from "./GameTeleOrderByInput";

@ArgsType()
class GameTeleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameTeleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameTeleWhereInput, { nullable: true })
  @Type(() => GameTeleWhereInput)
  where?: GameTeleWhereInput;

  @ApiProperty({
    required: false,
    type: [GameTeleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameTeleOrderByInput], { nullable: true })
  @Type(() => GameTeleOrderByInput)
  orderBy?: Array<GameTeleOrderByInput>;

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

export { GameTeleFindManyArgs as GameTeleFindManyArgs };
