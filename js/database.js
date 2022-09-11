// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "chuadu.jpg",
    nameItem: "Chuveiro Acqua Duo",
    description:
      "Chuveiro Acqua Duo 220V 7800W, Lorenzetti, 7510098, Branco.",
    value: 307.12,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
  },
  {
    id: 2,
    img: "chuadv.jpg",
    nameItem: "Chuveiro Advanced",
    description:
      "Chuveiro Elétrico Advanced Multitemperaturas Branco, Lorenzetti.",
    value: 115.90,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
  },
  {
    id: 3,
    img: "chubel.jpg",
    nameItem: "Bella Ducha",
    description:
      "Bella Ducha 4T 220V 6800W, Lorenzetti, 7531202, Branco, Pequeno",
    value: 54.90,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
  },
  {
    id: 4,
    img: "chudua.jpg",
    nameItem: "Duo Shower Quadra",
    description:
      "Duo Shower Quadra Multitemp. 7500W, Lorenzetti, Branco, Pequeno",
    value: 177.81,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
  },
  {
    id: 5,
    img: "chufut.jpg",
    nameItem: "Ducha Futura",
    description:
      "Ducha Futura Multitemperaturas, 5500W, Lorenzetti, Branco",
    value: 93.90,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
  },
  {
    id: 6,
    img: "chumax.jpg",
    nameItem: "Maxi Ducha",
    description:
      "Maxi Ducha 220V 5500W, Lorenzetti, 7530275, Branco, Pequeno",
    value: 50.90,
    addCart: "Adicionar ao carrinho",
    tag: "Chuveiros",
  },
  {
    id: 7,
    img: "cli35.jpg",
    nameItem: "Climatizador Ventisol 35L",
    description:
      "Climatizador Evaporativo Industrial",
    value: 1099.00,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 8,
    img: "cli45.jpg",
    nameItem: "Climatizador Cadence 45L",
    description:
      "Climatizador de Ar Cadence Ultra Space",
    value: 1361.00,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 9,
    img: "cli60.jpg",
    nameItem: "Climatizador Ventisol 60L",
    description:
      "Climatizador Evaporativo Industrial",
    value: 1199.00,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 10,
    img: "cli70.jpg",
    nameItem: "Climatizador Ventisol 70L",
    description:
      "Climatizador Evaporativo Industrial",
    value: 1399.00,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 11,
    img: "clibri.jpg",
    nameItem: "Britania Climatizador",
    description:
      "Climatizador de Ar Frio c/Ionr Branco",
    value: 419.00,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 12,
    img: "climon.jpg",
    nameItem: "Climatizador Cadence",
    description:
      "Climatizador evaporativo, Branco",
    value: 329,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 13,
    img: "cliven.jpg",
    nameItem: "Climatizador Climatize",
    description:
      "Climatize Compact 3,7 Litros 220v Branco",
    value: 505,
    addCart: "Adicionar ao carrinho",
    tag: "Climatizador",
  },
  {
    id: 14,
    img: "ferche.jpg",
    nameItem: "Maleta Ferramentas Gm",
    description:
      "Chevrolet Maleta Ferramentas 18 peças Gm, amarelo, GM5318",
    value: 148,
    addCart: "Adicionar ao carrinho",
    tag: "Ferramentas",
  },
  {
    id: 15,
    img: "ferhpa.jpg",
    nameItem: "Maleta ferramentas Sparta",
    description:
      "Maleta de ferramentas kit com 129 peças 13564 Sparta",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: "Ferramentas",
  },
  {
    id: 17,
    img: "ferspe.jpg",
    nameItem: "Maleta Sparta c/ luva",
    description:
      "Kit de ferramentas com 129 peças Sparta",
    value: 145,
    addCart: "Adicionar ao carrinho",
    tag: "Ferramentas",
  },
  {
    id: 18,
    img: "fertra.jpg",
    nameItem: "Maleta Tramontina",
    description:
      "Tramontina 41191165, Maleta com Ferramentas 65 Peças",
    value: 229,
    addCart: "Adicionar ao carrinho",
    tag: "Ferramentas",
  },
  {
    id: 19,
    img: "ferweg.jpg",
    nameItem: "Maleta de Ferramentas WAP",
    description:
      "Maleta de Ferramentas Manuais WAP MKF21 com 21 Acessórios",
    value: 79,
    addCart: "Adicionar ao carrinho",
    tag: "Ferramentas",
  },
  {
    id: 20,
    img: "feryea.jpg",
    nameItem: "Kit ferramentas Gamma",
    description:
      "Kit de Ferramentas com 160 Peças, Gamma",
    value: 261,
    addCart: "Adicionar ao carrinho",
    tag: "Ferramentas",
  },
  {
    id: 21,
    img: "furboi.jpg",
    nameItem: "Furadeira Bosch GSB16",
    description:
      "Furadeira de Impacto Bosch GSB 16 RE 750W",
    value: 369,
    addCart: "Adicionar ao carrinho",
    tag: "Furadeira",
  },
  {
    id: 22,
    img: "furmaq.jpg",
    nameItem: "Furadeira Makita",
    description:
      "Furadeira Com Impacto Makita 1/2”",
    value: 428,
    addCart: "Adicionar ao carrinho",
    tag: "Furadeira",
  },
  {
    id: 23,
    img: "furweg.jpg",
    nameItem: "Furadeira WAP 600W",
    description:
      "Furadeira de Impacto e Parafusadeira 600W WAP Mandril 3/8”",
    value: 189,
    addCart: "Adicionar ao carrinho",
    tag: "Furadeira",
  },
  {
    id: 24,
    img: "furbos.jpg",
    nameItem: "Furadeira Bosch GSB 450",
    description:
      "Furadeira de Impacto Bosch GSB 450 RE 450W 220V",
    value: 209,
    addCart: "Adicionar ao carrinho",
    tag: "Furadeira",
  },
  {
    id: 25,
    img: "furdew.jpg",
    nameItem: "DeWalt DWD502KBR",
    description:
      "DeWalt DWD502KBR - Furadeira de Impacto de 1/2 Pol. (13mm)",
    value: 357,
    addCart: "Adicionar ao carrinho",
    tag: "Furadeira",
  },
  {
    id: 26,
    img: "furjog.jpg",
    nameItem: "Jogo de Acessórios MAKITA",
    description:
      "Jogo de Acessórios para Fur. e Par. com 100 Peças-MAKITA",
    value: 247,
    addCart: "Adicionar ao carrinho",
    tag: "Furadeira",
  },
  {
    id: 27,
    img: "parblc.jpg",
    nameItem: "BLACK+DECKER de Impacto",
    description:
      "Parafusadeira e Furadeira de Impacto 20V 1.400 RPM com 2 Vel.",
    value: 515,
    addCart: "Adicionar ao carrinho",
    tag: "Parafusadeira",
  },
  {
    id: 28,
    img: "parbos.jpg",
    nameItem: "Parafusadeira Bosch GSB",
    description:
      "GSB 18V-50 18V Brushless com 2 baterias, 1 carregador e maleta",
    value: 979,
    addCart: "Adicionar ao carrinho",
    tag: "Parafusadeira",
  },
  {
    id: 29,
    img: "pardev.jpg",
    nameItem: "DEWALT DCD776C2",
    description:
      "com 2 Baterias 20V MAX* Ion-Litio 1.3Ah Bivolt 1.500 RPM",
    value: 1169,
    addCart: "Adicionar ao carrinho",
    tag: "Parafusadeira",
  },
  {
    id: 30,
    img: "parein.jpg",
    nameItem: "Parafusadeira EINHELL",
    description:
      " IMPACTO TE-CD 18/2 LI-I 2B",
    value: 959,
    addCart: "Adicionar ao carrinho",
    tag: "Parafusadeira",
  },
  {
    id: 31,
    img: "parmaq.jpg",
    nameItem: "Parafusadeira MAKITA",
    description:
      "Parafusadeira makita 12V CXT",
    value: 699,
    addCart: "Adicionar ao carrinho",
    tag: "Parafusadeira",
  },
];
