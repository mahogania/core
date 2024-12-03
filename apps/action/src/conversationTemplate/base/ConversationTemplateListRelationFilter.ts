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
import { ConversationTemplateWhereInput } from "./ConversationTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConversationTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConversationTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationTemplateWhereInput)
  @IsOptional()
  @Field(() => ConversationTemplateWhereInput, {
    nullable: true,
  })
  every?: ConversationTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationTemplateWhereInput)
  @IsOptional()
  @Field(() => ConversationTemplateWhereInput, {
    nullable: true,
  })
  some?: ConversationTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationTemplateWhereInput)
  @IsOptional()
  @Field(() => ConversationTemplateWhereInput, {
    nullable: true,
  })
  none?: ConversationTemplateWhereInput;
}
export { ConversationTemplateListRelationFilter as ConversationTemplateListRelationFilter };
