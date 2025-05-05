# Fase de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# Copiar el resto de archivos del proyecto
COPY . .

# Construir la aplicación
RUN npm run build

# Fase de producción
FROM node:20-alpine AS runner

WORKDIR /app

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=4000

# Copiar dependencias y archivos generados de la fase de construcción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Si tienes archivos de configuración como next.config.js, también cópialos
COPY --from=builder /app/next.config.ts ./next.config.ts

# Exponer el puerto que usará la aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]