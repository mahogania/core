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
import { ItemBehaviourWhereUniqueInput } from "../../itemBehaviour/base/ItemBehaviourWhereUniqueInput";
import { ItemRandomBonusListTemplateListRelationFilter } from "../../itemRandomBonusListTemplate/base/ItemRandomBonusListTemplateListRelationFilter";
import { ItemTemplateAddonWhereUniqueInput } from "../../itemTemplateAddon/base/ItemTemplateAddonWhereUniqueInput";

@InputType()
class ItemTemplateWhereInput {
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
    type: () => ItemBehaviourWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemBehaviourWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemBehaviourWhereUniqueInput, {
    nullable: true,
  })
  itemBehaviour?: ItemBehaviourWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ItemRandomBonusListTemplateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemRandomBonusListTemplateListRelationFilter)
  @IsOptional()
  @Field(() => ItemRandomBonusListTemplateListRelationFilter, {
    nullable: true,
  })
  itemRandomBonusListTemplates?: ItemRandomBonusListTemplateListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ItemTemplateAddonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateAddonWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemTemplateAddonWhereUniqueInput, {
    nullable: true,
  })
  itemTemplateAddons?: ItemTemplateAddonWhereUniqueInput;
}

export { ItemTemplateWhereInput as ItemTemplateWhereInput };