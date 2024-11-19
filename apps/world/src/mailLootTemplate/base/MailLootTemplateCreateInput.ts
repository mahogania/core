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
import { LootTemplateWhereUniqueInput } from "../../lootTemplate/base/LootTemplateWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MailLootTemplateCreateInput {
  @ApiProperty({
    required: false,
    type: () => LootTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LootTemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => LootTemplateWhereUniqueInput, {
    nullable: true,
  })
  lootTemplate?: LootTemplateWhereUniqueInput | null;

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
  sender?: string | null;
}

export { MailLootTemplateCreateInput as MailLootTemplateCreateInput };