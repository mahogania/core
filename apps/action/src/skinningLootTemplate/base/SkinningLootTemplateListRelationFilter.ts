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
import { SkinningLootTemplateWhereInput } from "./SkinningLootTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SkinningLootTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SkinningLootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => SkinningLootTemplateWhereInput)
  @IsOptional()
  @Field(() => SkinningLootTemplateWhereInput, {
    nullable: true,
  })
  every?: SkinningLootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkinningLootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => SkinningLootTemplateWhereInput)
  @IsOptional()
  @Field(() => SkinningLootTemplateWhereInput, {
    nullable: true,
  })
  some?: SkinningLootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkinningLootTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => SkinningLootTemplateWhereInput)
  @IsOptional()
  @Field(() => SkinningLootTemplateWhereInput, {
    nullable: true,
  })
  none?: SkinningLootTemplateWhereInput;
}
export { SkinningLootTemplateListRelationFilter as SkinningLootTemplateListRelationFilter };
