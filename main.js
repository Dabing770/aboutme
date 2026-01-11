document.addEventListener('DOMContentLoaded', () => {

    // Language switcher logic will be added here
    const langData = {
        "en": {
            "pageTitle": "Jiang Ao - Personal Homepage",
            "logo": "Jiang Ao",
            "heroName": "Jiang Ao",
            "heroId": "High School Student",
            "heroTagline": "Forging the future, one line of code at a time.",
            "heroButton": "Contact",
            "aboutTitle": "About Me",
            "aboutContent": "As a dedicated high school student in Loimaa, Finland, I am passionate about learning and embracing new challenges. My interest in technology and its potential to shape the future drives me to constantly expand my skills. I am a responsible and forward-thinking individual, eager to apply my knowledge in a professional environment and contribute to meaningful projects. My academic journey is complemented by practical experiences that have honed my work ethic and adaptability, preparing me for future opportunities in the tech industry and beyond.",
            "skillsTitle": "Skills",
            "skillsCategory1": "Customer Service & Work Ethic",
            "skill1_1": "Customer service and interaction skills",
            "skill1_2": "Cashier work and payment processing",
            "skill1_3": "Working in a fast-paced environment",
            "skill1_4": "Teamwork",
            "skill1_5": "Hygiene and safety expertise",
            "skill1_6": "Flexibility and willingness to learn",
            "skillsCategory2": "Office & Technical Skills",
            "skill2_1": "PowerPoint",
            "skill2_2": "Excel",
            "skill2_3": "Word",
            "skill2_4": "HTML (Basic)",
            "skill2_5": "CSS (Basic)",
            "skill2_6": "Python (Basic)",
            "skill2_7": "C++ (Basic)",
            "experienceTitle": "Experience",
            "exp1Title": "Yi Sushi (Chinese Restaurant, Finland) — Waiter",
            "exp1_1": "Greeting customers and taking orders",
            "exp1_2": "Handling cash and card payments",
            "exp1_3": "Serving dishes and packing takeaways",
            "exp1_4": "Maintaining restaurant cleanliness",
            "exp1_5": "Independently managing customer service during peak hours",
            "exp1_6": "Coordinating with the kitchen team",
            "exp2Title": "TET Work Experience",
            "exp2Companies": "Motonet, Pemamek, Rovio Pet Foods Finland",
            "exp2_1": "Assisted with daily tasks in retail and factory environments",
            "exp2_2": "Organized items and maintained work areas",
            "exp2_3": "Learned and followed work procedures",
            "exp2_4": "Team collaboration",
            "exp2_5": "Used Finnish for basic communication",
            "exp2_6": "Learned punctuality, responsibility, and professional norms",
            "educationTitle": "Education",
            "edu1": "High School Student (Finland)",
            "awardsTitle": "Awards",
            "award1": "Scholarship for willingness to learn and diligence (High School)",
            "award2": "Scholarship for perseverance (Middle School)",
            "award3": "Scholarship for friendliness (Elementary School, 2025)",
            "award4": "MAOL Chemistry Competition (basic series) - 35th in the nation",
            "languagesTitle": "Language Skills",
            "langChinese": "Chinese (Native)",
            "langFinnish": "Finnish (Near-native)",
            "langEnglish": "English (B2)",
            "timelineTitle": "Timeline",
            "timeline1Title": "Started High School",
            "timeline1Date": "Current",
            "timeline2Title": "Waiter at Yi Sushi",
            "timeline2Date": "Work Experience",
            "timeline3Title": "TET Work Experience",
            "timeline3Date": "Work Experience",
            "timeline4Title": "Graduated Middle School",
            "timeline4Date": "Past",
            "contactTitle": "Contact",
            "footerText": "&copy; 2026 Jiang Ao. All Rights Reserved."
        },
        "zh": {
            "pageTitle": "江傲 - 个人主页",
            "logo": "江傲",
            "heroName": "江傲",
            "heroId": "高中生",
            "heroTagline": "一次一行代码，塑造未来。",
            "heroButton": "联系我",
            "aboutTitle": "关于我",
            "aboutContent": "作为一名在芬兰洛伊马就读的专注的高中生，我热衷于学习并拥抱新的挑战。我对技术及其塑造未来的潜力充满兴趣，这驱使我不断扩展我的技能。我是一个有责任感和前瞻性思维的人，渴望在专业环境中应用我的知识，为有意义的项目做出贡献。我的学术旅程得到了实践经验的补充，这些经验磨练了我的职业道德和适应能力，为我将来在科技及其他领域的机遇做好了准备。",
            "skillsTitle": "技能",
            "skillsCategory1": "客户服务与工作能力",
            "skill1_1": "客户服务与沟通技巧",
            "skill1_2": "收银与支付处理",
            "skill1_3": "适应快节奏工作环境",
            "skill1_4": "团队协作",
            "skill1_5": "卫生与安全知识",
            "skill1_6": "灵活性与学习意愿",
            "skillsCategory2": "办公与技术技能",
            "skill2_1": "PowerPoint",
            "skill2_2": "Excel",
            "skill2_3": "Word",
            "skill2_4": "HTML (基础)",
            "skill2_5": "CSS (基础)",
            "skill2_6": "Python (基础)",
            "skill2_7": "C++ (基础)",
            "experienceTitle": "经历",
            "exp1Title": "Yi Sushi (芬兰中餐厅) — 服务员",
            "exp1_1": "接待顾客与点餐",
            "exp1_2": "处理现金与银行卡支付",
            "exp1_3": "上菜与外卖打包",
            "exp1_4": "维护餐厅整洁",
            "exp1_5": "高峰期独立进行客户服务",
            "exp1_6": "与厨房团队协作",
            "exp2Title": "TET 工作体验",
            "exp2Companies": "Motonet, Pemamek, Rovio Pet Foods Finland",
            "exp2_1": "协助零售与工厂环境的日常工作",
            "exp2_2": "整理物品与维护工作区",
            "exp2_3": "学习并遵守工作流程",
            "exp2_4": "团队合作",
            "exp2_5": "使用芬兰语进行基础沟通",
            "exp2_6": "学习守时、责任感和职业规范",
            "educationTitle": "教育",
            "edu1": "高中在读 (芬兰)",
            "awardsTitle": "奖项",
            "award1": "学习意愿与勤奋奖学金 (高中)",
            "award2": "坚韧不拔奖学金 (初中)",
            "award3": "友善待人奖学金 (小学, 2025)",
            "award4": "MAOL 化学竞赛 (基础系列) - 全国第35名",
            "languagesTitle": "语言能力",
            "langChinese": "中文 (母语)",
            "langFinnish": "芬兰语 (接近母语)",
            "langEnglish": "英语 (B2)",
            "timelineTitle": "时间线",
            "timeline1Title": "开始高中学习",
            "timeline1Date": "现在",
            "timeline2Title": "Yi Sushi 服务员",
            "timeline2Date": "工作经历",
            "timeline3Title": "TET 工作体验",
            "timeline3Date": "工作经历",
            "timeline4Title": "初中毕业",
            "timeline4Date": "过去",
            "contactTitle": "联系方式",
            "footerText": "&copy; 2026 江傲. 版权所有."
        },
        "fi": {
            "pageTitle": "Jiang Ao - Henkilökohtainen kotisivu",
            "logo": "Jiang Ao",
            "heroName": "Jiang Ao",
            "heroId": "Lukiolainen",
            "heroTagline": "Tulevaisuutta takomassa, yksi koodirivi kerrallaan.",
            "heroButton": "Ota yhteyttä",
            "aboutTitle": "Tietoja minusta",
            "aboutContent": "Olen omistautunut lukiolainen Loimaalta, Suomesta, ja suhtaudun intohimoisesti oppimiseen ja uusien haasteiden vastaanottamiseen. Kiinnostukseni teknologiaan ja sen potentiaaliin muokata tulevaisuutta ajaa minua jatkuvasti laajentamaan taitojani. Olen vastuullinen ja tulevaisuuteen suuntautunut henkilö, joka on innokas soveltamaan tietämystään ammatillisessa ympäristössä ja osallistumaan merkityksellisiin projekteihin. Akateemista polkuani täydentävät käytännön kokemukset, jotka ovat hioneet työmoraaliani ja sopeutumiskykyäni, valmistaen minua tuleviin mahdollisuuksiin teknologia-alalla ja sen ulkopuolella.",
            "skillsTitle": "Taidot",
            "skillsCategory1": "Asiakaspalvelu ja työelämätaidot",
            "skill1_1": "Asiakaspalvelu ja vuorovaikutustaidot",
            "skill1_2": "Kassatyö ja maksujen käsittely",
            "skill1_3": "Työskentely kiireisessä ympäristössä",
            "skill1_4": "Tiimityöskentely",
            "skill1_5": "Hygienia- ja turvallisuusosaaminen",
            "skill1_6": "Joustavuus ja oppimishalukkuus",
            "skillsCategory2": "Toimisto- ja tekniset taidot",
            "skill2_1": "PowerPoint",
            "skill2_2": "Excel",
            "skill2_3": "Word",
            "skill2_4": "HTML (perusteet)",
            "skill2_5": "CSS (perusteet)",
            "skill2_6": "Python (perusteet)",
            "skill2_7": "C++ (perusteet)",
            "experienceTitle": "Kokemus",
            "exp1Title": "Yi Sushi (kiinalainen ravintola, Suomi) — Tarjoilija",
            "exp1_1": "Asiakkaiden vastaanotto ja tilausten ottaminen",
            "exp1_2": "Käteis- ja korttimaksujen käsittely",
            "exp1_3": "Annoksien tarjoilu ja noutoruokien pakkaaminen",
            "exp1_4": "Ravintolan siisteyden ylläpito",
            "exp1_5": "Itsenäinen asiakaspalvelu ruuhka-aikoina",
            "exp1_6": "Koordinointi keittiötiimin kanssa",
            "exp2Title": "TET-työkokemus",
            "exp2Companies": "Motonet, Pemamek, Rovio Pet Foods Finland",
            "exp2_1": "Avustaminen päivittäisissä tehtävissä vähittäiskaupan ja tehdasympäristöissä",
            "exp2_2": "Tavaroiden järjestely ja työalueiden ylläpito",
            "exp2_3": "Työmenetelmien oppiminen ja noudattaminen",
            "exp2_4": "Tiimiyhteistyö",
            "exp2_5": "Suomen kielen käyttö peruskommunikaatiossa",
            "exp2_6": "Täsmällisyyden, vastuullisuuden ja ammatillisten normien oppiminen",
            "educationTitle": "Koulutus",
            "edu1": "Lukiolainen (Suomi)",
            "awardsTitle": "Palkinnot",
            "award1": "Stipendi oppimishaluisuudesta ja ahkeruudesta (Lukio)",
            "award2": "Stipendi sinnikkyydestä (Yläkoulu)",
            "award3": "Stipendi ystävällisyydestä (Alakoulu, 2025)",
            "award4": "MAOL Kemian alkukilpailu (perussarja) - 35. sija valtakunnallisesti",
            "languagesTitle": "Kielitaito",
            "langChinese": "Kiina (äidinkieli)",
            "langFinnish": "Suomi (lähes äidinkieli)",
            "langEnglish": "Englanti (B2)",
            "timelineTitle": "Aikajana",
            "timeline1Title": "Lukio alkoi",
            "timeline1Date": "Nykyinen",
            "timeline2Title": "Tarjoilija Yi Sushissa",
            "timeline2Date": "Työkokemus",
            "timeline3Title": "TET-työkokemus",
            "timeline3Date": "Työkokemus",
            "timeline4Title": "Peruskoulu päättyi",
            "timeline4Date": "Menneisyys",
            "contactTitle": "Yhteystiedot",
            "footerText": "&copy; 2026 Jiang Ao. Kaikki oikeudet pidätetään."
        }
    };

    const langSwitcher = document.querySelector('.lang-switcher');
    const translatableElements = document.querySelectorAll('[data-lang]');

    const setLanguage = (lang) => {
        if (!langData[lang]) return;

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (langData[lang][key]) {
                el.innerHTML = langData[lang][key];
            }
        });

        // Update active button
        langSwitcher.querySelector('.active').classList.remove('active');
        langSwitcher.querySelector(`[data-lang-switch="${lang}"]`).classList.add('active');
        
        // Update html lang attribute
        document.documentElement.lang = lang;
    };

    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') return;
        const lang = e.target.getAttribute('data-lang-switch');
        setLanguage(lang);
    });

    // Scroll-in animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Copy to clipboard
    const copyableElements = document.querySelectorAll('.copyable');
    copyableElements.forEach(el => {
        el.addEventListener('click', () => {
            const textToCopy = el.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Optional: show a temporary "Copied!" message
                const originalText = el.textContent;
                el.textContent = 'Copied!';
                setTimeout(() => {
                    el.textContent = originalText;
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });

    // Set initial language (e.g., 'en')
    // The actual data will be loaded in the next step,
    // so this will be fully functional then.
    setLanguage('en');
});
