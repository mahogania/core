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
import { AreaTeleportTriggerListRelationFilter } from "../../areaTeleportTrigger/base/AreaTeleportTriggerListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class PortalWhereInput {
  @ApiProperty({
    required: false,
    type: () => AreaTeleportTriggerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AreaTeleportTriggerListRelationFilter)
  @IsOptional()
  @Field(() => AreaTeleportTriggerListRelationFilter, {
    nullable: true,
  })
  areaTeleportTriggers?: AreaTeleportTriggerListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  location?: StringFilter;
}

export { PortalWhereInput as PortalWhereInput };
