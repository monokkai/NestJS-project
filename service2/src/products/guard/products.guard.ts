import { fa } from '@faker-js/faker/.';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ProductsGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const response: Response = await fetch(`http://users-service:3000/users/searchid=${request.body.user.id}`);
    const data: Object = await response.json();
    
    if (data) {
      return true;
    }

    return false;
  }
}
