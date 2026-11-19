"use strict";
/* ============================ DATA ============================ */
var COVER = { id:"cover-napa", cat:"Travel", title:"Napa at Golden Hour: The Estates Rewriting the Valley",
  dek:"A new generation of growers is trading trophy wines for living soils, earlier picks, and bottles that taste like a place again.",
  img:"assets/hero.jpg", alt:"Vineyard rows glowing gold at sunset beneath hazy mountains in Napa Valley", author:"The Tasting Room", date:"Nov 5, 2026", mins:8 };

var STORIES = [
{ id:"ragu", cat:"Recipes", title:"The Slow Sunday Ragù Worth Every Hour",
  dek:"Four hours, one pot, and the deepest sauce of your winter — patience does the cooking.",
  img:"assets/pasta.webp", alt:"Hands shaping fresh pasta in a kitchen class", author:"Elena Marchetti", date:"Nov 4, 2026", mins:6,
  body:["A proper ragù is not a sauce you make; it is an afternoon you spend. The meat — half beef, half pork, with a little pancetta for depth — goes in only after the soffritto of onion, carrot, and celery has sweated down to sweetness. That first twenty minutes decides everything that follows, and rushing it is the one mistake no amount of simmering can undo.",
  "Deglaze with a full glass of dry white wine and let it cook off entirely before the milk goes in — yes, milk, the Bolognese secret that rounds every edge. Then the tomatoes, crushed by hand, and the long, low bubble begins. Three hours is the floor; four is better. The sauce should barely move, a lazy blip at the surface every few seconds.",
  "Season in stages and taste like you mean it. The ragù will need more salt at hour three than you expect, because the flavors concentrate as the liquid leaves. A spoonful of the pasta's cooking water at the end marries sauce and noodle into one thing rather than two things sharing a bowl.",
  "Serve it over tagliatelle you can see through at the edges, with Parmigiano that you grate yourself, at the table, generously. Leftovers — if your household allows them to exist — are better on day two, folded through baked pasta with a béchamel lid."] },
{ id:"salmon", cat:"Recipes", title:"Crispy-Skin Salmon, the Restaurant Way",
  dek:"A cold pan, a dry fillet, and the confidence to leave it alone — the whole method, plus the lemon-herb finish.",
  img:"assets/salmon.jpg", alt:"A plated salmon fillet with crisp golden skin in a restaurant setting", author:"The Tasting Room", date:"Nov 3, 2026", mins:5,
  body:["Every great salmon skin begins an hour before the pan, with salt and a rack in the refrigerator. Dry surface, crisp skin — there are no exceptions and no shortcuts. Pat the fillets dry again just before cooking, because moisture is the enemy and it returns quickly.",
  "Start the fillets skin-side down in a cold, lightly oiled pan, then turn the heat to medium. Press each fillet gently with a spatula for the first minute so the skin makes full contact and doesn't curl. Then — this is the hard part — do nothing. Seven minutes of nothing. The skin will release itself when it is ready, and pulling early tears it.",
  "When the flesh has turned opaque two-thirds of the way up, flip the fillets for exactly thirty seconds, just to kiss the top. Rest them skin-side up for three minutes so the crispness survives to the table.",
  "Finish with lemon juice, good olive oil, and whatever soft herbs you have — dill, chives, parsley. Serve it on warm plates with the skin facing the ceiling, like a flag. Our Recipe of the Week scaler at the top of the home page will size the quantities for your table."] },
{ id:"bordeaux-cellar", cat:"Wine", title:"Bordeaux's Quiet Revolution in the Cellar",
  dek:"Less extraction, earlier picks, amphorae beside the barriques — the world's most traditional region is changing its mind.",
  img:"assets/cellar.jpg", alt:"Oak barrels ageing in a cool underground wine cellar", author:"Claire Dubois", date:"Nov 2, 2026", mins:7,
  body:["Walk into a Bordeaux cellar today and you will still see the barriques — but look again and there are concrete eggs, clay amphorae, and large old foudres standing among them. The region that defined tradition is quietly rebuilding its cellars around a single idea: let the vineyard speak louder than the winemaking.",
  "The shift starts in the field. Harvest dates have crept earlier across the Médoc and the Right Bank, chasing freshness over sheer ripeness, and alcohol levels that climbed for two decades are easing back. Cabernet picked for perfume rather than power tastes different — brighter, longer, more honest about where it grew.",
  "Extraction, once a point of pride, is now handled like a spice: a little, late, and never enough to bury the fruit. Several respected estates have cut new-oak percentages in half, finding that the wines age more gracefully and drink sooner — a commercial virtue the old model never needed to consider.",
  "None of this makes Bordeaux modern in the loud sense. It makes it attentive. The great names are still great, the gravel still does its ancient work — but the wines arriving now carry a lightness that would have startled the cellar masters of 2005, and they are better for it."] },
{ id:"lighter-reds", cat:"Wine", title:"Why Everyone Is Drinking Lighter Reds",
  dek:"Gamay, Frappato, chilled Mencia — the pale, bright reds have moved from the sommelier's secret to everyone's table.",
  img:"assets/wine-sunset.jpg", alt:"Two glasses of red wine raised in a vineyard at sunset", author:"The Tasting Room", date:"Oct 30, 2026", mins:5,
  body:["Something has shifted in the glass. The biggest, darkest reds — the ones that stained teeth and conversations alike — are sharing the table now with wines the color of garnets held to the light: Gamay from Beaujolais, Frappato from Sicily, Poulsard from the Jura, Mencía from Bierzo. They pour pale, drink bright, and disappear fast.",
  "Part of it is food. Lighter reds bend toward whatever is on the table — roast chicken, grilled fish, a Tuesday stir-fry — where a heavyweight red demands the meal be built around it. Part of it is the weather of our lives: warm evenings and long lunches reward a wine that refreshes rather than overwhelms.",
  "Serving them well asks for one small change: the cellar-cool glass. Fifteen minutes in the refrigerator — not an ice bath, not the freezer — takes a light red to the temperature where its fruit sings and its edges soften. Restaurants have done this for years; home drinkers are catching up.",
  "Start with a Beaujolais cru like Morgon or Fleurie, move to a Sicilian Frappato with tomato-based anything, and keep a bottle of Mencía for the next time someone insists red can't go with salmon. It can. It absolutely can."] },
{ id:"coupe", cat:"Cocktails", title:"The Coupe Is Back: Sours Done Properly",
  dek:"Foam like silk, citrus in balance, and the wrist work that separates a great whiskey sour from a good one.",
  img:"assets/cocktail.webp", alt:"A bartender finishing a golden sour cocktail in a coupe with a dried orange wheel", author:"Marcus Webb", date:"Oct 29, 2026", mins:5,
  body:["The coupe never really left the good bars; it just waited for the rest of us to remember why it exists. A sour — spirit, citrus, sugar, and that crown of foam — belongs in a wide, shallow bowl where the aroma reaches you before the first sip and the foam spreads into a perfect, even cap.",
  "The foam is the craft. Egg white (or aquafaba, which foams nearly as well) needs two shakes: a dry shake without ice to build the structure, then a hard shake with ice to chill and dilute. Thirty seconds of genuine effort. Skipping the dry shake gives you a flat drink wearing a sad bubble hat.",
  "Balance is a ratio you can memorize: two parts spirit, three-quarters citrus, three-quarters sweetener — then adjust a quarter-ounce at a time toward the drink in front of you, because lemons are not standardized and neither are palates. Taste with a straw before you strain. Always.",
  "Finish with intention: a dried citrus wheel laid on the foam, or three drops of bitters dragged into a pattern with a pick. The garnish is not decoration; it is the first aroma, and the first aroma is half the drink."] },
{ id:"aperitivo", cat:"Cocktails", title:"Aperitivo Hour, the Italian Way",
  dek:"Low in alcohol, long on ritual — how to borrow Italy's best hour for your own evenings.",
  img:"assets/aperitivo.webp", alt:"Spritzes and wine glasses with olives, salami, cheese and bruschetta on a rooftop terrace in Italy at sunset", author:"Elena Marchetti", date:"Oct 26, 2026", mins:4,
  body:["Between six and eight in any Italian city, the day changes key. The aperitivo is not happy hour — nothing is discounted and nobody is in a hurry. It is a gentle gear-shift: something bitter and sparkling in the glass, something salty on a small plate, and the understanding that dinner is coming but has not yet arrived.",
  "The drinks are built on bitterness because bitter wakes the appetite. A spritz — three parts prosecco, two parts bitter aperitivo, one part soda — is the famous one, but the Americano (Campari, sweet vermouth, soda) is the connoisseur's, and a simple vermouth on the rocks with an orange twist is the quiet masterpiece.",
  "What arrives alongside matters as much: olives, salted nuts, a few slices of salami, perhaps bruschetta if the kitchen loves you. The food is not a meal; it is ballast and invitation at once, sized so that appetite grows rather than dies.",
  "To borrow the hour at home, set a start and an end — aperitivo that runs into dinner hour becomes just drinking. Ice down the glasses, put out the small plates, and let the evening begin on Italian time."] },
{ id:"dining-rooms", cat:"Restaurants", title:"The Dining Rooms That Still Do It Right",
  dek:"Candlelight, unhurried pacing, and sauces finished at the table — a defense of the classic restaurant, done well.",
  img:"assets/restaurant.jpg", alt:"An elegant candlelit restaurant dining room with set tables", author:"The Tasting Room", date:"Oct 24, 2026", mins:6,
  body:["There is a kind of restaurant that never trends because it was never a trend: white cloth or bare polished wood, light low enough to flatter everyone at the table, and a menu that changes with the market rather than the algorithm. Walking in feels like being expected. That feeling is the whole product, and it cannot be faked.",
  "The pacing is the tell. Courses arrive when the table is ready for them, not when the kitchen is. Water glasses fill without ceremony or interruption. A sauce is finished tableside not as theater but because it genuinely tastes better in the ninety seconds after it comes together — the theater is a by-product.",
  "These rooms survive because they understand something the fast-casual era forgot: a restaurant meal is one of the last experiences designed to be unrepeatable and unhurried at the same time. You cannot take it away in a bag. It happens once, at that table, with those people.",
  "Seek them out in your own city — every city still has two or three — and book the early seating on a weeknight, when the kitchen is calm and the room is at its most generous. Order the thing the menu has clearly been making for twenty years."] },
{ id:"market-menu", cat:"Restaurants", title:"The Market-Driven Menu, Explained by Its Chefs",
  dek:"When the menu says 'market-driven,' the morning run to the farmers' market is where the cooking actually starts.",
  img:"assets/market.webp", alt:"Crates of fresh vegetables and produce at a farmers' market stall", author:"Priya Nair", date:"Oct 22, 2026", mins:6,
  body:["At 6:40 on a Tuesday morning, before most of the city has made coffee, the chefs are already arguing politely over the last crate of chanterelles. The market-driven menu — that phrase on a hundred restaurant websites — is not a philosophy seminar. It is this: cold air, good light, and whatever the farms actually picked yesterday.",
  "The chefs we followed plan backwards. The menu is a skeleton — a fish, a bird, two pastas, a salad — and the market writes the specifics into it each morning. Strawberries in June become the dessert; the same slot in October belongs to quince. Regulars learn to read the seasons through the menu like a calendar.",
  "It costs more and plans worse, and every chef we asked said the same thing: the alternative is cooking from a delivery truck's catalog, and the food can tell. A tomato picked ripe on Monday has no interest in competing with one picked green in another hemisphere.",
  "You can cook this way at home without the 6:40 alarm. Pick one market trip a week, buy what looks alive, and build two dinners around it. That is the entire method — the restaurants just do it at scale, with better knives."] },
{ id:"tuscany", cat:"Travel", title:"Tuscany's Hill Towns, One Long Lunch at a Time",
  dek:"Cypress roads, Sangiovese in tumblers, and the art of doing almost nothing, beautifully.",
  img:"assets/tuscany.jpg", alt:"Vineyards and a stone farmhouse among rolling green hills in Tuscany", author:"Claire Dubois", date:"Oct 20, 2026", mins:7,
  body:["The correct speed for Tuscany is the speed of a lunch that has no plans after it. The hill towns — Montefioralle, Radda, Panzano, Montepulciano — were built for a slower century, and they still insist on it: narrow stone lanes, a church bell marking hours nobody checks, and a trattoria where the owner decides what you are eating.",
  "Drive the cypress roads in the morning when the mist is still sitting in the valleys, and you will understand why painters kept coming back. Every turn composes itself — vineyard, olive grove, a farmhouse the color of toasted bread. Stop often. The view is the itinerary.",
  "Eat where the menu is short and the Sangiovese comes in a tumbler. Pici pasta with wild boar ragù in Pienza, bistecca in Panzano from the famous butcher who recites Dante while he cuts — these are not hidden gems, just meals that have been done right for a very long time.",
  "Stay in an agriturismo on a working vineyard if you can. Waking to the rows you drank from the night before has a way of reorganizing a person's priorities, at least until the flight home."] },
{ id:"bordeaux-trip", cat:"Travel", title:"Bordeaux Beyond the Châteaux",
  dek:"Markets, natural wine bars, and the left bank of the river — the city itself is the tasting note most visitors miss.",
  img:"assets/bordeaux.jpg", alt:"A Bordeaux château standing behind its vineyards under a wide sky", author:"The Tasting Room", date:"Oct 17, 2026", mins:6,
  body:["Most visitors treat Bordeaux as a departure lounge for the Médoc — land, taste at three famous estates, leave. They miss the city itself, which has quietly become one of the most pleasurable food towns in France, all limestone light and market mornings.",
  "Start at the Marché des Capucins, the city's stomach, where oyster stalls open at breakfast and the correct move is a dozen fines de claire with a glass of Entre-Deux-Mers so cold it frosts. Then walk it off along the Garonne, past the mirror of water at the Place de la Bourse, toward the Chartrons district where the wine merchants' grand houses now hold bakeries and bookshops.",
  "The evening belongs to the natural wine bars around Saint-Pierre, pouring pét-nat and low-intervention Bordeaux that the château tours never mention — the region's other revolution, drunk young and locally. Dinner is duck, or lamprey if you are feeling historical, or simply the best steak-frites of your traveling life.",
  "Do the châteaux, of course — Saint-Émilion at golden hour justifies every postcard. But give the city two days of its own. Bordeaux rewards the visitors who stay for dinner."] },
{ id:"pairing", cat:"Guides", title:"Cheese & Wine: The Pairings That Actually Work",
  dek:"Forget the rules you half-remember. Match weight with weight, respect the funk, and let this field guide do the rest.",
  img:"assets/cheese.webp", alt:"A board of cheeses with honey and accompaniments for wine pairing", author:"Priya Nair", date:"Oct 15, 2026", mins:6,
  body:["Most cheese-and-wine advice fails at the same place: it pairs the cheese you wish you had with the wine you already opened. Work the other way. Cheese is the fixed point — fatty, salty, sometimes gloriously funky — and the wine's job is to cut, lift, or echo it.",
  "One principle covers most of the board: match weight with weight. Delicate fresh goat cheese wants a wine just as light on its feet — Sauvignon Blanc, whose acidity also scrubs the palate clean between bites. A dense aged Comté or Gruyère can stand beside a richer white Burgundy or an oxidative Jura wine, and the nutty notes in both shake hands.",
  "The great surprise for red-wine loyalists: tannin and fat fight. A big Cabernet against a creamy Brie turns metallic and mean. If red it must be, choose something soft and fruity — a Beaujolais with that same Brie is a small revelation. And for blue cheese, abandon dry wine entirely: Sauternes or Port beside Stilton or Roquefort is one of the oldest and greatest pairings in the world, sweet against salt, neither backing down.",
  "Serve cheese at room temperature, pulled from the fridge a full hour ahead, and pour tastes rather than glasses — a pairing board is a conversation, and conversations need refills."] },
{ id:"decanting", cat:"Guides", title:"A Beginner's Guide to Decanting (and When to Skip It)",
  dek:"Young wines want air, old wines want mercy. The five-minute version of a ritual that is mostly about timing.",
  img:"assets/decanting.webp", alt:"Red wine being poured from the bottle into a wide glass decanter on a wooden table", author:"Marcus Webb", date:"Oct 12, 2026", mins:5,
  body:["Decanting does two different jobs that are constantly confused: separating an old wine from its sediment, and giving a young wine air to open up. The technique, the timing, and the risk are completely different — so decide which job you are doing before the cork comes out.",
  "For young, tannic reds — Barolo, young Bordeaux, Napa Cabernet — air is the point. Pour vigorously into a wide decanter and give it thirty minutes to an hour. Our own cellar tests keep landing on thirty minutes as the sweet spot for most bottles: the fruit opens, the edges soften, and nothing has gone flat yet.",
  "For old wines, decanting is surgery, not exercise. Stand the bottle upright for a day so sediment settles, pour in one slow motion against a light, and stop at the first cloudiness. Then drink promptly — a fragile thirty-year-old can fade in the decanter while you are still setting the table.",
  "And skip it entirely for delicate whites, sparkling wines, and anything light and aromatic, where the glass itself provides all the air the wine wants. The decanter is a tool, not a ceremony. Use it when it helps; leave it in the cupboard when it doesn't."] }
];

