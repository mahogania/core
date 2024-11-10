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
import { CreatureTemplateAddonWhereInput } from "./CreatureTemplateAddonWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureTemplateAddonListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateAddonWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateAddonWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateAddonWhereInput, {
    nullable: true,
  })
  every?: CreatureTemplateAddonWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateAddonWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateAddonWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateAddonWhereInput, {
    nullable: true,
  })
  some?: CreatureTemplateAddonWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateAddonWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateAddonWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateAddonWhereInput, {
    nullable: true,
  })
  none?: CreatureTemplateAddonWhereInput;
}
export { CreatureTemplateAddonListRelationFilter as CreatureTemplateAddonListRelationFilter };