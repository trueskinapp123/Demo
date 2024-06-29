const questions = {
    a: [
        "Do you experience flaking or rough patches on your skin?",
        "Does your skin feel tight or uncomfortable, especially after cleansing? ",
        "Does your skin react easily to changes in weather (cold, wind)?",
        "Does your skin break easily or become red or inflamed when using certain skincare products?"

    ],
    b: [
        "Does your skin feel tight or uncomfortable, especially after cleansing?",
        "Would you describe your pores as more visible in the T-zone (forehead, nose, chin) compared to your cheeks?",
        "Does your skin feel oily or greasy throughout the day, even after cleansing?",
        "After washing your face your skin feels tight momentarily and the oily again?"
    ],
    c: [
        "Does your face appear shiny or greasy throughout most of the day?",
        "Do you find yourself blotting oil from your face multiple times a day? ",
        "Do you experience frequent breakouts (pimples, blackheads)? ",
        "After washing your face, does your skin feel tight momentarily, but then quickly become oily again? "
    ],
    d: [
        "Does your skin tend to react easily to new skincare products? ",
        "Do you avoid fragranced skincare products because they irritate your skin?",
        "Do you ever experience a burning sensation after using a particular product? ",
        "Does sun exposure cause a stronger reaction on your skin compared to others?"
    ]
}
const results = {
    a: [
        "Mild dry:Results suggest mild dryness. This is a common issue and can be easily managed with a regular skincare routine",
        "Moderate dry:This means your skin may feel tight or itchy sometimes, especially after cleansing or in dry weather.",
        "Severe dry:This means your skin may feel tight or itchy sometimes, especially after cleansing or in dry weather.",
        "Extremely dry skin:This can be uncomfortable and may require a more intensive approach."
    ],
    b: [
        "Mild combination skin: You experience occasional tightness or oiliness, but overall your skin has a good balance.",
        "Moderate combination skin: You likely experience tightness after cleansing and your T-zone shows some oiliness throughout the day. ",
        "Severe combination skin: You experience significant tightness after cleansing and noticeable oiliness in the T-zone, possibly extending to cheeks. ",
        "Extremely combination skin: Your skin feels constantly dehydrated but produces excess oil, with very visible pores in the T-zone prone to breakouts."

    ],
    c: [
        "Mild oily: You experience occasional shine and oiliness, possibly needing to blot on hot days. Breakouts might be occasional and related to specific factors.",
        "Moderate oily: You have consistent shine in the T-zone, possibly extending to cheeks by midday. Blotting is needed several times a day, and breakouts are a regular occurrence.",
        "Severe oily: Your face appears shiny or greasy most of the day, with frequent blotting offering limited effectiveness. Breakouts are frequent, including blackheads and whiteheads, potentially with occasional deeper pimples.",
        "Extremely oily: Your skin has a constant oily film and experiences breakouts as a constant issue, with a high chance of inflamed blemishes and congestion. Tightness after cleansing is minimal, quickly replaced by a surge of oil production.."
    ],
    d: [
        "Mild sensitive:You experience occasional reactions to new products, possibly with slight irritation or redness. You might tolerate some fragrance in skincare, but certain scents can cause issues. Sun exposure may cause occasional sunburn or redness, but generally manageable. Careful product selection and patch testing for new products are recommended. ",
        "Moderate sensitive: You have more frequent reactions to new products, requiring patch testing before full use. Fragranced products generally irritate your skin and are best avoided. Sun exposure is a concern, and you likely require higher SPF protection. A gentle skincare routine with fragrance-free products and high SPF protection is crucial.                ",
        "Severe sensitive:Your skin is highly reactive to new products, with prominent irritation upon introduction. Fragrances are a major trigger and must be avoided altogether. You experience frequent burning sensations with irritating products, and sun exposure triggers significant irritation, redness, or burning. Consulting a dermatologist for a personalized approach and potentially prescription-strength calming products might be necessary. ",
        "Extremely sensitive: Even familiar products can trigger reactions on your extremely sensitive skin, requiring a very limited and gentle routine. Even fragrance-free products might cause reactions, and burning is a common response to many skincare products. A dermatologist's guidance and a very limited, fragrance-free routine are crucial for managing your sensitive skin. "
    ]
}

