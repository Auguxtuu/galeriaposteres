// Filmes separados por categorias, com nome, título e sinopse.
const categorias = [
    {
        "titulo": "Ação",
        "pasta": "posters/acao",
        "imagens": [
            { "arquivo": "acao1.jpg", "titulo": "John Wick: De Volta ao Jogo", "sinopse": "Um ex-assassino de aluguel lendário sai da aposentadoria para rastrear os gângsteres que tiraram tudo dele, iniciando uma caçada implacável.", "link_trailer": "https://www.youtube.com/watch?v=C0BMx-qR-wI" },
            { "arquivo": "acao2.jpg", "titulo": "Mad Max: Estrada da Fúria", "sinopse": "Em um mundo pós-apocalíptico, Max se une à Imperatriz Furiosa para fugir de um tirano e seu exército em uma perseguição mortal na estrada.", "link_trailer": "https://www.youtube.com/watch?v=hEJnMQG9ev8" },
            { "arquivo": "acao3.jpg", "titulo": "Matrix", "sinopse": "Um jovem programador descobre que o mundo em que vive é uma simulação e se junta a uma rebelião para libertar a humanidade.", "link_trailer": "https://www.youtube.com/watch?v=2gGz216k-XU" },
            { "arquivo": "acao4.jpg", "titulo": "Duro de Matar", "sinopse": "O policial John McClane tenta salvar sua esposa e outros reféns de terroristas alemães durante uma festa de Natal em um arranha-céu de Los Angeles.", "link_trailer": "https://www.youtube.com/watch?v=g_j91oH8B-A" },
            { "arquivo": "acao5.jpg", "titulo": "O Exterminador do Futuro 2", "sinopse": "Um ciborgue idêntico ao que falhou em matar Sarah Connor deve agora proteger seu filho adolescente de um exterminador mais avançado e perigoso.", "link_trailer": "https://www.youtube.com/watch?v=CRRlbK5w8AE" },
            { "arquivo": "acao6.jpg", "titulo": "Vingadores: Ultimato", "sinopse": "Após os eventos devastadores de Guerra Infinita, os heróis sobreviventes se reúnem para uma última tentativa de reverter as ações de Thanos.", "link_trailer": "https://www.youtube.com/watch?v=g6ng8eQG_4E" },
            { "arquivo": "acao7.jpg", "titulo": "Top Gun: Maverick", "sinopse": "Após mais de 30 anos de serviço, o piloto Pete 'Maverick' Mitchell treina um novo esquadrão de graduados Top Gun para uma missão especializada.", "link_trailer": "https://www.youtube.com/watch?v= করিলে-3bbWE-c" },
            { "arquivo": "acao8.jpg", "titulo": "007 - Cassino Royale", "sinopse": "Na sua primeira missão como 007, James Bond deve derrotar um banqueiro privado de terroristas em um jogo de pôquer de altas apostas.", "link_trailer": "https://www.youtube.com/watch?v=36fN62RWO2w" },
            { "arquivo": "acao9.jpg", "titulo": "The Boys", "sinopse": "Um grupo de vigilantes decide enfrentar super-heróis corruptos que abusam de seus superpoderes em vez de usá-los para o bem.", "link_trailer": "https://www.youtube.com/watch?v=tcrV80TUkj8" },
            { "arquivo": "acao10.jpg", "titulo": "O Mandaloriano", "sinopse": "As viagens de um caçador de recompensas solitário nos confins da galáxia, longe da autoridade da Nova República, que protege uma criança misteriosa.", "link_trailer": "https://www.youtube.com/watch?v=6WKhGPGcfd8" }
        ]
    },
    {
        "titulo": "Animação",
        "pasta": "posters/animacao",
        "imagens": [
            { "arquivo": "animacao1.jpg", "titulo": "Homem-Aranha no Aranhaverso", "sinopse": "Miles Morales se torna o Homem-Aranha de sua realidade e cruza com cinco contrapartes de outras dimensões para deter uma ameaça a todas as realidades.", "link_trailer": "https://www.youtube.com/watch?v=SSo9h71x_fA" },
            { "arquivo": "animacao2.jpg", "titulo": "O Rei Leão", "sinopse": "O jovem leão Simba, destinado a governar as Terras do Reino, foge após a morte de seu pai, mas deve retornar para reivindicar seu lugar de direito.", "link_trailer": "https://www.youtube.com/watch?v=eWahGfF5_L4" },
            { "arquivo": "animacao3.jpg", "titulo": "Toy Story", "sinopse": "Um boneco caubói se sente profundamente ameaçado quando um novo e moderno boneco de patrulheiro espacial o substitui como o brinquedo favorito.", "link_trailer": "https://www.youtube.com/watch?v=7_L-g2ii62c" },
            { "arquivo": "animacao4.jpg", "titulo": "Shrek", "sinopse": "Um ogro mal-humorado parte em uma missão para resgatar uma princesa a mando de um lorde, a fim de ter seu pântano de volta.", "link_trailer": "https://www.youtube.com/watch?v=CwXOr1JdE8s" },
            { "arquivo": "animacao5.jpg", "titulo": "Procurando Nemo", "sinopse": "Depois que seu filho é capturado no Grande Recife de Coral e levado para Sydney, um peixe-palhaço medroso parte em uma jornada para trazê-lo para casa.", "link_trailer": "https://www.youtube.com/watch?v=2zL-22b5V6I" },
            { "arquivo": "animacao6.jpg", "titulo": "Gato de Botas 2: O Último Pedido", "sinopse": "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas e parte em busca do mítico Último Desejo.", "link_trailer": "https://www.youtube.com/watch?v=sUI6_t_o5yA" },
            { "arquivo": "animacao7.jpg", "titulo": "Klaus", "sinopse": "Um carteiro egoísta é enviado para uma cidade congelada no Norte, onde descobre que o Papai Noel está escondido e forma uma amizade improvável.", "link_trailer": "https://www.youtube.com/watch?v=L3a9y815A6s" },
            { "arquivo": "animacao8.jpg", "titulo": "Up - Altas Aventuras", "sinopse": "Um vendedor de balões de 78 anos realiza seu sonho de voar para a América do Sul amarrando milhares de balões em sua casa, mas leva um jovem passageiro.", "link_trailer": "https://www.youtube.com/watch?v=3_yv_yK_V7w" },
            { "arquivo": "animacao9.jpg", "titulo": "Frozen: Uma Aventura Congelante", "sinopse": "A recém-coroada Rainha Elsa acidentalmente usa seu poder para transformar as coisas em gelo para amaldiçoar sua casa em um inverno infinito.", "link_trailer": "https://www.youtube.com/watch?v=1iAk_B3OCaA" },
            { "arquivo": "animacao10.jpg", "titulo": "O Estranho Mundo de Jack", "sinopse": "Jack Skellington, o rei da Cidade do Halloween, descobre a Cidade do Natal, mas sua tentativa de trazer o Natal para casa causa confusão.", "link_trailer": "https://www.youtube.com/watch?v=Z51zJbnS-0c" }
        ]
    },
    {
        "titulo": "Animes",
        "pasta": "posters/animes",
        "imagens": [
            { "arquivo": "anime1.jpg", "titulo": "A Viagem de Chihiro", "sinopse": "Durante a mudança de sua família para o subúrbio, uma menina de 10 anos vagueia por um mundo governado por deuses, bruxas e espíritos.", "link_trailer": "https://www.youtube.com/watch?v=2Ea8i_nVgS8" },
            { "arquivo": "anime2.jpg", "titulo": "Akira", "sinopse": "O líder de uma gangue de motoqueiros tenta salvar seu amigo de um projeto governamental secreto enquanto luta contra ativistas anti-governo.", "link_trailer": "https://www.youtube.com/watch?v=i-h_L_G4X2A" },
            { "arquivo": "anime3.jpg", "titulo": "Your Name", "sinopse": "Dois estranhos se encontram misteriosa e intermitentemente trocando de corpo. As coisas se complicam quando decidem se encontrar pessoalmente.", "link_trailer": "https://www.youtube.com/watch?v=3KR8_igDs1Y" },
            { "arquivo": "anime4.jpg", "titulo": "Ghost in the Shell", "sinopse": "Uma policial ciborgue e sua parceira caçam um hacker misterioso e poderoso conhecido como o Mestre dos Fantoches.", "link_trailer": "https://www.youtube.com/watch?v=G4VmJcZR0Yg" },
            { "arquivo": "anime5.jpg", "titulo": "Meu Amigo Totoro", "sinopse": "Quando duas meninas se mudam para o campo para ficar perto da mãe doente, elas têm aventuras com os maravilhosos espíritos da floresta que vivem nas proximidades.", "link_trailer": "https://www.youtube.com/watch?v=9lB8y2sQp2A" },
            { "arquivo": "anime6.jpg", "titulo": "Attack on Titan", "sinopse": "Depois que sua cidade natal é destruída, o jovem Eren Jaeger promete limpar a terra dos titãs humanóides gigantes que levaram a humanidade à beira da extinção.", "link_trailer": "https://www.youtube.com/watch?v=M_2gjghA3s4" },
            { "arquivo": "anime7.jpg", "titulo": "Death Note", "sinopse": "Um estudante do ensino médio descobre um caderno sobrenatural que lhe permite matar qualquer pessoa escrevendo o nome dela.", "link_trailer": "https://www.youtube.com/watch?v=NlJZ-YgAt-c" },
            { "arquivo": "anime8.jpg", "titulo": "Cowboy Bebop", "sinopse": "A tripulação futurista e desorganizada da nave espacial Bebop viaja pelo sistema solar em busca de seu próximo trabalho.", "link_trailer": "https://www.youtube.com/watch?v=qig4KOK2R2g" },
            { "arquivo": "anime9.jpg", "titulo": "Demon Slayer", "sinopse": "Um jovem se torna um matador de demônios para encontrar o responsável por assassinar sua família e transformar sua irmã em um demônio.", "link_trailer": "https://www.youtube.com/watch?v=6vMuG1d0T_A" },
            { "arquivo": "anime10.jpg", "titulo": "Naruto Shippuden", "sinopse": "Naruto Uzumaki, um ninja adolescente barulhento, luta por reconhecimento e sonha em se tornar o Hokage, o líder de sua vila.", "link_trailer": "https://www.youtube.com/watch?v=1dy2z4t4w1k" }
        ]
    },
    {
        "titulo": "Aventura",
        "pasta": "posters/aventura",
        "imagens": [
            { "arquivo": "aventura1.jpg", "titulo": "O Senhor dos Anéis: A Sociedade do Anel", "sinopse": "Um humilde Hobbit da Comarca e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média.", "link_trailer": "https://www.youtube.com/watch?v=rCZ3SN65kIs" },
            { "arquivo": "aventura2.jpg", "titulo": "Indiana Jones e os Caçadores da Arca Perdida", "sinopse": "Em 1936, o arqueólogo e aventureiro Indiana Jones é contratado pelo governo dos EUA para encontrar a Arca da Aliança antes que os nazistas a obtenham.", "link_trailer": "https://www.youtube.com/watch?v=0xQSIdSRl5c" },
            { "arquivo": "aventura3.jpg", "titulo": "Jurassic Park: O Parque dos Dinossauros", "sinopse": "Um parque temático sofre uma falha de energia crítica, permitindo que seus dinossauros clonados escapem durante uma visita de inspeção.", "link_trailer": "https://www.youtube.com/watch?v=QWBKEmWWL38" },
            { "arquivo": "aventura4.jpg", "titulo": "Piratas do Caribe: A Maldição do Pérola Negra", "sinopse": "O ferreiro Will Turner se une ao excêntrico pirata Capitão Jack Sparrow para salvar seu amor da tripulação amaldiçoada de Jack.", "link_trailer": "https://www.youtube.com/watch?v=9pRgY_k43P0" },
            { "arquivo": "aventura5.jpg", "titulo": "Os Goonies", "sinopse": "Um grupo de jovens desajustados descobre um mapa antigo e parte em uma aventura para encontrar o tesouro perdido de um lendário pirata.", "link_trailer": "https://www.youtube.com/watch?v=kB0o_owpL14" },
            { "arquivo": "aventura6.jpg", "titulo": "A Múmia (1999)", "sinopse": "Um egiptólogo e um aventureiro americano acidentalmente ressuscitam uma múmia amaldiçoada durante uma escavação arqueológica.", "link_trailer": "https://www.youtube.com/watch?v=f7oKxlaCQ5k" },
            { "arquivo": "aventura7.jpg", "titulo": "Guardiões da Galáxia", "sinopse": "Um grupo de desajustados intergalácticos deve se unir para impedir um fanático guerreiro de controlar o universo.", "link_trailer": "https://www.youtube.com/watch?v=d96cjJhvlMA" },
            { "arquivo": "aventura8.jpg", "titulo": "Jumanji: Bem-vindo à Selva", "sinopse": "Quatro adolescentes são sugados para um videogame mágico, e a única maneira de escapar é trabalhando juntos para terminar o jogo.", "link_trailer": "https://www.youtube.com/watch?v=A-fk_G_s5vA" },
            { "arquivo": "aventura9.jpg", "titulo": "Avatar", "sinopse": "Um fuzileiro naval paraplégico despachado para a lua Pandora se vê dividido entre seguir ordens e proteger o mundo que ele sente ser sua casa.", "link_trailer": "https://www.youtube.com/watch?v=5PSNL1qE6VY" },
            { "arquivo": "aventura10.jpg", "titulo": "Tudo em Todo o Lugar ao Mesmo Tempo", "sinopse": "Uma imigrante chinesa exausta é arrastada para uma aventura insana, onde só ela pode salvar o mundo explorando outros universos.", "link_trailer": "https://www.youtube.com/watch?v=2B4h2rdoO7I" }
        ]
    },
    {
        "titulo": "Comédia",
        "pasta": "posters/comedia",
        "imagens": [
            { "arquivo": "comedia1.jpg", "titulo": "O Auto da Compadecida", "sinopse": "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver, enganando a todos no pequeno vilarejo de Taperoá.", "link_trailer": "https://www.youtube.com/watch?v=m35h_2h4c_I" },
            { "arquivo": "comedia2.jpg", "titulo": "Se Beber, Não Case!", "sinopse": "Três amigos acordam de uma despedida de solteiro em Las Vegas, sem memória da noite anterior e com o noivo desaparecido.", "link_trailer": "https://www.youtube.com/watch?v=842KTL_S0go" },
            { "arquivo": "comedia3.jpg", "titulo": "Superbad: É Hoje", "sinopse": "Dois estudantes do ensino médio co-dependentes são forçados a lidar com a ansiedade da separação depois que seu plano de farra dá errado.", "link_trailer": "https://www.youtube.com/watch?v=4P5slHe2iPU" },
            { "arquivo": "comedia4.jpg", "titulo": "Curtindo a Vida Adoidado", "sinopse": "Um jovem popular do ensino médio decide tirar um dia de folga da escola e embarca em uma aventura por Chicago com sua namorada e seu melhor amigo.", "link_trailer": "https://www.youtube.com/watch?v=K-Ag_8s3t9E" },
            { "arquivo": "comedia5.jpg", "titulo": "Escola de Rock", "sinopse": "Depois de ser expulso de sua banda de rock, Dewey Finn se torna um professor substituto de uma turma de alunos da quinta série e tenta transformá-los em uma banda.", "link_trailer": "https://www.youtube.com/watch?v=3pGGKn211c4" },
            { "arquivo": "comedia6.jpg", "titulo": "As Branquelas", "sinopse": "Dois agentes do FBI desonrados se disfarçam de socialites mimadas para se infiltrar na alta sociedade e desvendar um esquema de sequestro.", "link_trailer": "https://www.youtube.com/watch?v=aeVkbNka9HM" },
            { "arquivo": "comedia7.jpg", "titulo": "The Office", "sinopse": "Um documentário sobre um grupo de funcionários de escritório típicos, onde o dia de trabalho consiste em conflitos de ego, comportamento inadequado e tédio.", "link_trailer": "https://www.youtube.com/watch?v=N5A4b_K3e68" },
            { "arquivo": "comedia8.jpg", "titulo": "Friends", "sinopse": "Segue a vida pessoal e profissional de seis amigos de vinte e poucos anos vivendo em Manhattan.", "link_trailer": "https://www.youtube.com/watch?v=IEEbUzffzrk" },
            { "arquivo": "comedia9.jpg", "titulo": "Brooklyn Nine-Nine", "sinopse": "O detetive Jake Peralta, um policial talentoso, mas despreocupado, enfrenta um novo capitão que quer que ele cresça e siga as regras.", "link_trailer": "https://www.youtube.com/watch?v=sEOuJ4z5aTc" },
            { "arquivo": "comedia10.jpg", "titulo": "Fleabag", "sinopse": "Uma jovem de raciocínio rápido e de luto navega pela vida e pelo amor em Londres enquanto tenta lidar com uma tragédia.", "link_trailer": "https://www.youtube.com/watch?v=I5Uv6cb9YRs" }
        ]
    },
    {
        "titulo": "Drama",
        "pasta": "posters/drama",
        "imagens": [
            { "arquivo": "drama1.jpg", "titulo": "O Poderoso Chefão", "sinopse": "O patriarca envelhecido de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.", "link_trailer": "https://www.youtube.com/watch?v=CWoQlDlyQj4" },
            { "arquivo": "drama2.jpg", "titulo": "Forrest Gump: O Contador de Histórias", "sinopse": "As presidências de Kennedy e Johnson, os eventos do Vietnã e Watergate vistos através dos olhos de um homem do Alabama com um QI de 75.", "link_trailer": "https://www.youtube.com/watch?v=bLvqoHBptjg" },
            { "arquivo": "drama3.jpg", "titulo": "À Espera de um Milagre", "sinopse": "A vida dos guardas do Corredor da Morte é afetada por um de seus prisioneiros: um homem negro acusado de assassinato, que tem um dom misterioso.", "link_trailer": "https://www.youtube.com/watch?v=1dK00s30g-E" },
            { "arquivo": "drama4.jpg", "titulo": "Parasita", "sinopse": "A ganância e a discriminação de classe ameaçam o relacionamento simbiótico recém-formado entre a rica família Park e a pobre família Kim.", "link_trailer": "https://www.youtube.com/watch?v=m4j2E-qoNyE" },
            { "arquivo": "drama5.jpg", "titulo": "Coringa", "sinopse": "Em Gotham City, o comediante com problemas mentais Arthur Fleck é desconsiderado e maltratado pela sociedade. Ele então embarca em uma espiral descendente.", "link_trailer": "https://www.youtube.com/watch?v=t433PEQGErc" },
            { "arquivo": "drama6.jpg", "titulo": "A Lista de Schindler", "sinopse": "Na Polônia ocupada pelos alemães durante a Segunda Guerra Mundial, o industrial Oskar Schindler gradualmente se preocupa com sua força de trabalho judaica.", "link_trailer": "https://www.youtube.com/watch?v=gG22XNht_fk" },
            { "arquivo": "drama7.jpg", "titulo": "Breaking Bad: A Química do Mal", "sinopse": "Um professor de química do ensino médio diagnosticado com câncer de pulmão inoperável passa a produzir e vender metanfetamina para garantir o futuro de sua família.", "link_trailer": "https://www.youtube.com/watch?v=HhesaQXLuRY" },
            { "arquivo": "drama8.jpg", "titulo": "Game of Thrones", "sinopse": "Nove famílias nobres lutam pelo controle das terras míticas de Westeros, enquanto um antigo inimigo retorna após estar adormecido por milênios.", "link_trailer": "https://www.youtube.com/watch?v=KPLWWIO_vfs" },
            { "arquivo": "drama9.jpg", "titulo": "Succession", "sinopse": "A família Roy é conhecida por controlar o maior conglomerado de mídia e entretenimento do mundo. No entanto, seu mundo vira de cabeça para baixo quando seu pai se afasta.", "link_trailer": "https://www.youtube.com/watch?v=sWvM0_Tv7sA" },
            { "arquivo": "drama10.jpg", "titulo": "Peaky Blinders", "sinopse": "Uma gangue de gângsteres em Birmingham, Inglaterra, de 1919, liderada pelo feroz Tommy Shelby, um chefe do crime que quer subir no mundo.", "link_trailer": "https://www.youtube.com/watch?v=oVzVdvGUn_s" }
        ]
    },
    {
        "titulo": "Ficção Científica",
        "pasta": "posters/ficcao_cientifica",
        "imagens": [
            { "arquivo": "ficcao_cientifica1.jpg", "titulo": "Blade Runner 2049", "sinopse": "O jovem blade runner K descobre um segredo enterrado há muito tempo que tem o potencial de mergulhar o que resta da sociedade no caos.", "link_trailer": "https://www.youtube.com/watch?v=gCcx85zbxz4" },
            { "arquivo": "ficcao_cientifica2.jpg", "titulo": "Star Wars: Uma Nova Esperança", "sinopse": "Luke Skywalker se junta a um Cavaleiro Jedi, um piloto arrogante, um Wookiee e dois dróides para salvar a galáxia do Império.", "link_trailer": "https://www.youtube.com/watch?v=vZ734NWnAHA" },
            { "arquivo": "ficcao_cientifica3.jpg", "titulo": "A Chegada", "sinopse": "Uma linguista trabalha com os militares para se comunicar com formas de vida alienígenas depois que doze naves espaciais misteriosas aparecem em todo o mundo.", "link_trailer": "https://www.youtube.com/watch?v=rNciXGzST-I" },
            { "arquivo": "ficcao_cientifica4.jpg", "titulo": "A Origem", "sinopse": "Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.", "link_trailer": "https://www.youtube.com/watch?v=85oUa4zJc4I" },
            { "arquivo": "ficcao_cientifica5.jpg", "titulo": "Duna", "sinopse": "A adaptação do romance de ficção científica de Frank Herbert, sobre o filho de uma família nobre encarregado da proteção do bem mais valioso da galáxia.", "link_trailer": "https://www.youtube.com/watch?v=TAc5_d23lM0" },
            { "arquivo": "ficcao_cientifica6.jpg", "titulo": "E.T. - O Extraterrestre", "sinopse": "Uma criança problemática reúne coragem para ajudar um alienígena amigável a escapar da Terra e retornar ao seu planeta natal.", "link_trailer": "https://www.youtube.com/watch?v=F8gPGx039XM" },
            { "arquivo": "ficcao_cientifica7.jpg", "titulo": "2001: Uma Odisseia no Espaço", "sinopse": "A humanidade encontra um misterioso objeto artificial enterrado sob a superfície lunar e parte em uma busca com o supercomputador H.A.L. 9000.", "link_trailer": "https://www.youtube.com/watch?v=oR_e9y-bKa0" },
            { "arquivo": "ficcao_cientifica8.jpg", "titulo": "Black Mirror", "sinopse": "Uma antologia de ficção científica que explora um futuro distorcido e de alta tecnologia onde as maiores inovações da humanidade e seus instintos mais sombrios colidem.", "link_trailer": "https://www.youtube.com/watch?v=P2Q2Aj1a2eI" },
            { "arquivo": "ficcao_cientifica9.jpg", "titulo": "Stranger Things", "sinopse": "Quando um garoto desaparece, sua mãe, um chefe de polícia e seus amigos devem confrontar forças aterrorizantes para trazê-lo de volta.", "link_trailer": "https://www.youtube.com/watch?v=mnd7sFt5c3A" },
            { "arquivo": "ficcao_cientifica10.jpg", "titulo": "Westworld", "sinopse": "Em um parque de diversões futurista e temático do Velho Oeste, um grupo de 'anfitriões' androides se desvia de suas programações.", "link_trailer": "https://www.youtube.com/watch?v=IuS5huqOND4" }
        ]
    },
    {
        "titulo": "Terror",
        "pasta": "posters/terror",
        "imagens": [
            { "arquivo": "terror1.jpg", "titulo": "O Iluminado", "sinopse": "Uma família vai para um hotel isolado para o inverno, onde uma presença sinistra influencia o pai à violência, enquanto seu filho psíquico vê presságios.", "link_trailer": "https://www.youtube.com/watch?v=5Cb3ik6zP2I" },
            { "arquivo": "terror2.jpg", "titulo": "Corra!", "sinopse": "Um jovem afro-americano visita a propriedade dos pais de sua namorada branca, onde fica sabendo de um segredo verdadeiramente perturbador.", "link_trailer": "https://www.youtube.com/watch?v=mDqsgbtpDLk" },
            { "arquivo": "terror3.jpg", "titulo": "O Exorcista", "sinopse": "Quando uma adolescente é possuída por uma entidade misteriosa, sua mãe busca a ajuda de dois padres para salvá-la.", "link_trailer": "https://www.youtube.com/watch?v=YDGw1MTEe9k" },
            { "arquivo": "terror4.jpg", "titulo": "Hereditário", "sinopse": "Uma família enlutada é assombrada por ocorrências trágicas e perturbadoras depois que a matriarca da família falece.", "link_trailer": "https://www.youtube.com/watch?v=VlYjVw3L33Y" },
            { "arquivo": "terror5.jpg", "titulo": "Alien, o Oitavo Passageiro", "sinopse": "A tripulação de uma nave espacial comercial encontra uma forma de vida mortal depois de investigar uma transmissão desconhecida.", "link_trailer": "https://www.youtube.com/watch?v=jQ5lPt9edzQ" },
            { "arquivo": "terror6.jpg", "titulo": "O Silêncio dos Inocentes", "sinopse": "Uma jovem cadete do FBI deve ter a ajuda de um assassino canibal manipulador e preso para ajudar a capturar outro serial killer.", "link_trailer": "https://www.youtube.com/watch?v=W6Mm8Sbe__o" },
            { "arquivo": "terror7.jpg", "titulo": "It: A Coisa", "sinopse": "No verão de 1989, um grupo de crianças vítimas de bullying se une para destruir um monstro que muda de forma, que se disfarça de palhaço e caça crianças.", "link_trailer": "https://www.youtube.com/watch?v=dD26-sZp_g8" },
            { "arquivo": "terror8.jpg", "titulo": "Pânico", "sinopse": "Um ano após o assassinato de sua mãe, uma adolescente é aterrorizada por um novo assassino, que a persegue com seus amigos como parte de um jogo mortal.", "link_trailer": "https://www.youtube.com/watch?v=AWm_mkbdpCA" },
            { "arquivo": "terror9.jpg", "titulo": "A Maldição da Residência Hill", "sinopse": "Balançando entre o passado e o presente, uma família fragmentada confronta memórias assustadoras de sua antiga casa e os eventos aterrorizantes que os expulsaram dela.", "link_trailer": "https://www.youtube.com/watch?v=G2S11GY0s4s" },
            { "arquivo": "terror10.jpg", "titulo": "The Walking Dead", "sinopse": "O vice-xerife Rick Grimes acorda de um coma para saber que o mundo está em ruínas e deve liderar um grupo de sobreviventes para se manterem vivos.", "link_trailer": "https://www.youtube.com/watch?v=R1v0uFms68U" }
        ]
    },
    {
        "titulo": "Romance",
        "pasta": "posters/romance",
        "imagens": [
            { "arquivo": "romance1.jpg", "titulo": "Titanic", "sinopse": "Uma aristocrata de dezessete anos se apaixona por um artista gentil, mas pobre, a bordo do luxuoso e malfadado R.M.S. Titanic.", "link_trailer": "https://www.youtube.com/watch?v=CHekzSiZjrY" },
            { "arquivo": "romance2.jpg", "titulo": "Diário de uma Paixão", "sinopse": "Um jovem pobre, mas apaixonado, se apaixona por uma jovem rica, dando-lhe uma sensação de liberdade, mas eles logo são separados.", "link_trailer": "https://www.youtube.com/watch?v=FC6biTjEyZw" },
            { "arquivo": "romance3.jpg", "titulo": "Brilho Eterno de uma Mente sem Lembranças", "sinopse": "Quando seu relacionamento azeda, um casal passa por um procedimento médico para apagar um ao outro de suas memórias.", "link_trailer": "https://www.youtube.com/watch?v=yE-f1alkq94" },
            { "arquivo": "romance4.jpg", "titulo": "La La Land: Cantando Estações", "sinopse": "Enquanto buscam suas próprias carreiras em Los Angeles, um pianista e uma atriz se apaixonam enquanto tentam conciliar suas aspirações.", "link_trailer": "https://www.youtube.com/watch?v=DBfsgcswlYQ" },
            { "arquivo": "romance5.jpg", "titulo": "Orgulho e Preconceito", "sinopse": "A impetuosa Elizabeth Bennet, uma das cinco irmãs, se depara com o rico e orgulhoso Sr. Darcy na Inglaterra georgiana.", "link_trailer": "https://www.youtube.com/watch?v=1dYv5u6v5C0" },
            { "arquivo": "romance6.jpg", "titulo": "10 Coisas que Eu Odeio em Você", "sinopse": "Um estudante novo deve encontrar alguém para sair com a irmã mais velha de sua paixonite, que é socialmente hostil, para que ele possa sair com ela.", "link_trailer": "https://www.youtube.com/watch?v=AWmjzCWE_3U" },
            { "arquivo": "romance7.jpg", "titulo": "Uma Linda Mulher", "sinopse": "Um homem rico e corporativo precisa de uma acompanhante para alguns eventos sociais e contrata uma prostituta que ele conhece, mas acaba se apaixonando por ela.", "link_trailer": "https://www.youtube.com/watch?v=Wzii8IuL8lk" },
            { "arquivo": "romance8.jpg", "titulo": "(500) Dias com Ela", "sinopse": "Um escritor de cartões de felicitações sem esperança e fora de prática fica completamente perplexo quando sua namorada de repente o abandona.", "link_trailer": "https://www.youtube.com/watch?v=PsD0NpFSADM" },
            { "arquivo": "romance9.jpg", "titulo": "Bridgerton", "sinopse": "Os oito irmãos da poderosa família Bridgerton tentam encontrar o amor e a felicidade na alta sociedade de Londres.", "link_trailer": "https://www.youtube.com/watch?v=pyi8QAlHRbM" },
            { "arquivo": "romance10.jpg", "titulo": "Outlander", "sinopse": "Uma enfermeira inglesa da Segunda Guerra Mundial se vê misteriosamente transportada de 1945 para a Escócia de 1743, onde encontra aventura e romance.", "link_trailer": "" }
        ]
    },
    {
        "titulo": "Documentário",
        "pasta": "posters/documentario",
        "imagens": [
            { "arquivo": "documentario1.jpg", "titulo": "Planeta Terra II", "sinopse": "David Attenborough retorna com uma nova série de vida selvagem que mostra a vida em uma variedade de habitats.", "link_trailer": "https://www.youtube.com/watch?v=c8aFcHFu8QM" },
            { "arquivo": "documentario2.jpg", "titulo": "Professor Polvo", "sinopse": "Um cineasta estabelece uma amizade incomum com um polvo que vive em uma floresta de algas sul-africana, aprendendo enquanto o animal compartilha os mistérios de seu mundo.", "link_trailer": "https://www.youtube.com/watch?v=3s0LTDhqe5A" },
            { "arquivo": "documentario3.jpg", "titulo": "Senna", "sinopse": "Um olhar documental sobre a vida e a morte do piloto de corrida brasileiro Ayrton Senna.", "link_trailer": "https://www.youtube.com/watch?v=n5n93dTN8jM" },
            { "arquivo": "documentario4.jpg", "titulo": "Arremesso Final", "sinopse": "Traçando a ascensão da dinastia do Chicago Bulls dos anos 1990, liderada por Michael Jordan, um dos atletas mais icônicos da história.", "link_trailer": "https://www.youtube.com/watch?v=q4o_H2so6_Q" },
            { "arquivo": "documentario5.jpg", "titulo": "Free Solo", "sinopse": "O alpinista profissional Alex Honnold tenta a primeira escalada livre solo da famosa parede de 900 metros do El Capitan, no Parque Nacional de Yosemite.", "link_trailer": "https://www.youtube.com/watch?v=urRVZ4SWaGg" },
            { "arquivo": "documentario6.jpg", "titulo": "Amy", "sinopse": "Um olhar de arquivo sobre a vida e a morte da cantora/compositora britânica Amy Winehouse.", "link_trailer": "https://www.youtube.com/watch?v=Za3lZcrzzcM" },
            { "arquivo": "documentario7.jpg", "titulo": "Cosmos: Uma Odisseia do Espaço-Tempo", "sinopse": "Uma exploração de nossas origens cósmicas e nosso lugar no universo, apresentada pelo astrofísico Neil deGrasse Tyson.", "link_trailer": "https://www.youtube.com/watch?v=xb5tdqpl_8g" },
            { "arquivo": "documentario8.jpg", "titulo": "O Dilema das Redes", "sinopse": "Explora o perigoso impacto humano das redes sociais, com especialistas em tecnologia soando o alarme sobre suas próprias criações.", "link_trailer": "https://www.youtube.com/watch?v=7mqR_e2seeM" },
            { "arquivo": "documentario9.jpg", "titulo": "A Marcha dos Pinguins", "sinopse": "A jornada anual dos pinguins imperadores da Antártida em sua busca por acasalamento e criação de seus filhotes.", "link_trailer": "" },
            { "arquivo": "documentario10.jpg", "titulo": "Making a Murderer", "sinopse": "Filmado ao longo de 10 anos, este suspense da vida real segue a história de Steven Avery, um homem que foi exonerado por um crime, apenas para se tornar o principal suspeito em um novo caso.", "link_trailer": "https://www.youtube.com/watch?v=qxgbdYaR_KQ" }
        ]
    }
];

