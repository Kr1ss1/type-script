// =====================================================
// NTV · Forritun 101 · Tími 12
// Verkefni: fetch upprifjun + TypeScript grunnur
//
// TVÆR LEIÐIR TIL AÐ VINNA:
//
//   Leið A (ekkert að setja upp):
//     Opnaðu https://www.typescriptlang.org/play
//     Afritaðu einn hluta í einu þangað inn. Rauðar línur = villur.
//     Ýttu á "Run" og skoðaðu útkomuna í "Logs" flipanum til hægri.
//
//   Leið B (VS Code):
//     Opnaðu þessa skrá í VS Code. VS Code sýnir TypeScript-villur sjálft.
//     Keyrðu hana í terminal:   npx tsx aefingar-timi12.ts
//
// REGLUR:
//   - Eitt verkefni í einu. Keyrðu eftir hvert.
//   - "// Á að gefa:" segir hvað á að koma út.
//   - "// 🔴" þýðir: hér á að koma rauð lína. Lestu villuna og lagaðu hana.
//   - Verkefni sem eru komment (//) takið þið kommentin af þegar þið komið að þeim.
//     Í VS Code: veldu línurnar og Ctrl + K, svo Ctrl + U.
//
// ⭐ = létt   ⭐⭐ = miðlungs   ⭐⭐⭐ = erfitt
// =====================================================


// =====================================================
// HLUTI A — Upprifjun: fetch
// Mynstrið er alltaf það sama:
//   const response = await fetch(url);
//   const gogn = await response.json();
//   ...nota gögnin
// Opnaðu alltaf URL-ið í vafranum fyrst og skoðaðu JSON-ið!
// =====================================================

async function hlutiA() {
  // A1 ⭐ Sæktu https://dummyjson.com/recipes/1 og prentaðu nafnið (name).
  // Á að gefa: Classic Margherita Pizza
  const responseA1 = await fetch("https://dummyjson.com/recipes/1");
  const gognA1 = await responseA1.json();
  console.log(gognA1.name);


  // A2 ⭐ Sæktu https://dummyjson.com/quotes/random og prentaðu tilvitnunina
  // og höfundinn: "„...“ — Höfundur"
  const responseA2 = await fetch("https://dummyjson.com/quotes/random");
  const gognA2 = await responseA2.json();
  console.log(`„${gognA2.quote}“ — ${gognA2.author}`);


  // A3 ⭐ Sæktu https://dummyjson.com/products?limit=5 og prentaðu titlana
  // á öllum vörunum með for...of. Muna: listinn er í gogn.products
  const responseA3 = await fetch("https://dummyjson.com/products?limit=5");
  const gognA3 = await responseA3.json();
  for (const vara of gognA3.products) {
    console.log(vara.title);
  }


  // A4 ⭐⭐ Sæktu https://dummyjson.com/products?limit=30 og notaðu map
  // til að búa til array af verðum (price). Prentaðu það.
  const responseA4 = await fetch("https://dummyjson.com/products?limit=30");
  const gognA4 = await responseA4.json();
  const verd = gognA4.products.map((vara: any) => vara.price);
  console.log(verd);


  // A5 ⭐⭐ Sæktu https://dummyjson.com/users?limit=30. Hversu margir notendur
  // eru eldri en 40 ára? (filter + .length)
  const responseA5 = await fetch("https://dummyjson.com/users?limit=30");
  const gognA5 = await responseA5.json();
  const eldri = gognA5.users.filter((notandi: any) => notandi.age > 40);
  console.log(eldri.length);


  // A6 ⭐⭐ Sæktu https://dummyjson.com/recipes/search?q=chicken
  // Hversu margar uppskriftir fundust? Prentaðu nöfnin.
  const responseA6 = await fetch("https://dummyjson.com/recipes/search?q=chicken");
  const gognA6 = await responseA6.json();
  console.log(gognA6.recipes.length);
  for (const uppskrift of gognA6.recipes) {
    console.log(uppskrift.name);
  }


  // A7 ⭐⭐⭐ Skrifaðu async function `saekjaUppskrift(id)` sem sækir
  // https://dummyjson.com/recipes/${id} og prentar nafnið.
  // Kallaðu á hana með 1, 2 og 3.
  async function saekjaUppskrift(id: number) {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const gogn = await response.json();
    console.log(gogn.name);
  }

  await saekjaUppskrift(1);
  await saekjaUppskrift(2);
  await saekjaUppskrift(3);
}

hlutiA();


// =====================================================
// HLUTI B — Types á breytur
// TypeScript = JavaScript + types.
// Við segjum hvaða type breyta er, og VS Code varar okkur við villum
// ÁÐUR en kóðinn keyrir.
//
//   let nafn: string = "Anna";
//   let aldur: number = 25;
//   let erNemandi: boolean = true;
// =====================================================

