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
import { CreatureTemplateResistanceWhereUniqueInput } from "./CreatureTemplateResistanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatureTemplateResistanceFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => CreatureTemplateResistanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateResistanceWhereUniqueInput)
  @Field(() => CreatureTemplateResistanceWhereUniqueInput, { nullable: false })
  where!: CreatureTemplateResistanceWhereUniqueInput;
}

export { CreatureTemplateResistanceFindUniqueArgs as CreatureTemplateResistanceFindUniqueArgs };