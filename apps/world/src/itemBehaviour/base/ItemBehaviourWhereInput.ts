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
import { ItemTemplateListRelationFilter } from "../../itemTemplate/base/ItemTemplateListRelationFilter";

@InputType()
class ItemBehaviourWhereInput {
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
    type: () => ItemTemplateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemTemplateListRelationFilter)
  @IsOptional()
  @Field(() => ItemTemplateListRelationFilter, {
    nullable: true,
  })
  itemTemplates?: ItemTemplateListRelationFilter;
}

export { ItemBehaviourWhereInput as ItemBehaviourWhereInput };