// B1 ⭐ Búðu til þrjár breytur með types: nafnið þitt (string),
// aldurinn þinn (number) og hvort þú kunnir TypeScript (boolean). Prentaðu þær.
let nafnMitt: string = "Kristófer";
let aldurMinn: number = 25;
let kannTypeScript: boolean = true;
console.log(nafnMitt, aldurMinn, kannTypeScript);


// B2 ⭐ Takið kommentin af. 🔴 Lestu villuna. Lagaðu svo með því að setja tölu.
let verd: number = 1290;
verd = 0;


// B3 ⭐ Takið kommentin af. 🔴 Hvaða type ætti `borg` að vera? Lagaðu.
let borg: string = "Reykjavík";


// B4 ⭐ TypeScript getur giskað sjálft. Skrifaðu  let land = "Ísland";
// og færðu músina yfir `land` í VS Code (eða Playground). Hvaða type sérðu?
// Svar: string
let land = "Ísland";


// B5 ⭐⭐ Takið kommentin af. 🔴 Af hverju kemur villa? Lagaðu.
// Svar: TypeScript giskar á að fjoldi sé number, svo það má ekki setja string í hann.
let fjoldi = 10;
fjoldi = 20;


// =====================================================
// HLUTI C — Types á functions
// Við setjum types á parameters og á það sem function skilar:
//
//   function tvofalda(tala: number): number {
//     return tala * 2;
//   }
// =====================================================

// C1 ⭐ Skrifaðu function `heilsa(nafn: string): string` sem skilar "Halló, Anna!"
// Á að gefa: Halló, Anna!
function heilsa(nafn: string): string {
  return `Halló, ${nafn}!`;
}
console.log(heilsa("Anna"));


// C2 ⭐ Skrifaðu function `leggjaSaman(a: number, b: number): number`.
// Á að gefa: leggjaSaman(4, 6) → 10
function leggjaSaman(a: number, b: number): number {
  return a + b;
}
console.log(leggjaSaman(4, 6));


// C3 ⭐ Takið kommentin af. 🔴 Hvað er að? Lagaðu kallið, ekki function-ina.
function ferningur(x: number): number {
  return x * x;
}
console.log(ferningur(5));


// C4 ⭐⭐ Skrifaðu function `erFullordinn(aldur: number): boolean`
// sem skilar true ef aldur er 18 eða meira.
// Á að gefa: erFullordinn(17) → false, erFullordinn(30) → true
function erFullordinn(aldur: number): boolean {
  return aldur >= 18;
}
console.log(erFullordinn(17));
console.log(erFullordinn(30));


// C5 ⭐⭐ Skrifaðu arrow function `medVsk` sem tekur verð (number) og skilar
// verðinu með 24% vsk. Hint: const medVsk = (verd: number): number => ...
// Á að gefa: medVsk(1000) → 1240
const medVsk = (verd: number): number => verd * 1.24;
console.log(medVsk(1000));


// C6 ⭐⭐ Takið kommentin af. 🔴 function-in segist skila number en skilar string. Lagaðu.
function lengd(texti: string): number {
  return texti.length;
}


// =====================================================
// HLUTI D — Arrays með types
//   const tolur: number[] = [1, 2, 3];
//   const nofn: string[] = ["Anna", "Óli"];
// =====================================================

// D1 ⭐ Búðu til `uppahaldsMatur: string[]` með þremur réttum. Prentaðu hann.
const uppahaldsMatur: string[] = ["Pizza", "Plokkfiskur", "Lasagna"];
console.log(uppahaldsMatur);


// D2 ⭐ Takið kommentin af. 🔴 Lagaðu svo aðeins tölur séu í array-inu.
const einkunnir: number[] = [8, 9, 10, 7];


// D3 ⭐⭐ Notaðu map á `einkunnir` (eftir að þú lagaðir hana) til að bæta 1 við hverja.
// Færðu músina yfir niðurstöðuna. Hvaða type er hún?
// Svar: number[]
const haerriEinkunnir = einkunnir.map((einkunn) => einkunn + 1);
console.log(haerriEinkunnir);


// D4 ⭐⭐ Skrifaðu function `summa(listi: number[]): number` með reduce.
// Á að gefa: summa([4, 8, 15]) → 27
function summa(listi: number[]): number {
  return listi.reduce((samtals, tala) => samtals + tala, 0);
}
console.log(summa([4, 8, 15]));


// D5 ⭐⭐ Skrifaðu function `lengstaNafn(nofn: string[]): string`
// sem skilar lengsta nafninu.
// Á að gefa: lengstaNafn(["Anna", "Bjarki", "Óli"]) → Bjarki
function lengstaNafn(nofn: string[]): string {
  return nofn.reduce((lengsta, nafn) => (nafn.length > lengsta.length ? nafn : lengsta));
}
console.log(lengstaNafn(["Anna", "Bjarki", "Óli"]));


