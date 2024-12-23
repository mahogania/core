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
import { CreatureTemplateResistanceWhereInput } from "./CreatureTemplateResistanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureTemplateResistanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateResistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateResistanceWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateResistanceWhereInput, {
    nullable: true,
  })
  every?: CreatureTemplateResistanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateResistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateResistanceWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateResistanceWhereInput, {
    nullable: true,
  })
  some?: CreatureTemplateResistanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateResistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateResistanceWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateResistanceWhereInput, {
    nullable: true,
  })
  none?: CreatureTemplateResistanceWhereInput;
}
export { CreatureTemplateResistanceListRelationFilter as CreatureTemplateResistanceListRelationFilter };
