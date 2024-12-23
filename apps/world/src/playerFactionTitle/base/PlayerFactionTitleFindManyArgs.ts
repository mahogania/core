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
import { PlayerFactionTitleWhereInput } from "./PlayerFactionTitleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PlayerFactionTitleOrderByInput } from "./PlayerFactionTitleOrderByInput";

@ArgsType()
class PlayerFactionTitleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlayerFactionTitleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PlayerFactionTitleWhereInput, { nullable: true })
  @Type(() => PlayerFactionTitleWhereInput)
  where?: PlayerFactionTitleWhereInput;

  @ApiProperty({
    required: false,
    type: [PlayerFactionTitleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PlayerFactionTitleOrderByInput], { nullable: true })
  @Type(() => PlayerFactionTitleOrderByInput)
  orderBy?: Array<PlayerFactionTitleOrderByInput>;

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

export { PlayerFactionTitleFindManyArgs as PlayerFactionTitleFindManyArgs };
