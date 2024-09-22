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
import { AchievementScriptsWhereUniqueInput } from "./AchievementScriptsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AchievementScriptsUpdateInput } from "./AchievementScriptsUpdateInput";

@ArgsType()
class UpdateAchievementScriptsArgs {
  @ApiProperty({
    required: true,
    type: () => AchievementScriptsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AchievementScriptsWhereUniqueInput)
  @Field(() => AchievementScriptsWhereUniqueInput, { nullable: false })
  where!: AchievementScriptsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AchievementScriptsUpdateInput,
  })
  @ValidateNested()
  @Type(() => AchievementScriptsUpdateInput)
  @Field(() => AchievementScriptsUpdateInput, { nullable: false })
  data!: AchievementScriptsUpdateInput;
}

export { UpdateAchievementScriptsArgs as UpdateAchievementScriptsArgs };
