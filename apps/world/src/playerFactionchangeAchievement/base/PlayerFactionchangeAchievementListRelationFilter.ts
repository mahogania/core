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
import { PlayerFactionchangeAchievementWhereInput } from "./PlayerFactionchangeAchievementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlayerFactionchangeAchievementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PlayerFactionchangeAchievementWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionchangeAchievementWhereInput)
  @IsOptional()
  @Field(() => PlayerFactionchangeAchievementWhereInput, {
    nullable: true,
  })
  every?: PlayerFactionchangeAchievementWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionchangeAchievementWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionchangeAchievementWhereInput)
  @IsOptional()
  @Field(() => PlayerFactionchangeAchievementWhereInput, {
    nullable: true,
  })
  some?: PlayerFactionchangeAchievementWhereInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionchangeAchievementWhereInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionchangeAchievementWhereInput)
  @IsOptional()
  @Field(() => PlayerFactionchangeAchievementWhereInput, {
    nullable: true,
  })
  none?: PlayerFactionchangeAchievementWhereInput;
}
export { PlayerFactionchangeAchievementListRelationFilter as PlayerFactionchangeAchievementListRelationFilter };
