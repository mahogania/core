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
import { CreatureTemplateGossipWhereInput } from "./CreatureTemplateGossipWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureTemplateGossipListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateGossipWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateGossipWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateGossipWhereInput, {
    nullable: true,
  })
  every?: CreatureTemplateGossipWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateGossipWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateGossipWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateGossipWhereInput, {
    nullable: true,
  })
  some?: CreatureTemplateGossipWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateGossipWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateGossipWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateGossipWhereInput, {
    nullable: true,
  })
  none?: CreatureTemplateGossipWhereInput;
}
export { CreatureTemplateGossipListRelationFilter as CreatureTemplateGossipListRelationFilter };
