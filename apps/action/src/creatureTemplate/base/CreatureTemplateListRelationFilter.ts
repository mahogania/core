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
import { CreatureTemplateWhereInput } from "./CreatureTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateWhereInput, {
    nullable: true,
  })
  every?: CreatureTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateWhereInput, {
    nullable: true,
  })
  some?: CreatureTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateWhereInput, {
    nullable: true,
  })
  none?: CreatureTemplateWhereInput;
}
export { CreatureTemplateListRelationFilter as CreatureTemplateListRelationFilter };
