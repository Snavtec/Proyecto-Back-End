CREATE DATABASE store;

USE store;

-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'CLIENTE');

-- CreateEnum
CREATE TYPE "PermisoAccion" AS ENUM ('CREATE', 'DELETE', 'UPDATE');

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- AlterTable
ALTER TABLE "productos" ALTER COLUMN "imagen" DROP NOT NULL;

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,
    "tipo_producto_id" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "tipo_productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permisos" (
    "id" SERIAL NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL,
    "accion" "PermisoAccion" NOT NULL,
    "tabla" TEXT NOT NULL,

    CONSTRAINT "permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "productos_id_key" ON "productos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_productos_id_key" ON "tipo_productos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_productos_nombre_key" ON "tipo_productos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "permisos_id_key" ON "permisos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_id_key" ON "usuarios"("id");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_tipo_producto_id_fkey" FOREIGN KEY ("tipo_producto_id") REFERENCES "tipo_productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Buscar por id
SELECT * FROM usuarios;
SELECT avg (id) from usuarios WHERE id BETWEEN 1 and 2; -- entre [1 - 2]
SELECT avg (id) from usuarios WHERE id >= 1 and id <= 2;
SELECT max(id)  from usuarios;

-- Agrupacion
SELECT COUNT(nombre), nombre
FROM usuarios
WHERE id between 10 AND 20
GROUP BY nombre
ORDER BY count(nombre) desc, nombre asc;

