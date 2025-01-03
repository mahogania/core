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
import { ItemTemplateUpdateManyWithoutItemBehavioursInput } from "./ItemTemplateUpdateManyWithoutItemBehavioursInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ItemBehaviourUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ItemTemplateUpdateManyWithoutItemBehavioursInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateUpdateManyWithoutItemBehavioursInput)
  @IsOptional()
  @Field(() => ItemTemplateUpdateManyWithoutItemBehavioursInput, {
    nullable: true,
  })
  itemTemplates?: ItemTemplateUpdateManyWithoutItemBehavioursInput;
}

export { ItemBehaviourUpdateInput as ItemBehaviourUpdateInput };
