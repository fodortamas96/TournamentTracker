import swaggerAutogen from "swagger-autogen";

const outputFile = './docs/swagger-auto.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles);
