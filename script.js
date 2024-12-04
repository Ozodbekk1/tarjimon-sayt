// Bu yerda so'zlar va ularning tarjimasi ro'yxatini yaratamiz
const dictionary = {
  "salom": "Sammakim",
  "kitob": "kitob",
  "maktab": "maytab",
  "kompyuter": "kampitor",
  "telefon": "tilfon",
  "yaxshimisiz": "nichiksan",
  "ha" : "hava , ava , ova",
  "sabzi": "gashir",
  "narvon": "zangngi",
  "opa": "apka",
  "dada": "aka",
  "aka" : " ag'a",
  "kelinoyi": "yengnga , biyi",
  "singil": "uka(qizgayam og'ilgayam)",
  "piyola": "kosa",

};

function translateWord() {
  const inputWord = document.getElementById('inputWord').value.toLowerCase();
  const outputWord = document.getElementById('outputWord');

  // So'zning tarjimasini tekshirish
  if (dictionary[inputWord]) {
      outputWord.value = dictionary[inputWord];
  } else {
      outputWord.value = "Tarjima topilmadi🤔 . Tez kunda qo'shiladi...";
  }
}
 