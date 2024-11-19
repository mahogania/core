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

import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  ValidateNested,
  IsBoolean,
} from "class-validator";

import { GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput } from "./GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput";
import { Type } from "class-transformer";
import { MailLootTemplateCreateNestedManyWithoutLootTemplatesInput } from "./MailLootTemplateCreateNestedManyWithoutLootTemplatesInput";
import { MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput } from "./MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput";

@InputType()
class LootTemplateCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  chance?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  entry?: number | null;

  @ApiProperty({
    required: false,
    type: () => GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput,
  })
  @ValidateNested()
  @Type(() => GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput)
  @IsOptional()
  @Field(
    () => GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput,
    {
      nullable: true,
    }
  )
  gameObjectLootTemplates?: GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  groupId?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  item?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lootMode?: number | null;

  @ApiProperty({
    required: false,
    type: () => MailLootTemplateCreateNestedManyWithoutLootTemplatesInput,
  })
  @ValidateNested()
  @Type(() => MailLootTemplateCreateNestedManyWithoutLootTemplatesInput)
  @IsOptional()
  @Field(() => MailLootTemplateCreateNestedManyWithoutLootTemplatesInput, {
    nullable: true,
  })
  mailLootTemplates?: MailLootTemplateCreateNestedManyWithoutLootTemplatesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput,
  })
  @ValidateNested()
  @Type(() => MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput)
  @IsOptional()
  @Field(() => MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput, {
    nullable: true,
  })
  millingLootTemplates?: MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minCount?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  questRequired?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  reference?: number | null;
}

export { LootTemplateCreateInput as LootTemplateCreateInput };