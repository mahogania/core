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
import { GameObjectTemplateLocaleWhereInput } from "./GameObjectTemplateLocaleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameObjectTemplateLocaleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateLocaleWhereInput)
  @IsOptional()
  @Field(() => GameObjectTemplateLocaleWhereInput, {
    nullable: true,
  })
  every?: GameObjectTemplateLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateLocaleWhereInput)
  @IsOptional()
  @Field(() => GameObjectTemplateLocaleWhereInput, {
    nullable: true,
  })
  some?: GameObjectTemplateLocaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateLocaleWhereInput,
  })
  @ValidateNested()
  @Type(() => GameObjectTemplateLocaleWhereInput)
  @IsOptional()
  @Field(() => GameObjectTemplateLocaleWhereInput, {
    nullable: true,
  })
  none?: GameObjectTemplateLocaleWhereInput;
}
export { GameObjectTemplateLocaleListRelationFilter as GameObjectTemplateLocaleListRelationFilter };