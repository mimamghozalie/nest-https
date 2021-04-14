import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

// Apps
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStragegy } from './passport/jwt.strategy';
import { UserModule } from '@api/v1/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('SECRET_KEY')
        };
      },
      inject: [ConfigService]
    }), ConfigModule, UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStragegy]
})
export class AuthModule { }
