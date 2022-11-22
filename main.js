const pertanyaan = document.getElementById("pertanyaan");
      const jawaban = document.getElementById("jawaban");
      const button = document.getElementById("btn");
      const load = document.getElementById("load");

      let init = 0;

      const botSay = (data) => {
        return [
          "Haii, aku adalah chan_bot. Siapa nama kamu?",
          `Hallo ${data?.nama} salam kenal ya. Berapa usia kamu ?`,
          `Oohhhh ${data?.usia}, hoby nya apa?`,
          `owwuaoww, sama aku juga hoby ${data?.hoby} loh. Kapan nih kita ${data?.hoby} bareng. btw udah punya pacar?`,
          `Ohhh ${data?.pacar} ya, kalau ulang tahun kamu tanggal berapa?`,
          `tanggal ${data?.tanggal} ya, mau aku kasih kado gak?`,
          `${data?.kado} ya!.  Iya ya deh. Udahan dulu ya?`,
        ];
      };

      load.style.display = "none";

      pertanyaan.innerHTML = botSay()[0];

      function botStart() {
        init++;
        if (init === 1) {
          botDelay({ nama: jawaban.value });
        } else if (init === 2) {
          botDelay({ usia: jawaban.value });
        } else if (init === 3) {
          botDelay({ hoby: jawaban.value });
        } else if (init === 4) {
          botDelay({ pacar: jawaban.value });
        } else if (init === 5) {
          botDelay({ tanggal: jawaban.value });
        } else if (init === 6) {
          botDelay({ kado: jawaban.value });
        } else if (init === 7) {
          finishing();
        } else {
          botEnd();
        }
      }

      function botDelay(jawabanUser) {
        setTimeout(() => {
          pertanyaan.innerHTML = botSay(jawabanUser)[init];

          jawaban.value = "";
        }, 1000);
      }

      function finishing() {
        setTimeout(() => {
          pertanyaan.innerHTML = `makasih ya udah maen di chan_bot`;
          jawaban.style.display = "none";
          document.getElementById("btn").innerHTML = "Reset";
        }, 1000);
      }

      function botEnd() {
        setTimeout(() => {
          window.location.reload();
        }, 5000);

        jawaban.style.display = "none";
        pertanyaan.style.display = "none";
        btn.style.display = "none";
        load.style.display = "block";
      }