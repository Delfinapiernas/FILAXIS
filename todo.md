# FILAXIS - TODO

## Fase 1: Configuración visual y estilos
- [x] Configurar fuentes premium (Inter + Playfair Display) en index.html
- [x] Definir paleta de colores FILAXIS (naranja #E8651A, negro #1A1A1A, blanco, grises) en index.css
- [x] Configurar variables CSS globales, sombras, radios y tipografía
- [x] Actualizar App.tsx con rutas completas

## Fase 2: Base de datos
- [x] Agregar tabla `class_types` (tipos de clase: pilates, rehabilitación, etc.)
- [x] Agregar tabla `classes` (clases con horario, instructor, capacidad, tipo)
- [x] Agregar tabla `bookings` (reservas de alumnos)
- [x] Agregar tabla `waitlist` (lista de espera)
- [x] Agregar campo `phone` y `bio` a tabla `users`
- [x] Generar y aplicar migración SQL

## Fase 3: Backend (tRPC routers)
- [x] Router `classes`: listar, crear, editar, eliminar clases
- [x] Router `bookings`: reservar, cancelar, listar reservas del alumno
- [x] Router `waitlist`: unirse, salir, promover automáticamente al cancelar
- [x] Router `admin`: ver alumnos por clase, gestionar reservas manualmente
- [x] Helpers de DB en server/db.ts

## Fase 4: Landing page pública
- [x] Navbar con logo FILAXIS y botón Ingresar
- [x] Hero section con imagen de fondo, título y CTA
- [x] Sección de características (cupos limitados, flexibilidad, lista de espera, notificaciones)
- [x] Sección de tipos de clases / servicios
- [x] Footer con datos de contacto

## Fase 5: Autenticación
- [x] Página de login con email y contraseña
- [x] Página de registro con nombre, email, contraseña y rol
- [x] Protección de rutas según rol
- [x] Redirección post-login según rol (alumno → /dashboard, admin → /admin)

## Fase 6: Panel del alumno
- [x] Layout con sidebar (Reservar clase, Mis reservas, Lista de espera, Mis datos)
- [x] Página "Reservar clase": selector de día, grilla de horarios con disponibilidad
- [x] Página "Mis reservas": reservas activas con opción de cancelar
- [x] Página "Lista de espera": clases en espera
- [x] Página "Mis datos": editar perfil personal

## Fase 7: Panel del administrador
- [x] Layout con sidebar de administración
- [x] Página "Clases": listar, crear, editar y eliminar clases
- [x] Página "Alumnos por clase": ver inscritos y lista de espera de cada clase
- [x] Página "Gestión de reservas": crear/cancelar reservas manualmente
- [x] Página "Usuarios": ver todos los alumnos registrados

## Fase 8: Tests y pulido final
- [x] Tests unitarios para reservas y lista de espera
- [x] Verificar responsividad mobile
- [x] Checkpoint final y entrega
