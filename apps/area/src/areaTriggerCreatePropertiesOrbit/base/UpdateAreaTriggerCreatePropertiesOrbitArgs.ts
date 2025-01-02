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
import { AreaTriggerCreatePropertiesOrbitWhereUniqueInput } from "./AreaTriggerCreatePropertiesOrbitWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AreaTriggerCreatePropertiesOrbitUpdateInput } from "./AreaTriggerCreatePropertiesOrbitUpdateInput";

@ArgsType()
class UpdateAreaTriggerCreatePropertiesOrbitArgs {
  @ApiProperty({
    required: true,
    type: () => AreaTriggerCreatePropertiesOrbitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerCreatePropertiesOrbitWhereUniqueInput)
  @Field(() => AreaTriggerCreatePropertiesOrbitWhereUniqueInput, {
    nullable: false,
  })
  where!: AreaTriggerCreatePropertiesOrbitWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AreaTriggerCreatePropertiesOrbitUpdateInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerCreatePropertiesOrbitUpdateInput)
  @Field(() => AreaTriggerCreatePropertiesOrbitUpdateInput, { nullable: false })
  data!: AreaTriggerCreatePropertiesOrbitUpdateInput;
}

export { UpdateAreaTriggerCreatePropertiesOrbitArgs as UpdateAreaTriggerCreatePropertiesOrbitArgs };