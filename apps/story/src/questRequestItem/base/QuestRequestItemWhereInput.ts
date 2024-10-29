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
import { QuestRequestItemConditionalListRelationFilter } from "../../questRequestItemConditional/base/QuestRequestItemConditionalListRelationFilter";
import { QuestRequestItemsLocaleListRelationFilter } from "../../questRequestItemsLocale/base/QuestRequestItemsLocaleListRelationFilter";
import { QuestTemplateListRelationFilter } from "../../questTemplate/base/QuestTemplateListRelationFilter";

@InputType()
class QuestRequestItemWhereInput {
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
    type: () => QuestRequestItemConditionalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestRequestItemConditionalListRelationFilter)
  @IsOptional()
  @Field(() => QuestRequestItemConditionalListRelationFilter, {
    nullable: true,
  })
  questRequestItemConditionals?: QuestRequestItemConditionalListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestRequestItemsLocaleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestRequestItemsLocaleListRelationFilter)
  @IsOptional()
  @Field(() => QuestRequestItemsLocaleListRelationFilter, {
    nullable: true,
  })
  questRequestItemsLocales?: QuestRequestItemsLocaleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestTemplateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestTemplateListRelationFilter)
  @IsOptional()
  @Field(() => QuestTemplateListRelationFilter, {
    nullable: true,
  })
  questTemplates?: QuestTemplateListRelationFilter;
}

export { QuestRequestItemWhereInput as QuestRequestItemWhereInput };