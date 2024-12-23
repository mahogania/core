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
import { ItemRandomBonusListTemplateWhereInput } from "./ItemRandomBonusListTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ItemRandomBonusListTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ItemRandomBonusListTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemRandomBonusListTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemRandomBonusListTemplateWhereInput, {
    nullable: true,
  })
  every?: ItemRandomBonusListTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemRandomBonusListTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemRandomBonusListTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemRandomBonusListTemplateWhereInput, {
    nullable: true,
  })
  some?: ItemRandomBonusListTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemRandomBonusListTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemRandomBonusListTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemRandomBonusListTemplateWhereInput, {
    nullable: true,
  })
  none?: ItemRandomBonusListTemplateWhereInput;
}
export { ItemRandomBonusListTemplateListRelationFilter as ItemRandomBonusListTemplateListRelationFilter };
