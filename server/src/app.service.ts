import { Injectable } from '@nestjs/common';
import { abc } from '@myapp/utility';

@Injectable()
export class AppService {
  getHello(): string {
    // return 'Hello World!';
    return abc();
  }
}
