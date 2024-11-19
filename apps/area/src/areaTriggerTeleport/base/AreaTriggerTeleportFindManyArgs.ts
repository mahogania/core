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
import { AreaTriggerTeleportWhereInput } from "./AreaTriggerTeleportWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AreaTriggerTeleportOrderByInput } from "./AreaTriggerTeleportOrderByInput";

@ArgsType()
class AreaTriggerTeleportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerTeleportWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AreaTriggerTeleportWhereInput, { nullable: true })
  @Type(() => AreaTriggerTeleportWhereInput)
  where?: AreaTriggerTeleportWhereInput;

  @ApiProperty({
    required: false,
    type: [AreaTriggerTeleportOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AreaTriggerTeleportOrderByInput], { nullable: true })
  @Type(() => AreaTriggerTeleportOrderByInput)
  orderBy?: Array<AreaTriggerTeleportOrderByInput>;

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

export { AreaTriggerTeleportFindManyArgs as AreaTriggerTeleportFindManyArgs };
