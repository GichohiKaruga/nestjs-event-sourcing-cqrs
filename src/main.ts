import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const documentOptions = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('Products API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentOptions);
  const validationOptions = {
    skipMissingProperties: true,
    validationError: { target: false },
  };
  SwaggerModule.setup(config.API_EXPLORER_PATH, app, document);
  await app.listen(3000);

}

bootstrap();
