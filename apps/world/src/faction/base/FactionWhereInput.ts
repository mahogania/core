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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PlayerFactionAchievementWhereUniqueInput } from "../../playerFactionAchievement/base/PlayerFactionAchievementWhereUniqueInput";
import { PlayerFactionQuestListRelationFilter } from "../../playerFactionQuest/base/PlayerFactionQuestListRelationFilter";
import { PlayerFactionReputationListRelationFilter } from "../../playerFactionReputation/base/PlayerFactionReputationListRelationFilter";
import { PlayerFactionSpellListRelationFilter } from "../../playerFactionSpell/base/PlayerFactionSpellListRelationFilter";
import { PlayerFactionTitleListRelationFilter } from "../../playerFactionTitle/base/PlayerFactionTitleListRelationFilter";

@InputType()
class FactionWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionAchievementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionAchievementWhereUniqueInput)
  @IsOptional()
  @Field(() => PlayerFactionAchievementWhereUniqueInput, {
    nullable: true,
  })
  playerFactionAchievements?: PlayerFactionAchievementWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionQuestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PlayerFactionQuestListRelationFilter)
  @IsOptional()
  @Field(() => PlayerFactionQuestListRelationFilter, {
    nullable: true,
  })
  playerFactionQuests?: PlayerFactionQuestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionReputationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PlayerFactionReputationListRelationFilter)
  @IsOptional()
  @Field(() => PlayerFactionReputationListRelationFilter, {
    nullable: true,
  })
  playerFactionReputations?: PlayerFactionReputationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionSpellListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PlayerFactionSpellListRelationFilter)
  @IsOptional()
  @Field(() => PlayerFactionSpellListRelationFilter, {
    nullable: true,
  })
  playerFactionSpells?: PlayerFactionSpellListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionTitleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PlayerFactionTitleListRelationFilter)
  @IsOptional()
  @Field(() => PlayerFactionTitleListRelationFilter, {
    nullable: true,
  })
  playerFactionTitles?: PlayerFactionTitleListRelationFilter;
}

export { FactionWhereInput as FactionWhereInput };
