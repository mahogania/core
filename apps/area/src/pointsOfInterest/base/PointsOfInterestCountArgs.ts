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
import { PointsOfInterestWhereInput } from "./PointsOfInterestWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PointsOfInterestCountArgs {
  @ApiProperty({
    required: false,
    type: () => PointsOfInterestWhereInput,
  })
  @Field(() => PointsOfInterestWhereInput, { nullable: true })
  @Type(() => PointsOfInterestWhereInput)
  where?: PointsOfInterestWhereInput;
}

export { PointsOfInterestCountArgs as PointsOfInterestCountArgs };
