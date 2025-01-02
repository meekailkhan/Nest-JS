import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  multiplyByTwo(num: number): number {
    return num * 2;
  }
  getDoc(version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
      // return "this is url"
    }
  }
}
