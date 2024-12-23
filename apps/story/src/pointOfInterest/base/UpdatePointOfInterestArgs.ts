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
import { PointOfInterestWhereUniqueInput } from "./PointOfInterestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PointOfInterestUpdateInput } from "./PointOfInterestUpdateInput";

@ArgsType()
class UpdatePointOfInterestArgs {
  @ApiProperty({
    required: true,
    type: () => PointOfInterestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PointOfInterestWhereUniqueInput)
  @Field(() => PointOfInterestWhereUniqueInput, { nullable: false })
  where!: PointOfInterestWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PointOfInterestUpdateInput,
  })
  @ValidateNested()
  @Type(() => PointOfInterestUpdateInput)
  @Field(() => PointOfInterestUpdateInput, { nullable: false })
  data!: PointOfInterestUpdateInput;
}

export { UpdatePointOfInterestArgs as UpdatePointOfInterestArgs };
