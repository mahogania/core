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
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { CreatureEquipmentWhereUniqueInput } from "../../creatureEquipment/base/CreatureEquipmentWhereUniqueInput";
import { CreatureFormationWhereUniqueInput } from "../../creatureFormation/base/CreatureFormationWhereUniqueInput";
import { CreatureImmunityWhereUniqueInput } from "../../creatureImmunity/base/CreatureImmunityWhereUniqueInput";
import { CreatureLevelStatWhereUniqueInput } from "../../creatureLevelStat/base/CreatureLevelStatWhereUniqueInput";
import { CreatureLootWhereUniqueInput } from "../../creatureLoot/base/CreatureLootWhereUniqueInput";
import { CreatureModelInfoWhereUniqueInput } from "../../creatureModelInfo/base/CreatureModelInfoWhereUniqueInput";
import { CreatureMovementInfoWhereUniqueInput } from "../../creatureMovementInfo/base/CreatureMovementInfoWhereUniqueInput";

@InputType()
class CreatureWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  areaId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  behaviourName?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => CreatureEquipmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureEquipmentWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureEquipmentWhereUniqueInput, {
    nullable: true,
  })
  creatureEquipments?: CreatureEquipmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CreatureFormationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureFormationWhereUniqueInput, {
    nullable: true,
  })
  creatureFormations?: CreatureFormationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CreatureImmunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureImmunityWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureImmunityWhereUniqueInput, {
    nullable: true,
  })
  creatureImmunities?: CreatureImmunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CreatureLevelStatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureLevelStatWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureLevelStatWhereUniqueInput, {
    nullable: true,
  })
  creatureLevelStats?: CreatureLevelStatWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CreatureLootWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureLootWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureLootWhereUniqueInput, {
    nullable: true,
  })
  creatureLoots?: CreatureLootWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CreatureModelInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureModelInfoWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureModelInfoWhereUniqueInput, {
    nullable: true,
  })
  creatureModelInfo?: CreatureModelInfoWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CreatureMovementInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureMovementInfoWhereUniqueInput)
  @IsOptional()
  @Field(() => CreatureMovementInfoWhereUniqueInput, {
    nullable: true,
  })
  creatureMovementInfos?: CreatureMovementInfoWhereUniqueInput;

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
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  mapId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  modelId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  realmId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  transformId?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  zoneId?: IntNullableFilter;
}

export { CreatureWhereInput as CreatureWhereInput };