// =====================================================
// HLUTI E — type fyrir objects
//   type Rettur = {
//     nafn: string;
//     verd: number;
//     vegan: boolean;
//   };
//   const supa: Rettur = { nafn: "Súpa", verd: 1690, vegan: true };
// =====================================================

// E1 ⭐ Búðu til `type Kvikmynd` með titill (string), ar (number) og einkunn (number).
type Kvikmynd = {
  titill: string;
  ar: number;
  einkunn: number;
  leikstjori?: string; // E6
};


// E2 ⭐ Búðu til eina Kvikmynd, t.d. Hrútar, 2015, 7.1. Prentaðu titilinn.
const hrutar: Kvikmynd = { titill: "Hrútar", ar: 2015, einkunn: 7.1 };
console.log(hrutar.titill);


// E3 ⭐ Takið kommentin af (þegar E1 er búið). 🔴 Hvaða key vantar? Bættu því við.
// Svar: einkunn
const djupid: Kvikmynd = { titill: "Djúpið", ar: 2012, einkunn: 6.9 };


// E4 ⭐ Takið kommentin af. 🔴 Hvað er stafsett vitlaust? Lagaðu.
// Svar: titil á að vera titill
const lamb: Kvikmynd = { titill: "Lamb", ar: 2021, einkunn: 6.2 };


// E5 ⭐⭐ Búðu til `kvikmyndir: Kvikmynd[]` með þremur myndum.
// Notaðu filter til að finna myndir með einkunn yfir 7. Prentaðu titlana.
const kvikmyndir: Kvikmynd[] = [hrutar, djupid, lamb];
const godarMyndir = kvikmyndir.filter((mynd) => mynd.einkunn > 7);
for (const mynd of godarMyndir) {
  console.log(mynd.titill);
}


// E6 ⭐⭐ Bættu `leikstjori?: string` við type-ið. Spurningarmerkið þýðir
// að key-ið má vanta. Búðu til eina mynd með og eina án leikstjóra.
const medLeikstjora: Kvikmynd = { titill: "Hrútar", ar: 2015, einkunn: 7.1, leikstjori: "Grímur Hákonarson" };
const anLeikstjora: Kvikmynd = { titill: "Lamb", ar: 2021, einkunn: 6.2 };
console.log(medLeikstjora, anLeikstjora);


// E7 ⭐⭐ Skrifaðu function `lysing(m: Kvikmynd): string` sem skilar
// "Hrútar (2015) ★ 7.1"
function lysing(m: Kvikmynd): string {
  return `${m.titill} (${m.ar}) ★ ${m.einkunn}`;
}
console.log(lysing(hrutar));


// =====================================================
// HLUTI F — Union types: aðeins ákveðin gildi leyfð
//   type Erfidleiki = "Easy" | "Medium" | "Hard";
// =====================================================

// F1 ⭐ Búðu til `type Erfidleiki = "Easy" | "Medium" | "Hard";`
// og breytu `let stig: Erfidleiki = "Easy";`
type Erfidleiki = "Easy" | "Medium" | "Hard";
let stig: Erfidleiki = "Easy";


// F2 ⭐ Takið kommentin af. 🔴 Af hverju má þetta ekki? Lagaðu.
// Svar: "Mjög erfitt" er ekki eitt af gildunum sem Erfidleiki leyfir.
stig = "Hard";


// F3 ⭐⭐ Skrifaðu function `litur(e: Erfidleiki): string` sem skilar
// "grænn" fyrir Easy, "gulur" fyrir Medium og "rauður" fyrir Hard.
// Taktu eftir: VS Code stingur upp á gildunum þegar þú skrifar e === "
function litur(e: Erfidleiki): string {
  if (e === "Easy") {
    return "grænn";
  }
  if (e === "Medium") {
    return "gulur";
  }
  return "rauður";
}
console.log(litur("Medium"));


// F4 ⭐⭐ Búðu til `type Id = number | string;` og function `synaId(id: Id): string`
// sem skilar "Id: 42" eða "Id: abc".
type Id = number | string;

function synaId(id: Id): string {
  return `Id: ${id}`;
}
console.log(synaId(42));
console.log(synaId("abc"));


// =====================================================
// HLUTI G — TypeScript + fetch
// Gögn frá fetch eru `any`: TypeScript veit ekki hvað er í þeim.
// Við segjum því það með type:
//
//   type Uppskrift = { id: number; name: string; rating: number };
//   const uppskrift: Uppskrift = await response.json();
//
// Nú veit VS Code hvaða keys eru til, og stingur upp á þeim!
// =====================================================

