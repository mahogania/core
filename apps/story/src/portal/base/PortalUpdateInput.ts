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
import { AreaTeleportTriggerUpdateManyWithoutPortalsInput } from "./AreaTeleportTriggerUpdateManyWithoutPortalsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PortalUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AreaTeleportTriggerUpdateManyWithoutPortalsInput,
  })
  @ValidateNested()
  @Type(() => AreaTeleportTriggerUpdateManyWithoutPortalsInput)
  @IsOptional()
  @Field(() => AreaTeleportTriggerUpdateManyWithoutPortalsInput, {
    nullable: true,
  })
  areaTeleportTriggers?: AreaTeleportTriggerUpdateManyWithoutPortalsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string;
}

export { PortalUpdateInput as PortalUpdateInput };