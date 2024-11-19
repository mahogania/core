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
import { InstanceTemplateUpdateManyWithoutLinkedRespawnsInput } from "./InstanceTemplateUpdateManyWithoutLinkedRespawnsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LinkedRespawnUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InstanceTemplateUpdateManyWithoutLinkedRespawnsInput,
  })
  @ValidateNested()
  @Type(() => InstanceTemplateUpdateManyWithoutLinkedRespawnsInput)
  @IsOptional()
  @Field(() => InstanceTemplateUpdateManyWithoutLinkedRespawnsInput, {
    nullable: true,
  })
  instanceTemplates?: InstanceTemplateUpdateManyWithoutLinkedRespawnsInput;
}

export { LinkedRespawnUpdateInput as LinkedRespawnUpdateInput };
