"use client"
import { useEffect, useState } from "react";



export default function useLocalStorage<T>(chave: string, valorInicial: T) {
    const [valor, setValor] = useState<T>(() => {
        const valorLocal = localStorage.getItem(chave);
        if (valorLocal) {
            return JSON.parse(valorLocal);
        }
        return valorInicial;
    });

    useEffect(() => {
        localStorage.setItem(chave, JSON.stringify(valor));
    }, [chave, valor]);

    return [valor, setValor] as const;
}