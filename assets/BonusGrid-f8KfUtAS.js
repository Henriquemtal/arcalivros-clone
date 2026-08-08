import{j as a}from"./index-ClG9q0mi.js";const i=[{id:1,title:"Alfabeto Bíblico",description:"Aprendizado do alfabeto com palavras e conceitos bíblicos, ajudando a criança a aprender letras enquanto conhece a Palavra de Deus.",image:"/entregaveis-png/Alfabeto bíblico.png",alt:"Alfabeto bíblico infantil"},{id:2,title:"Amor de Deus",description:"Atividade que ensina às crianças o amor incondicional de Deus de forma visual, simples e cheia de significado.",image:"/entregaveis-png/AMOR DE DEUS.png",alt:"Amor de Deus para crianças"},{id:4,title:"Antigo Testamento",description:"Conteúdos e atividades que apresentam as principais histórias do Antigo Testamento de forma clara e acessível para os pequenos.",image:"/entregaveis-png/ANTIGO TESTAMENTO.png",alt:"Atividades do Antigo Testamento infantil"},{id:5,title:"Aprendendo a Orar",description:"Atividades práticas que ajudam a criança a aprender como conversar com Deus e desenvolver o hábito da oração.",image:"/entregaveis-png/APRENDENDO A ORAR.png",alt:"Aprendendo a orar infantil"},{id:6,title:"Aprendendo com Alegria",description:"Atividades educativas que unem diversão e aprendizado cristão, tornando o estudo leve e prazeroso.",image:"/entregaveis-png/Aprendendo com Alegria.png",alt:"Aprendendo com alegria infantil"},{id:7,title:"Atividade ABC Bíblica",description:"Exercícios de alfabetização com temática bíblica para reforçar letras, palavras e valores cristãos.",image:"/entregaveis-png/Atividade ABC bíblica.png",alt:"Atividade ABC bíblica infantil"},{id:8,title:"Aventuras Bíblicas",description:"Histórias e atividades que levam a criança a explorar grandes aventuras da Bíblia de forma divertida.",image:"/entregaveis-png/Aventuras bíblica.png",alt:"Aventuras bíblicas infantis"},{id:9,title:"Colorindo com Propósito",description:"Desenhos para colorir que estimulam a criatividade enquanto ensinam princípios e mensagens bíblicas.",image:"/entregaveis-png/COLORINDO com propósito.png",alt:"Colorindo com propósito cristão"},{id:10,title:"Complete os Nomes dos Animais",description:"Atividade interativa para reforçar leitura e escrita usando animais da criação de Deus como tema.",image:"/entregaveis-png/Complete os nomes dos animais.png",alt:"Complete os nomes dos animais bíblicos"},{id:11,title:"Passatempo Bíblico",description:"Passatempos cristãos que estimulam o raciocínio enquanto reforçam histórias e valores da Bíblia.",image:"/entregaveis-png/PASSATEMPO BÍBLICO.png",alt:"Passatempo bíblico infantil"}],s=()=>a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .ps-bonus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          margin-top: 12px;
        }

        .ps-bonus-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 10px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.05);
          font-size: 0.88rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ps-bonus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
        }

        .ps-bonus-card img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 6px;
          object-fit: cover;
        }

        .ps-bonus-card h3 {
          font-size: 0.94rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: #1e1b4b;
        }

        .ps-bonus-card p {
          color: #475569;
          line-height: 1.4;
        }
      `}),a.jsx("div",{className:"ps-bonus-grid",children:i.map(e=>a.jsxs("div",{className:"ps-bonus-card",children:[a.jsx("img",{src:e.image,alt:e.alt,loading:"lazy",decoding:"async"}),a.jsx("h3",{children:e.title}),a.jsx("p",{children:e.description})]},e.id))})]});export{s as BonusGrid,i as bonusItems,s as default};
