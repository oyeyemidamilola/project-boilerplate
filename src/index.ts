import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express'

export default async function startServer(): Promise<void> {

    const app = express()
    // const server = new ApolloServer({ })
    // server.applyMiddleware({ app })
    // server.start()
    return new Promise(() => app.listen({ port: 9004 }));
}