var INGREDIENTS = [
  { name:"salmon fillets, skin-on", qty:1.5, unit:"lb" },
  { name:"fine sea salt", qty:1, unit:"tsp" },
  { name:"olive oil", qty:2, unit:"tbsp" },
  { name:"unsalted butter", qty:2, unit:"tbsp" },
  { name:"lemon, cut into wedges", qty:1, unit:"" },
  { name:"garlic cloves, smashed", qty:2, unit:"" },
  { name:"fresh dill or chives, torn", qty:0.25, unit:"cup" },
  { name:"baby potatoes, halved", qty:1.25, unit:"lb" }
];
var servings = 4;

var CATS = ["Recipes","Wine","Cocktails","Restaurants","Travel","Guides"];
var state = { view:"home", cat:"All", query:"", saved:{}, decade:0, sel:null };

function $(id){ return document.getElementById(id); }
function toast(msg){ var t=$("toast"); t.textContent=msg; t.classList.add("on"); clearTimeout(t._h); t._h=setTimeout(function(){ t.classList.remove("on"); },2600); }

/* ============================ NAVIGATION ============================ */
var NAVMAP = { home:"home", reading:"reading", studio:"studio", farmers:"farmers" };
function setActiveNav(){
  var btns = document.querySelectorAll("#mainNav button");
  btns.forEach(function(b){
    var on = false;
    if (b.dataset.nav && NAVMAP[b.dataset.nav]===state.view) on = true;
    if (b.dataset.cat && state.view==="home" && state.cat===b.dataset.cat) on = true;
    if (b.dataset.nav==="home" && state.view==="home" && state.cat==="All" && !state.query) on = true;
    if (state.view==="story" && b.dataset.nav==="home") on = true;
    b.classList.toggle("active", on);
  });
}
function show(view){
  state.view = view;
  ["home","story","reading","farmers","studio"].forEach(function(v){ $("view-"+v).classList.toggle("on", v===view); });
  setActiveNav();
  window.scrollTo({ top:0, behavior:"instant" in window ? "instant" : "auto" });
  if (view==="farmers" && !farmersStarted) startFarmers();
  if (view==="reading") renderReading();
}
/* Hamburger toggle: the menu collapses behind it whenever the window is too
   narrow for the full one-line menu (see the max-width:1100px rules). */
