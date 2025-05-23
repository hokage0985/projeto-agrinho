# 🚀 Como Colocar seu Projeto no GitHub

## Passo 1: Criar conta no GitHub
1. Acesse: https://github.com
2. Clique em "Sign up" e crie sua conta
3. Confirme seu email

## Passo 2: Criar um novo repositório
1. No GitHub, clique no botão verde "New" ou "+"
2. Nome do repositório: `projeto-agrinho-comercio-justo`
3. Marque "Public" (para funcionar no GitHub Pages)
4. Clique em "Create repository"

## Passo 3: Fazer upload dos arquivos
### Opção A: Pela interface web (Mais fácil)
1. Na página do seu repositório, clique em "uploading an existing file"
2. Arraste todos os arquivos do projeto ou clique "choose your files"
3. Não faça upload das pastas: `.cache`, `.local`, `node_modules`
4. Escreva uma mensagem: "Primeiro commit - Projeto Agrinho"
5. Clique em "Commit changes"

### Opção B: Usando Git (se tiver instalado)
```bash
git clone https://github.com/SEU-USUARIO/projeto-agrinho-comercio-justo.git
# Copie todos os arquivos para esta pasta
git add .
git commit -m "Primeiro commit - Projeto Agrinho"
git push
```

## Passo 4: Ativar GitHub Pages
1. No seu repositório, vá em "Settings"
2. No menu lateral, clique em "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Branch: "main" ou "master"
5. Folder: "/ (root)"
6. Clique em "Save"

## Passo 5: Acessar seu site
- Após alguns minutos, seu site estará em:
- `https://SEU-USUARIO.github.io/projeto-agrinho-comercio-justo`

## 🎯 Arquivos importantes para upload:
```
✅ client/ (pasta completa)
✅ server/ (pasta completa)  
✅ shared/ (pasta completa)
✅ package.json
✅ vite.config.ts
✅ tailwind.config.ts
✅ tsconfig.json
✅ README.md
✅ .gitignore

❌ NÃO FAZER UPLOAD:
❌ node_modules/
❌ .cache/
❌ .local/
❌ .replit
```

**Pronto! Seu projeto estará online e você pode compartilhar o link com seus professores!**