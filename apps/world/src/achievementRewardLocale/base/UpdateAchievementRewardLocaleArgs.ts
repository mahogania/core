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
import { AchievementRewardLocaleWhereUniqueInput } from "./AchievementRewardLocaleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AchievementRewardLocaleUpdateInput } from "./AchievementRewardLocaleUpdateInput";

@ArgsType()
class UpdateAchievementRewardLocaleArgs {
  @ApiProperty({
    required: true,
    type: () => AchievementRewardLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AchievementRewardLocaleWhereUniqueInput)
  @Field(() => AchievementRewardLocaleWhereUniqueInput, { nullable: false })
  where!: AchievementRewardLocaleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AchievementRewardLocaleUpdateInput,
  })
  @ValidateNested()
  @Type(() => AchievementRewardLocaleUpdateInput)
  @Field(() => AchievementRewardLocaleUpdateInput, { nullable: false })
  data!: AchievementRewardLocaleUpdateInput;
}

export { UpdateAchievementRewardLocaleArgs as UpdateAchievementRewardLocaleArgs };