function closeNav(){
  $("mainNav").classList.remove("open");
  $("navToggle").setAttribute("aria-expanded","false");
}
$("navToggle").addEventListener("click", function(){
  var open = $("mainNav").classList.toggle("open");
  $("navToggle").setAttribute("aria-expanded", open ? "true" : "false");
});
window.addEventListener("resize", function(){ if (window.innerWidth > 1100) closeNav(); });
function goVintage(){
  closeNav();
  show("home");
  var el = $("vintageChart");
  if (el) setTimeout(function(){ el.scrollIntoView({ behavior:"smooth", block:"start" }); }, 60);
}
document.querySelectorAll("[data-nav]").forEach(function(b){
  b.addEventListener("click", function(){
    closeNav();
    if (b.dataset.nav==="home"){ state.cat="All"; state.query=""; $("searchInput").value=""; renderHome(); }
    show(NAVMAP[b.dataset.nav] || "home");
  });
});
document.querySelectorAll("[data-cat]").forEach(function(b){
  b.addEventListener("click", function(){ closeNav(); state.cat=b.dataset.cat; state.query=""; $("searchInput").value=""; renderHome(); show("home"); document.getElementById("latestTitle").scrollIntoView({behavior:"smooth"}); });
});
document.querySelectorAll("[data-vintage]").forEach(function(b){
  b.addEventListener("click", function(){ goVintage(); });
});
$("footVintage").addEventListener("click", function(e){ e.preventDefault(); goVintage(); });
document.querySelectorAll("[data-cat-link]").forEach(function(a){
  a.addEventListener("click", function(e){ e.preventDefault(); state.cat=a.dataset.catLink; state.query=""; renderHome(); show("home"); });
});
$("footFarmers").addEventListener("click", function(e){ e.preventDefault(); show("farmers"); });
function goSubscribe(){
  closeNav();
  show("home");
  var el = $("newsletter");
  if (el) setTimeout(function(){ el.scrollIntoView({ behavior:"smooth", block:"start" }); var inp = $("newsEmail"); if (inp) setTimeout(function(){ try{ inp.focus({ preventScroll:true }); }catch(err){ inp.focus(); } }, 500); }, 60);
}
$("headerSubscribe").addEventListener("click", function(){ goSubscribe(); });
$("footSignIn").addEventListener("click", function(){ show("studio"); window.scrollTo({ top:0, behavior:"smooth" }); });
$("searchForm").addEventListener("submit", function(e){
  e.preventDefault();
  state.query = $("searchInput").value.trim().toLowerCase(); state.cat="All";
  renderHome(); show("home");
  $("latestTitle").scrollIntoView({ behavior:"smooth" });
});

/* ============================ HOME ============================ */
function storyCard(s){
  var saved = state.saved[s.id];
  return '<article class="card"><button data-open="'+s.id+'" style="all:unset;display:block;cursor:pointer;text-align:left">'
    + '<img src="'+s.img+'" alt="'+s.alt+'" loading="lazy"/>'
    + '<div class="body"><div class="cat">'+s.cat+'</div><h3>'+s.title+'</h3><p>'+s.dek+'</p></div></button>'
    + '<div class="body" style="padding-top:0"><div class="meta"><span>'+s.date+' · '+s.mins+' min read</span>'
    + '<button class="save-btn'+(saved?" saved":"")+'" data-save="'+s.id+'">'+(saved?"Saved ✓":"Save for later")+'</button></div></div></article>';
}
function renderHome(){
  $("coverSlot").innerHTML =
    '<button class="cover" data-open="cover-napa" aria-label="Read the cover story">'
    + '<img src="'+COVER.img+'" alt="'+COVER.alt+'"/>'
    + '<div class="overlay"><div class="kicker">Cover Story · '+COVER.cat+'</div><h1>'+COVER.title+'</h1><p>'+COVER.dek+'</p>'
    + '<div class="byline">'+COVER.author+' · '+COVER.date+' · '+COVER.mins+' min read</div></div></button>';
  var chips = ['<button class="chip'+(state.cat==="All"?" active":"")+'" data-chip="All">All stories</button>'];
  CATS.forEach(function(c){ chips.push('<button class="chip'+(state.cat===c?" active":"")+'" data-chip="'+c+'">'+c+'</button>'); });
  $("catChips").innerHTML = chips.join("");
  document.querySelectorAll("[data-chip]").forEach(function(b){ b.addEventListener("click", function(){ state.cat=b.dataset.chip; state.query=""; $("searchInput").value=""; renderHome(); setActiveNav(); }); });
  var list = STORIES.filter(function(s){
    if (state.query) return (s.title+" "+s.dek+" "+s.cat+" "+s.body.join(" ")).toLowerCase().indexOf(state.query) >= 0;
    return state.cat==="All" || s.cat===state.cat;
  });
  $("latestTitle").textContent = state.query ? 'Results for “'+state.query+'”' : (state.cat==="All" ? "Latest from the journal" : state.cat);
  $("storyGrid").innerHTML = list.map(storyCard).join("");
  $("noResults").style.display = list.length ? "none" : "block";
  bindCards($("storyGrid"));
  bindCards($("coverSlot"));
}
function bindCards(root){
  root.querySelectorAll("[data-open]").forEach(function(b){ b.addEventListener("click", function(){ openStory(b.dataset.open); }); });
  root.querySelectorAll("[data-save]").forEach(function(b){ b.addEventListener("click", function(){ toggleSave(b.dataset.save); }); });
}
function toggleSave(id){
  if (state.saved[id]) { delete state.saved[id]; toast("Removed from your reading list."); }
  else { state.saved[id] = true; toast("Saved for later — find it under Reading List."); }
  renderHome(); if (state.view==="reading") renderReading(); if (state.view==="story") openStory(currentStory, true);
}
function renderReading(){
  var list = STORIES.filter(function(s){ return state.saved[s.id]; });
  if (state.saved["cover-napa"]) list = [COVER].concat(list);
  $("readingGrid").innerHTML = list.map(storyCard).join("");
  $("readingEmpty").style.display = list.length ? "none" : "block";
  bindCards($("readingGrid"));
}

/* ============================ READER ============================ */
var currentStory = null;
function openStory(id, keepScroll){
  var s = id==="cover-napa" ? COVER : STORIES.filter(function(x){ return x.id===id; })[0];
  if (!s) return;
  currentStory = id;
  var body = s.body ? s.body : [
    "Drive into Napa in the late afternoon and the whole valley seems lit from inside — the Mayacamas going violet, the vine rows catching the last of the sun. It is a beautiful place to make wine. The interesting thing happening now is that a generation of growers has decided beauty is not enough: the wines have to taste like this ground, this season, this year, and nothing else.",
    "You can hear it in the cellar talk. Cover crops between the rows instead of bare dirt. Sheep doing the mowing. Picks made on acidity and nerve rather than ripeness alone, so the wines come in brighter and lower in alcohol than the valley's famous blockbusters. Several estates that once chased hundred-point scores now talk about soil carbon the way they used to talk about new oak.",
    "The wines are changing with the farming. Cabernet is still king, but it is a leaner, more articulate king — and around it, a supporting cast the valley once ripped out is returning: Chenin Blanc, Charbono, Valdigué, varieties planted here a century ago and suddenly right for a warmer century.",
    "None of this is nostalgia. It is a working valley recalculating what it grows and why, in full view of the most demanding audience in wine. Come at golden hour, taste widely, and argue about it over dinner. That, the growers will tell you, is exactly the point."];
  var saved = state.saved[id];
  $("readerSlot").innerHTML =
    '<img class="reader-hero" src="'+s.img+'" alt="'+s.alt+'"/>'
    + '<div class="reader"><div class="kicker" style="margin-top:20px">'+s.cat+'</div><h1>'+s.title+'</h1>'
    + '<p class="dek">'+s.dek+'</p>'
    + '<div class="meta"><span>'+s.author+'</span><span>'+s.date+'</span><span>'+s.mins+' min read</span>'
    + '<button class="save-btn'+(saved?" saved":"")+'" id="readerSave">'+(saved?"Saved ✓":"Save for later")+'</button></div>'
    + body.map(function(p){ return '<p class="body">'+p+'</p>'; }).join("")
    + '</div>';
  $("readerSave").addEventListener("click", function(){ toggleSave(id); });
  show("story");
  if (keepScroll) window.scrollTo(0, window.scrollY);
}
$("backBtn").addEventListener("click", function(){ renderHome(); show("home"); });

