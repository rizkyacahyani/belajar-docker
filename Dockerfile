FROM node:stretch-slim
FROM express-gateway:latest

COPY index.js index.js

CMD ["node", "index.js"]