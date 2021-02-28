export const convertLatinToCirilic = (latinText) => {
  latinText = latinText.replace(/lj/g, 'љ');
  latinText = latinText.replace(/Lj/g, 'Љ');
  latinText = latinText.replace(/LJ/g, 'Љ');
  latinText = latinText.replace(/nj/g, 'њ');
  latinText = latinText.replace(/Nj/g, 'Њ');
  latinText = latinText.replace(/NJ/g, 'Њ');
  latinText = latinText.replace(/dž/g, 'џ');
  latinText = latinText.replace(/Dž/g, 'Џ');
  latinText = latinText.replace(/DŽ/g, 'Џ');
  latinText = latinText.replace(/a/g, 'а');
  latinText = latinText.replace(/b/g, 'б');
  latinText = latinText.replace(/c/g, 'ц');
  latinText = latinText.replace(/č/g, 'ч');
  latinText = latinText.replace(/ć/g, 'ћ');
  latinText = latinText.replace(/d/g, 'д');
  latinText = latinText.replace(/đ/g, 'ђ');
  latinText = latinText.replace(/e/g, 'е');
  latinText = latinText.replace(/f/g, 'ф');
  latinText = latinText.replace(/g/g, 'г');
  latinText = latinText.replace(/h/g, 'х');
  latinText = latinText.replace(/i/g, 'и');
  latinText = latinText.replace(/j/g, 'ј');
  latinText = latinText.replace(/k/g, 'к');
  latinText = latinText.replace(/l/g, 'л');
  latinText = latinText.replace(/m/g, 'м');
  latinText = latinText.replace(/n/g, 'н');
  latinText = latinText.replace(/o/g, 'о');
  latinText = latinText.replace(/p/g, 'п');
  latinText = latinText.replace(/r/g, 'р');
  latinText = latinText.replace(/s/g, 'с');
  latinText = latinText.replace(/š/g, 'ш');
  latinText = latinText.replace(/t/g, 'т');
  latinText = latinText.replace(/u/g, 'у');
  latinText = latinText.replace(/v/g, 'в');
  latinText = latinText.replace(/z/g, 'з');
  latinText = latinText.replace(/ž/g, 'ж');

  latinText = latinText.replace(/A/g, 'А');
  latinText = latinText.replace(/B/g, 'Б');
  latinText = latinText.replace(/C/g, 'Ц');
  latinText = latinText.replace(/Č/g, 'Ч');
  latinText = latinText.replace(/Ć/g, 'Ћ');
  latinText = latinText.replace(/D/g, 'Д');
  latinText = latinText.replace(/Đ/g, 'Ђ');
  latinText = latinText.replace(/E/g, 'Е');
  latinText = latinText.replace(/F/g, 'Ф');
  latinText = latinText.replace(/G/g, 'Г');
  latinText = latinText.replace(/H/g, 'Х');
  latinText = latinText.replace(/I/g, 'И');
  latinText = latinText.replace(/J/g, 'Ј');
  latinText = latinText.replace(/K/g, 'К');
  latinText = latinText.replace(/L/g, 'Л');
  latinText = latinText.replace(/M/g, 'М');
  latinText = latinText.replace(/N/g, 'Н');
  latinText = latinText.replace(/O/g, 'О');
  latinText = latinText.replace(/P/g, 'П');
  latinText = latinText.replace(/R/g, 'Р');
  latinText = latinText.replace(/S/g, 'С');
  latinText = latinText.replace(/Š/g, 'Ш');
  latinText = latinText.replace(/T/g, 'Т');
  latinText = latinText.replace(/U/g, 'У');
  latinText = latinText.replace(/V/g, 'В');
  latinText = latinText.replace(/Z/g, 'З');
  latinText = latinText.replace(/Ž/g, 'Ж');
  latinText = latinText.replace(/\[/g, 'ш');
  latinText = latinText.replace(/\\/g, 'ж');
  latinText = latinText.replace(/]/g, 'ђ');
  latinText = latinText.replace(/;/g, 'č');
  latinText = latinText.replace(/w/g, 'њ');
  latinText = latinText.replace(/q/g, 'љ');
  latinText = latinText.replace(/'/g, 'ћ');

  return latinText;
}

export const convertCirilicToLatin = (cirilicText) => {
  cirilicText = cirilicText.replace(/љ/g, 'lj');
  cirilicText = cirilicText.replace(/Љ/g, 'Lj');
  cirilicText = cirilicText.replace(/њ/g, 'nj');
  cirilicText = cirilicText.replace(/Њ/g, 'Nj');
  cirilicText = cirilicText.replace(/џ/g, 'dž');
  cirilicText = cirilicText.replace(/Џ/g, 'Dž');
  cirilicText = cirilicText.replace(/а/g, 'a');
  cirilicText = cirilicText.replace(/б/g, 'b');
  cirilicText = cirilicText.replace(/ц/g, 'c');
  cirilicText = cirilicText.replace(/ч/g, 'č');
  cirilicText = cirilicText.replace(/ћ/g, 'ć');
  cirilicText = cirilicText.replace(/д/g, 'd');
  cirilicText = cirilicText.replace(/ђ/g, 'đ');
  cirilicText = cirilicText.replace(/е/g, 'e');
  cirilicText = cirilicText.replace(/ф/g, 'f');
  cirilicText = cirilicText.replace(/г/g, 'g');
  cirilicText = cirilicText.replace(/х/g, 'h');
  cirilicText = cirilicText.replace(/и/g, 'i');
  cirilicText = cirilicText.replace(/ј/g, 'j');
  cirilicText = cirilicText.replace(/к/g, 'k');
  cirilicText = cirilicText.replace(/л/g, 'l');
  cirilicText = cirilicText.replace(/м/g, 'm');
  cirilicText = cirilicText.replace(/н/g, 'n');
  cirilicText = cirilicText.replace(/о/g, 'o');
  cirilicText = cirilicText.replace(/п/g, 'p');
  cirilicText = cirilicText.replace(/р/g, 'r');
  cirilicText = cirilicText.replace(/с/g, 's');
  cirilicText = cirilicText.replace(/ш/g, 'š');
  cirilicText = cirilicText.replace(/т/g, 't');
  cirilicText = cirilicText.replace(/у/g, 'u');
  cirilicText = cirilicText.replace(/в/g, 'v');
  cirilicText = cirilicText.replace(/з/g, 'z');
  cirilicText = cirilicText.replace(/ж/g, 'ž');

  cirilicText = cirilicText.replace(/А/g, 'A');
  cirilicText = cirilicText.replace(/Б/g, 'B');
  cirilicText = cirilicText.replace(/Ц/g, 'C');
  cirilicText = cirilicText.replace(/Ч/g, 'Č');
  cirilicText = cirilicText.replace(/Ћ/g, 'Ć');
  cirilicText = cirilicText.replace(/Д/g, 'D');
  cirilicText = cirilicText.replace(/Ђ/g, 'Đ');
  cirilicText = cirilicText.replace(/Е/g, 'E');
  cirilicText = cirilicText.replace(/Ф/g, 'F');
  cirilicText = cirilicText.replace(/Г/g, 'G');
  cirilicText = cirilicText.replace(/Х/g, 'H');
  cirilicText = cirilicText.replace(/И/g, 'I');
  cirilicText = cirilicText.replace(/Ј/g, 'J');
  cirilicText = cirilicText.replace(/К/g, 'K');
  cirilicText = cirilicText.replace(/Л/g, 'L');
  cirilicText = cirilicText.replace(/М/g, 'M');
  cirilicText = cirilicText.replace(/Н/g, 'N');
  cirilicText = cirilicText.replace(/О/g, 'O');
  cirilicText = cirilicText.replace(/П/g, 'P');
  cirilicText = cirilicText.replace(/Р/g, 'R');
  cirilicText = cirilicText.replace(/С/g, 'S');
  cirilicText = cirilicText.replace(/Ш/g, 'Š');
  cirilicText = cirilicText.replace(/Т/g, 'T');
  cirilicText = cirilicText.replace(/У/g, 'U');
  cirilicText = cirilicText.replace(/В/g, 'V');
  cirilicText = cirilicText.replace(/З/g, 'Z');
  cirilicText = cirilicText.replace(/Ж/g, 'Ž');

  return cirilicText;
}

export const localizationConverter = text => {
  let localization = window.localStorage.getItem("localization");
  console.log(localization);
  if(localization) {
    return convertLatinToCirilic(text);
  } else {
    return convertCirilicToLatin(text);
  }
}

export const routeFixer = text => {
  let textImported = convertCirilicToLatin(text.toLowerCase()).split(' ').join('-');
  return textImported
}













