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
import { GameObjectTemplateAddonListRelationFilter } from "../../gameObjectTemplateAddon/base/GameObjectTemplateAddonListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { GameObjectTemplateLocaleListRelationFilter } from "../../gameObjectTemplateLocale/base/GameObjectTemplateLocaleListRelationFilter";
import { GameObjectListRelationFilter } from "../../gameObject/base/GameObjectListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class GameObjectTemplateWhereInput {
  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateAddonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateAddonListRelationFilter)
  @IsOptional()
  @Field(() => GameObjectTemplateAddonListRelationFilter, {
    nullable: true,
  })
  gameObjectTemplateAddons?: GameObjectTemplateAddonListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateLocaleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateLocaleListRelationFilter)
  @IsOptional()
  @Field(() => GameObjectTemplateLocaleListRelationFilter, {
    nullable: true,
  })
  gameObjectTemplateLocales?: GameObjectTemplateLocaleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => GameObjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GameObjectListRelationFilter)
  @IsOptional()
  @Field(() => GameObjectListRelationFilter, {
    nullable: true,
  })
  gameObjects?: GameObjectListRelationFilter;

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
}

export { GameObjectTemplateWhereInput as GameObjectTemplateWhereInput };
