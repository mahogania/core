/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Max, IsOptional, ValidateNested } from "class-validator";
import { FactionWhereUniqueInput } from "../../faction/base/FactionWhereUniqueInput";
import { Type } from "class-transformer";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";

@InputType()
class PlayerFactionReputationUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number;

  @ApiProperty({
    required: false,
    type: () => FactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FactionWhereUniqueInput)
  @IsOptional()
  @Field(() => FactionWhereUniqueInput, {
    nullable: true,
  })
  faction?: FactionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PlayerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerWhereUniqueInput, {
    nullable: true,
  })
  player?: PlayerWhereUniqueInput | null;
}

export { PlayerFactionReputationUpdateInput as PlayerFactionReputationUpdateInput };
