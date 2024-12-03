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
import { ItemTemplateAddonWhereInput } from "./ItemTemplateAddonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemTemplateAddonOrderByInput } from "./ItemTemplateAddonOrderByInput";

@ArgsType()
class ItemTemplateAddonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemTemplateAddonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItemTemplateAddonWhereInput, { nullable: true })
  @Type(() => ItemTemplateAddonWhereInput)
  where?: ItemTemplateAddonWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemTemplateAddonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItemTemplateAddonOrderByInput], { nullable: true })
  @Type(() => ItemTemplateAddonOrderByInput)
  orderBy?: Array<ItemTemplateAddonOrderByInput>;

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

export { ItemTemplateAddonFindManyArgs as ItemTemplateAddonFindManyArgs };
