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
import { GameObjectTemplateLocaleWhereUniqueInput } from "./GameObjectTemplateLocaleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GameObjectTemplateLocaleUpdateInput } from "./GameObjectTemplateLocaleUpdateInput";

@ArgsType()
class UpdateGameObjectTemplateLocaleArgs {
  @ApiProperty({
    required: true,
    type: () => GameObjectTemplateLocaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateLocaleWhereUniqueInput)
  @Field(() => GameObjectTemplateLocaleWhereUniqueInput, { nullable: false })
  where!: GameObjectTemplateLocaleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GameObjectTemplateLocaleUpdateInput,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateLocaleUpdateInput)
  @Field(() => GameObjectTemplateLocaleUpdateInput, { nullable: false })
  data!: GameObjectTemplateLocaleUpdateInput;
}

export { UpdateGameObjectTemplateLocaleArgs as UpdateGameObjectTemplateLocaleArgs };
