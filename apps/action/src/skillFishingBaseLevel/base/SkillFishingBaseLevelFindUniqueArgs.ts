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
import { SkillFishingBaseLevelWhereUniqueInput } from "./SkillFishingBaseLevelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class SkillFishingBaseLevelFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => SkillFishingBaseLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillFishingBaseLevelWhereUniqueInput)
  @Field(() => SkillFishingBaseLevelWhereUniqueInput, { nullable: false })
  where!: SkillFishingBaseLevelWhereUniqueInput;
}

export { SkillFishingBaseLevelFindUniqueArgs as SkillFishingBaseLevelFindUniqueArgs };
