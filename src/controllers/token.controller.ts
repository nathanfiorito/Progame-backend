import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { TokenService } from 'src/services/token.service';
import { RefreshTokenDTO } from 'src/utils/dto/token/refresh-token.dto';

@Controller('token')
@ApiTags('Token')
export class TokenController { 
    constructor(private tokenService: TokenService){

    }

    @Put('refresh')
    async refreshToken(@Body() refreshTokenDTO: RefreshTokenDTO){
        return this.tokenService.refreshToken(refreshTokenDTO.oldToken);
    }

}