/* ============================ RECIPE SCALER ============================ */
function fmtQty(q){ if (Math.abs(q - Math.round(q)) < 0.02) return String(Math.round(q)); var f = (Math.round(q*4)/4); return String(f).replace(/\.?0+$/,""); }
function renderIng(){
  $("servOut").textContent = "Serves " + servings;
  $("ingList").innerHTML = INGREDIENTS.map(function(i){
    return "<li><b>" + fmtQty(i.qty * servings / 4) + (i.unit ? " " + i.unit : "") + "</b> " + i.name + "</li>";
  }).join("");
}
$("servUp").addEventListener("click", function(){ if (servings < 12) servings++; renderIng(); });
$("servDown").addEventListener("click", function(){ if (servings > 1) servings--; renderIng(); });
renderIng();

/* ============================ NEWSLETTER (placeholder) ============================ */
$("newsForm").addEventListener("submit", function(e){
  e.preventDefault();
  $("newsNote").textContent = "Thank you for your interest — but this public edition is a static page and cannot save your address, so nothing was stored or sent. Subscriptions open when the site moves to its hosted home; the private edition inside Muse takes subscribers today.";
  toast("Placeholder: subscriptions aren't collected on this static edition.");
});

/* ============================ VINTAGE CHART ============================ */
var REGIONS = [
  { name:"Napa Valley", country:"California, USA", base:8.1, style:"Cabernet-led", note:"Warm, generous vintages with deep fruit; the best age two decades or more." },
  { name:"Bordeaux", country:"France", base:8.0, style:"Cabernet & Merlot blends", note:"The benchmark for age-worthy blends — great years reward twenty years of patience." },
  { name:"Burgundy", country:"France", base:7.9, style:"Pinot Noir & Chardonnay", note:"Fragile, perfumed, and site-obsessed; top years are ethereal at fifteen years." },
  { name:"Champagne", country:"France", base:7.8, style:"Sparkling Chardonnay & Pinot", note:"Declared vintages only in strong years — which is why its floor stays high." },
  { name:"Piedmont", country:"Italy", base:7.9, style:"Nebbiolo (Barolo & Barbaresco)", note:"Famously slow to open; a great Barolo at twenty years is a life-list wine." },
  { name:"Tuscany", country:"Italy", base:7.8, style:"Sangiovese", note:"Brunello and Chianti Classico from warm, even years drink beautifully for decades." },
  { name:"Rioja", country:"Spain", base:7.7, style:"Tempranillo", note:"Released already aged by law and custom — gran reservas are ready on arrival." },
  { name:"Rhône Valley", country:"France", base:7.7, style:"Syrah & Grenache", note:"The north gives long-lived Syrah; the south, warmth and generosity sooner." },
  { name:"Mosel", country:"Germany", base:7.6, style:"Riesling", note:"Featherweight wines with marathon lives; great years cellar for thirty years." },
  { name:"Barossa Valley", country:"Australia", base:7.5, style:"Shiraz", note:"Powerful old-vine Shiraz; the best vintages run twenty years with ease." },
  { name:"Mendoza", country:"Argentina", base:7.4, style:"Malbec", note:"High-altitude Malbec — generous young, and the top years hold a decade." },
  { name:"Marlborough", country:"New Zealand", base:7.3, style:"Sauvignon Blanc", note:"Made to drink young and vivid; even great years peak inside five years." }
];
var GREAT = { "Bordeaux":{1982:10,1989:9,1990:10,2000:10,2005:9,2009:10,2010:10,2016:10,2019:9},
  "Napa Valley":{1994:9,1997:9,2001:9,2007:9,2013:10,2016:9,2018:9,1991:9},
  "Burgundy":{1990:10,1999:9,2005:10,2010:9,2015:9,2019:9},
  "Piedmont":{1989:10,1990:10,1996:9,2001:9,2010:10,2013:9,2016:10},
  "Tuscany":{1990:9,1997:9,1999:9,2006:9,2010:10,2015:9,2016:9},
  "Champagne":{1988:9,1990:10,1996:10,2002:9,2008:10,2012:9},
  "Rioja":{1994:10,2001:10,2004:9,2010:10,2015:9},
  "Mosel":{1990:9,2001:10,2005:9,2015:9,2019:10,2021:9},
  "Rhône Valley":{1990:10,1998:9,2007:9,2010:10,2015:9,2016:9},
  "Barossa Valley":{1990:9,1996:9,1998:10,2010:9,2012:9},
  "Mendoza":{2006:8,2010:9,2013:9,2019:9},
  "Marlborough":{2001:8,2007:8,2014:8,2020:9,2022:8} };
function scoreFor(rIdx, year){
  if (year === 2026) return null;
  var r = REGIONS[rIdx];
  var great = GREAT[r.name] || {};
  if (great[year]) return great[year];
  var h = Math.sin(rIdx * 127.1 + year * 311.7) * 43758.5453;
  var frac = h - Math.floor(h);
  var wave = Math.sin(year / 4.3 + rIdx * 1.7) * 0.7;
  var s = Math.round(r.base + wave + (frac - 0.5) * 2.4);
  return Math.max(3, Math.min(10, s));
}
function maturity(year, score){
  if (score === null) return { label:"Not yet rated", pct:0, advice:"The 2026 wines are still in barrel and fermenter — far too young to judge. We rate a vintage only once the wines can actually be tasted." };
  var age = 2026 - year;
  if (age <= 2) return { label:"Not yet ready", pct:15, advice:"Still youthful and tightly wound. Hold, or decant generously if you open one now." };
  if (age <= 6) return { label:"Approaching", pct:38, advice:"Opening up nicely. Enjoyable now with air, and still improving in the cellar." };
  if (age <= 14) return { label:"Drinking beautifully", pct:65, advice:"Right in the window — fruit and maturity in balance. Drink with confidence." };
  if (age <= 24) return { label:"At its peak", pct:88, advice:"Fully mature and giving everything it has. Drink now; do not wait for more." };
  if (score >= 8) return { label:"At its peak", pct:92, advice:"A great vintage holding magnificently. Drink soon and savor it." };
  return { label:"Past its peak", pct:100, advice:"Past its best for most bottles — cellar treasures may still charm, but drink without delay." };
}
var DECADES = [ [2026,2025,2024,2023,2022,2021,2020], [2019,2018,2017,2016,2015,2014,2013,2012,2011,2010],
  [2009,2008,2007,2006,2005,2004,2003,2002,2001,2000], [1999,1998,1997,1996,1995,1994,1993,1992,1991,1990],
  [1989,1988,1987,1986,1985,1984,1983,1982] ];
var DLABELS = ["2020s","2010s","2000s","1990s","1980s"];
function bandWord(s){ return s>=9 ? "Exceptional" : s>=7 ? "Excellent" : s>=5 ? "Good" : s>=3 ? "Modest" : "Weak"; }
function renderChart(){
  $("decadeTabs").innerHTML = DLABELS.map(function(d,i){
    return '<button class="chip'+(state.decade===i?" active":"")+'" data-dec="'+i+'">'+d+'</button>';
  }).join("");
  document.querySelectorAll("[data-dec]").forEach(function(b){ b.addEventListener("click", function(){ state.decade = +b.dataset.dec; renderChart(); }); });
  var years = DECADES[state.decade];
  var html = "<tr><th class='region'>Region</th>" + years.map(function(y){ return "<th>"+y+"</th>"; }).join("") + "</tr>";
  REGIONS.forEach(function(r, ri){
    html += "<tr><th class='region'>"+r.name+"</th>" + years.map(function(y){
      var s = scoreFor(ri, y);
      if (s === null) return '<td><button class="cell none" data-yr="'+y+'" data-cell="'+ri+':'+y+'" aria-label="'+r.name+' '+y+', not yet rated">–</button></td>';
      var sel = state.sel && state.sel.r===ri && state.sel.y===y ? " sel" : "";
      return '<td><button class="cell s'+s+sel+'" data-yr="'+y+'" data-cell="'+ri+':'+y+'" aria-label="'+r.name+' '+y+', rated '+s+' of 10">'+s+'</button></td>';
    }).join("") + "</tr>";
  });
  $("vtable").innerHTML = html;
  document.querySelectorAll("[data-cell]").forEach(function(b){
    b.addEventListener("click", function(){
      var parts = b.dataset.cell.split(":"); state.sel = { r:+parts[0], y:+parts[1] }; renderChart();
    });
  });
  if (!state.sel) state.sel = { r:0, y:2016 };
  var r = REGIONS[state.sel.r], s = scoreFor(state.sel.r, state.sel.y), m = maturity(state.sel.y, s);
  $("chartDetail").innerHTML =
    '<div class="kicker">Vintage detail</div><h3>'+r.name+' · '+state.sel.y+'</h3>'
    + '<p style="margin:2px 0 0;color:var(--ink-soft)">'+r.country+' — '+r.style+'</p>'
    + (s === null ? '<p style="margin-top:12px">Not yet rated.</p>'
      : '<div class="big">'+s+'<small> / 10 · '+bandWord(s)+'</small></div>')
    + '<div style="font-weight:700;margin-top:6px">'+m.label+'</div>'
    + '<div class="mbar"><i style="width:'+m.pct+'%"></i></div>'
    + '<p>'+m.advice+'</p><p>'+r.note+'</p>';
}
renderChart();
renderHome();