async function hlutiG() {
  // G1 ⭐ Búðu til `type Uppskrift` með id, name, cuisine og rating.
  // Sæktu /recipes/1 og settu svarið í breytu af type Uppskrift. Prentaðu name.
  // Skrifaðu svo  uppskrift.  og sjáðu hvað VS Code stingur upp á.
  type Uppskrift = {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    difficulty: Erfidleiki; // G6
  };

  const responseG1 = await fetch("https://dummyjson.com/recipes/1");
  const uppskrift: Uppskrift = await responseG1.json();
  console.log(uppskrift.name);


  // G2 ⭐⭐ Reyndu að prenta uppskrift.title. 🔴 Hvað segir TypeScript?
  // (Þetta er sama villa og í debug-æfingunni á miðvikudaginn,
  //  nema núna sést hún ÁÐUR en kóðinn keyrir.)
  // Svar: Property 'title' does not exist on type 'Uppskrift'.
  // console.log(uppskrift.title);


  // G3 ⭐⭐ Sæktu /recipes?limit=10. Svarið er object með recipes inni í.
  // Búðu til type fyrir það:
  //   type UppskriftaSvar = { recipes: Uppskrift[]; total: number };
  // Prentaðu nöfnin með map.
  type UppskriftaSvar = { recipes: Uppskrift[]; total: number };

  const responseG3 = await fetch("https://dummyjson.com/recipes?limit=10");
  const svarG3: UppskriftaSvar = await responseG3.json();
  console.log(svarG3.recipes.map((u) => u.name));


  // G4 ⭐⭐ Búðu til `type Vara` (id, title, price, category) og sæktu
  // https://dummyjson.com/products?limit=20
  // Prentaðu ódýrustu vöruna. Hint: reduce eða sort.
  type Vara = { id: number; title: string; price: number; category: string };
  type VoruSvar = { products: Vara[] };

  const responseG4 = await fetch("https://dummyjson.com/products?limit=20");
  const svarG4: VoruSvar = await responseG4.json();
  const odyrust = svarG4.products.reduce((odyrasta, vara) => (vara.price < odyrasta.price ? vara : odyrasta));
  console.log(odyrust);


  // G5 ⭐⭐⭐ Skrifaðu function
  //   async function saekjaUppskrift(id: number): Promise<Uppskrift>
  // sem sækir og SKILAR uppskriftinni. Kallaðu á hana:
  //   const u = await saekjaUppskrift(5);
  //   console.log(u.name);
  // Á að gefa: Mango Salsa Chicken
  async function saekjaUppskrift(id: number): Promise<Uppskrift> {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    return await response.json();
  }

  const u = await saekjaUppskrift(5);
  console.log(u.name);


  // G6 ⭐⭐⭐ Bættu `difficulty: Erfidleiki` við Uppskrift (type-ið úr F1).
  // Sæktu 50 uppskriftir og teldu hversu margar eru "Easy".
  // Á að gefa: 30
  const responseG6 = await fetch("https://dummyjson.com/recipes?limit=50");
  const svarG6: UppskriftaSvar = await responseG6.json();
  const audveldar = svarG6.recipes.filter((u) => u.difficulty === "Easy");
  console.log(audveldar.length);
}

hlutiG();


// =====================================================
// 🚀 BÓNUS
// =====================================================

// X1 ⭐⭐ `interface` er næstum það sama og `type` fyrir objects:
//   interface Notandi { firstName: string; lastName: string; age: number; }
// Sæktu https://dummyjson.com/users?limit=10 og prentaðu fullt nafn allra.
interface Notandi {
  firstName: string;
  lastName: string;
  age: number;
}

async function bonusX1() {
  const response = await fetch("https://dummyjson.com/users?limit=10");
  const gogn: { users: Notandi[] } = await response.json();
  for (const notandi of gogn.users) {
    console.log(`${notandi.firstName} ${notandi.lastName}`);
  }
}

bonusX1();


// X2 ⭐⭐⭐ Taktu Uppskriftabókina frá miðvikudeginum (main.js), endurnefndu
// hana main.ts og bættu types við: Uppskrift, uppskriftir: Uppskrift[], og
// types á parameters. Hversu margar villur finnur TypeScript?


// X3 ⭐⭐⭐ Hvað er munurinn á `any` og `unknown`? Prófaðu:
//   let a: any = "halló";      a.toUpperCase();   a.flyga();
//   let b: unknown = "halló";  b.toUpperCase();
// Hvor gefur villu? Af hverju er það gott?
// Svar: `unknown` gefur villu ('b' is of type 'unknown') en `any` slekkur á allri athugun,
// svo a.flyga() fer í gegn og krassar ekki fyrr en kóðinn keyrir. Það er gott að fá
// villuna strax, því með unknown verðum við að athuga type-ið áður en við notum gildið:
let b: unknown = "halló";
if (typeof b === "string") {
  console.log(b.toUpperCase());
}
