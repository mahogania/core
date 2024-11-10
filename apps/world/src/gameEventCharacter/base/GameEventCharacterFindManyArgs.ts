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
import { GameEventCharacterWhereInput } from "./GameEventCharacterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameEventCharacterOrderByInput } from "./GameEventCharacterOrderByInput";

@ArgsType()
class GameEventCharacterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameEventCharacterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameEventCharacterWhereInput, { nullable: true })
  @Type(() => GameEventCharacterWhereInput)
  where?: GameEventCharacterWhereInput;

  @ApiProperty({
    required: false,
    type: [GameEventCharacterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameEventCharacterOrderByInput], { nullable: true })
  @Type(() => GameEventCharacterOrderByInput)
  orderBy?: Array<GameEventCharacterOrderByInput>;

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

export { GameEventCharacterFindManyArgs as GameEventCharacterFindManyArgs };