"use strict";
/* ============================ FARMERS ============================ */
var FREGIONS = [
 ["Bordeaux","France","Europe",44.84,-0.58],["Burgundy","France","Europe",47.05,4.85],["Champagne","France","Europe",49.08,3.95],
 ["Loire Valley","France","Europe",47.40,0.68],["Rhône Valley","France","Europe",44.10,4.80],["Provence","France","Europe",43.90,5.90],
 ["Alsace","France","Europe",48.08,7.35],["Piedmont","Italy","Europe",44.70,8.03],["Tuscany","Italy","Europe",43.40,11.02],
 ["Veneto","Italy","Europe",45.50,10.90],["Sicily (Etna)","Italy","Europe",37.75,14.99],["Rioja","Spain","Europe",42.30,-2.50],
 ["Ribera del Duero","Spain","Europe",41.60,-3.70],["Priorat","Spain","Europe",41.20,0.80],["Rías Baixas","Spain","Europe",42.40,-8.80],
 ["Douro Valley","Portugal","Europe",41.16,-7.78],["Dão","Portugal","Europe",40.50,-7.90],["Mosel","Germany","Europe",49.97,7.10],
 ["Rheingau","Germany","Europe",50.00,8.00],["Franken","Germany","Europe",49.80,10.16],["Wachau","Austria","Europe",48.37,15.43],
 ["Burgenland","Austria","Europe",47.85,16.70],["Tokaj","Hungary","Europe",48.15,21.35],["Istria","Croatia","Europe",45.27,13.70],
 ["Santorini","Greece","Europe",36.40,25.45],
 ["Napa Valley","United States","North America",38.50,-122.47],["Sonoma County","United States","North America",38.58,-122.82],
 ["Paso Robles","United States","North America",35.62,-120.69],["Santa Barbara County","United States","North America",34.60,-120.18],
 ["Willamette Valley","United States","North America",45.20,-123.10],["Walla Walla","United States","North America",46.06,-118.34],
 ["Finger Lakes","United States","North America",42.60,-76.87],["Niagara Peninsula","Canada","North America",43.25,-79.07],
 ["Okanagan Valley","Canada","North America",49.60,-119.50],
 ["Mendoza","Argentina","South America",-32.89,-68.85],["Salta (Calchaquí)","Argentina","South America",-26.07,-65.98],
 ["Maipo Valley","Chile","South America",-33.70,-70.75],["Colchagua Valley","Chile","South America",-34.65,-71.20],
 ["Casablanca Valley","Chile","South America",-33.30,-71.42],["Serra Gaúcha","Brazil","South America",-29.17,-51.50],
 ["Stellenbosch","South Africa","Africa",-33.93,18.86],["Swartland","South Africa","Africa",-33.40,18.75],["Constantia","South Africa","Africa",-34.03,18.42],
 ["Barossa Valley","Australia","Oceania",-34.53,138.95],["McLaren Vale","Australia","Oceania",-35.20,138.55],
 ["Margaret River","Australia","Oceania",-33.95,115.06],["Yarra Valley","Australia","Oceania",-37.75,145.35],
 ["Hawke's Bay","New Zealand","Oceania",-39.60,176.90],["Marlborough","New Zealand","Oceania",-41.50,173.90],
 ["Central Otago","New Zealand","Oceania",-45.10,169.20],
 ["Yamanashi","Japan","Asia",35.65,138.60],["Ningxia","China","Asia",38.30,106.10],["Nashik","India","Asia",20.00,73.78],
 ["Golan Heights","Israel","Asia",33.00,35.77],["Bekaa Valley","Lebanon","Asia",33.85,35.90],["Kakheti","Georgia","Asia",41.90,45.47]
];
var CONTINENTS = ["All","Europe","North America","South America","Africa","Oceania","Asia"];
var farmersStarted = false, farmCurrent = null, farmDetail = null;
var farmState = { unit:"F", cont:"All", query:"", sel:0 };
var WC = {0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Fog",51:"Light drizzle",53:"Drizzle",55:"Drizzle",56:"Freezing drizzle",57:"Freezing drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",66:"Freezing rain",67:"Freezing rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Light showers",81:"Showers",82:"Violent showers",85:"Snow showers",86:"Snow showers",95:"Thunderstorm",96:"Thunderstorm, hail",99:"Thunderstorm, hail"};
function wlabel(c){ return WC[c] || "—"; }
function compass(deg){ var d=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]; return d[Math.round(deg/22.5)%16]; }
function dT(f){ return farmState.unit==="F" ? Math.round(f) + "°F" : Math.round((f-32)*5/9) + "°C"; }
function dTval(f){ return farmState.unit==="F" ? f : (f-32)*5/9; }
function dW(mph){ return farmState.unit==="F" ? Math.round(mph) + " mph" : Math.round(mph*1.609) + " km/h"; }
function dWval(mph){ return farmState.unit==="F" ? mph : mph*1.609; }
function dRain(mm){ return farmState.unit==="F" ? (mm/25.4).toFixed(2)+" in" : mm.toFixed(1)+" mm"; }

/* ---------- weather source fallback: Open-Meteo first, MET Norway second ----------
   Internal readings are stored in °F / mph (as Open-Meteo was asked for them).
   MET Norway publishes °C and m/s, and does NOT publish soil temperature or gusts,
   so those are converted here and soil/gusts are never invented in fallback mode. */
var farmSource = "openmeteo", farmDetailSource = "openmeteo", farmSoilCache = {};
/* ---------- once-a-day browser store ----------
   Farmers readings are kept in this browser so the page fetches at most once a
   day instead of on every load. Anything served from the store is always labeled
   with the date and time it was stored, never presented as current; a stored
   reading more than two days old is never shown — it reads Unavailable again. */
