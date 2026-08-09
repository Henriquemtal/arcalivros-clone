# Relatório Técnico: Engenharia e Arquitetura - Arca Livros

Este documento detalha a análise técnica do site [arcalivros.vercel.app](https://arcalivros.vercel.app), abrangendo sua stack tecnológica, fontes de recursos e lógica de funcionamento.

## 1. Stack Tecnológica Base

O site é uma aplicação web moderna construída com as seguintes tecnologias principais:

| Tecnologia | Função | Observações |
| :--- | :--- | :--- |
| **React** | Biblioteca UI | Base da interface reativa e componentes. |
| **Vite** | Build Tool | Utilizado para bundling e desenvolvimento rápido. |
| **Tailwind CSS** | Framework CSS | Responsável por toda a estilização utilitária e responsividade. |
| **Radix UI** | Primitivos de UI | Componentes acessíveis como Accordion e Modais. |
| **Lucide React** | Ícones | Biblioteca de ícones vetoriais. |
| **Firebase Storage** | Hospedagem de Assets | Armazenamento de imagens pesadas e capas de livros. |
| **Vercel** | Hospedagem | Plataforma de deployment e execução. |

## 2. Engenharia de Funcionamento

A engenharia do site é focada em **Conversão de Vendas (Direct Response Marketing)**, utilizando um fluxo de personalização simples para aumentar o engajamento emocional do usuário.

### Fluxo de Dados e Personalização
1.  **Entrada de Dados**: O usuário insere o nome da criança na `index.html`.
2.  **Estado Global**: O nome é capturado e injetado em templates de strings em toda a aplicação (ex: `Imagine a alegria de ${nome} ao descobrir...`).
3.  **Componentização**: O site utiliza componentes React preguiçosos (`y.lazy`) para carregar as páginas conforme necessário, otimizando a performance inicial.
4.  **Backend e API**:
    *   `POST /api/salvarFormulario`: Provavelmente envia os dados de lead para um CRM ou banco de dados.
    *   `POST /api/mercado-pago/criar-pix`: Integração com o gateway de pagamento Mercado Pago para gerar cobranças via PIX.

## 3. Fontes de Imagens e Recursos Visuais

As imagens do site provêm de duas fontes principais:

### A. Firebase Storage
Utilizado para imagens dinâmicas e de alta qualidade, como as capas dos livros.
*   **Domínio**: `firebasestorage.googleapis.com`
*   **Caminho Base**: `sinceyuu.firebasestorage.app/o/Infantil...`
*   **Exemplo**: Capas do livro "O Milagre dos Pães e dos Peixinhos".

### B. Assets Locais
Imagens estáticas e mockups de marketing.
*   **Diretório**: `/assets/` e `/entregaveis-png/`
*   **Formatos**: `.webp` (para performance) e `.png` (para bônus com transparência).
*   **Origem Provável**: Mockups gerados via ferramentas como SmartMockups ou Canva, e ilustrações provavelmente criadas por IA ou bancos de imagens cristãos.

## 4. Análise de Segurança e Rastreamento

O site possui uma camada densa de rastreamento para análise de tráfego e performance de anúncios:
*   **Facebook Pixel (CAPI)**: Rastreamento avançado de eventos como `AddPaymentInfo` e `Purchase`.
*   **Microsoft Clarity**: Utilizado para gravar sessões de usuários e entender onde eles clicam ou encontram dificuldades.
*   **Google Analytics**: Rastreamento padrão de tráfego.

## 5. Conclusão

A engenharia do Arca Livros é um exemplo clássico de **Funil de Vendas de Alta Conversão**. A tecnologia React/Vite permite uma navegação fluida sem recarregamentos de página (SPA), enquanto a personalização em tempo real do nome da criança atua como um gatilho psicológico poderoso. A infraestrutura é leve, utilizando serviços de terceiros (Firebase, Mercado Pago, Vercel) para delegar a complexidade de armazenamento e pagamentos.