const products = {
    a: [
        {
            image: './amz/cetaphil.png',
            name: 'Gentle Cleanser',
            desc: "Cetaphil Gentle Skin Cleanser is a fragrance-free, dermatologist-recommended cleanser that effectively removes dirt and oil without stripping the skin's natural moisture barrier.",
            link: "https://amzn.to/4c9WjAL"
        }, {
            image: './amz/vanicream.jpg',
            name: 'Moisturizer with SPF',
            desc: "Vanicream Lite Lotion SPF 30 is a lightweight, oil-free moisturizer that provides broad-spectrum sun protection and hydration for sensitive skin.",
            link: "https://amzn.to/4beMfFk"
        }, {
            image: './amz/serum.jpg',
            name: 'Serum (Optional)',
            desc: "The Ordinary Hyaluronic Acid 2% + B5 is an affordable and effective serum that provides intense hydration with hyaluronic acid and vitamin B5.",
            link: "https://amzn.to/4cx2Yoj"
        }, {
            image: './amz/night-cream.webp',
            name: 'Night Cream',
            desc: "CeraVe Moisturizing Cream is a fragrance-free, rich moisturizer that provides long-lasting hydration and helps repair the skin barrier overnight.",
            link: "https://amzn.to/3VDS4GJ"
        }
    ],
    b: [
        {
            image: './amz/cleanser.jpg',
            name: 'Cleanser',
            desc: "La Roche-Posay Toleriane Hydrating Gentle Cleanser - This fragrance-free cleanser gently removes impurities without stripping the skin's natural oils.",
            link: "https://amzn.to/3VUPBsL"
        },
        {
            image: './amz/ceravee.jpg',
            name:
             'Moisturizer',
            desc: "CeraVe Facial Moisturizing Lotion PM - This lightweight, oil-free lotion provides all-day hydration without clogging pores. CeraVe Facial Moisturizing Lotion PM",
            link: "https://amzn.to/3Xwrjqd"
        },
        {
            image: './amz/eltamd.jpg',
            name: 'Sunscreen',
            desc: "EltaMD UV Clear Broad-Spectrum SPF 46 - This oil-free sunscreen offers broad-spectrum protection without leaving a greasy residue.",
            link: "https://amzn.to/3zbb6fT"
        },
        {
            image: './amz/ceravee-foaming.jpg',
            name: 'Moderate Combination Skin Cleanser ',
            desc: "CeraVe Foaming Facial Cleanser - This foaming cleanser removes excess oil without over-drying the skin. ",
            link: "https://amzn.to/3VS82OK"
        },
        {
            image: './amz/neutrogena.webp',
            name: 'Moisturizer',
            desc: "Neutrogena Hydro Boost Water Gel - This lightweight gel-based moisturizer provides intense hydration without clogging pores.",
            link: "https://amzn.to/45GkmET"
        },
        {
            image: './amz/cetaphil.jpg',
            name: 'Severe Combination Skin Morning Cleanser',
            desc: "Cetaphil Gentle Skin Cleanser - This gentle cleanser effectively removes dirt and oil without stripping the skin. ",
            link: "https://amzn.to/3VzTD8u"
        },
        {
            image: './amz/laroche.jpg',
            name: 'Night Cleanser',
            desc: "La Roche-Posay Effaclar Purifying Foaming Gel Cleanser - This foaming cleanser helps control oil and combat breakouts in the T-zone.",
            link: "https://amzn.to/4ew8KZ7"
        },
        {
            image: './amz/kiehl.webp',
            name: 'Moisturizer',
            desc: "Kiehl's Ultra Facial Cream - This lightweight cream provides all-day hydration for drier areas without clogging pores.",
            link: "https://amzn.to/3LgubjL"
        },
        {
            image: './amz/cetaphil.jpg',
            name: 'Extremely Combination Skin morning cleaser',
            desc: "Cetaphil Daily Facial Cleanser - This gentle cleanser removes excess oil without over-drying the skin.",
            link: "https://amzn.to/3VXopcY"
        },
        {
            image: './amz/paulas.webp',
            name: 'exfoliator',
            desc: "Paula's Choice 2% BHA Liquid Exfoliant - This exfoliating treatment helps unclog pores, minimize their appearance, and control oil production .",
            link: "https://amzn.to/3zf2tks"
        },
        {
            image: './amz/toner.jpg',
            name: 'Hydrating Toner',
            desc: "Klairs Supple Preparation Facial Toner - This alcohol-free toner provides a boost of hydration and soothes the skin.",
            link: "https://amzn.to/3XCB8D6"
        },
        {
            image: './amz/cosrx.jpg',
            name: 'Moisturizer',
            desc: "Cosrx Advanced Snail 96 Mucin Power Essence - This lightweight essence provides intense hydration and helps improve skin texture.",
            link: "https://amzn.to/3XyniS0"
        }
    ],
    c: [
        {
            image: './amz/posay.jpg',
            name: 'Cleanser - Oily skin',
            desc: "La Roche-Posay Effaclar Purifying Foaming Gel Cleanser (for moderate to severe oiliness)",
            link: "https://amzn.to/3zemest"
        },
        {
            image: './amz/cera.webp',
            name: 'Moisturizer',
            desc: "All Oily Skin: CeraVe Facial Moisturizing Lotion PM - CeraVe Facial Moisturizing Lotion PM (lightweight, oil-free)",
            link: "https://amzn.to/3XvtSsx"

        },
        {
            image: './amz/expo.jpg',
            name: 'Exfoliator',
            desc: "The Ordinary Salicylic Acid 2% Solution (beta hydroxy acid to unclog pores)",
            link: "https://amzn.to/3XHFZma"
        },
        {
            image: './amz/eltamduv.webp',
            name: 'Sunscreen (always!)',
            desc: "EltaMD UV Clear Broad-Spectrum SPF 46 (oil-free, non-comedogenic)",
            link: "https://amzn.to/4bf8dI7"
        }
    ],
    d: [
        {
            image: './amz/ceta.webp',
            name: 'Cetaphil Gentle Skin Cleanse',
            desc: "This fragrance-free cleanser is gentle enough for even the most sensitive skin and effectively removes dirt and oil without stripping moisture.",
            link: "https://amzn.to/3zdSqwd"
        },
        {
            image: './amz/larocheposay.jpg',
            name: 'Moisturizer (All Levels, Adjust Based on Needs)',
            desc: "La Roche-Posay Toleriane Double Repair Face Moisturizer : This fragrance-free, lightweight moisturizer provides hydration and helps repair the skin barrier.",
            link: "https://amzn.to/4ezMqxO"
        },
        {
            image: './amz/cera-s.webp',
            name: 'CeraVe Moisturizing Cream',
            desc: "Option 2 (Richer):CeraVe Moisturizing Cream : This fragrance-free, richer cream provides long-lasting hydration, especially beneficial for drier or extremely sensitive skin at night.",
            link: "https://amzn.to/4ccvQlZ"
        },
        {
            image: './amz/eltamd.jpg',
            name: 'EltaMD UV Clear Broad-Spectrum SPF 46',
            desc: "Oil-free EltaMD UV Clear Broad-Spectrum SPF 46 helps calm and protect sensitive skin types prone to breakouts, rosacea and discoloration.",
            link: "https://amzn.to/3VVgc98"
        }
    ]
}
function calculatePercentage(page, num) {
    var num0 = parseInt(num[0]);
    var num1 = parseInt(num[1]);
    var num2 = parseInt(num[2]);
    var num3 = parseInt(num[3]);
    var sum = (num0 + num1 + num2 + num3 - 3) - 13;
    sum *= (-8.33);

    if (Math.floor(sum) < 26) return {
        title: results[page][0].split(":")[0],
        description: results[page][0].split(":")[1]
    }
    if (Math.floor(sum) < 51) return {
        title: results[page][1].split(":")[0],
        description: results[page][1].split(":")[1]
    }
    if (Math.floor(sum) < 75) return {
        title: results[page][2].split(":")[0],
        description: results[page][2].split(":")[1]
    }
    if (Math.floor(sum) < 101) return {
        title: results[page][3].split(":")[0],
        description: results[page][3].split(":")[1]
    }
}

