// ============================================================
//  GST112 — Question Bank
//  To add a new chapter, append a new object to the CHAPTERS
//  array following the same structure below.
// ============================================================

const CHAPTERS = [
  // ── CHAPTER 1 ─────────────────────────────────────────────
  {
    id: "chapter-1",
    title: "Chapter 1: Sources & Foundations of Nigerian History",
    questions: [
      {
        question: "What is the 'Hamitic Hypothesis'?",
        options: [
          "A theory claiming all significant African civilisations south of the Sahara were brought by a 'white' Hamitic race.",
          "A linguistic theory about the origin of Semitic languages.",
          "An archaeological hypothesis about the migration of Bantu peoples.",
          "A colonial policy for dividing African territories."
        ],
        answer: 0
      },
      {
        question: "What does the author identify as the 'greatest forced migration in history'?",
        options: [
          "The Bantu migrations across sub-Saharan Africa.",
          "The Trans-Atlantic slave trade.",
          "The displacement of peoples during World War II.",
          "The colonial-era movement of indentured labourers."
        ],
        answer: 1
      },
      {
        question: "Which four main categories of sources do Africanist historians use to reconstruct the past?",
        options: [
          "Newspapers, photography, colonial archives, and folklore.",
          "Written records, archaeology, cultural history/ethnology, and oral tradition.",
          "Art, music, religion, and trade records.",
          "Genetics, climate data, linguistics, and cartography."
        ],
        answer: 1
      },
      {
        question: "Why is the term 'oral tradition' NOT synonymous with 'rumour'?",
        options: [
          "Oral tradition is always written down eventually.",
          "Rumours are older than oral traditions.",
          "Rumours arise from tension or unrest and are not necessarily about the past; oral traditions are structured testimonies concerning the past.",
          "Oral tradition is verified by scientists while rumours are not."
        ],
        answer: 2
      },
      {
        question: "What is the primary value of historical linguistics for African history?",
        options: [
          "It reconstructs lost literature.",
          "It helps establish genetic links between languages, providing clues about historical migrations and ethnic origins.",
          "It deciphers ancient Egyptian hieroglyphics.",
          "It proves that all African peoples share a single ancestor."
        ],
        answer: 1
      },
      {
        question: "How did European writers in the 15th–16th centuries often portray Africans to justify colonialism?",
        options: [
          "As highly civilised but militarily weak.",
          "As equal trading partners who needed Christian conversion only.",
          "As living in primitive savagery and ignorance, suggesting Europeans had a 'burden' to civilise them.",
          "As descendants of ancient Greek explorers."
        ],
        answer: 2
      },
      {
        question: "Who are some of the indigenous writers who documented aspects of Nigerian history?",
        options: [
          "Mungo Park, Hugh Clapperton, and Richard Lander.",
          "Ahmad Ibn Fartuwa, Al-Barnawi, Usman Dan Fodio, Mohammed Bello, and Abdullahi.",
          "Leo Africanus, Ibn Battuta, and Al-Masudi.",
          "Mary Kingsley, Mary Slessor, and Sylvia Leith-Ross."
        ],
        answer: 1
      },
      {
        question: "What limitation of oral tradition do scholars like Murdock emphasise?",
        options: [
          "It is only reliable when translated into written form.",
          "It cannot describe warfare accurately.",
          "It is undependable beyond the recollection of living informants.",
          "It always exaggerates the role of women in society."
        ],
        answer: 2
      },
      {
        question: "What role did the 'Kano Chronicles' play in African history?",
        options: [
          "They were European missionary records about Northern Nigeria.",
          "They serve as important indigenous literary sources documenting the history of Hausa states and Northern Nigerian peoples.",
          "They were Arabic trade manifests from the trans-Saharan route.",
          "They were a British colonial census of Kano emirate."
        ],
        answer: 1
      },
      {
        question: "What is the primary way historians 'debunk' the biases of early European writers?",
        options: [
          "By discarding all European sources entirely.",
          "By relying solely on oral traditions.",
          "By comparing works of authors from various European nations and using indigenous African sources and archaeological findings.",
          "By using only Arabic-language documents."
        ],
        answer: 2
      },
      {
        question: "Why is the 'Hamitic Hypothesis' considered scientifically flawed?",
        options: [
          "It has been disproved by carbon-dating of Saharan fossils.",
          "It lacks scientific proof and is based on racist assumptions rather than historical evidence regarding human development.",
          "It ignores the role of the Nile Valley in human evolution.",
          "It contradicts Biblical accounts of human origin."
        ],
        answer: 1
      },
      {
        question: "What was the consequence of the Trans-Atlantic slave trade for African society?",
        options: [
          "It led to rapid industrialisation in West Africa.",
          "It caused a massive forced migration of the most productive members of society, leading to severe economic and social decline.",
          "It strengthened African kingdoms by creating new trading alliances.",
          "It had little long-term impact because Africans were quickly replaced by European settlers."
        ],
        answer: 1
      },
      {
        question: "Which scholar and book are credited with debunking myths about European influence by showing that Africa was at par with Europe in the 15th century?",
        options: [
          "Cheikh Anta Diop and 'The African Origin of Civilization'.",
          "Walter Rodney and 'How Europe Underdeveloped Africa' (1972).",
          "C.G. Seligman and 'Races of Africa'.",
          "J.F. Ade Ajayi and 'History of West Africa'."
        ],
        answer: 1
      },
      {
        question: "What are the three main categories of literary sources for Nigerian history?",
        options: [
          "Colonial records, missionary reports, and oral interviews.",
          "Works by Arab scholars/geographers, works by European explorers/colonial masters, and works by Africans who had acquired knowledge of English writing.",
          "Archaeological reports, genetic studies, and photographic archives.",
          "Government gazettes, census data, and trade manifests."
        ],
        answer: 1
      },
      {
        question: "Which early Arab writers are mentioned as having written about the people of West Africa?",
        options: [
          "Ibn Battuta, Al-Masudi, and Al-Tabari.",
          "Leo Africanus, Al-Bakri, and Ibn Khaldun.",
          "Al-Idrisi, Al-Wansharisi, and Ibn Rushd.",
          "Ibn Sina, Al-Kindi, and Al-Farabi."
        ],
        answer: 1
      },
      {
        question: "Why does the text warn that works by European writers on African history should be handled with scepticism?",
        options: [
          "Because European writers were forbidden from entering most African territories.",
          "Because they contain clear falsifications, and their authors often had scant knowledge of local geography and ethnography, leading to grave errors and distortions.",
          "Because they were written in Latin and lost much meaning in translation.",
          "Because European writers relied entirely on second-hand Arab accounts."
        ],
        answer: 1
      },
      {
        question: "How does the text formally define oral traditions?",
        options: [
          "Rumours and folktales passed between traders at market places.",
          "Written summaries of verbal accounts collected by colonial administrators.",
          "Unwritten sources of history transmitted orally through successive generations, consisting of verbal testimonies such as narratives, legends, myths, proverbs, genealogies, tales, and legal precedents.",
          "Songs and dances performed at royal courts to entertain visiting dignitaries."
        ],
        answer: 2
      },
      {
        question: "What was the role of professional historians in societies like Benin and Yoruba?",
        options: [
          "They served as diplomats, negotiating treaties with neighbouring kingdoms.",
          "It was their responsibility to relate the history of their people to the younger generation and to visitors; they were maintained by the palace, and any lapse in memory or fabrication was punishable by death.",
          "They managed the palace treasury and kept financial records.",
          "They were responsible for writing down laws and distributing them to provincial chiefs."
        ],
        answer: 1
      },
      {
        question: "What are the primary characteristics of the Ife culture according to the text?",
        options: [
          "It dates to the 12th century A.D. and is known for pyramidal mud architecture and a written legal code.",
          "It dates back to the 6th century B.C. and 100 A.D., featuring iron-working, craft specialisation, terracotta, brass and bronze heads, wood carving, and potsherd pavement.",
          "It emerged in the 15th century and is defined by maritime trade and coral bead craftsmanship.",
          "It dates to the 9th century A.D. and is characterised by monumental stone sculpture."
        ],
        answer: 1
      },
      {
        question: "Where exactly was the Igbo-Ukwu culture located?",
        options: [
          "A town about 40 km south-west of Onitsha in Anambra State.",
          "A settlement on the banks of the River Niger near Asaba.",
          "A coastal community in present-day Rivers State.",
          "A hilltop settlement in Enugu State, near the Udi Plateau."
        ],
        answer: 0
      },
      {
        question: "According to Professor Thurstan Shaw, what does the burial site at Igbo-Ukwu indicate?",
        options: [
          "Evidence of early Islamic conversion among the Igbo people.",
          "The earliest known use of iron tools in sub-Saharan Africa.",
          "Evidence of a highly developed civilisation centred around a semi-divine ruler dependent on the trans-Saharan ivory trade and items like slaves and kola nuts.",
          "Proof that the Igbo people originally migrated from North Africa."
        ],
        answer: 2
      },
      {
        question: "What is the most contentious theory regarding the origin of the Yoruba people?",
        options: [
          "The theory that they migrated northward from the Congo Basin.",
          "The theory tracing their origin to the 'East' (such as Egypt, Yemen, or Arabia), due to similarities in religious observances, art, and burial practices between the Yoruba and the Egyptians.",
          "The theory that the Yoruba descended from the ancient Nok culture.",
          "The theory that they are indigenous to the Niger Delta region."
        ],
        answer: 1
      },
      {
        question: "Who popularised the version of Yoruba history that suggests they migrated from Egypt?",
        options: [
          "Samuel Ajayi Crowther in his 'Dictionary of the Yoruba Language'.",
          "J.F. Ade Ajayi in 'Christian Missions in Nigeria'.",
          "Rev. Samuel Johnson in his book 'History of the Yorubas' (1950).",
          "Obafemi Awolowo in 'Path to Nigerian Freedom'."
        ],
        answer: 2
      },
      {
        question: "What is the perspective of scholars like Oliver and Fage (1975) regarding the origin of African peoples?",
        options: [
          "They believe African civilisations were seeded by ancient Middle Eastern migrations.",
          "They argue that genetic evidence points to a single East African origin for all Africans.",
          "They believe that in tracing the origin of African peoples, one should not look beyond the African continent, specifically the region of the Niger Bend.",
          "They contend that African peoples have no traceable common origin."
        ],
        answer: 2
      },
      {
        question: "Who is credited with founding the Oyo Empire and establishing the present Benin monarchy?",
        options: [
          "Oduduwa, the progenitor of the Yoruba people.",
          "Oranmiyan, the grandson of Oduduwa.",
          "Ewuare the Great, the warrior Oba of Benin.",
          "Alaafin Abiodun, who expanded the empire's trade networks."
        ],
        answer: 1
      },
      {
        question: "How was the Oyo Empire administered at the provincial level?",
        options: [
          "Directly by military governors appointed by the Alaafin with no autonomy.",
          "By British-trained warrant chiefs from the 18th century onward.",
          "By princes, minor kings, and 'bales' (provincial governors), who enjoyed considerable autonomy as long as they met their obligations of taxes and tributes to the Alaafin.",
          "By a council of elected representatives from each town."
        ],
        answer: 2
      },
      // ── NEW from exam papers ──
      {
        question: "Ibn Khaldun, Magrizi, and Leo Africanus belong to which source category of history?",
        options: [
          "Oral tradition.",
          "Archaeological source.",
          "Written source.",
          "Ethnological source."
        ],
        answer: 2
      },
      {
        question: "Which method recaptures the past by means of excavated objects?",
        options: [
          "Oral tradition.",
          "Ethnology.",
          "Archaeology.",
          "Historical linguistics."
        ],
        answer: 2
      },
      {
        question: "Memoirs of agents of African companies are examples of which type of historical source?",
        options: [
          "Oral traditions.",
          "Written sources.",
          "Archaeological sources.",
          "Ethnological sources."
        ],
        answer: 1
      },
      {
        question: "What is the distinction between cultural history and ethnology?",
        options: [
          "Cultural history focuses only on art, while ethnology focuses on language.",
          "Cultural history is the study of the development and evolution of a people's culture through time; ethnology is the comparative study of different ethnic groups and cultures.",
          "Cultural history relies only on written records, while ethnology relies only on oral tradition.",
          "There is no meaningful distinction — both terms describe the same discipline."
        ],
        answer: 1
      },
      {
        question: "Which two early civilisations are most frequently cited as having awed European visitors to Africa?",
        options: [
          "Nok civilisation and the Mali Empire.",
          "Benin civilisation and Nok civilisation.",
          "Igbo-Ukwu culture and the Oyo Empire.",
          "The Kanem-Borno Empire and the Songhai Empire."
        ],
        answer: 1
      },
      {
        question: "In which Nigerian state is the NOK culture found?",
        options: [
          "Plateau State.",
          "Niger State.",
          "Kaduna State.",
          "Benue State."
        ],
        answer: 2
      }
    ]
  },

  // ── CHAPTER 2 ─────────────────────────────────────────────
  {
    id: "chapter-2",
    title: "Chapter 2: Hausa States, Sokoto & Kanem-Borno",
    questions: [
      {
        question: "What is the primary legend regarding the origin of the Hausa states (the Bayajidda legend)?",
        options: [
          "Bayajidda, a prince from Mecca, conquered the Hausa kingdoms and unified them under Islam.",
          "Bayajidda, a prince from Baghdad, arrived in Daura, killed a monster in a well, married the queen, and his offspring became the founders of the seven Hausa states.",
          "Bayajidda was a Fulani warrior who led a jihad that created the seven Hausa kingdoms.",
          "Bayajidda was a Kanem-Borno general who established the Hausa states as vassal territories."
        ],
        answer: 1
      },
      {
        question: "What distinguishes the 'Hausa Bakwai' from the 'Banza Bakwai'?",
        options: [
          "The Hausa Bakwai are northern states while the Banza Bakwai are southern states.",
          "The Hausa Bakwai were Islamic while the Banza Bakwai were pagan.",
          "The Hausa Bakwai (Kano, Daura, Gobir, Zazzau, Katsina, Rano, and Biram) are considered the original/legitimate Hausa states, while the Banza Bakwai are considered 'illegitimate' or states with mixed origins.",
          "The Hausa Bakwai traded with North Africa while the Banza Bakwai traded southward."
        ],
        answer: 2
      },
      {
        question: "What was the main economic activity that facilitated the growth of the Hausa states?",
        options: [
          "Iron-smelting and weapons manufacture for regional sale.",
          "Long-distance trans-Saharan trade in goods like gold, salt, slaves, leather, and cloth.",
          "Maritime trade along the West African coastline.",
          "Large-scale cotton farming for export to North Africa."
        ],
        answer: 1
      },
      {
        question: "Who was the founder of the Sokoto Caliphate?",
        options: ["Mohammed Bello", "Al-Barnawi", "Usman Dan Fodio", "El-Kanemi"],
        answer: 2
      },
      {
        question: "What was the primary goal of the 1804 Jihad led by Usman Dan Fodio?",
        options: [
          "To expel the British from Northern Nigeria.",
          "To unite all West African kingdoms under a single ruler.",
          "To reform Islamic practice, purge syncretism (mixing of beliefs), and establish a more just, theocratic government in Hausaland.",
          "To revive the trans-Saharan trade routes that had fallen into decline."
        ],
        answer: 2
      },
      {
        question: "Which city served as the intellectual and administrative centre of the Sokoto Caliphate?",
        options: ["Kano", "Zaria", "Sokoto", "Maiduguri"],
        answer: 2
      },
      {
        question: "What is the significance of the 'Mai' in the Kanem-Borno Empire?",
        options: [
          "The 'Mai' was the chief trader responsible for managing the trans-Saharan caravans.",
          "The 'Mai' was the title of the monarch/king, believed to be divinely ordained with absolute power over the empire.",
          "The 'Mai' was the head of the Islamic court system.",
          "The 'Mai' was a military general who led the Borno armies."
        ],
        answer: 1
      },
      {
        question: "How did the Kanem-Borno Empire maintain its longevity?",
        options: [
          "By forming military alliances with European powers from the 15th century.",
          "Through isolation and strict control of its borders.",
          "Through a strong military, control over trans-Saharan trade routes, and the adoption and promotion of Islam as a unifying state religion.",
          "By paying tribute to the Ottoman Empire in exchange for protection."
        ],
        answer: 2
      },
      {
        question: "What was the role of the 'Galadima' in the Borno political system?",
        options: [
          "The Galadima was the chief religious judge of the empire.",
          "The Galadima managed all external trade on behalf of the Mai.",
          "A high-ranking official who acted as a provincial governor, often in charge of the western territories of the empire.",
          "The Galadima was the commander of the imperial cavalry."
        ],
        answer: 2
      },
      {
        question: "What were the primary objectives of the 'indirect rule' system introduced by the British?",
        options: [
          "To train Nigerians for self-governance and eventual independence.",
          "To administer colonies efficiently with minimal staff and cost by governing through existing indigenous political structures and leaders.",
          "To replace all traditional rulers with British-educated Nigerians.",
          "To merge all ethnic groups into a single homogeneous Nigerian identity."
        ],
        answer: 1
      },
      {
        question: "Why did the indirect rule system encounter more resistance in Southern Nigeria compared to the North?",
        options: [
          "Southern Nigerians were more educated and could resist colonial policies legally.",
          "The British were less experienced in administering Southern Nigeria.",
          "In the North, there were centralised monarchies (Emirates) that fit the system, whereas in many Southern societies (like Igbo lands), there were no centralised kings, making it difficult to find local rulers to 'rule through'.",
          "The Southern climate made colonial administration more difficult."
        ],
        answer: 2
      },
      {
        question: "What is the importance of the 'Maguzawa' in Hausa society?",
        options: [
          "They were the Hausa merchant class who controlled trans-Saharan trade.",
          "They were Islamic scholars who spread literacy across the Hausa states.",
          "They are the group of people who maintained the traditional, non-Islamic Hausa religious practices even after the spread of Islam.",
          "They were the royal guards of the Hausa monarchs."
        ],
        answer: 2
      },
      {
        question: "What was the impact of the 1804 Jihad on the political structure of the Hausa states?",
        options: [
          "It strengthened the existing Hausa monarchies by giving them Islamic legitimacy.",
          "It replaced the traditional Hausa monarchs with Fulani Emirs, creating a unified political structure under the Sokoto Caliphate.",
          "It led to the fragmentation of the Hausa states into dozens of small chieftaincies.",
          "It had little lasting political impact as the old rulers were restored within a generation."
        ],
        answer: 1
      },
      {
        question: "What role did the 'Shehu' play in Borno?",
        options: [
          "The 'Shehu' was the title given to the commander of the Borno cavalry.",
          "The 'Shehu' was a religious scholar with no political authority.",
          "The title 'Shehu' was adopted by later rulers (specifically the El-Kanemi dynasty) to replace the 'Mai' and denote religious and political leadership.",
          "The 'Shehu' was the Borno ambassador to the Sokoto Caliphate."
        ],
        answer: 2
      },
      {
        question: "What was the significance of the 1804 Jihad in terms of social reform?",
        options: [
          "It abolished the trans-Saharan slave trade entirely.",
          "It aimed to purge Islamic practices of syncretism and establish a government based strictly on Sharia law.",
          "It granted women full political equality in the Sokoto Caliphate.",
          "It introduced a system of elected councils to replace hereditary monarchs."
        ],
        answer: 1
      },
      {
        question: "What was the primary economic base of the Hausa states?",
        options: [
          "Maritime fishing and coastal trade.",
          "Iron-working and weapons manufacture.",
          "A combination of large-scale agriculture and long-distance trade.",
          "Gold mining and river transport."
        ],
        answer: 2
      },
      {
        question: "What was the strategic importance of the city of Zazzau (Zaria)?",
        options: [
          "It was the spiritual capital and home of the most sacred mosques.",
          "It served as a key trade hub and was a major source of slaves for the trans-Saharan and regional trade networks.",
          "It was the military headquarters of the Sokoto Caliphate.",
          "It was the only Hausa city with direct access to the River Niger."
        ],
        answer: 1
      },
      {
        question: "Why was the Sokoto Caliphate described as a theocracy?",
        options: [
          "Because the Sultan was believed to be a direct descendant of the Prophet Muhammad.",
          "Because the political leadership (the Sultan and Emirs) was also the religious leadership, with laws derived from Islamic Sharia.",
          "Because religious scholars (ulama) had veto power over all political decisions.",
          "Because only Muslims were allowed to live within Caliphate territories."
        ],
        answer: 1
      },
      {
        question: "What is the historical significance of the 'El-Kanemi' dynasty in Borno?",
        options: [
          "They founded the original Kanem kingdom before its expansion to Borno.",
          "They introduced Islam to Borno for the first time in the 19th century.",
          "They emerged to restore order and governance in Borno after the decline of the traditional Mais, adopting the title of Shehu.",
          "They were the dynasty that surrendered Borno to the British colonial administration."
        ],
        answer: 2
      },
      {
        question: "What was the role of the 'Waziri' in the Sokoto Caliphate?",
        options: [
          "The Waziri was the military commander of the Caliphate's armies.",
          "The Waziri served as the chief advisor to the Sultan, playing a critical role in the administration and political decision-making.",
          "The Waziri was the chief tax collector across all Emirates.",
          "The Waziri was the head of the Islamic court responsible for interpreting Sharia."
        ],
        answer: 1
      },
      // ── NEW from exam papers ──
      {
        question: "Into which two categories is the ruling class in traditional Hausa society bifurcated?",
        options: [
          "Fulani and Hausa.",
          "Masu Sarauta (those with political office) and Masu Mulki (those with governing power).",
          "The Ulama (scholars) and the Sarki (kings).",
          "The Galadima (nobles) and the Talakawa (commoners)."
        ],
        answer: 1
      },
      {
        question: "What was one major effect of Islamic influence in Hausaland?",
        options: [
          "The abolition of the trans-Saharan slave trade.",
          "The replacement of all traditional Hausa customs with Arab ones.",
          "The introduction of Arabic literacy and a tradition of written scholarship.",
          "The unification of all Hausa states under a single monarch."
        ],
        answer: 2
      },
      {
        question: "Who is regarded as the greatest leader of Kanem-Borno?",
        options: [
          "Mai Dunama Dabbalemi.",
          "Mai Idris Alooma.",
          "El-Kanemi.",
          "Usman Dan Fodio."
        ],
        answer: 1
      },
      {
        question: "Which states fall under the Hausa Bakwai (the seven legitimate Hausa states)?",
        options: [
          "Kebbi, Zamfara, Yauri, and Gwari.",
          "Kano, Daura, Gobir, Zazzau, Katsina, Rano, and Biram — including Rano and Gobir.",
          "Nupe, Kwararafa, Ilorin, and Kebbi.",
          "Sokoto, Kano, Zaria, Bauchi, and Adamawa."
        ],
        answer: 1
      },
      {
        question: "What was the largest cultural group in Nigeria?",
        options: [
          "Yoruba.",
          "Igbo.",
          "Hausa.",
          "Fulani."
        ],
        answer: 2
      },
      {
        question: "Who was the Chief Judge (head of the judiciary) in traditional Kanem-Borno?",
        options: [
          "The Galadima.",
          "The Waziri.",
          "The Mainin Alkali.",
          "The Kaigama."
        ],
        answer: 2
      },
      {
        question: "Which two officials were among the most important chiefs in Kanem-Borno?",
        options: [
          "The Waziri and the Bashorun.",
          "The Galadima and the Kaigama.",
          "The Are-Ona-Kankanfo and the Oyomesi.",
          "The Iyase and the Uzama."
        ],
        answer: 1
      },
      {
        question: "What was another name for the Nokena confederation?",
        options: [
          "Hausa Bakwai.",
          "Banza Bakwai.",
          "Kwararafa.",
          "Ilorin."
        ],
        answer: 2
      },
      {
        question: "Into how many main divisions is Northern Nigerian history traditionally divided?",
        options: [
          "Two — Hausa States and Kanem-Borno.",
          "Three — Hausa States, Kanem-Borno, and the Middle Belt.",
          "Four — Hausa, Fulani, Kanuri, and Middle Belt peoples.",
          "Five — each corresponding to a major emirate."
        ],
        answer: 1
      },
      {
        question: "Which foreign peoples mingled with the early inhabitants of Northern Nigeria?",
        options: [
          "Romans, Greeks, and Phoenicians.",
          "Berbers, Tuaregs, and Arabs.",
          "Persians, Turks, and Egyptians.",
          "Nubians, Ethiopians, and Somalis."
        ],
        answer: 1
      }
    ]
  },

  // ── CHAPTER 3 ─────────────────────────────────────────────
  {
    id: "chapter-3",
    title: "Chapter 3: The Kingdoms of Benin, Ife & Igbo-Ukwu",
    questions: [
      {
        question: "When were the first Europeans recorded as visiting Benin?",
        options: ["1350 A.D.", "1472 A.D.", "1553 A.D.", "1620 A.D."],
        answer: 1
      },
      {
        question: "What system of succession was used in the Benin Kingdom?",
        options: [
          "Election by council of chiefs.",
          "Appointment by the Ooni of Ife.",
          "Primogeniture — the first surviving son succeeded his father.",
          "Rotation among the royal clan's branches."
        ],
        answer: 2
      },
      {
        question: "What famous description was given of Benin's streets by a European visitor in 1604?",
        options: [
          "The city rivalled London in its organisation and cleanliness.",
          "The main street was seven to eight times broader than the Warmoes Street in Amsterdam.",
          "The palace was larger than any building in Paris.",
          "The market could accommodate ten thousand traders at once."
        ],
        answer: 1
      },
      {
        question: "What is the primary feature of the Igbo-Ukwu culture?",
        options: [
          "Monumental stone architecture and city planning.",
          "Advanced bronze and copper craftsmanship, including jewellery and vessels, and a sophisticated burial site.",
          "A centralised monarchy modelled on the Oyo system.",
          "An extensive written literary tradition in Arabic script."
        ],
        answer: 1
      },
      {
        question: "What is the 'potsherd pavement' feature associated with?",
        options: [
          "Igbo-Ukwu burial chambers.",
          "Oyo palace courtyards.",
          "A common artistic feature found in both Ife and Benin cultures.",
          "Trans-Saharan trade route markers."
        ],
        answer: 2
      },
      {
        question: "According to Yoruba tradition, where did the Oduduwa-led party eventually settle?",
        options: ["Oyo-Ile", "Ile-Ife", "Benin City", "Ibadan"],
        answer: 1
      },
      {
        question: "What is the main controversy surrounding the origin of the Yoruba people?",
        options: [
          "Whether they are descended from the Igbo or the Edo peoples.",
          "While some myths suggest an Eastern/Meccan origin, modern scholars urge focusing on the African continent, particularly the region of the Niger Bend.",
          "Whether the Oduduwa migration happened before or after the founding of Oyo.",
          "Whether the Yoruba were originally a matrilineal or patrilineal society."
        ],
        answer: 1
      },
      {
        question: "What are the main features of Ife civilisation?",
        options: [
          "Pyramidal architecture, advanced mathematics, and a written legal code.",
          "Iron-working, craft specialisation, and the production of terra cotta and brass heads.",
          "Maritime trade, ship-building, and an Atlantic trade network.",
          "Cotton weaving, indigo dyeing, and a large textile export industry."
        ],
        answer: 1
      },
      {
        question: "What evidence is used to suggest that the Benin people may have migrated from the East?",
        options: [
          "DNA evidence comparing Benin and Egyptian populations.",
          "Various traditional accounts recorded by Egharevba, which mention an origin in Egypt or Ile-Ife.",
          "Portuguese colonial records from the 16th century.",
          "Archaeological discoveries of identical pottery styles in Ethiopia and Benin."
        ],
        answer: 1
      },
      {
        question: "What is the mythological origin of the Benin ruler according to Benin tradition?",
        options: [
          "The first Oba was a warrior who conquered the indigenous Bini peoples.",
          "The Oba descended directly from Oduduwa of Ile-Ife.",
          "Benin was the youngest child of Osanobua (the High God) who was sent to the world and became owner of the land after following instructions from a bird.",
          "The first Oba was a prince from the Mali Empire who fled a succession war."
        ],
        answer: 2
      },
      {
        question: "Why is Benin often cited as having played a 'major role' in Nigerian history?",
        options: [
          "It was the largest empire in West Africa in terms of territory.",
          "It was the first kingdom in Nigeria to interact with Europeans (1472) and maintained high-level diplomatic exchanges with major European powers.",
          "It produced the most celebrated military generals in Nigerian history.",
          "It was the first Nigerian state to abolish the slave trade independently."
        ],
        answer: 1
      },
      // ── NEW from exam papers ──
      {
        question: "What was the Iyase's role in the Benin Kingdom?",
        options: [
          "The Iyase was the head of the palace guild system.",
          "The Iyase was the leader of the town chiefs (Eghaevbo n'Ore), acting as Prime Minister, and was responsible for conferring titles on chiefs appointed by the Oba.",
          "The Iyase was the commander of the Benin army.",
          "The Iyase was the chief priest responsible for the Oba's coronation."
        ],
        answer: 1
      },
      {
        question: "What were the two categories of the Eghaevbo class of chiefs in Benin?",
        options: [
          "Iwebo and Iweguae.",
          "Eghaevbo n'Ogbe (palace chiefs) and Eghaevbo n'Ore (town chiefs).",
          "Uzama and Eware.",
          "Ibiwe and Oliha."
        ],
        answer: 1
      },
      {
        question: "What were the three palace societies in the Benin Kingdom and what was their general function?",
        options: [
          "Ogboni, Osugbo, and Oro — they managed religious ceremonies.",
          "Iwebo, Iweguae, and Ibiwe — they served the needs of the Oba and his household, each with specific duties.",
          "Uzama, Eghaevbo, and Oliha — they managed the political affairs of the kingdom.",
          "Ojoye, Enogie, and Edaiken — they administered the provinces."
        ],
        answer: 1
      },
      {
        question: "What was the 'Ogiso era' in Benin history?",
        options: [
          "The period of British colonial rule over Benin.",
          "The era of Oranmiyan's dynasty, which founded the present Benin monarchy.",
          "The first period of pre-colonial Benin history, named after the Ogisos (kings of the sky), beginning with Igodo.",
          "The era of maximum Benin expansion under Oba Ewuare."
        ],
        answer: 2
      },
      {
        question: "Who was the first Oba of Benin, and how was he related to Oranmiyan?",
        options: [
          "Ewuare I; he was Oranmiyan's brother.",
          "Eweka I; he was the son of Oranmiyan and a Benin woman.",
          "Igodo; he was a direct descendant of Oranmiyan through three generations.",
          "Oba Adolo; he was Oranmiyan's appointed successor."
        ],
        answer: 1
      },
      {
        question: "What role did the Uzama play during the ascension of a new Oba of Benin?",
        options: [
          "They organised the military parade that accompanied the coronation.",
          "Their leader, the Oliha, was responsible for crowning the Oba upon his ascension to the throne.",
          "They ratified the choice of Oba by popular vote among the chiefs.",
          "They managed the financial arrangements for the coronation ceremony."
        ],
        answer: 1
      },
      {
        question: "Which Oba of Benin is credited with adding the Edaiken (crown prince) to the number of the Uzama?",
        options: ["Oba Eweka I", "Oba Ewuare", "Oba Esigie", "Oba Ozolua"],
        answer: 1
      },
      {
        question: "What was the significance of the guilds created by Ere in Benin?",
        options: [
          "They were military units organised to defend the kingdom from external attack.",
          "They were professional associations (like wood-workers, carvers, and weavers) that held monopolies over the production and standardisation of their respective goods.",
          "They were religious brotherhoods that managed the shrines of the Oba.",
          "They were trading companies that managed Benin's commerce with European merchants."
        ],
        answer: 1
      },
      {
        question: "What event led to the British invasion of Benin in 1897?",
        options: [
          "Benin refused to pay taxes to the Royal Niger Company.",
          "The Oba of Benin ordered the killing of a British trading delegation.",
          "The kingdom had confrontations with the British, which eventually led to the invasion, the deposing of the Oba, and his deportation to Calabar.",
          "Benin formed an alliance with France against British interests."
        ],
        answer: 2
      },
      {
        question: "Which Oba of Benin entered a pact with the British in 1861?",
        options: ["Oba Ewuare", "Oba Adolo", "Oba Ovonramwen", "Oba Akenzua"],
        answer: 1
      },
      {
        question: "According to Onitsha tradition, where did the Onitsha people migrate from?",
        options: ["Ile-Ife", "Benin", "Igbo-Ukwu", "The Niger Delta"],
        answer: 1
      },
      {
        question: "Who founded the Kingdom of Itsekiri, and approximately when?",
        options: [
          "Oranmiyan, around 1400.",
          "Ginuwa (Iginuwa), the son and heir apparent of Oba Olua of Benin, around 1473.",
          "Bayajidda, around 1300.",
          "El-Kanemi, around 1820."
        ],
        answer: 1
      },
      {
        question: "What kind of governing body ruled the Itsekiri Kingdom?",
        options: [
          "A republic governed by elected representatives from each village.",
          "The kingdom was ruled by the Olu, who presided over a council known as the Ojoye, made up of seven nobles/title holders.",
          "A military council headed by the Are-Ona-Kankanfo.",
          "A dual monarchy shared between the Olu and the Iyase."
        ],
        answer: 1
      },
      {
        question: "What is the typical political structure of the Urhobo people?",
        options: [
          "A centralised kingdom ruled by an Obi with a council of chiefs.",
          "A federated system of Emirates modelled on the Sokoto Caliphate.",
          "They are fragmented and do not have a single kingdom; each village has its own traditional institution headed by a ruler known as an Ovie.",
          "They are governed by a rotating council of elders drawn from all Urhobo villages."
        ],
        answer: 2
      },
      {
        question: "Why are the Igbo people historically described as 'acephalous' or 'segmentary'?",
        options: [
          "Because their society was dominated by a warrior caste with no king.",
          "Because they had no centralised states and operated a system of government without kings.",
          "Because their territory was too vast to be governed by a single ruler.",
          "Because they were divided into two rival confederacies with no overall leader."
        ],
        answer: 1
      },
      {
        question: "How was individual status determined in pre-colonial Igbo society?",
        options: [
          "Exclusively by family lineage and royal bloodline.",
          "By the number of wives and children a man had.",
          "Recognition was based on individual capability, hard work, and age, with elders and wealthy/hardworking individuals being highly respected.",
          "By a formal title system administered by the Eze."
        ],
        answer: 2
      },
      {
        question: "What was the 'Amala Oha' in Igbo political organisation?",
        options: [
          "A secret society that adjudicated serious crimes.",
          "A form of general assembly where all adult male members met to perform legislative functions, often in the open village square.",
          "The title given to the most senior elder in an Igbo village.",
          "A council of warriors responsible for the village's defence."
        ],
        answer: 1
      },
      {
        question: "How were 'warrant chiefs' created in Igboland during the British colonial period?",
        options: [
          "They were elected by popular vote in their communities.",
          "They were hereditary rulers whose authority the British decided to recognise.",
          "The British appointed individuals who had assisted them in conquest or served as messengers and carriers to act as 'kings' and preside over their communities.",
          "They were trained in British administrative schools and then assigned to communities."
        ],
        answer: 2
      },
      {
        question: "How did the Izon (Ijaw) people in the Niger Delta area organise their states?",
        options: [
          "They developed a powerful centralised kingdom based in Bonny.",
          "They did not develop a centralised system of government but were characterised by the 'House System' and operated as middlemen in trade with the Europeans.",
          "They were governed by a council of Islamic scholars following their conversion in the 17th century.",
          "They formed a loose confederacy led by a rotating paramount chief."
        ],
        answer: 1
      },
      {
        question: "What is the text's conclusion regarding the relationship between the various peoples of Southern Nigeria before colonial rule?",
        options: [
          "They were in a constant state of warfare and had little meaningful contact.",
          "They had long-standing social, economic, and political relations with each other well before colonial rule, and modern ethnic disharmony is largely a product of colonial and post-colonial politics.",
          "They were unified under a single Yoruba-led confederation.",
          "They had no significant contact until European traders arrived in the 15th century."
        ],
        answer: 1
      }
    ]
  },

  // ── CHAPTER 4 ─────────────────────────────────────────────
  {
    id: "chapter-4",
    title: "Chapter 4: The Oyo Empire",
    questions: [
      {
        question: "What was the title of the head of the Oyo Empire?",
        options: ["Ooni", "Alaafin", "Obi", "Eze"],
        answer: 1
      },
      {
        question: "Who were the 'Ilari' in the Oyo administrative system?",
        options: [
          "Warriors who guarded the palace gates.",
          "Priests of the Sango cult.",
          "Personal agents of the Alaafin stationed in the provinces.",
          "Slave traders who managed external commerce."
        ],
        answer: 2
      },
      {
        question: "What role did the 'Bere' festival play in the Oyo Empire?",
        options: [
          "It marked the coronation of a new Alaafin.",
          "It was an annual event for the renewal of allegiance to the central government, during which provinces sent tributes.",
          "It celebrated the beginning of the farming season.",
          "It was a military parade to display the army's strength."
        ],
        answer: 1
      },
      {
        question: "What was the role of the 'Are-Ona-Kankanfo' in the Oyo Empire?",
        options: [
          "He was the chief priest of the Ogboni cult.",
          "He was the head of the Oyomesi council.",
          "He was the General of the army, tasked with expansion and keeping dissident territories in check.",
          "He was the chief tax collector for the empire."
        ],
        answer: 2
      },
      {
        question: "How was the power of the Alaafin checked in the Oyo constitutional system?",
        options: [
          "By the army generals and palace eunuchs.",
          "By the Oyomesi (a council of seven chiefs) and the Ogboni cult.",
          "By the Bashorun alone.",
          "By representatives of the provinces meeting annually."
        ],
        answer: 1
      },
      {
        question: "What signal was given to an Alaafin if he was to be deposed?",
        options: [
          "A black cloth was placed at his palace gate.",
          "A war drum was beaten in the marketplace.",
          "He was sent an empty calabash and parrot eggs, signifying that the gods and the people rejected him.",
          "His crown was publicly removed by the Bashorun."
        ],
        answer: 2
      },
      {
        question: "What does 'The gods reject you, the people reject you, the earth reject you' signify in Oyo governance?",
        options: [
          "A ceremonial prayer said at the coronation of a new king.",
          "The formal declaration made by the Oyomesi when deposing an Alaafin, which required him to commit suicide.",
          "An oath sworn by the Bashorun upon taking office.",
          "A curse placed on enemies of the empire."
        ],
        answer: 1
      },
      {
        question: "What trade item commonly associated with 'Hausa kola' was traded by the Oyo people?",
        options: ["Palm oil", "Kolanut", "Cotton", "Iron ore"],
        answer: 1
      },
      {
        question: "What was the primary reason for the decline of the Oyo Empire?",
        options: [
          "A European military invasion in the 18th century.",
          "A prolonged drought that destroyed the agricultural base.",
          "Excessive autonomy granted to provinces leading to independence at the first sign of weakness at the centre, combined with civil strife.",
          "The assassination of a series of Alaafins by foreign powers."
        ],
        answer: 2
      },
      {
        question: "Who was Bashorun Gaha, and what did he represent?",
        options: [
          "A military general who expanded the empire to its greatest extent.",
          "A powerful official who exploited the constitution of the Oyo Empire to usurp power, leading to the death of four Alaafins in quick succession.",
          "A religious leader who reformed the Ogboni cult.",
          "A provincial governor who successfully rebelled and founded a new kingdom."
        ],
        answer: 1
      },
      {
        question: "What role did the Ogboni cult play in Oyo administration?",
        options: [
          "They organised annual military campaigns.",
          "They controlled all trade routes in the empire.",
          "They acted as a mediatory body in conflicts between the Alaafin and the Oyomesi, and their approval was required for major decisions.",
          "They performed the coronation ceremony for every new Alaafin."
        ],
        answer: 2
      },
      {
        question: "How did the Alaafin of Oyo gain his revenue?",
        options: [
          "Exclusively through raiding neighbouring kingdoms.",
          "Through agriculture, trade in agricultural and craft products, and the collection of taxes and tributes from provinces.",
          "Through European trading companies that paid annual fees.",
          "By taxing the trans-Saharan trade routes."
        ],
        answer: 1
      },
      {
        question: "What was the impact of the 'Bashorun' position in Oyo politics?",
        options: [
          "The Bashorun served purely as a religious figurehead with no political power.",
          "The Bashorun acted as Prime Minister/head of the Oyomesi, providing a check on the Alaafin's power, but was sometimes prone to abusing that position.",
          "The Bashorun controlled the army and reported directly to the Alaafin.",
          "The Bashorun managed all foreign trade on behalf of the empire."
        ],
        answer: 1
      },
      // ── NEW from exam papers ──
      {
        question: "What was the head of the Oyomesi council called?",
        options: ["Are-Ona-Kankanfo", "Bashorun", "Iyase", "Oliha"],
        answer: 1
      },
      {
        question: "What was the name of the site where Oduduwa and his group landed in Ile-Ife?",
        options: ["Oke Ibadan", "Oke Oramfe", "Oke Bode", "Oke Suna"],
        answer: 1
      },
      {
        question: "Who extricated the Egbas from Oyo domination?",
        options: ["Oranmiyan", "Sodeke", "Bashorun Gaha", "Alaafin Abiodun"],
        answer: 1
      }
    ]
  },

  // ── CHAPTER 5 ─────────────────────────────────────────────
  {
    id: "chapter-5",
    title: "Chapter 5: Colonialism, Trade & Resistance",
    questions: [
      {
        question: "How did the trans-Atlantic slave trade affect the population structure of West Africa?",
        options: [
          "It caused population growth in coastal cities due to increased trade activity.",
          "It caused a significant drain of the most productive age group (young men and women), leading to social instability and economic stagnation.",
          "It had little demographic impact because enslaved people were primarily from other continents.",
          "It led to the urbanisation of interior regions as people fled coastal slave raiders."
        ],
        answer: 1
      },
      {
        question: "What was the primary argument used by colonial powers to justify the 'civilising mission' in Nigeria?",
        options: [
          "They claimed Nigeria's resources were required for European economic survival.",
          "They argued that Nigeria posed a military threat to European interests.",
          "They claimed they were bringing Western education, Christianity, and 'modern' administration to 'primitive' societies.",
          "They stated that Nigerian kingdoms had formally requested European governance."
        ],
        answer: 2
      },
      {
        question: "In what way did the colonial economy shift Nigerian agriculture?",
        options: [
          "It encouraged the mechanisation of food farming to feed a growing population.",
          "It shifted the focus from food crop production for local consumption to the production of cash crops (e.g., groundnuts, palm oil) for export to European industries.",
          "It reduced agricultural output by redirecting labour into mining.",
          "It introduced irrigation systems that expanded arable land."
        ],
        answer: 1
      },
      {
        question: "What was the function of the 'Warrant Chiefs' in Eastern Nigeria?",
        options: [
          "They were traditional rulers who voluntarily allied with the British.",
          "They were individuals appointed by the British to act as intermediaries and enforce colonial policies, as there was no centralised monarchy in Igbo society.",
          "They were British military officers given local titles to win public trust.",
          "They were Islamic scholars appointed to administer Northern Nigeria."
        ],
        answer: 1
      },
      {
        question: "What was a major cause of the Aba Women's Riot of 1929?",
        options: [
          "Protest against the forcible conversion of women to Christianity.",
          "Protest against the introduction of direct taxation on women and the perceived excesses of the Warrant Chief system.",
          "Anger at the British seizure of market lands in Aba.",
          "Opposition to a British law banning traditional female societies."
        ],
        answer: 1
      },
      {
        question: "How did colonial education impact traditional African knowledge systems?",
        options: [
          "It preserved traditional knowledge by documenting it in European libraries.",
          "It created a parallel system that complemented indigenous education.",
          "It marginalized traditional education and social norms, often portraying African history and culture as inferior to Western standards.",
          "It had no significant effect on traditional education as both systems operated independently."
        ],
        answer: 2
      },
      {
        question: "What is the core feature of the 'Indirect Rule' policy?",
        options: [
          "Replacing all indigenous leaders with British-trained administrators.",
          "The use of existing indigenous political structures, such as Emirs or Obas, to implement colonial laws and collect taxes.",
          "Governing through elected local councils formed after British arrival.",
          "Applying British common law directly to all Nigerian subjects."
        ],
        answer: 1
      },
      {
        question: "What was the role of the 'Native Courts' established by the British?",
        options: [
          "To exclusively handle disputes between European traders.",
          "To settle local disputes and enforce colonial regulations based on a blend of indigenous customs and British legal standards.",
          "To prosecute Nigerians who resisted colonial rule.",
          "To manage land allocation for European agricultural enterprises."
        ],
        answer: 1
      },
      {
        question: "What effect did the construction of railways have on Nigerian colonial trade?",
        options: [
          "It allowed Nigerians to travel freely and resist colonial policies.",
          "It had little economic impact as most trade continued by road.",
          "It allowed for the rapid extraction of raw materials from the interior to the coastal ports for shipment to Europe.",
          "It linked Nigeria to the trans-Saharan trade routes for the first time."
        ],
        answer: 2
      },
      {
        question: "What was the purpose of the 'Amalgamation of 1914'?",
        options: [
          "To grant Nigeria self-governance as a federated dominion.",
          "To separate the Muslim North from the Christian South permanently.",
          "To unify the Northern and Southern Protectorates of Nigeria into a single administrative entity for better colonial control and economic efficiency.",
          "To merge Nigeria with the Gold Coast (Ghana) into one colony."
        ],
        answer: 2
      },
      {
        question: "What was the impact of European-introduced currency (British Pound/Shilling) on local economies?",
        options: [
          "It stabilised local economies by giving them a fixed exchange rate.",
          "It replaced traditional trade mediums (like cowries or barter), forcing Nigerians into the colonial monetary economy.",
          "It had little impact as Nigerians continued using traditional currency alongside it.",
          "It enriched Nigerian traders by giving them access to global markets."
        ],
        answer: 1
      },
      {
        question: "What role did Christian missionaries play in the colonial period?",
        options: [
          "They actively opposed British colonial rule in defence of African rights.",
          "They provided Western-style education and healthcare, which often served as conduits for colonial cultural influence.",
          "They confined their activities strictly to religious worship with no social impact.",
          "They helped preserve and document traditional African religious practices."
        ],
        answer: 1
      },
      {
        question: "How did the colonial tax system (Head Tax) affect Nigerian households?",
        options: [
          "It improved household incomes by formalising the labour market.",
          "It encouraged farmers to grow more food crops for sale.",
          "It forced many men to leave their farms to seek wage labour in mines or cash-crop plantations to earn the cash needed to pay taxes.",
          "It had little impact as the British exempted rural farmers from taxation."
        ],
        answer: 2
      },
      {
        question: "What is meant by the 'dual mandate' in the context of British colonial rule?",
        options: [
          "The British policy of ruling through both military force and diplomacy simultaneously.",
          "The colonial power's claim that they were serving both the 'best interests' of the colonised people and the economic interests of the coloniser.",
          "The agreement between Britain and France to divide Nigeria between them.",
          "The dual role of missionaries as both religious leaders and colonial administrators."
        ],
        answer: 1
      },
      {
        question: "How did the introduction of colonial boundaries affect ethnic relations in Nigeria?",
        options: [
          "They neatly separated ethnic groups, reducing inter-ethnic conflict.",
          "They had little effect as Nigerians simply ignored the new borders.",
          "They frequently cut across ethnic and cultural lines, forcing different groups into single administrative units, which often created long-term political tension.",
          "They strengthened ethnic identities by giving each group its own territory."
        ],
        answer: 2
      },
      {
        question: "What was the primary goal of the colonial 'forestry and land ordinances'?",
        options: [
          "To protect Nigerian forests from commercial over-exploitation.",
          "To settle European farmers on productive agricultural land.",
          "To exert control over forest resources and lands, effectively seizing territory previously managed under communal land tenure.",
          "To create nature reserves for scientific research."
        ],
        answer: 2
      },
      {
        question: "What was the political status of the 'Sultan of Sokoto' during the colonial era?",
        options: [
          "He retained full sovereignty and was treated as an equal by the British.",
          "He was arrested and exiled by the British immediately after conquest.",
          "He remained a symbolic and administrative head but was ultimately subservient to the British colonial administration.",
          "He was replaced by a British Resident who adopted the title 'Sultan'."
        ],
        answer: 2
      },
      {
        question: "What does the term 'syncretism' refer to in the context of the Jihad of 1804?",
        options: [
          "The alliance between the Fulani and Hausa peoples against the British.",
          "The mixing of traditional African religious beliefs with Islamic practices, which Usman Dan Fodio sought to eliminate.",
          "The diplomatic agreements between the Sokoto Caliphate and North African states.",
          "The blending of Arabic and Hausa languages in administrative documents."
        ],
        answer: 1
      },
      {
        question: "What major shift occurred in the political landscape of Nigeria due to British occupation?",
        options: [
          "The fragmentation of Nigeria into dozens of independent micro-states.",
          "The movement from diverse, autonomous political systems to a unified, colonial administrative structure.",
          "The empowerment of previously marginalised ethnic groups at the expense of dominant ones.",
          "The establishment of a democratically elected Nigerian parliament."
        ],
        answer: 1
      },
      // ── NEW from exam papers ──
      {
        question: "What were the two kinds of trade that took place in pre-colonial Nigeria?",
        options: [
          "Trans-Saharan trade and trans-Atlantic trade.",
          "Local trade and long-distance trade.",
          "Barter trade and monetary trade.",
          "Coastal trade and interior trade."
        ],
        answer: 1
      },
      {
        question: "Which Northern Nigerian king is remembered for resisting British colonial rule?",
        options: [
          "Mai Idris Alooma.",
          "Usman Dan Fodio.",
          "Attahiru I.",
          "El-Kanemi."
        ],
        answer: 2
      },
      {
        question: "Which Oba ceded Lagos to the British colonialists?",
        options: ["Oba Adolo", "Oba Ovonramwen", "Oba Dosunmu", "Oba Akenzua"],
        answer: 2
      },
      {
        question: "Who was the highest-ranking military officer in Nigeria in January 1966?",
        options: [
          "Brigadier Murtala Muhammed.",
          "Colonel Odumegwu Ojukwu.",
          "Major General Johnson Aguiyi-Ironsi.",
          "General Yakubu Gowon."
        ],
        answer: 2
      },
      {
        question: "Which military head of state introduced the unitary system of government in Nigeria?",
        options: [
          "Yakubu Gowon.",
          "Murtala Muhammed.",
          "Johnson Aguiyi-Ironsi.",
          "Ibrahim Babangida."
        ],
        answer: 2
      },
      {
        question: "What do the acronyms SDP and NRC stand for in Nigerian political history?",
        options: [
          "SDP — Social Democratic Party; NRC — National Republican Convention.",
          "SDP — Socialist Democratic Platform; NRC — Nigerian Republican Congress.",
          "SDP — Social Development Party; NRC — National Reform Council.",
          "SDP — State Democratic Party; NRC — Northern Republican Convention."
        ],
        answer: 0
      },
      {
        question: "What was 'Operation Wetie', and who were the parties involved?",
        options: [
          "A military coup attempt organised by Aguiyi-Ironsi against Balewa.",
          "A political violence campaign that was a fallout of the impasse between Akintola and Awolowo in the Western Region.",
          "A naval blockade organised during the Nigerian Civil War.",
          "A British counter-insurgency operation against Kano resistance fighters."
        ],
        answer: 1
      },
      {
        question: "Which political parties contested the 1979 Nigerian general elections?",
        options: [
          "NPC, NCNC, AG, and NEPU.",
          "NPN, UPN, NPP, GNPP, and PRP.",
          "SDP, NRC, PDP, and AD.",
          "APC, PDP, APGA, and LP."
        ],
        answer: 1
      },
      {
        question: "Who was the opposition politician that contested against Olusegun Obasanjo in the 1999 Nigerian presidential election?",
        options: [
          "Moshood Abiola.",
          "Muhammadu Buhari.",
          "Olu Falae.",
          "Atiku Abubakar."
        ],
        answer: 2
      },
      {
        question: "Which African in the diaspora gave significant impetus to the Nigerian nationalist struggle?",
        options: [
          "W.E.B. Du Bois.",
          "Marcus Garvey.",
          "Kwame Nkrumah.",
          "Jomo Kenyatta."
        ],
        answer: 1
      },
      {
        question: "The West African Pilot newspaper was to Nnamdi Azikiwe as the Negro World was to whom?",
        options: [
          "W.E.B. Du Bois.",
          "Martin Luther King Jr.",
          "Marcus Garvey.",
          "Kwame Nkrumah."
        ],
        answer: 2
      },
      {
        question: "What was one major effect of Islam's spread in Nigeria?",
        options: [
          "The complete replacement of traditional laws with Sharia across all of Nigeria.",
          "The abolition of long-distance trade across Northern Nigeria.",
          "The spread of literacy and education through Arabic writing and Islamic scholarship.",
          "The unification of all Nigerian ethnic groups under a single Islamic state."
        ],
        answer: 2
      }
    ]
  }
];
