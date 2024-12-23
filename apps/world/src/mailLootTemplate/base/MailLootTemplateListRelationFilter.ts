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
import { MailLootTemplateWhereInput } from "./MailLootTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MailLootTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MailLootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => MailLootTemplateWhereInput)
  @IsOptional()
  @Field(() => MailLootTemplateWhereInput, {
    nullable: true,
  })
  every?: MailLootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => MailLootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => MailLootTemplateWhereInput)
  @IsOptional()
  @Field(() => MailLootTemplateWhereInput, {
    nullable: true,
  })
  some?: MailLootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => MailLootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => MailLootTemplateWhereInput)
  @IsOptional()
  @Field(() => MailLootTemplateWhereInput, {
    nullable: true,
  })
  none?: MailLootTemplateWhereInput;
}
export { MailLootTemplateListRelationFilter as MailLootTemplateListRelationFilter };
