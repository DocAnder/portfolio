import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core'
import { TecnologiaProvider } from './tecnologia.provider';


@Controller('tecnologias')
export class TecnologiaController {

    constructor(private readonly tecnologiaProvider: TecnologiaProvider) {}

    @Get()
    async getAllTechnology(): Promise<Tecnologia[]> {
        return this.tecnologiaProvider.getAllTechnology();
    }

    @Get('destaques')
    async getHighlighTecnology(): Promise<Tecnologia[]> {
        return this.tecnologiaProvider.getHighlighTecnology();
    }

}
