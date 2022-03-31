import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ShiftResolverBase } from "./base/shift.resolver.base";
import { Shift } from "./base/Shift";
import { ShiftService } from "./shift.service";

@graphql.Resolver(() => Shift)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShiftResolver extends ShiftResolverBase {
  constructor(
    protected readonly service: ShiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