window.values = "";
function manageClick(num) {
    values += num;
    if (values.length == 4) {
        document.getElementById("question-wrapper").style.display = "none";
        document.getElementById("credential").style.display = "block";
    }
    else {
        document.getElementById("question").innerText = questions[pageName][values.length]
    }
}
document.getElementById('submit').addEventListener('click', final_submit)
function final_submit() {
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (validateEmail(document.getElementById("c-email").value) == null) {
        document.getElementById("error").innerText = '*Please enter a valid email';
        return;
    }
    var submit = {
        page: pageName,
        values,
        email: document.getElementById("c-email").value,
        name: document.getElementById("c-name").value
    }
    var results = calculatePercentage(submit.page, submit.values)
    //window.sendToFirebase(submit);
    document.getElementById("credential").style.display = "none";
    console.log(submit)
    document.getElementById("results").style.display = "block";
    document.getElementById("skin-type-title").innerText = results.title;
    document.getElementById("skin-type-description").innerText = results.description;
    console.log(products[pageName]);
    //setting products
    // recommended-products
    for (let i = 0; i < products[pageName].length; i++) {
        const product = products[pageName][i]

        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = product.image
        img.classList.add('product-image')
        img.src = product.image

        const productName = document.createElement('p')
        productName.classList.add('product-name')
        productName.innerText = product.name

        const productDesc = document.createElement('p')
        productDesc.classList.add('product-desc')
        productDesc.innerText = product.desc

        const CTA = document.createElement('a')
        CTA.href = product.link
        CTA.classList.add('cta-s')

        const CTAButton = document.createElement('button')
        CTAButton.classList.add('cta-button-s')
        CTAButton.innerText = 'Buy Now'

        CTA.appendChild(CTAButton)

        card.appendChild(img)
        card.appendChild(productName)
        card.appendChild(productDesc)
        card.appendChild(CTA)

        cardWrapper.appendChild(card)

        document.getElementById('recommended-products').appendChild(cardWrapper)

        // document.getElementById('product1-image').src = products[pageName][0].image
        // document.getElementById('product1-name').innerText = products[pageName][0].name
        // document.getElementById('product1-desc').innerText = products[pageName][0].desc
    }

    //document.getElementById('product2-image').src = products[pageName][1].image
    //document.getElementById('product2-name').innerText = products[pageName][1].name
    //document.getElementById('product2-desc').innerText = products[pageName][1].desc

}
manageClick("");