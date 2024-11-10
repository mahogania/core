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
import { DunningWhereUniqueInput } from "./DunningWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DunningUpdateInput } from "./DunningUpdateInput";

@ArgsType()
class UpdateDunningArgs {
  @ApiProperty({
    required: true,
    type: () => DunningWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DunningWhereUniqueInput)
  @Field(() => DunningWhereUniqueInput, { nullable: false })
  where!: DunningWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DunningUpdateInput,
  })
  @ValidateNested()
  @Type(() => DunningUpdateInput)
  @Field(() => DunningUpdateInput, { nullable: false })
  data!: DunningUpdateInput;
}

export { UpdateDunningArgs as UpdateDunningArgs };