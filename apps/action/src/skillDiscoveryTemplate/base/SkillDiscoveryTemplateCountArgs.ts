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
import { SkillDiscoveryTemplateWhereInput } from "./SkillDiscoveryTemplateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SkillDiscoveryTemplateCountArgs {
  @ApiProperty({
    required: false,
    type: () => SkillDiscoveryTemplateWhereInput,
  })
  @Field(() => SkillDiscoveryTemplateWhereInput, { nullable: true })
  @Type(() => SkillDiscoveryTemplateWhereInput)
  where?: SkillDiscoveryTemplateWhereInput;
}

export { SkillDiscoveryTemplateCountArgs as SkillDiscoveryTemplateCountArgs };
