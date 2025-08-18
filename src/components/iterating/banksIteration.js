const banksContainer = document.getElementById('banks-container') 
const logos = [
  "absolite.svg",
  "alfa.svg",
  "gazprom.svg",
  "otp.svg",
  "sber.svg",
  "sovcombank.svg",
  "tbank 1.svg",
  "vtb.svg",
  "zenit.svg"
];

logos.forEach((logo) => {
    const img = document.createElement('img')
    img.className = 'cursor-pointer w-[50px] md:w-auto'
    img.src = `./assets/banks/${logo}`


    banksContainer.append(img)
})