const papers = [
  {
    title: 'A  Key-Independent  Distinguisher  for 6-round  AES  in  an  Adaptive  Setting',
    authors: 'Navid  Ghaedi  Bardeh',
    link: '/2019/945.pdf'
  },
  {
    title: 'Dynamically  Obfuscated  Scan  Chain  To  Resist  Oracle-Guided  Attacks  On  Logic  Locked  Design',
    authors: 'M  Sazadur  Rahman   and  Adib  Nahiyan   and  Sarah  Amir   and  Fahim  Rahman   and  Farimah  Farahmandi   and  Domenic  Forte   and  Mark  Tehranipoor',
    link: '/2019/946.pdf'
  },
  {
    title: 'nGraph-HE2:  A  High-Throughput  Framework  for  Neural  Network  Inference  on  Encrypted  Data',
    authors: 'Fabian  Boemer   and  Anamaria  Costache   and  Rosario  Cammarota   and  Casimir  Wierzynski',
    link: '/2019/947.pdf'
  },
  {
    title: 'Efficient  zero-knowledge  arguments  in  the  discrete  log  setting,  revisited',
    authors: 'Max  Hoffmann   and  Michael  Klooß   and  Andy  Rupp',
    link: '/2019/944.pdf'
  },
     { title:
        'Generic  Side-channel  attacks  on  CCA-secure  lattice-based  PKE   and  KEM  schemes',
       authors:
        'Prasanna  Ravi   and  Sujoy  Sinha  Roy   and  Anupam  Chattopadhyay   and  Shivam  Bhasin',
       link: '/2019/948.pdf' },
     { title:
        'No  right  to  remain  silent:  Isolating  Malicious  Mixes',
       authors:
        'Hemi  Leibowitz   and  Ania  Piotrowska   and  George  Danezis   and  Amir  Herzberg',
       link: '/2017/1000.pdf' },
     { title:
        'Side-Channel  Leakage  Evaluation   and  Detection  Based  on  Communication  Theory',
       authors: 'Wei  Yang,  Yuchen  Cao,  Ke  Ma,   and  Hailong  Zhang',
       link: '/2016/922/20190818:085819' },
     { title:
        'Transparency  Logs  via  Append-only  Authenticated  Dictionaries',
       authors:
        'Alin  Tomescu   and  Vivek  Bhupatiraju   and  Dimitrios  Papadopoulos   and  Charalampos  Papamanthou   and  Nikos  Triandopoulos   and  Srinivas  Devadas',
       link: 'https://dx.doi.org/10.1145/3319535.3345652' },
     { title:
        'Bidirectional  Asynchronous  Ratcheted  Key  Agreement  with  Linear  Complexity',
       authors: 'F.  Betül  Durak   and  Serge  Vaudenay',
       link: 'https://dx.doi.org/10.1007/978-3-030-26834-3_20' },
     { title:
        'Polynomial  Selection  for  the  Number  Field  Sieve  in  an  Elementary  Geometric  View',
       authors:
        'Min  Yang   and  Qingshu  Meng   and  Zhangyi  Wang   and  Lina  Wang   and  Huanguo  Zhang',
       link: '/2013/583.pdf' },
     { title:
        'Adaptively  Secure  MPC  with  Sublinear  Communication  Complexity',
       authors: 'Ran  Cohen   and  abhi  shelat   and  Daniel  Wichs',
       link: '/2018/1161.pdf' },
     { title:
        'Improving  Attacks  on  Round-Reduced  Speck32/64  using  Deep  Learning',
       authors: 'Aron  Gohr',
       link: '/2019/037.pdf' },
     { title: 'Revisiting  Non-Malleable  Secret  Sharing',
       authors: 'Saikrishna  Badrinarayanan   and  Akshayaram  Srinivasan',
       link: '/2018/1144.pdf' },
     { title: 'Leakage  Resilient  Secret  Sharing   and  Applications',
       authors: 'Akshayaram  Srinivasan   and  Prashant  Nalini  Vasudevan',
       link: '/2018/1154.pdf' },
     { title:
        'A  Revocable  Group  Signature  Scheme  with  Scalability  from  Simple  Assumptions   and  Its  Application  to  Identity  Management',
       authors: 'Keita  Emura   and  Takuya  Hayashi',
       link: 'https://dx.doi.org/10.1007/978-3-319-99136-8_24' },
     { title:
        'Unifying  computational  entropies  via  Kullback-Leibler  divergence',
       authors:
        'Rohit  Agrawal   and  Yi-Hsiu  Chen   and  Thibaut  Horel   and  Salil  Vadhan',
       link: 'https://dx.doi.org/10.1007/978-3-030-26951-7_28' },
     { title:
        'Cryptanalysis  of  OCB2:  Attacks  on  Authenticity   and  Confidentiality',
       authors:
        'Akiko  Inoue   and  Tetsu  Iwata   and  Kazuhiko  Minematsu   and  Bertram  Poettering',
       link: 'https://dx.doi.org/10.1007/978-3-030-26948-7_1' },
     { title:
        'Towards  Low-Energy  Leakage-Resistant  Authenticated  Encryption  from  the  Duplex  Sponge  Construction',
       authors:
        'Chun  Guo   and  Olivier  Pereira   and  Thomas  Peters   and  François-Xavier  Standaert',
       link: '/2019/193.pdf' },
     { title: 'LucidiTEE:  Policy-Compliant  Fair  Computing  at  Scale',
       authors:
        'Rohit  Sinha   and  Sivanarayana  Gaddam   and  Ranjit  Kumaresan',
       link: '/2019/178.pdf' },
     { title: 'SeqL:  Secure  Scan-Locking  for  IP  Protection',
       authors: 'Seetal  Potluri   and  Aydin  Aysu   and  Akash  Kumar',
       link: '/2019/656/20190814:200732' },
     { title:
        'Broadcast   and  Trace  with  N^epsilon  Ciphertext  Size  from  Standard  Assumptions',
       authors:
        'Rishab  Goyal   and  Willy  Quach   and  Brent  Waters   and  Daniel  Wichs',
       link: '/2019/636.pdf' },
     { title: 'Verification  of  Authenticated  Firmware  Load',
       authors:
        'Sujit  Kumar  Muduli   and  Pramod  Subramanyan   and  Sayak  Ray',
       link: '/2019/564.pdf' },
     { title:
        'Homomorphic  Training  of 30,000  Logistic  Regression  Models',
       authors:
        'Flavio  Bergamaschi   and  Shai  Halevi   and  Tzipora  T.  Halevi   and  Hamish  Hunt',
       link: 'https://dx.doi.org/10.1007/978-3-030-21568-2_29' },
     { title:
        'Fast  Actively  Secure  Five-Party  Computation  with  Security  Beyond  Abort',
       authors:
        'Megha  Byali   and  Carmit  Hazay   and  Arpita  Patra   and  Swati  Singla',
       link: 'https://dx.doi.org/10.1145/3319535.3345657' },
     { title:
        'Stronger   and  Faster  Side-Channel  Protections  for  CSIDH',
       authors:
        'Daniel  Cervantes-Vázquez   and  Mathilde  Chenu   and  Jesús-Javier  Chi-Domínguez   and  Luca  De  Feo   and  Francisco  Rodríguez-Henríquez   and  Benjamin  Smith',
       link: '/2019/837.pdf' },
     { title:
        'Information  Conservational  Security  with Black  Hole  Keypad  Compression   and  Scalable  One-Time  Pad   A  Quantum  Intelligence  Approach  to  Pre-   and  Post-Quantum  Cryptography',
       authors: 'Wen-Ran  Zhang',
       link: '/2019/913.pdf' },
     { title:
        'A  High-Assurance  Evaluator  for  Machine-Checked  Secure  Multiparty  Computation',
       authors: 'Karim  Eldefrawy   and  Vitor  Pereira',
       link: '/2019/922.pdf' },
     { title:
        'Your  Money  or  Your  Life---Modeling   and  Analyzing  the  Security  of  Electronic  Payment  in  the  UC  Framework',
       authors:
        'Dirk  Achenbach   and  Roland  Gröll   and  Timon  Hackenjos   and  Alexander  Koch   and  Bernhard  Löwe   and  Jeremias  Mechler   and  Jörn  Müller-Quade   and  Jochen  Rill',
       link: '/2019/924.pdf' },
     { title:
        'Traceable   and  linkable  ring  signatures,  traceable  range  proofs   and  applications  on  regulatable  privacy-preserving  blockchains',
       authors:
        'Wulu  Li   and  Lei  Chen   and  Xin  Lai   and  Xiao  Zhang   and  Jiajun  Xin',
       link: '/2019/925.pdf' },
     { title:
        'Formal  Verification  of  a  Constant-Time  Preserving  C  Compiler',
       authors:
        'Gilles  Barthe   and  Sandrine  Blazy   and  Benjamin  Grégoire   and  Rémi  Hutin   and  Vincent  Laporte   and  David  Pichardie   and  Alix  Trieu',
       link: '/2019/926.pdf' },
     { title:
        'Blockchain-enabled  Cryptographically-secure  Hardware  Obfuscation',
       authors:
        'Fatemeh  Ganji   and  Shahin  Tajik   and  Domenic  Forte   and  Jean-Pierre  Seifert',
       link: '/2019/928.pdf' },
     { title:
        'On  the  Degree-Insensitive  SI-GDH  problem   and  assumption',
       authors: 'Samuel  Dobson   and  Steven  D.  Galbraith',
       link: '/2019/929.pdf' },
     { title:
        'Low  Weight  Discrete  Logarithms   and  Subset  Sum  in $2^{0.65n}$  with  Polynomial  Memory',
       authors: 'Andre  Esser   and  Alexander  May',
       link: '/2019/931.pdf' },
     { title:
        'Related-key  Differential  Cryptanalysis  of  Full  Round  CRAFT',
       authors: 'Muhammad  ElSheikh   and  Amr  M.  Youssef',
       link: '/2019/932.pdf' },
     { title:
        'Low  Entropy  Key  Negotiation  Attacks  on  Bluetooth   and  Bluetooth  Low  Energy',
       authors:
        'Daniele  Antonioli   and  Nils  Ole  Tippenhauer   and  Kasper  Rasmussen',
       link: '/2019/933.pdf' },
     { title:
        'Linear  Approximations  of  Random  Functions   and  Permutations',
       authors: 'Mohsin  Khan   and  Kaisa  Nyberg',
       link: '/2019/934.pdf' },
     { title: 'Interpretable  Encrypted  Searchable  Neural  Networks',
       authors: 'Kai  Chen;  Zhongrui  Lin;  Jian  Wan;   Chungen  Xu.',
       link: '/2019/935.pdf' },
     { title:
        'SNEIK  on  Microcontrollers:  AVR,  ARMv7-M,   and  RISC-V  with  Custom  Instructions',
       authors: 'Markku-Juhani  O.  Saarinen',
       link: '/2019/936.pdf' },
     { title:
        'Highly  Efficient  Key  Exchange  Protocols  with  Optimal  Tightness --  Enabling  real-world  deployments  with  theoretically  sound  parameters',
       authors:
        'Katriel  Cohn-Gordon   and  Cas  Cremers   and  Kristian  Gjøsteen   and  Håkon  Jacobsen   and  Tibor  Jager',
       link: '/2019/737.pdf' },
     { title:
        'Low-Memory  Attacks  against  Two-Round  Even-Mansour  using  the 3-XOR  Problem',
       authors: 'Gaëtan  Leurent   and  Ferdinand  Sibleyras',
       link: 'https://dx.doi.org/10.1007/978-3-030-26951-7_8' },
     { title: 'Homomorphic  Encryption  Standard',
       authors:
        'Martin  Albrecht   and  Melissa  Chase   and  Hao  Chen   and  Jintai  Ding   and  Shafi  Goldwasser   and  Sergey  Gorbunov   and  Shai  Halevi   and  Jeffrey  Hoffstein   and  Kim  Laine   and  Kristin  Lauter   and  Satya  Lokam   and  Daniele  Micciancio   and  Dustin  Moody   and  Travis  Morrison   and  Amit  Sahai   and  Vinod  Vaikuntanathan',
       link: '/2019/939.pdf' },
     { title: 'Isogeny-based  hashing  despite  known  endomorphisms',
       authors: 'Lorenz  Panny',
       link: '/2019/927.pdf' },
     { title: 'Module-LWE  versus  Ring-LWE,  Revisited',
       authors: 'Yang  Wang   and  Mingqiang  Wang',
       link: '/2019/930.pdf' },
     { title:
        'Security  analysis  of  two  lightweight  certificateless  signature  schemes',
       authors: 'Nasrollah  Pakniat',
       link: 'https://dx.doi.org/10.22108/JCS.2019.110889' },
     { title:
        'Ouroboros  Clepsydra:  Ouroboros  Praos  in  the  Universally  Composable  Relative  Time  Model',
       authors: 'Handan  Kılınç  Alper',
       link: '/2019/942.pdf' },
     { title: 'Does "www."  Mean  Better  Transport  Layer  Security?',
       authors:
        'Eman  Salem  Alashwali   and  Pawel  Szalachowski   and  Andrew  Martin',
       link: '/2019/941.pdf' },
     { title: 'Analysis  of  Nakamoto  Consensus',
       authors: 'Ling  Ren',
       link: '/2019/943.pdf' },
     { title:
        'Detecting  Faults  in  Inner  Product  Masking  Scheme -  IPM-FD:  IPM  with  Fault  Detection',
       authors:
        'Wei  Cheng   and  Claude  Carlet   and  Kouassi  Goli   and  Sylvain  Guilley   and  Jean-Luc  Danger',
       link: '/2019/919.pdf' },
     { title:
        'Breach  the  Gate:  Exploiting  Observability  for  Fault  Template  Attacks  on  Block  Ciphers',
       authors:
        'Sayandeep  Saha   and  Debapriya  Basu  Roy   and  Arnab  Bag   and  Sikhar  Patranabis   and  Debdeep  Mukhopadhyay',
       link: '/2019/937.pdf' },
  {
    title: "Tree  authenticated  ephemeral  keys",
    authors: "Pavol  Zajac",
    link: "https://eprint.iacr.org/2019/921.pdf"
  },
  {
    title:
      "A  High-Assurance,  Automatically-Synthesized,  Evaluator  for  Machine-Checked (Proactively)  Secure  Multi-Party  Computation",
    authors: "Karim  Eldefrawy   and  Vitor  Pereira",
    link: "https://eprint.iacr.org/2019/922.pdf"
  },
  {
    title:
      "Automated  Probe  Repositioning  for  On-Die  EM  Measurements",
    authors:
      "Bastian  Richter   and  Alexander  Wild   and  Amir  Moradi",
    link: "https://eprint.iacr.org/2019/923.pdf"
  },
  {
    title:
      "Detecting  Faults  in  Inner  Product  Masking  Scheme -  IPM-FD:  IPM  with  Fault  Detection",
    authors:
      "Wei  Cheng   and  Claude  Carlet   and  Kouassi  Goli   and  Sylvain  Guilley   and  Jean-Luc  Danger",
    link: "https://eprint.iacr.org/2019/919.pdf"
  },
  {
    title:
      "Related-Key  Differential  Slide  Attack  Against  Fountain  V1",
    authors: "Raluca  Posteuca",
    link: "https://eprint.iacr.org/2019/920.pdf"
  },
  {
    title:
      "A  note  on  the  construction  of  pairing-friendly  elliptic  curves  for  composite  order  protocols",
    authors: "Sorina  Ionica    and  Malika  Izabachène",
    link: "https://eprint.iacr.org/2014/274.pdf"
  },
  {
    title:
      "Side-Channel  Leakage  Evaluation   and  Detection  Based  on  Communication  Theory",
    authors: "Wei  Yang,  Yuchen  Cao,  Ke  Ma,   and  Hailong  Zhang",
    link: "https://eprint.iacr.org/2016/922/20190818:085819"
  },
  {
    title:
      "Polynomial  Selection  for  the  Number  Field  Sieve  in  an  Elementary  Geometric  View",
    authors:
      "Min  Yang   and  Qingshu  Meng   and  Zhangyi  Wang   and  Lina  Wang   and  Huanguo  Zhang",
    link: "https://eprint.iacr.org/2013/583.pdf"
  },
  {
    title: "Authenticated  LSM  Trees  with  Minimal  Trust",
    authors: "Yuzhe (Richard)  Tang   and  Ju  Chen   and   Kai  Li",
    link: "https://eprint.iacr.org/2016/1063.pdf"
  },
  {
    title: "No  right  to  remain  silent:  Isolating  Malicious  Mixes",
    authors:
      "Hemi  Leibowitz   and  Ania  Piotrowska   and  George  Danezis   and  Amir  Herzberg",
    link: "https://eprint.iacr.org/2017/1000.pdf"
  },
  {
    title: "Shorter  Linear  Straight-Line  Programs  for  MDS  Matrices",
    authors:
      "Thorsten  Kranz   and  Gregor  Leander   and  Ko  Stoffelen   and  Friedrich  Wiemer",
    link: "https://eprint.iacr.org/2017/1151.pdf"
  },
  {
    title:
      "New  Hybrid  Method  for  Isogeny-based  Cryptosystems  using  Edwards  Curves",
    authors:
      "Suhri  Kim   and  Kisoon  Yoon   and  Jihoon  Kwon   and  Young-Ho  Park   and  Seokhie  Hong",
    link: "https://eprint.iacr.org/2018/1215.pdf"
  },
  {
    title:
      "Towards  Low-Energy  Leakage-Resistant  Authenticated  Encryption  from  the  Duplex  Sponge  Construction",
    authors:
      "Chun  Guo   and  Olivier  Pereira   and  Thomas  Peters   and  François-Xavier  Standaert",
    link: "https://eprint.iacr.org/2019/193.pdf"
  },
  {
    title:
      "Improving  Attacks  on  Round-Reduced  Speck32/64  using  Deep  Learning",
    authors: "Aron  Gohr",
    link: "https://eprint.iacr.org/2019/037.pdf"
  },
  {
    title:
      "Transparency  Logs  via  Append-only  Authenticated  Dictionaries",
    authors:
      "Alin  Tomescu   and  Vivek  Bhupatiraju   and  Dimitrios  Papadopoulos   and  Charalampos  Papamanthou   and  Nikos  Triandopoulos   and  Srinivas  Devadas",
    link: "https://dx.doi.org/10.1145/3319535.3345652"
  },
  {
    title: "Flyclient:  Super-Light  Clients  for  Cryptocurrencies",
    authors:
      "Benedikt  Bünz   and  Lucianna  Kiffer   and  Loi  Luu   and  Mahdi  Zamani",
    link: "https://eprint.iacr.org/2019/226.pdf"
  },
  {
    title:
      "AuroraLight:  Improved  prover  efficiency   and  SRS  size  in  a  Sonic-like  system",
    authors: "Ariel  Gabizon",
    link: "https://eprint.iacr.org/2019/601.pdf"
  },
  {
    title:
      "Cryptanalysis  of  OCB2:  Attacks  on  Authenticity   and  Confidentiality",
    authors:
      "Akiko  Inoue   and  Tetsu  Iwata   and  Kazuhiko  Minematsu   and  Bertram  Poettering",
    link: "https://dx.doi.org/10.1007/978-3-030-26948-7_1"
  },
  {
    title: "Symmetric  Primitives  with  Structured  Secrets",
    authors:
      "Navid  Alamati   and  Hart  Montgomery   and  Sikhar  Patranabis",
    link: "https://eprint.iacr.org/2019/608.pdf"
  },
  {
    title:
      "Improved  Multiplication  Triple  Generation  over  Rings  via  RLWE-based  AHE",
    authors:
      "Deevashwer  Rathee   and  Thomas  Schneider   and  K.  K.  Shukla",
    link: "https://eprint.iacr.org/2019/577.pdf"
  },
  {
    title: "SeqL:  Secure  Scan-Locking  for  IP  Protection",
    authors: "Seetal  Potluri   and  Aydin  Aysu   and  Akash  Kumar",
    link: "https://eprint.iacr.org/2019/656/20190814:200732"
  },
  {
    title:
      "Highly  Efficient  Key  Exchange  Protocols  with  Optimal  Tightness --  Enabling  real-world  deployments  with  theoretically  sound  parameters",
    authors:
      "Katriel  Cohn-Gordon   and  Cas  Cremers   and  Kristian  Gjøsteen   and  Håkon  Jacobsen   and  Tibor  Jager",
    link: "https://eprint.iacr.org/2019/737.pdf"
  },
  {
    title:
      "WIDESEAS:  A  lattice-based  PIR  scheme  implemented  in  EncryptedQuery",
    authors:
      "Dominic  Dams   and  Jeff  Lataille   and  Rino  Sanchez   and  John  Wade",
    link: "https://eprint.iacr.org/2019/855.pdf"
  },
  {
    title:
      "Fast  Actively  Secure  Five-Party  Computation  with  Security  Beyond  Abort",
    authors:
      "Megha  Byali   and  Carmit  Hazay   and  Arpita  Patra   and  Swati  Singla",
    link: "https://dx.doi.org/10.1145/3319535.3345657"
  },
  {
    title: "The  Power  of  NIST  Cryptographic  Tests  Suite",
    authors: "Paul  Burciu   and  Emil  Simion",
    link: "https://eprint.iacr.org/2019/905/20190812:132450"
  },
  {
    title:
      "Multi-owner  Secure  Encrypted  Search  Using  Searching  Adversarial  Networks",
    authors:
      "Kai  Chen;  Zhongrui  Lin;  Jian  Wan;  Lei  Xu;  Chungen  Xu.",
    link: "https://eprint.iacr.org/2019/916.pdf"
  },
  {
    title:
      "Simplified  Revocable  Hierarchical  Identity-Based  Encryption  from  Lattices",
    authors:
      "Shixiong  Wang   and  Juanyang  Zhang   and  Jingnan  He   and  Huaxiong  Wang   and  Chao  Li",
    link: "https://eprint.iacr.org/2019/917.pdf"
  },
  {
    title: "Resolving  the  Trilemma  in  Logic  Encryption",
    authors: "Hai  Zhou   and  Amin  Rezaei   and  Yuanqi  Shen",
    link: "https://eprint.iacr.org/2019/918.pdf"
  },
  {
    title: "Unique  Rabin-Williams  Signature  Scheme  Decryption",
    authors: "Lynn  Margaret  Batten   and  Hugh  Cowie  Williams",
    link: "https://eprint.iacr.org/2019/915.pdf"
  }
];

exports.handler = async (event, context) => {

  if (event.httpMethod !== "POST") {
   return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);
  const limit = params.limit || 15;

  return {
    statusCode: 200,
    body: JSON.stringify(papers.sort(() => .5 - Math.random()).slice(0,limit))
  };
}
