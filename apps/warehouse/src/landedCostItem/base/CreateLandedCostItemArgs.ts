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
import { LandedCostItemCreateInput } from "./LandedCostItemCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateLandedCostItemArgs {
  @ApiProperty({
    required: true,
    type: () => LandedCostItemCreateInput,
  })
  @ValidateNested()
  @Type(() => LandedCostItemCreateInput)
  @Field(() => LandedCostItemCreateInput, { nullable: false })
  data!: LandedCostItemCreateInput;
}

export { CreateLandedCostItemArgs as CreateLandedCostItemArgs };