window.onload = function() {
    const galleryContainer = document.getElementById('gallery-container');
    const sidebarLinksContainer = document.getElementById('sidebar-links'); //Referência à lista da barra lateral
    
    //Referências dos Elementos da Modal
    const modal = document.getElementById('detailsModal');
    const modalCloseBtn = document.querySelector('.modal-close-button');
    const modalPoster = document.getElementById('modal-poster');
    const modalTitle = document.getElementById('modal-title');
    const modalSynopsis = document.getElementById('modal-synopsis');
    const modalTrailerLink = document.getElementById('modal-trailer-link');

    //Funções da Modal
    function openModal(item) {
        modalPoster.src = `${item.pasta}/${item.arquivo}`;
        modalPoster.alt = item.titulo;
        modalTitle.textContent = item.titulo;
        modalSynopsis.textContent = item.sinopse;
        if (item.link_trailer && item.link_trailer.trim() !== '') {
            // Se o link existir e não for vazio...
            modalTrailerLink.href = item.link_trailer; //Define o link correto
            modalTrailerLink.style.display = 'inline-block'; //Mostra o botão
        } else {
            //Se não não tiver o link na lista, ele esconde o botão
            modalTrailerLink.style.display = 'none';
        }

        modal.classList.add('active');
    }
    function closeModal() {
        modal.classList.remove('active');
    }

    //Event Listeners da Modal (continuam os mesmos)
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    //Lógica para criar a galeria e a barra lateral
    categorias.forEach(categoria => {
        //Criação do Link da Barra Lateral
        const categoryId = `categoria-${categoria.titulo.toLowerCase().replace(/ /g, '-')}`; //Faz a criação da categoria para mostrar as imagens dessa categoria
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = categoria.titulo;
        link.href = `#${categoryId}`; //O link aponta para o ID da seção, para que o clique na barra lateral leve até lá
        listItem.appendChild(link);
        sidebarLinksContainer.appendChild(listItem);


        //Criação da Seção da Galeria
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = categoryId; //Atribui o ID à categoria criada
        
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = categoria.titulo;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'poster-grid';

        categoria.imagens.forEach(item => {
            const posterContainer = document.createElement('div');
            posterContainer.className = 'poster-item';

            const posterTitle = document.createElement('h3');
            posterTitle.className = 'poster-title';
            posterTitle.textContent = item.titulo;

            const img = document.createElement('img');
            img.src = `${categoria.pasta}/${item.arquivo}`;
            img.alt = item.titulo;

            posterContainer.appendChild(posterTitle);
            posterContainer.appendChild(img);
            
            posterContainer.addEventListener('click', () => {
                const itemCompleto = { ...item, pasta: categoria.pasta };
                openModal(itemCompleto);
            });
            
            grid.appendChild(posterContainer);
        });

        section.appendChild(grid);
        galleryContainer.appendChild(section);

        
    });
};