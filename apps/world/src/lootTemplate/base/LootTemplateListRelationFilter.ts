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
import { LootTemplateWhereInput } from "./LootTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LootTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => LootTemplateWhereInput)
  @IsOptional()
  @Field(() => LootTemplateWhereInput, {
    nullable: true,
  })
  every?: LootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => LootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => LootTemplateWhereInput)
  @IsOptional()
  @Field(() => LootTemplateWhereInput, {
    nullable: true,
  })
  some?: LootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => LootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => LootTemplateWhereInput)
  @IsOptional()
  @Field(() => LootTemplateWhereInput, {
    nullable: true,
  })
  none?: LootTemplateWhereInput;
}
export { LootTemplateListRelationFilter as LootTemplateListRelationFilter };
