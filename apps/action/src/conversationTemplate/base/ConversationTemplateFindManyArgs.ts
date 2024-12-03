/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversationTemplateWhereInput } from "./ConversationTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ConversationTemplateOrderByInput } from "./ConversationTemplateOrderByInput";

@ArgsType()
class ConversationTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConversationTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ConversationTemplateWhereInput, { nullable: true })
  @Type(() => ConversationTemplateWhereInput)
  where?: ConversationTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [ConversationTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ConversationTemplateOrderByInput], { nullable: true })
  @Type(() => ConversationTemplateOrderByInput)
  orderBy?: Array<ConversationTemplateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConversationTemplateFindManyArgs as ConversationTemplateFindManyArgs };
