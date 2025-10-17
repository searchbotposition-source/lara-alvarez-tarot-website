#!/bin/bash

# Script para configurar Git y conectar con GitHub
# Ejecutar con: bash setup-git.sh

echo "🚀 Configurando repositorio Git para Lara Álvarez Website..."

# Inicializar repositorio Git
echo "📁 Inicializando repositorio Git..."
git init

# Agregar todos los archivos
echo "📝 Agregando archivos al repositorio..."
git add .

# Hacer commit inicial
echo "💾 Creando commit inicial..."
git commit -m "Initial commit: Lara Álvarez Tarot Website

- Sitio web completo de Lara Álvarez
- Diseño responsivo con Bootstrap
- Páginas de servicios y blog
- Optimizado para Vercel
- SEO y accesibilidad mejorados"

# Configurar rama principal
echo "🌿 Configurando rama principal..."
git branch -M main

echo "✅ Repositorio Git configurado exitosamente!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Crear un repositorio en GitHub:"
echo "   - Ve a https://github.com/new"
echo "   - Nombre: lara-alvarez-tarot-website"
echo "   - Descripción: Sitio web de Lara Álvarez - Vidente y Experta en Amarres de Amor"
echo "   - Marca como público o privado según prefieras"
echo ""
echo "2. Conectar con GitHub:"
echo "   git remote add origin https://github.com/TU-USUARIO/lara-alvarez-tarot-website.git"
echo "   git push -u origin main"
echo ""
echo "3. Configurar Vercel:"
echo "   - Ve a https://vercel.com"
echo "   - Conecta tu cuenta de GitHub"
echo "   - Importa el repositorio"
echo "   - Vercel detectará automáticamente la configuración"
echo ""
echo "🎉 ¡Listo para desplegar!"
