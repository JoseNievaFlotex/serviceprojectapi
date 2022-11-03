import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: '172.16.1.206',
    username: 'RETAILUSER',
    password: 'retail',
    database: 'DBFLOTEX2022',
    autoLoadEntities: true,
    synchronize: true,
    options: {
      encrypt:false,
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      }
    },
  }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
