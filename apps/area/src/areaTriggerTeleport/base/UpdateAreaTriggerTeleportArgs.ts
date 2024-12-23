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
import { AreaTriggerTeleportWhereUniqueInput } from "./AreaTriggerTeleportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AreaTriggerTeleportUpdateInput } from "./AreaTriggerTeleportUpdateInput";

@ArgsType()
class UpdateAreaTriggerTeleportArgs {
  @ApiProperty({
    required: true,
    type: () => AreaTriggerTeleportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTeleportWhereUniqueInput)
  @Field(() => AreaTriggerTeleportWhereUniqueInput, { nullable: false })
  where!: AreaTriggerTeleportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AreaTriggerTeleportUpdateInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTeleportUpdateInput)
  @Field(() => AreaTriggerTeleportUpdateInput, { nullable: false })
  data!: AreaTriggerTeleportUpdateInput;
}

export { UpdateAreaTriggerTeleportArgs as UpdateAreaTriggerTeleportArgs };
