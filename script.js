const text = [
    `The railway cages the calculator. A downright spectacular contests the captain. The tremendous 
sector dresses. A footnote seals an easy whoop opposite an economics.
 The concluding universal breaks a musical buffer. The popular fork gloves the premise. Why can't the supported weapon accustom a nominate icon? The necessary stroke rings the campaign. A cassette overflows in an impaired pill. Opposite an irony blinks a skin tag. His cunning requisite stares. When will a theft march?`,

    `The skilled pencil twists underneath the jail. The bitmap civilizes a popular pan. Should the verbatim author read throughout the air? On top of the logo dresses any distinctive riot. 
 A pushed glow soles the salt wine. The fleet needle chooses beside a communist. Underneath a sarcasm triumphs a pale subway. The purge runs the grim recipe opposite the cheat.`,

    `The emphasized baggage renders the money across my bad silence. The grace exists below the laughing dye. Over a dispute punts the two throughput. The imposing paragraph distracts the independence. The center opinion bolts around the literal chaos. A stream starts a suited forecast after the intellect. The screw illustrates our sensible threat. A censored memory hunts the need next to the forbidding venture.`,

    `
    The acute rat gasps against the first taxpayer. Will the sweated analysis joke across a release? The shame strikes across the moaning boss. The stagger watches the defective afternoon. 
    Every synthesis poses as the disco. The hooked insult dishes the essence. How will our bowl prize our unsuspecting island? A culture shapes a dustbin inside the district wild. An exam grants a blocked misery. The cinema needles the theme.`,

    `
    Why can't the converted campaign spike the dance? Why won't the wanting fuller blink? Will an earlier cupboard wage the raid? Can a mist trail? The tangent crawls inside a sure chancellor. Our tentative center prepares the spectacular inside the memorable appearance. Why won't the criminal alternative comprise the kid? How can the cloth progress around the scaled decade? Our average moves the fond onion beside the geology. Each unwanted moron bows. This representative cheats opposite a brother fashion. Next to the sand hesitates our diplomatic library.`,

    `
    The union forests the legitimate soup over a country. Can a thorough mistake inflict the starter? The designing door progresses. The scotch frown clogs inside the overnight differential. Every listed dread graduates. 
    The seen galaxy yields the gift. The observer spikes the incoming coffee. The trying glove surfaces near the family. The beard talks before the disclaimer!`,

    `
    The fume discusses a past across the bending professional. When can the chart farm? The unhelpful breach faints under the advice. The quibble rests! A barrister sings against a hangover. The oil pronounces the once noble inside its battle. 
    Can the conference suffer? The nut flowers her public pill. The leaded ploy swims beside a hazy plotter. The sympathy moans opposite the cumulative insight. A leak interrupts the up pump. Another fine scientist steams.`,

    `
    How will a penguin chalk? The unifying criminal betters my sky outside a loaded diary. Another paste expires! The vocal despairs! The fuller objects to the result with the strategic civilian. The paperback moans above a fountain. 
    Every glue mutters past a spaced height. The then sphere shines. Will every conference distance a cook? The dirt girl skips the alive luxury. The consecutive annoyance foams without the stamp.`,

    `
    The trigger invades the breath. The look shelters the justifiable mint in the ideology. A childhood assesses the flipping color. The obscure opera groans within an immediate cook. The local telephone tubes his capitalist verse. The accusing problem purges. 
    A developing face waves a creep past the spiritual magazine. My cloud bushes a worn lifetime. A garbage orbits. A universal bores into the unrelated name.`

];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = parseInt(amount.value)
    const random = Math.floor(Math.random() * text.length);

    //empty 
    //-1
    // > 9
    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class-"result">${text[random]}</p>`
    }
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map((item) => `<p class="result">${item}</p>`).join("")
        result.innerHTML = tempText;
    }
})
