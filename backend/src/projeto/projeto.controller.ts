import { Projeto } from '@core';
import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';

@Controller('projetos')
export class ProjetoController {

    constructor(private readonly projetoProvider: ProjetoProvider) {}

    @Get()
    async getAllProjects(): Promise<Projeto[]> {
        return this.projetoProvider.getAllProjects();
    }

    @Get(":id")
    async getProjectById(@Param("id") id: string): Promise<Projeto | null> {
        return this.projetoProvider.getProjectById(Number(id));
    }


}
