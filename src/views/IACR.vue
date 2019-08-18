<template lang="pug">
  .w-full.max-w-screen-xl.m-0.flex.flex-col.overflow-y-auto
    .bg-blue-600.text-white.w-full.p-4.text-center.flex-grow-0.select-none
      .flex.justify-between.items-center
        p.text-xl.font-bold Last papers
        button.bg-currrent.border-white.border.p-1.text-sm.rounded(class="hover:bg-blue-700", @click="refresh") Refresh
    notification(:msg="msg", :type="type", v-if="msg || (isError && msg)")
    papers-list(:papers="papers", :class="{spinner: isActive, 'opacity-50': isActive}")
</template>

<script>
import axios from "axios";

import Notification from "@/components/Notification.vue";
import PapersList from "@/components/PapersList.vue";

export default {
  name: "iacr",
  components: {
    Notification,
    PapersList
  },
  data() {
    return {
      papers: [],
      isActive: false,
      msg: "",
      isError: false,
      type: "success"
    };
  },
  methods: {
    async refresh() {
      this.isError = false;
      try {
        this.isActive = true;
        const { data } = await axios.get(".netlify/functions/papers");
        this.papers = data;
      } catch (e) {
        this.isError = true;
        this.msg = String(e);
        this.type = "danger";
      } finally {
        this.isActive = false;
      }
    }
  },
  async mounted() {
    try {
      this.isLoading = true;
      // const { data } = await axios.get(".netlify/functions/papers");
      // this.msg = data;

      this.papers = [
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
    } catch (e) {
      this.isError = true;
      this.msg = String(e);
      this.type = "danger";
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
