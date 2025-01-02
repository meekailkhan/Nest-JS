import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyMiddleware } from './property/property.middleware';
import { PropertyModule } from './property/property.module';
@Module({
  imports: [PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//     .apply(PropertyMiddleware)
//     .forRoutes('property')
//   }
// }