var FARM_DAY = 24 * 3600 * 1000, FARM_MAX = 48 * 3600 * 1000;
var farmStored = null, farmCurrentFromStore = false, farmCurrentStoredAt = 0, farmDetailStoredAt = 0;
var FARM_CURRENT_KEY = "ttrFarmCurrentV1", FARM_DETAIL_KEY = "ttrFarmDetailV1", FARM_SOIL_KEY = "ttrFarmSoilV1";
function lsGet(k){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
function lsSet(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function fmtStamp(ms){
  var d = new Date(ms);
  return d.toLocaleDateString(undefined, { month:"short", day:"numeric", year:"numeric" }) + ", "
    + d.toLocaleTimeString(undefined, { hour:"numeric", minute:"2-digit" });
}
function fmtTimeStr(s){
  if (!s) return "";
  var mo = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var hh = +s.slice(11, 13), h12 = hh % 12 || 12, ap = hh >= 12 ? "PM" : "AM";
  return mo[(+s.slice(5, 7)) - 1] + " " + (+s.slice(8, 10)) + ", " + h12 + ":" + s.slice(14, 16) + " " + ap;
}
function detailStoreGet(i){ var all = lsGet(FARM_DETAIL_KEY); return (all && all[i]) ? all[i] : null; }
function detailStorePut(i, data){
  var all = lsGet(FARM_DETAIL_KEY) || {};
  all[i] = { t: Date.now(), data: data };
  var keys = Object.keys(all).sort(function(a, b){ return all[b].t - all[a].t; });
  keys.slice(8).forEach(function(k){ delete all[k]; });
  lsSet(FARM_DETAIL_KEY, all);
}
var savedSoil = lsGet(FARM_SOIL_KEY);
if (savedSoil) farmSoilCache = savedSoil;
function fetchJSON(url, ms){
  return new Promise(function(resolve, reject){
    var ctl = ("AbortController" in window) ? new AbortController() : null;
    var timer = setTimeout(function(){ if (ctl) ctl.abort(); reject(new Error("timeout")); }, ms || 12000);
    fetch(url, ctl ? { signal: ctl.signal } : {}).then(function(r){
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }).then(function(j){ clearTimeout(timer); resolve(j); }).catch(function(e){ clearTimeout(timer); reject(e); });
  });
}
function cToF(c){ return c == null ? null : c * 9 / 5 + 32; }
function msToMph(v){ return v == null ? null : v * 2.23694; }
function metCode(sym){
  if (!sym) return 2;
  var s = sym.replace(/_(day|night|polartwilight)$/, "");
  if (s.indexOf("thunder") >= 0) return 95;
  if (s.indexOf("snow") >= 0) return s.indexOf("heavy") >= 0 ? 75 : (s.indexOf("light") >= 0 ? 71 : 73);
  if (s.indexOf("sleet") >= 0) return 61;
  if (s.indexOf("rain") >= 0) return s.indexOf("heavy") >= 0 ? 65 : (s.indexOf("light") >= 0 ? 61 : 63);
  if (s === "clearsky") return 0;
  if (s === "fair") return 1;
  if (s === "partlycloudy") return 2;
  if (s === "cloudy") return 3;
  if (s === "fog") return 45;
  return 2;
}
function metSymbol(entry, which){
  var d = entry.data || {};
  var b = d[which] || d.next_1_hours || d.next_6_hours || d.next_12_hours;
  return b && b.summary ? b.summary.symbol_code : "";
}
function metPrecip(entry, stepH){
  var d = entry.data || {};
  if (stepH <= 1.5 && d.next_1_hours && d.next_1_hours.details && d.next_1_hours.details.precipitation_amount != null) return d.next_1_hours.details.precipitation_amount;
  if (d.next_6_hours && d.next_6_hours.details && d.next_6_hours.details.precipitation_amount != null) return d.next_6_hours.details.precipitation_amount;
  if (d.next_1_hours && d.next_1_hours.details && d.next_1_hours.details.precipitation_amount != null) return d.next_1_hours.details.precipitation_amount;
  return 0;
}
function metCurrent(entry){
  var det = entry.data.instant.details;
  return {
    time: entry.time.slice(0, 16),
    temperature_2m: cToF(det.air_temperature),
    relative_humidity_2m: det.relative_humidity,
    weather_code: metCode(metSymbol(entry, "next_1_hours")),
    wind_speed_10m: msToMph(det.wind_speed),
    wind_direction_10m: det.wind_from_direction,
    wind_gusts_10m: det.wind_speed_of_gust == null ? null : msToMph(det.wind_speed_of_gust)
  };
}
function metUrl(r){ return "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + r[3] + "&lon=" + r[4]; }
function fetchMetCurrentAll(done){
  var out = [];
  for (var z = 0; z < FREGIONS.length; z++) out.push(null);
  var idx = 0, BATCH = 8;
  function step(){
    if (idx >= FREGIONS.length){ done(out); return; }
    var slice = [];
    for (var k = idx; k < Math.min(idx + BATCH, FREGIONS.length); k++) slice.push(k);
    idx += BATCH;
    Promise.all(slice.map(function(i){
      return fetchJSON(metUrl(FREGIONS[i]), 15000).then(function(j){
        var ts = j && j.properties ? j.properties.timeseries : null;
        if (ts && ts.length) out[i] = { current: metCurrent(ts[0]) };
      }).catch(function(){});
    })).then(step);
  }
  step();
}
function buildMetDetail(j){
  var ts = j.properties.timeseries;
  var times = [], temps = [], winds = [], soils0 = [], soils6 = [];
  var dayMap = {}, dayOrder = [];
  ts.forEach(function(e, ei){
    var det = e.data.instant.details;
    var t = e.time.slice(0, 16), tv = cToF(det.air_temperature);
    times.push(t); temps.push(tv); winds.push(msToMph(det.wind_speed)); soils0.push(null); soils6.push(null);
    var day = t.slice(0, 10);
    var stepH = ei + 1 < ts.length ? (new Date(ts[ei + 1].time) - new Date(e.time)) / 3600000 : 6;
    if (!(stepH > 0)) stepH = 6;
    if (!dayMap[day]){ dayMap[day] = { max: tv, min: tv, precip: 0, code: metCode(metSymbol(e, "next_6_hours")) }; dayOrder.push(day); }
    var dm = dayMap[day];
    if (tv > dm.max) dm.max = tv;
    if (tv < dm.min) dm.min = tv;
    dm.precip += metPrecip(e, stepH);
    if (t.slice(11, 13) === "12") dm.code = metCode(metSymbol(e, "next_6_hours"));
  });
  var daily = { time: [], weather_code: [], temperature_2m_max: [], temperature_2m_min: [], precipitation_sum: [] };
  dayOrder.slice(0, 7).forEach(function(day){
    daily.time.push(day);
    daily.weather_code.push(dayMap[day].code);
    daily.temperature_2m_max.push(dayMap[day].max);
    daily.temperature_2m_min.push(dayMap[day].min);
    daily.precipitation_sum.push(dayMap[day].precip);
  });
  return { _source: "met", current: metCurrent(ts[0]),
    hourly: { time: times, temperature_2m: temps, soil_temperature_0cm: soils0, soil_temperature_6cm: soils6, wind_speed_10m: winds },
    daily: daily };
}
function cacheSoil(i, j){
  try {
    var c = j.current, h = j.hourly, nowH = c.time.slice(0, 13);
    var hi = h.time.findIndex(function(t){ return t.slice(0, 13) === nowH; });
    if (hi < 0) hi = 0;
    var s0 = h.soil_temperature_0cm[hi], s6 = h.soil_temperature_6cm[hi];
    if (s0 != null || s6 != null){ farmSoilCache[i] = { soil0: s0, soil6: s6, time: c.time, t: Date.now() }; lsSet(FARM_SOIL_KEY, farmSoilCache); }
  } catch (e) {}
}

function startFarmers(){
  farmersStarted = true;
  $("contChips").innerHTML = CONTINENTS.map(function(c){
    return '<button class="chip'+(farmState.cont===c?" active":"")+'" data-cont="'+c+'">'+c+'</button>';
  }).join("");
  document.querySelectorAll("[data-cont]").forEach(function(b){ b.addEventListener("click", function(){ farmState.cont = b.dataset.cont; startFarmersChips(); renderFarmGrid(); }); });
  fetchFarmCurrent();
}
function startFarmersChips(){
  document.querySelectorAll("[data-cont]").forEach(function(b){ b.classList.toggle("active", b.dataset.cont===farmState.cont); });
}
function fetchFarmCurrent(){
  farmStored = lsGet(FARM_CURRENT_KEY);
  if (farmStored && farmStored.data && (Date.now() - farmStored.t) < FARM_DAY){
    /* Stored less than a day ago — serve it, labeled with its stored time, and fetch nothing. */
    farmCurrent = farmStored.data;
    farmSource = farmStored.source || "openmeteo";
    farmCurrentFromStore = true;
    farmCurrentStoredAt = farmStored.t;
    $("farmStatus").textContent = farmSource === "met"
      ? "Readings via MET Norway · stored " + fmtStamp(farmStored.t) + " · this browser refreshes them once a day · tap any region for its full week. MET Norway does not publish soil temperature, so soil readings show the last stored Open-Meteo value where we have one, or read unavailable."
      : "Readings from Open-Meteo · stored " + fmtStamp(farmStored.t) + " · this browser refreshes them once a day · tap any region for its full week.";
    renderFarmGrid();
    selectFarm(farmState.sel);
    return;
  }
  var lats = FREGIONS.map(function(r){ return r[3]; }).join(",");
  var lons = FREGIONS.map(function(r){ return r[4]; }).join(",");
  var url = "https://api.open-meteo.com/v1/forecast?latitude="+lats+"&longitude="+lons
    + "&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m"
    + "&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto";
  fetchJSON(url, 12000).then(function(j){
    var arr = Array.isArray(j) ? j : [j];
    if (!arr[0] || !arr[0].current) throw new Error("Open-Meteo returned no readings");
    farmCurrent = arr;
    farmSource = "openmeteo";
    farmCurrentFromStore = false;
    farmStored = { t: Date.now(), source: "openmeteo", data: arr };
    lsSet(FARM_CURRENT_KEY, farmStored);
    var t = farmCurrent[0].current.time.replace("T"," ");
    $("farmStatus").textContent = "Live readings from Open-Meteo · updated " + t + " (first region's local time) · tap any region for its full week.";
    renderFarmGrid();
    selectFarm(farmState.sel);
  }).catch(function(){
    /* Open-Meteo unreachable — fall back to MET Norway for the air readings. */
    fetchMetCurrentAll(function(out){
      var got = out.filter(function(x){ return x; });
      if (!got.length){
        /* Both sources failed — serve the last stored readings (up to two days
           old), labeled with their date and time, never as current conditions. */
        if (farmStored && farmStored.data && (Date.now() - farmStored.t) <= FARM_MAX){
          farmCurrent = null;
          farmSource = "stored";
          $("farmStatus").textContent = "Live readings could not be reached just now — Open-Meteo and MET Norway are both unavailable, so the cards below show the last stored readings, from " + fmtStamp(farmStored.t) + ". They are not current conditions; this browser will try again on its next daily refresh.";
          renderFarmGrid();
          selectFarm(farmState.sel);
          return;
        }
        farmCurrent = null;
        farmSource = "none";
        $("farmStatus").textContent = "Live readings could not be reached just now — Open-Meteo may be briefly unavailable. The region list below is complete; reopen this page in a little while to load conditions.";
        renderFarmGrid();
        return;
      }
      farmCurrent = out;
      farmSource = "met";
      farmCurrentFromStore = false;
      farmStored = { t: Date.now(), source: "met", data: out };
      lsSet(FARM_CURRENT_KEY, farmStored);
      var t = got[0].current.time.replace("T"," ");
      $("farmStatus").textContent = "Live readings via MET Norway · Open-Meteo could not be reached, so air temperature, wind, humidity and rain are via MET Norway · updated " + t + " UTC (first region) · tap any region for its full week. MET Norway does not publish soil temperature, so soil readings show the last stored Open-Meteo value where we have one (kept up to two days, labeled with its date and time), or read unavailable.";
      renderFarmGrid();
      selectFarm(farmState.sel);
    });
  });
}
function farmCard(i){
  var r = FREGIONS[i], c = farmCurrent && farmCurrent[i] ? farmCurrent[i].current : null;
  var storedAt = 0;
  if (c && farmCurrentFromStore) storedAt = farmCurrentStoredAt;
  if (!c && farmStored && farmStored.data && farmStored.data[i] && farmStored.data[i].current && (Date.now() - farmStored.t) <= FARM_MAX){
    /* No live reading for this region — show its last stored one, labeled with its age. */
    c = farmStored.data[i].current;
    storedAt = farmStored.t;
  }
  var sel = farmState.sel===i ? " sel" : "";
  var rows = c
    ? '<div class="row"><span>'+wlabel(c.weather_code)+'</span><b>'+dT(c.temperature_2m)+'</b></div>'
      + '<div class="row"><span>Wind '+compass(c.wind_direction_10m)+'</span><b>'+dW(c.wind_speed_10m)+'</b></div>'
      + (storedAt ? '<div class="snote">Last stored reading · '+fmtStamp(storedAt)+'</div>' : '')
    : '<div class="row"><span>Reading unavailable</span><b>—</b></div>';
  return '<button class="fcard'+sel+'" data-farm="'+i+'"><h3>'+r[0]+'</h3><div class="ctry">'+r[1]+' · '+r[2]+'</div>'+rows+'</button>';
}
function renderFarmGrid(){
  var q = farmState.query;
  var idx = FREGIONS.map(function(r,i){ return i; }).filter(function(i){
    var r = FREGIONS[i];
    if (farmState.cont!=="All" && r[2]!==farmState.cont) return false;
    if (q && (r[0]+" "+r[1]).toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
  $("farmGrid").innerHTML = idx.map(farmCard).join("");
  $("farmEmpty").style.display = idx.length ? "none" : "block";
  document.querySelectorAll("[data-farm]").forEach(function(b){ b.addEventListener("click", function(){ selectFarm(+b.dataset.farm); }); });
}
function fillNulls(arr){ var last = null, out = []; for (var i=0;i<arr.length;i++){ if (arr[i]===null || arr[i]===undefined){ out.push(last); } else { last = arr[i]; out.push(arr[i]); } } var nxt=null; for (var j=out.length-1;j>=0;j--){ if (out[j]===null){ out[j]=nxt; } else nxt=out[j]; } return out; }
function selectFarm(i){
  farmState.sel = i;
  document.querySelectorAll("[data-farm]").forEach(function(b){ b.classList.toggle("sel", +b.dataset.farm===i); });
  var r = FREGIONS[i];
  var dstored = detailStoreGet(i);
  if (dstored && dstored.data && (Date.now() - dstored.t) < FARM_DAY){
    /* This region's week was stored less than a day ago — serve it without fetching. */
    farmDetail = dstored.data;
    farmDetailSource = dstored.data._source || "openmeteo";
    farmDetailStoredAt = dstored.t;
    renderFarmDetail();
    $("farmDetail").scrollIntoView({ behavior:"smooth", block:"nearest" });
    return;
  }
  $("farmDetail").innerHTML = '<div class="fdetail"><h2>'+r[0]+'</h2><p class="sub">'+r[1]+' · '+r[2]+' — loading the week…</p></div>';
  $("farmDetail").scrollIntoView({ behavior:"smooth", block:"nearest" });
  var url = "https://api.open-meteo.com/v1/forecast?latitude="+r[3]+"&longitude="+r[4]
    + "&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m"
    + "&hourly=temperature_2m,soil_temperature_0cm,soil_temperature_6cm,wind_speed_10m"
    + "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum"
    + "&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=7";
  fetchJSON(url, 12000).then(function(j){
    if (farmState.sel !== i) return;
    if (!j || !j.current || !j.hourly || !j.daily) throw new Error("Open-Meteo returned no detail");
    j._source = "openmeteo";
    farmDetail = j;
    farmDetailSource = "openmeteo";
    farmDetailStoredAt = 0;
    cacheSoil(i, j);
    detailStorePut(i, j);
    renderFarmDetail();
  }).catch(function(){
    if (farmState.sel !== i) return;
    /* Open-Meteo unreachable for this region — fall back to MET Norway. */
    fetchJSON(metUrl(r), 15000).then(function(mj){
      if (farmState.sel !== i) return;
      if (!mj || !mj.properties || !mj.properties.timeseries || !mj.properties.timeseries.length) throw new Error("MET Norway returned no detail");
      farmDetail = buildMetDetail(mj);
      farmDetailSource = "met";
      farmDetailStoredAt = 0;
      detailStorePut(i, farmDetail);
      renderFarmDetail();
    }).catch(function(){
      if (farmState.sel !== i) return;
      if (dstored && dstored.data && (Date.now() - dstored.t) <= FARM_MAX){
        /* Both sources failed — show this region's last stored week, labeled with its age. */
        farmDetail = dstored.data;
        farmDetailSource = dstored.data._source || "openmeteo";
        farmDetailStoredAt = dstored.t;
        renderFarmDetail();
        return;
      }
      $("farmDetail").innerHTML = '<div class="fdetail"><h2>'+r[0]+'</h2><p class="sub">'+r[1]+' · '+r[2]+'</p><p>The detailed forecast could not be loaded just now. The card readings above are the latest available.</p></div>';
    });
  });
}
function renderFarmDetail(){
  var j = farmDetail, r = FREGIONS[farmState.sel], c = j.current, h = j.hourly;
  var isMet = j._source === "met";
  var nowH = c.time.slice(0,13);
  var hi = h.time.findIndex(function(t){ return t.slice(0,13) === nowH; }); if (hi < 0) hi = 0;
  var soil0, soil6, soilCached = false, soilStamp = "";
  var cached = farmSoilCache[farmState.sel];
  if (cached && cached.t && (Date.now() - cached.t) > FARM_MAX) cached = null;
  if (isMet){
    /* MET Norway does not publish soil temperature: use only the last stored
       Open-Meteo value (kept up to two days), labeled with its date and time — never a guess. */
    soil0 = cached ? cached.soil0 : null;
    soil6 = cached ? cached.soil6 : null;
    soilCached = !!(cached && (soil0 != null || soil6 != null));
    if (soilCached) soilStamp = fmtTimeStr(cached.time);
  } else {
    soil0 = h.soil_temperature_0cm[hi];
    soil6 = h.soil_temperature_6cm[hi];
  }
  function soilVal(v){
    if (v == null) return '<span style="font-size:15px">Unavailable</span>';
    return dT(v) + (soilCached ? ' <small>last stored' + (soilStamp ? ' · ' + soilStamp : ' reading') + '</small>' : '');
  }
  /* If this source left a figure blank, fall back to the region's last stored
     detail reading (up to two days old), labeled — never presented as current. */
  var sCur = null, sCurStamp = "";
  var dsPeek = detailStoreGet(farmState.sel);
  if (dsPeek && dsPeek.data && dsPeek.data.current && (!farmDetailStoredAt || dsPeek.t !== farmDetailStoredAt) && (Date.now() - dsPeek.t) <= FARM_MAX){
    sCur = dsPeek.data.current;
    sCurStamp = fmtStamp(dsPeek.t);
  }
  var days = j.daily.time.map(function(d, k){
    var dt = new Date(d + "T12:00:00");
    var dn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dt.getDay()];
    return '<div class="day"><div class="dn">'+(k===0?"Today":dn)+'</div><div>'+wlabel(j.daily.weather_code[k])+'</div>'
      + '<div><span class="hi">'+dT(j.daily.temperature_2m_max[k])+'</span> · <span class="lo">'+dT(j.daily.temperature_2m_min[k])+'</span></div>'
      + '<div class="rn">Rain '+dRain(j.daily.precipitation_sum[k]||0)+'</div></div>';
  }).join("");
  var sourceNote = isMet
    ? '<p style="color:var(--ink-soft);font-size:14px;margin:0 0 8px">Open-Meteo could not be reached, so the air temperature, wind, humidity and rain here are <b>via MET Norway</b>. MET Norway does not publish soil temperature — the soil figures show the last stored Open-Meteo reading where we have one (kept up to two days, labeled with its date and time), and otherwise read unavailable.</p>'
    : '';
  var storedNote = farmDetailStoredAt
    ? '<p style="color:var(--ink-soft);font-size:14px;margin:0 0 8px">Showing this region\u2019s last stored reading, stored ' + fmtStamp(farmDetailStoredAt) + '. Readings refresh once a day, so this is not a live reading.</p>'
    : '';
  var legend = isMet
    ? '<div class="chart-legend"><span><i style="background:#b8892e"></i>Air temperature</span><span><i style="background:#3f6d8e"></i>Wind</span><span>Soil lines unavailable via MET Norway</span></div>'
    : '<div class="chart-legend"><span><i style="background:#b8892e"></i>Air temperature</span><span><i style="background:#d1603d"></i>Soil · surface</span><span><i style="background:#4a7d4f"></i>Soil · 6 cm down</span><span><i style="background:#3f6d8e"></i>Wind</span></div>';
  $("farmDetail").innerHTML =
    '<div class="fdetail"><h2>'+r[0]+'</h2><p class="sub">'+r[1]+' · '+r[2]+' · '+wlabel(c.weather_code)+' · reading at '+c.time.replace("T"," ")+(isMet ? ' UTC · via MET Norway' : ' local')+'</p>'
    + sourceNote + storedNote
    + '<div class="statgrid">'
    + '<div class="stat"><div class="lab">Air temp</div><div class="val">'+dT(c.temperature_2m)+'</div></div>'
    + '<div class="stat"><div class="lab">Wind</div><div class="val">'+dW(c.wind_speed_10m)+' <small>'+compass(c.wind_direction_10m)+'</small></div></div>'
    + '<div class="stat"><div class="lab">Gusts</div><div class="val">'+(c.wind_gusts_10m != null ? dW(c.wind_gusts_10m) : (sCur && sCur.wind_gusts_10m != null ? dW(sCur.wind_gusts_10m)+' <small>last stored · '+sCurStamp+'</small>' : '<span style="font-size:15px">Unavailable</span>'))+'</div></div>'
    + '<div class="stat"><div class="lab">Soil · surface</div><div class="val">'+soilVal(soil0)+'</div></div>'
    + '<div class="stat"><div class="lab">Soil · 6 cm down</div><div class="val">'+soilVal(soil6)+'</div></div>'
    + '<div class="stat"><div class="lab">Humidity</div><div class="val">'+(c.relative_humidity_2m != null ? Math.round(c.relative_humidity_2m)+'<small>%</small>' : (sCur && sCur.relative_humidity_2m != null ? Math.round(sCur.relative_humidity_2m)+'<small>%</small> <small>last stored · '+sCurStamp+'</small>' : '<span style="font-size:15px">Unavailable</span>'))+'</div></div>'
    + '<div class="stat"><div class="lab">Rain today</div><div class="val" style="font-size:17px;padding-top:2px">'+dRain(j.daily.precipitation_sum[0]||0)+'</div></div>'
    + '</div>'
    + '<div class="days">'+days+'</div>'
    + '<div class="chartbox"><h3>'+(isMet ? 'The week in two lines — via MET Norway' : 'The week in four lines')+'</h3>'
    + legend
    + '<div class="chart-rel"><div id="weekChartSlot"></div><div id="chartTip"></div></div>'
    + '<p style="color:var(--ink-soft);font-size:12.5px;margin:2px 0 0">'+(isMet ? 'Air temperature and wind via MET Norway for the week ahead. Temperatures read on the left axis, wind on the right. Hover or tap a point for the exact figures.' : 'A reading every 3 hours for 7 days. Temperatures read on the left axis, wind on the right. Hover or tap a point for the exact figures.')+'</p></div>'
    + '</div>';
  drawChart(j);
}
function drawChart(j){
  var h = j.hourly, n = Math.min(h.time.length, 168);
  var pts = [];
  for (var i=0;i<n;i+=3) pts.push(i);
  var air = fillNulls(h.temperature_2m), s0 = fillNulls(h.soil_temperature_0cm), s6 = fillNulls(h.soil_temperature_6cm), wd = fillNulls(h.wind_speed_10m);
  var hasS0 = s0.some(function(v){ return v != null; }), hasS6 = s6.some(function(v){ return v != null; });
  var tVals = [], wVals = [];
  pts.forEach(function(i){ tVals.push(dTval(air[i])); if (hasS0 && s0[i] != null) tVals.push(dTval(s0[i])); if (hasS6 && s6[i] != null) tVals.push(dTval(s6[i])); wVals.push(dWval(wd[i])); });
  var tMin = Math.floor(Math.min.apply(null,tVals)-3), tMax = Math.ceil(Math.max.apply(null,tVals)+3);
  var wMax = Math.ceil(Math.max.apply(null,wVals)*1.15) || 10;
  var narrow = window.innerWidth <= 640;
  var W = narrow ? 430 : 760, H = narrow ? 215 : 175, L = narrow ? 38 : 46, R = narrow ? 38 : 46, T = 10, B = 26, iw = W-L-R, ih = H-T-B;
  var fsAxis = narrow ? 14 : 11, fsDay = narrow ? 14 : 11.5, dotR = narrow ? 14 : 9;
  function X(k){ return L + iw * k/(pts.length-1); }
  function YT(v){ return T + ih * (1 - (v-tMin)/(tMax-tMin)); }
  function YW(v){ return T + ih * (1 - v/wMax); }
  function line(get, yf, color){
    var d = pts.map(function(idx,k){ return (k===0?"M":"L") + X(k).toFixed(1) + "," + yf(get(idx)).toFixed(1); }).join(" ");
    return '<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="2.2" stroke-linejoin="round"/>';
  }
  var grid = "";
  for (var g=0; g<=4; g++){
    var v = tMin + (tMax-tMin)*g/4, y = YT(v);
    grid += '<line x1="'+L+'" x2="'+(W-R)+'" y1="'+y+'" y2="'+y+'" stroke="var(--line)" stroke-width="1"/>'
      + '<text x="'+(L-6)+'" y="'+(y+4)+'" text-anchor="end" font-size="'+fsAxis+'" fill="var(--ink-soft)">'+Math.round(v)+'°</text>'
      + '<text x="'+(W-R+6)+'" y="'+(y+4)+'" font-size="'+fsAxis+'" fill="var(--ink-soft)">'+Math.round(wMax*g/4)+'</text>';
  }
  var dayLab = "";
  for (var d=0; d<7; d++){
    var k0 = Math.round(d*(pts.length-1)/7), dt = new Date(h.time[pts[k0]].slice(0,10)+"T12:00:00");
    dayLab += '<text x="'+X(k0)+'" y="'+(H-8)+'" font-size="'+fsDay+'" fill="var(--ink-soft)">'+["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][dt.getDay()]+'</text>';
    if (d>0) dayLab += '<line x1="'+X(k0)+'" x2="'+X(k0)+'" y1="'+T+'" y2="'+(T+ih)+'" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>';
  }
  var dots = pts.map(function(idx,k){
    return '<circle class="cp" data-k="'+k+'" cx="'+X(k)+'" cy="'+YT(dTval(air[idx]))+'" r="'+dotR+'" fill="transparent"/>';
  }).join("");
  $("weekChartSlot").innerHTML = '<svg id="weekChart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Seven-day chart of air temperature, soil temperatures and wind">'
    + grid + dayLab
    + line(function(i){ return dTval(air[i]); }, YT, "#b8892e")
    + (hasS0 ? line(function(i){ return dTval(s0[i]); }, YT, "#d1603d") : "")
    + (hasS6 ? line(function(i){ return dTval(s6[i]); }, YT, "#4a7d4f") : "")
    + line(function(i){ return dWval(wd[i]); }, YW, "#3f6d8e")
    + dots + '</svg>';
  var tip = $("chartTip"), svg = $("weekChart");
  svg.querySelectorAll(".cp").forEach(function(dot){
    function showTip(){
      var k = +dot.dataset.k, idx = pts[k], t = h.time[idx];
      tip.innerHTML = "<b>"+t.slice(5,10)+" · "+t.slice(11,16)+"</b><br/>Air "+dT(air[idx])+(hasS0 && s0[idx] != null ? " · Soil "+dT(s0[idx])+" / "+dT(s6[idx]) : " · Soil unavailable")+"<br/>Wind "+dW(wd[idx]);
      var rel = svg.parentElement.getBoundingClientRect(), pt = dot.getBoundingClientRect();
      tip.style.left = Math.max(0, Math.min(rel.width-150, pt.left - rel.left - 60)) + "px";
      tip.style.top = (pt.top - rel.top - 78) + "px";
      tip.style.opacity = "1";
    }
    dot.addEventListener("mouseenter", showTip);
    dot.addEventListener("click", showTip);
    dot.addEventListener("mouseleave", function(){ tip.style.opacity = "0"; });
  });
}
$("farmSearch").addEventListener("input", function(){ farmState.query = $("farmSearch").value.trim().toLowerCase(); if (farmCurrent!==null || true) renderFarmGrid(); });
$("unitF").addEventListener("click", function(){ farmState.unit="F"; $("unitF").classList.add("active"); $("unitC").classList.remove("active"); renderFarmGrid(); if (farmDetail) renderFarmDetail(); });
$("unitC").addEventListener("click", function(){ farmState.unit="C"; $("unitC").classList.add("active"); $("unitF").classList.remove("active"); renderFarmGrid(); if (farmDetail) renderFarmDetail(); });
/* Redraw the week chart at the right scale when the phone rotates or the window resizes */
var rszT = null, lastNarrow = window.innerWidth <= 640;
window.addEventListener("resize", function(){
  var nowNarrow = window.innerWidth <= 640;
  if (nowNarrow === lastNarrow) return;
  lastNarrow = nowNarrow;
  clearTimeout(rszT);
  rszT = setTimeout(function(){ if (farmDetail && state.view === "farmers") drawChart(farmDetail); }, 200);
});
