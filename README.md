## gRPC

o gRPC é uma estrutura de código aberto e alto desempenho criada pelo Google. O gRPC segue amplamente a semântica HTTP sobre HTTP/2 e, assim permite que você use o streaming full-duplex, possibilitando a comunicação entre diferentes sistemas via conexão de rede.

Com isso, um ponto de grande impacto é o ganho de performance ao trafegar um payload extensivo, visto que, no gRPC a comunicação é feita em binário, o que traz uma melhora enorme na performance, que pode ser até 7 vezes mais rápida na resposta de dados e 10 vezes no envio. Isso se deve principalmente ao empacotamento compacto dos proto buffers e ao uso de HTTP/2 pelo gRPC.

## Tecnologias utilizadas

[gRPC](https://grpc.io/)
[express](https://expressjs.com/pt-br/)

## Instalando dependências

```bash
yarn instal
```

**Para compilar o proto**

```bash
yarn compile
```

**Para iniciar o servidor**

```bash
yarn start:server
```

**Para inicar o client**

```bash
yarn client
```
