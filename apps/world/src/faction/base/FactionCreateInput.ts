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
import { PlayerFactionAchievementWhereUniqueInput } from "../../playerFactionAchievement/base/PlayerFactionAchievementWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PlayerFactionQuestCreateNestedManyWithoutFactionsInput } from "./PlayerFactionQuestCreateNestedManyWithoutFactionsInput";
import { PlayerFactionReputationCreateNestedManyWithoutFactionsInput } from "./PlayerFactionReputationCreateNestedManyWithoutFactionsInput";
import { PlayerFactionSpellCreateNestedManyWithoutFactionsInput } from "./PlayerFactionSpellCreateNestedManyWithoutFactionsInput";
import { PlayerFactionTitleCreateNestedManyWithoutFactionsInput } from "./PlayerFactionTitleCreateNestedManyWithoutFactionsInput";

@InputType()
class FactionCreateInput {
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
  playerFactionAchievements?: PlayerFactionAchievementWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionQuestCreateNestedManyWithoutFactionsInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionQuestCreateNestedManyWithoutFactionsInput)
  @IsOptional()
  @Field(() => PlayerFactionQuestCreateNestedManyWithoutFactionsInput, {
    nullable: true,
  })
  playerFactionQuests?: PlayerFactionQuestCreateNestedManyWithoutFactionsInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionReputationCreateNestedManyWithoutFactionsInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionReputationCreateNestedManyWithoutFactionsInput)
  @IsOptional()
  @Field(() => PlayerFactionReputationCreateNestedManyWithoutFactionsInput, {
    nullable: true,
  })
  playerFactionReputations?: PlayerFactionReputationCreateNestedManyWithoutFactionsInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionSpellCreateNestedManyWithoutFactionsInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionSpellCreateNestedManyWithoutFactionsInput)
  @IsOptional()
  @Field(() => PlayerFactionSpellCreateNestedManyWithoutFactionsInput, {
    nullable: true,
  })
  playerFactionSpells?: PlayerFactionSpellCreateNestedManyWithoutFactionsInput;

  @ApiProperty({
    required: false,
    type: () => PlayerFactionTitleCreateNestedManyWithoutFactionsInput,
  })
  @ValidateNested()
  @Type(() => PlayerFactionTitleCreateNestedManyWithoutFactionsInput)
  @IsOptional()
  @Field(() => PlayerFactionTitleCreateNestedManyWithoutFactionsInput, {
    nullable: true,
  })
  playerFactionTitles?: PlayerFactionTitleCreateNestedManyWithoutFactionsInput;
}

export { FactionCreateInput as FactionCreateInput };
