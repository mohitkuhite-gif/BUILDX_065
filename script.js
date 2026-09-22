/* ============================================================
   EduConnect Nagpur — script.js
   Vanilla JS only. No frameworks, no build step, no backend.
   ============================================================ */

/* ---------------------------------------------------------
   0. DEMO DATA
   All of the arrays below are hackathon demo data. They are
   clearly labelled as such in the UI and must be verified
   against real/official sources before any real-world use.
--------------------------------------------------------- */

const SCHOLARSHIPS = [
  { id: "s1", name: "Maharashtra Post-Matric Scholarship (SC/ST/OBC)", classes: ["9","10","11","12","ITI","Diploma","UG"], categories: ["SC","ST","OBC"], maxIncome: 250000, minMarks: 0, locations: "Any", deadline: "2026-10-31", amount: "Tuition + maintenance allowance", description: "State scholarship covering tuition fees and a monthly maintenance allowance for reserved-category students." },
  { id: "s2", name: "EWS Merit-cum-Means Scholarship", classes: ["11","12","UG"], categories: ["EWS","General"], maxIncome: 800000, minMarks: 60, locations: "Any", deadline: "2026-11-15", amount: "₹10,000 – ₹20,000 / year", description: "For economically weaker section students who clear 60% or above in the previous exam." },
  { id: "s3", name: "Nagpur Zilla Parishad Girl Child Scholarship", classes: ["9","10","11","12"], categories: ["General","OBC","SC","ST","EWS","Minority"], maxIncome: 300000, minMarks: 50, locations: ["Nagpur Rural","Kamptee","Hingna","Saoner","Katol","Nagpur"], deadline: "2026-09-30", amount: "₹5,000 one-time", description: "District-level scholarship for girl students studying in schools within Nagpur district." },
  { id: "s4", name: "Minority Community Pre-Matric Scholarship", classes: ["9","10"], categories: ["Minority"], maxIncome: 200000, minMarks: 0, locations: "Any", deadline: "2026-10-10", amount: "Up to ₹6,000 / year", description: "Central scheme for students from notified minority communities in classes 9 and 10." },
  { id: "s5", name: "ITI Skill Scholarship — Maharashtra", classes: ["ITI"], categories: ["General","OBC","SC","ST","EWS","Minority"], maxIncome: 400000, minMarks: 0, locations: "Any", deadline: "2026-12-01", amount: "Stipend during training", description: "Monthly stipend for students enrolled in a government ITI trade course." },
  { id: "s6", name: "Single Girl Child Scholarship (CBSE)", classes: ["11","12"], categories: ["General","OBC","SC","ST","EWS","Minority"], maxIncome: 1000000, minMarks: 0, locations: "Any", deadline: "2026-08-31", amount: "₹500 / month", description: "For single girl children of the family studying in CBSE-affiliated schools." },
  { id: "s7", name: "Rural Talent Scholarship — Vidarbha Region", classes: ["9","10","11","12"], categories: ["General","OBC","SC","ST","EWS","Minority"], maxIncome: 350000, minMarks: 70, locations: ["Nagpur Rural","Hingna","Saoner","Katol","Ramtek","Kamptee"], deadline: "2026-09-20", amount: "₹8,000 / year", description: "Merit scholarship for high-scoring students from rural talukas in the Vidarbha region." },
  { id: "s8", name: "Undergraduate Merit Scholarship — Municipal Corporation", classes: ["UG"], categories: ["General","OBC","SC","ST","EWS","Minority"], maxIncome: 600000, minMarks: 75, locations: ["Nagpur"], deadline: "2026-11-30", amount: "₹15,000 / year", description: "Merit scholarship for undergraduate students residing within Nagpur Municipal Corporation limits." },
];

const OPPORTUNITIES = [
  { id: "o1", title: "Electrician Trade — Government ITI Nagpur", type: "ITI", location: "Nagpur", eligibility: "Class 10 pass", skills: "Wiring, motor repair, safety practices", duration: "2 years", description: "Full-time government ITI trade course with hands-on electrical training and campus placement support." },
  { id: "o2", title: "Fitter Trade — Government ITI Kamptee", type: "ITI", location: "Kamptee", eligibility: "Class 10 pass", skills: "Precision fitting, machine tools", duration: "2 years", description: "Core mechanical trade course focused on fitting, filing and machine assembly skills." },
  { id: "o3", title: "Retail Sales Internship — Local Mall Chain", type: "Internship", location: "Nagpur", eligibility: "Class 12 pass or pursuing UG", skills: "Communication, billing, customer service", duration: "3 months", description: "Paid internship in retail operations with a stipend and a letter of experience on completion." },
  { id: "o4", title: "Data Entry Internship — District Office", type: "Internship", location: "Nagpur Rural", eligibility: "Class 12 pass, basic computer skills", skills: "MS Excel, typing, record keeping", duration: "2 months", description: "Internship supporting digitisation of student and welfare-scheme records." },
  { id: "o5", title: "PMKVY Tailoring & Stitching Program", type: "Skill Development", location: "Hingna", eligibility: "Class 8 pass, age 15+", skills: "Tailoring, pattern making", duration: "3 months", description: "Government-funded short-term skilling program under Pradhan Mantri Kaushal Vikas Yojana." },
  { id: "o6", title: "Basic Computer & Digital Literacy Course", type: "Skill Development", location: "Saoner", eligibility: "Open to all, age 14+", skills: "Typing, internet use, MS Office basics", duration: "6 weeks", description: "Free digital literacy course run through the local Common Service Centre." },
  { id: "o7", title: "Mobile Repair Technician Training", type: "Skill Development", location: "Nagpur", eligibility: "Class 10 pass", skills: "Soldering, diagnostics, hardware repair", duration: "4 months", description: "Practical training in smartphone hardware repair with tool kit provided." },
  { id: "o8", title: "Junior Assistant — Local Warehouse", type: "Job", location: "Butibori (Nagpur)", eligibility: "Class 12 pass", skills: "Inventory basics, punctuality", duration: "Full-time", description: "Entry-level warehouse job with on-the-job training in inventory management." },
  { id: "o9", title: "Delivery Associate — E-commerce Hub", type: "Job", location: "Nagpur", eligibility: "Age 18+, two-wheeler licence", skills: "Navigation, time management", duration: "Full-time", description: "Full-time delivery role with fixed monthly pay plus incentives." },
  { id: "o10", title: "Junior Web Developer Trainee", type: "Job", location: "Nagpur", eligibility: "Diploma/UG in any stream, basic coding interest", skills: "HTML, CSS, JavaScript basics", duration: "Full-time (with 1-month training)", description: "Entry-level trainee role at a local IT services company, training provided for freshers." },
];

const RESOURCES = [
  { id: "r1", subject: "Mathematics", title: "Class 10 — Quadratic Equations, Quick Notes", type: "Notes", size: "38 KB", content: "Covers the standard form ax²+bx+c=0, the three solving methods (factoring, completing the square, quadratic formula), and 6 solved examples with common mistakes to avoid. Includes a 10-question practice set at the end." },
  { id: "r2", subject: "Mathematics", title: "Class 9 — Triangles & Congruence Summary", type: "Notes", size: "29 KB", content: "One-page summary of the SSS, SAS, ASA and RHS congruence rules with labelled diagrams described in text, plus 5 short proofs to practice." },
  { id: "r3", subject: "Science", title: "Class 10 — Life Processes, Short Notes", type: "Notes", size: "44 KB", content: "Simplified notes on nutrition, respiration, transportation and excretion in living organisms, written in short bullet points for quick revision before exams." },
  { id: "r4", subject: "Science", title: "Class 9 — Structure of the Atom, Key Points", type: "Notes", size: "31 KB", content: "Covers Dalton, Thomson, Rutherford and Bohr's models, valency, and how to calculate the number of protons, neutrons and electrons." },
  { id: "r5", subject: "English", title: "Grammar Basics — Tenses Cheat Sheet", type: "Notes", size: "22 KB", content: "All 12 tense forms with one example sentence each, plus a simple decision flow for picking the right tense in a sentence." },
  { id: "r6", subject: "English", title: "Formal Letter & Application Writing Guide", type: "Notes", size: "26 KB", content: "Step-by-step format for formal letters, job applications and scholarship request letters, with one fully worked sample letter." },
  { id: "r7", subject: "Career Skills", title: "How to Fill a Scholarship Form Correctly", type: "Guide", size: "18 KB", content: "A checklist of documents usually needed (income certificate, caste certificate, marksheet, bank passbook) and common reasons applications get rejected." },
  { id: "r8", subject: "Career Skills", title: "Writing a Simple Resume for Your First Job", type: "Guide", size: "20 KB", content: "A one-page resume template in plain text with sections for contact details, education, skills and a short objective line." },
  { id: "r9", subject: "Computer Basics", title: "Using Email & Google Forms — Beginner Guide", type: "Notes", size: "24 KB", content: "Step-by-step instructions for creating an email account, attaching documents, and filling online forms — useful for scholarship and job applications." },
];

/* ---------------------------------------------------------
   1. TRANSLATIONS (English / Hindi / Marathi)
   Covers navigation, headings and primary buttons as required.
   Anything not listed here simply stays in English.
--------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_dashboard: "Dashboard", nav_scholarships: "Scholarships",
    nav_attendance: "Attendance", nav_risk: "Dropout Risk", nav_career: "Careers", nav_resources: "Learning",
    hero_eyebrow: "Built for students in Nagpur",
    hero_title: "One place to find the scholarship, class and career path you didn't know existed.",
    hero_sub: "EduConnect Nagpur brings scholarships, attendance tracking, early dropout warnings, ITI & job listings and low-data study notes into a single, light-weight platform — built for slow connections and first-generation learners.",
    hero_cta_primary: "Open my dashboard", hero_cta_secondary: "Find a scholarship",
    stat_cost: "cost to use, ever", stat_langs: "languages supported", stat_size: "total page weight",
    problem_title: "The problem",
    problem_1: "Scholarship information is scattered across dozens of portals and notice boards, so eligible students miss deadlines.",
    problem_2: "Teachers track attendance on paper, so students sliding toward dropout go unnoticed until it's too late.",
    problem_3: "Rural and municipal-school students rarely hear about ITI courses, internships or entry-level jobs nearby.",
    problem_4: "Study material online is often heavy, ad-filled and unusable on a slow connection.",
    solution_title: "What EduConnect does",
    solution_1: "Matches students to scholarships instantly, using marks, income, category and location.",
    solution_2: "Gives teachers a live attendance dashboard with automatic low-attendance warnings.",
    solution_3: "Flags rising dropout risk early with a transparent, explainable scoring model.",
    solution_4: "Lists ITI courses, internships and local jobs students can search and filter.",
    solution_5: "Hosts lightweight notes that load fast, even on 2G.",
    features_title: "Six tools, one login-free platform",
    feat_dash_title: "Student Dashboard", feat_dash_desc: "One screen with your attendance, risk level, top scholarships and saved profile.",
    feat_sch_title: "Scholarship Finder", feat_sch_desc: "Enter your marks, income and category to see which scholarships you qualify for.",
    feat_att_title: "Attendance Tracker", feat_att_desc: "Subject-wise attendance with live percentages and low-attendance alerts.",
    feat_risk_title: "Dropout Risk Alert", feat_risk_desc: "A transparent, rule-based indicator that shows exactly why a student is at risk.",
    feat_career_title: "Career & Opportunity Hub", feat_career_desc: "Search ITI courses, internships, skilling programs and local jobs.",
    feat_res_title: "Low-Data Learning", feat_res_desc: "Short, text-first notes by subject that stay usable on a weak connection.",
    impact_title: "Why it matters",
    impact_1: "students eligible for a scholarship never apply, simply because they never heard about it.",
    impact_2: "attendance is the usual cut-off for exam eligibility — yet it's rarely visible to students in real time.",
    impact_3: "intervention on dropout risk is far more effective than action taken after a student has already left.",
    dash_heading: "Student Dashboard", dash_sub: "Save your details once — every other tool on this site uses them automatically.",
    dash_form_title: "Your profile",
    label_name: "Full name", label_class: "Class / course", label_marks: "Marks / percentage",
    label_income: "Family income (₹ / year)", label_category: "Category", label_location: "Location (area / taluka)",
    btn_save_profile: "Save profile", btn_clear: "Clear saved data",
    dash_form_note: "Saved only on this device, using your browser's local storage. Nothing is sent anywhere.",
    dash_empty_title: "No profile saved yet",
    dash_empty_desc: "Fill in the form and save it — your scholarships, attendance, risk level and career matches will appear here.",
    dash_welcome: "Welcome,",
    dash_tile_attendance: "Attendance", dash_tile_risk: "Dropout risk", dash_tile_scholarships: "Scholarship matches", dash_tile_career: "Career opportunities",
    dash_flow_title: "Suggested next steps",
    dash_step_sch: "Check your scholarship matches →", dash_step_att: "Log this week's attendance →",
    dash_step_risk: "Run a dropout risk check →", dash_step_career: "Browse ITI courses & internships →",
    dash_step_res: "Open today's study notes →",
    sch_heading: "Scholarship Finder", sch_sub: "Demo dataset of common scholarship types. Always confirm details on the official scheme website before applying.",
    sch_form_title: "Your details", btn_find_scholarships: "Find scholarships", btn_use_profile: "Use saved profile",
    sch_demo_note: "⚠ Demo data only. Verify eligibility, amounts and deadlines on the official scholarship portal before applying.",
    sch_placeholder: "Fill in the form and click \"Find scholarships\" to see your matches here.",
    att_heading: "Attendance Tracker", att_sub: "Add each subject once — percentages and warnings update automatically as you edit them.",
    att_total: "Total classes", att_attended: "Attended", att_percentage: "Overall attendance",
    att_add_title: "Add / update a subject", label_subject: "Subject name",
    label_total_classes: "Total classes held", label_attended_classes: "Classes attended", btn_save_subject: "Save subject",
    att_list_title: "Subject-wise attendance", att_placeholder: "No subjects added yet. Use the form to add your first subject.",
    risk_heading: "Dropout Risk Alert", risk_sub: "A transparent, rule-based demo indicator — not a medical or scientifically validated prediction.",
    risk_form_title: "Enter the latest figures", label_risk_attendance: "Attendance percentage",
    label_risk_absences: "Absences in the last 30 days", label_risk_marks: "Recent academic performance (%)",
    label_risk_assignments: "Assignment completion (%)", btn_analyze_risk: "Analyze risk", btn_use_attendance: "Use saved attendance",
    risk_placeholder: "Enter the figures on the left and click \"Analyze risk\" to see the result here.",
    risk_score_label: "Risk score:", risk_reasons_title: "Contributing factors", risk_actions_title: "Suggested next steps",
    risk_demo_note: "⚠ This is a demo rule-based indicator built for this hackathon. It is not a medical, psychological or scientifically validated prediction — use it only as a conversation starter between teacher and student.",
    career_heading: "Career & Opportunity Hub", career_sub: "Demo listings of ITI courses, internships, skilling programs and entry-level jobs around Nagpur.",
    career_demo_note: "⚠ Demo data for this hackathon prototype. In production this would connect to live listings from ITI boards, NCS and local employers.",
    career_no_results: "No opportunities match your search. Try clearing a filter.",
    res_heading: "Low-Data Learning Resources", res_sub: "Text-first notes, built to stay light on a slow connection.",
    res_no_results: "No resources match your search.",
    footer_tagline: "A student-built platform for scholarships, attendance and career discovery.",
    footer_note: "Prototype built for a student hackathon. All scholarship, career and resource data shown is demo data.",
  },
  hi: {
    nav_home: "होम", nav_dashboard: "डैशबोर्ड", nav_scholarships: "छात्रवृत्ति",
    nav_attendance: "उपस्थिति", nav_risk: "ड्रॉपआउट जोखिम", nav_career: "करियर", nav_resources: "अध्ययन सामग्री",
    hero_eyebrow: "नागपुर के छात्रों के लिए",
    hero_title: "छात्रवृत्ति, उपस्थिति और करियर के रास्ते खोजने के लिए एक ही मंच।",
    hero_sub: "EduConnect Nagpur छात्रवृत्ति, उपस्थिति ट्रैकिंग, ड्रॉपआउट चेतावनी, ITI व नौकरी सूची और हल्के डेटा वाले नोट्स को एक ही मंच पर लाता है।",
    hero_cta_primary: "डैशबोर्ड खोलें", hero_cta_secondary: "छात्रवृत्ति खोजें",
    stat_cost: "उपयोग की लागत", stat_langs: "समर्थित भाषाएँ", stat_size: "कुल पेज आकार",
    problem_title: "समस्या",
    problem_1: "छात्रवृत्ति की जानकारी कई पोर्टलों में बिखरी होती है, जिससे पात्र छात्र समय सीमा चूक जाते हैं।",
    problem_2: "शिक्षक कागज़ पर उपस्थिति दर्ज करते हैं, इसलिए जोखिम वाले छात्र समय पर नहीं पहचाने जाते।",
    problem_3: "ग्रामीण छात्रों को ITI कोर्स, इंटर्नशिप व नौकरियों की जानकारी कम मिलती है।",
    problem_4: "ऑनलाइन अध्ययन सामग्री अक्सर भारी और धीमे इंटरनेट पर उपयोग में कठिन होती है।",
    solution_title: "EduConnect क्या करता है",
    solution_1: "अंक, आय, श्रेणी और स्थान के आधार पर तुरंत छात्रवृत्ति सुझाता है।",
    solution_2: "शिक्षकों को लाइव उपस्थिति डैशबोर्ड और चेतावनी देता है।",
    solution_3: "पारदर्शी नियम-आधारित मॉडल से ड्रॉपआउट जोखिम पहले पहचानता है।",
    solution_4: "ITI कोर्स, इंटर्नशिप और स्थानीय नौकरियाँ खोजने की सुविधा देता है।",
    solution_5: "हल्के नोट्स प्रदान करता है जो धीमे इंटरनेट पर भी जल्दी खुलते हैं।",
    features_title: "छह उपकरण, एक मंच",
    feat_dash_title: "छात्र डैशबोर्ड", feat_dash_desc: "उपस्थिति, जोखिम स्तर, छात्रवृत्ति और प्रोफ़ाइल एक ही स्क्रीन पर।",
    feat_sch_title: "छात्रवृत्ति खोजक", feat_sch_desc: "अपने अंक, आय और श्रेणी दर्ज करें और योग्य छात्रवृत्तियाँ देखें।",
    feat_att_title: "उपस्थिति ट्रैकर", feat_att_desc: "विषयवार उपस्थिति प्रतिशत और कम-उपस्थिति चेतावनी।",
    feat_risk_title: "ड्रॉपआउट जोखिम चेतावनी", feat_risk_desc: "पारदर्शी नियम-आधारित संकेतक जो जोखिम के कारण दिखाता है।",
    feat_career_title: "करियर केंद्र", feat_career_desc: "ITI कोर्स, इंटर्नशिप, कौशल कार्यक्रम और स्थानीय नौकरियाँ खोजें।",
    feat_res_title: "हल्के डेटा में अध्ययन", feat_res_desc: "विषयवार संक्षिप्त नोट्स जो धीमे इंटरनेट पर भी चलें।",
    impact_title: "यह क्यों मायने रखता है",
    impact_1: "पात्र छात्र कभी आवेदन नहीं करते क्योंकि उन्हें जानकारी ही नहीं मिलती।",
    impact_2: "परीक्षा पात्रता के लिए उपस्थिति की सीमा है — पर यह शायद ही कभी छात्रों को वास्तविक समय में दिखती है।",
    impact_3: "समय पर हस्तक्षेप, बाद की कार्रवाई से कहीं अधिक प्रभावी होता है।",
    dash_heading: "छात्र डैशबोर्ड", dash_sub: "अपनी जानकारी एक बार सहेजें — बाकी सभी उपकरण इसका उपयोग करेंगे।",
    dash_form_title: "आपकी प्रोफ़ाइल",
    label_name: "पूरा नाम", label_class: "कक्षा / कोर्स", label_marks: "अंक / प्रतिशत",
    label_income: "पारिवारिक आय (₹ / वर्ष)", label_category: "श्रेणी", label_location: "स्थान (क्षेत्र / तालुका)",
    btn_save_profile: "प्रोफ़ाइल सहेजें", btn_clear: "सहेजा डेटा हटाएँ",
    dash_form_note: "केवल इस डिवाइस पर सहेजा गया, कहीं भेजा नहीं जाता।",
    dash_empty_title: "अभी कोई प्रोफ़ाइल सहेजी नहीं गई",
    dash_empty_desc: "फ़ॉर्म भरें और सहेजें — आपकी छात्रवृत्ति, उपस्थिति, जोखिम और करियर सुझाव यहाँ दिखेंगे।",
    dash_welcome: "स्वागत है,",
    dash_tile_attendance: "उपस्थिति", dash_tile_risk: "ड्रॉपआउट जोखिम", dash_tile_scholarships: "छात्रवृत्ति मिलान", dash_tile_career: "करियर अवसर",
    dash_flow_title: "अगले सुझाए गए कदम",
    dash_step_sch: "अपनी छात्रवृत्ति देखें →", dash_step_att: "इस सप्ताह की उपस्थिति दर्ज करें →",
    dash_step_risk: "ड्रॉपआउट जोखिम जाँच करें →", dash_step_career: "ITI कोर्स व इंटर्नशिप देखें →",
    dash_step_res: "आज के नोट्स खोलें →",
    sch_heading: "छात्रवृत्ति खोजक", sch_sub: "यह डेमो डेटा है। आवेदन से पहले आधिकारिक वेबसाइट पर पुष्टि करें।",
    sch_form_title: "आपका विवरण", btn_find_scholarships: "छात्रवृत्ति खोजें", btn_use_profile: "सहेजी प्रोफ़ाइल उपयोग करें",
    sch_demo_note: "⚠ केवल डेमो डेटा। आवेदन से पहले आधिकारिक पोर्टल पर पात्रता, राशि व तिथि जाँचें।",
    sch_placeholder: "फ़ॉर्म भरें और \"छात्रवृत्ति खोजें\" दबाएँ।",
    att_heading: "उपस्थिति ट्रैकर", att_sub: "प्रत्येक विषय एक बार जोड़ें — प्रतिशत अपने-आप अपडेट होगा।",
    att_total: "कुल कक्षाएँ", att_attended: "उपस्थित", att_percentage: "कुल उपस्थिति",
    att_add_title: "विषय जोड़ें / अपडेट करें", label_subject: "विषय का नाम",
    label_total_classes: "कुल कक्षाएँ", label_attended_classes: "उपस्थित कक्षाएँ", btn_save_subject: "विषय सहेजें",
    att_list_title: "विषयवार उपस्थिति", att_placeholder: "अभी कोई विषय नहीं जोड़ा गया।",
    risk_heading: "ड्रॉपआउट जोखिम चेतावनी", risk_sub: "पारदर्शी नियम-आधारित डेमो संकेतक — चिकित्सकीय भविष्यवाणी नहीं।",
    risk_form_title: "नवीनतम आंकड़े दर्ज करें", label_risk_attendance: "उपस्थिति प्रतिशत",
    label_risk_absences: "पिछले 30 दिनों में अनुपस्थिति", label_risk_marks: "हाल का शैक्षणिक प्रदर्शन (%)",
    label_risk_assignments: "असाइनमेंट पूर्णता (%)", btn_analyze_risk: "जोखिम जाँचें", btn_use_attendance: "सहेजी उपस्थिति उपयोग करें",
    risk_placeholder: "बाईं ओर आंकड़े दर्ज करें और \"जोखिम जाँचें\" दबाएँ।",
    risk_score_label: "जोखिम स्कोर:", risk_reasons_title: "योगदान देने वाले कारक", risk_actions_title: "सुझाए गए कदम",
    risk_demo_note: "⚠ यह एक डेमो नियम-आधारित संकेतक है, चिकित्सकीय भविष्यवाणी नहीं।",
    career_heading: "करियर केंद्र", career_sub: "नागपुर के आसपास ITI, इंटर्नशिप, कौशल कार्यक्रम व नौकरियों की डेमो सूची।",
    career_demo_note: "⚠ यह डेमो डेटा है। वास्तविक उपयोग में यह लाइव सूची से जुड़ेगा।",
    career_no_results: "कोई अवसर मेल नहीं खाता। फ़िल्टर हटाकर देखें।",
    res_heading: "हल्के डेटा में अध्ययन सामग्री", res_sub: "धीमे इंटरनेट पर भी चलने वाले संक्षिप्त नोट्स।",
    res_no_results: "कोई सामग्री मेल नहीं खाती।",
    footer_tagline: "छात्रों द्वारा बनाया गया छात्रवृत्ति व करियर खोज मंच।",
    footer_note: "यह एक हैकाथॉन प्रोटोटाइप है। सभी डेटा डेमो है।",
  },
  mr: {
    nav_home: "मुख्यपृष्ठ", nav_dashboard: "डॅशबोर्ड", nav_scholarships: "शिष्यवृत्ती",
    nav_attendance: "उपस्थिती", nav_risk: "गळती धोका", nav_career: "करिअर", nav_resources: "अभ्यास साहित्य",
    hero_eyebrow: "नागपूरच्या विद्यार्थ्यांसाठी",
    hero_title: "शिष्यवृत्ती, उपस्थिती आणि करिअर संधी शोधण्यासाठी एकच व्यासपीठ.",
    hero_sub: "EduConnect Nagpur शिष्यवृत्ती, उपस्थिती ट्रॅकिंग, गळती इशारे, ITI व नोकरी यादी आणि हलक्या डेटातील नोट्स एकाच ठिकाणी आणते.",
    hero_cta_primary: "डॅशबोर्ड उघडा", hero_cta_secondary: "शिष्यवृत्ती शोधा",
    stat_cost: "वापराची किंमत", stat_langs: "समर्थित भाषा", stat_size: "पानाचा आकार",
    problem_title: "समस्या",
    problem_1: "शिष्यवृत्तीची माहिती अनेक पोर्टलवर विखुरलेली असते, त्यामुळे पात्र विद्यार्थी मुदत चुकवतात.",
    problem_2: "शिक्षक कागदावर उपस्थिती नोंदवतात, त्यामुळे धोक्यातील विद्यार्थी वेळेत ओळखले जात नाहीत.",
    problem_3: "ग्रामीण विद्यार्थ्यांना ITI अभ्यासक्रम, इंटर्नशिप व नोकऱ्यांची माहिती कमी मिळते.",
    problem_4: "ऑनलाइन अभ्यास साहित्य अनेकदा जड व संथ इंटरनेटवर वापरण्यास कठीण असते.",
    solution_title: "EduConnect काय करते",
    solution_1: "गुण, उत्पन्न, प्रवर्ग व स्थान वापरून त्वरित शिष्यवृत्ती सुचवते.",
    solution_2: "शिक्षकांना थेट उपस्थिती डॅशबोर्ड व इशारे देते.",
    solution_3: "पारदर्शक नियम-आधारित पद्धतीने गळतीचा धोका आधीच ओळखते.",
    solution_4: "ITI अभ्यासक्रम, इंटर्नशिप व स्थानिक नोकऱ्या शोधण्याची सुविधा देते.",
    solution_5: "संथ इंटरनेटवरही जलद उघडणाऱ्या हलक्या नोट्स पुरवते.",
    features_title: "सहा साधने, एक व्यासपीठ",
    feat_dash_title: "विद्यार्थी डॅशबोर्ड", feat_dash_desc: "उपस्थिती, धोका पातळी, शिष्यवृत्ती व प्रोफाइल एकाच पडद्यावर.",
    feat_sch_title: "शिष्यवृत्ती शोधक", feat_sch_desc: "गुण, उत्पन्न व प्रवर्ग टाकून पात्र शिष्यवृत्ती पहा.",
    feat_att_title: "उपस्थिती ट्रॅकर", feat_att_desc: "विषयनिहाय उपस्थिती टक्केवारी व कमी-उपस्थिती इशारे.",
    feat_risk_title: "गळती धोका इशारा", feat_risk_desc: "धोक्याची कारणे दाखवणारा पारदर्शक नियम-आधारित निर्देशक.",
    feat_career_title: "करिअर केंद्र", feat_career_desc: "ITI अभ्यासक्रम, इंटर्नशिप, कौशल्य कार्यक्रम व स्थानिक नोकऱ्या शोधा.",
    feat_res_title: "हलक्या डेटातील अभ्यास", feat_res_desc: "संथ इंटरनेटवरही चालणाऱ्या संक्षिप्त विषयनिहाय नोट्स.",
    impact_title: "हे महत्त्वाचे का आहे",
    impact_1: "पात्र विद्यार्थी माहितीअभावी अर्जच करत नाहीत.",
    impact_2: "परीक्षा पात्रतेसाठी उपस्थितीची मर्यादा आहे — पण ती विद्यार्थ्यांना क्वचितच रिअल-टाइममध्ये दिसते.",
    impact_3: "वेळेवर केलेली मदत ही नंतरच्या कारवाईपेक्षा अधिक परिणामकारक असते.",
    dash_heading: "विद्यार्थी डॅशबोर्ड", dash_sub: "माहिती एकदा जतन करा — इतर सर्व साधने आपोआप वापरतील.",
    dash_form_title: "तुमची प्रोफाइल",
    label_name: "पूर्ण नाव", label_class: "इयत्ता / अभ्यासक्रम", label_marks: "गुण / टक्केवारी",
    label_income: "कौटुंबिक उत्पन्न (₹ / वर्ष)", label_category: "प्रवर्ग", label_location: "स्थान (परिसर / तालुका)",
    btn_save_profile: "प्रोफाइल जतन करा", btn_clear: "जतन केलेला डेटा काढा",
    dash_form_note: "फक्त या डिव्हाइसवर जतन होते, कुठेही पाठवले जात नाही.",
    dash_empty_title: "अद्याप प्रोफाइल जतन केलेली नाही",
    dash_empty_desc: "फॉर्म भरून जतन करा — तुमच्या शिष्यवृत्ती, उपस्थिती, धोका व करिअर सूचना इथे दिसतील.",
    dash_welcome: "स्वागत आहे,",
    dash_tile_attendance: "उपस्थिती", dash_tile_risk: "गळती धोका", dash_tile_scholarships: "शिष्यवृत्ती जुळणी", dash_tile_career: "करिअर संधी",
    dash_flow_title: "पुढील सुचवलेली पावले",
    dash_step_sch: "तुमच्या शिष्यवृत्ती पहा →", dash_step_att: "या आठवड्याची उपस्थिती नोंदवा →",
    dash_step_risk: "गळती धोका तपासा →", dash_step_career: "ITI व इंटर्नशिप पहा →",
    dash_step_res: "आजच्या नोट्स उघडा →",
    sch_heading: "शिष्यवृत्ती शोधक", sch_sub: "हा डेमो डेटा आहे. अर्ज करण्यापूर्वी अधिकृत संकेतस्थळावर खात्री करा.",
    sch_form_title: "तुमचा तपशील", btn_find_scholarships: "शिष्यवृत्ती शोधा", btn_use_profile: "जतन केलेली प्रोफाइल वापरा",
    sch_demo_note: "⚠ फक्त डेमो डेटा. अर्जापूर्वी अधिकृत पोर्टलवर पात्रता, रक्कम व मुदत तपासा.",
    sch_placeholder: "फॉर्म भरा आणि \"शिष्यवृत्ती शोधा\" दाबा.",
    att_heading: "उपस्थिती ट्रॅकर", att_sub: "प्रत्येक विषय एकदा जोडा — टक्केवारी आपोआप अद्ययावत होईल.",
    att_total: "एकूण तास", att_attended: "उपस्थित", att_percentage: "एकूण उपस्थिती",
    att_add_title: "विषय जोडा / अद्ययावत करा", label_subject: "विषयाचे नाव",
    label_total_classes: "एकूण तास", label_attended_classes: "उपस्थित तास", btn_save_subject: "विषय जतन करा",
    att_list_title: "विषयनिहाय उपस्थिती", att_placeholder: "अद्याप कोणताही विषय जोडलेला नाही.",
    risk_heading: "गळती धोका इशारा", risk_sub: "पारदर्शक नियम-आधारित डेमो निर्देशक — वैद्यकीय भाकीत नाही.",
    risk_form_title: "अलीकडील आकडेवारी टाका", label_risk_attendance: "उपस्थिती टक्केवारी",
    label_risk_absences: "गेल्या ३० दिवसांतील गैरहजेरी", label_risk_marks: "अलीकडील शैक्षणिक कामगिरी (%)",
    label_risk_assignments: "असाइनमेंट पूर्णता (%)", btn_analyze_risk: "धोका तपासा", btn_use_attendance: "जतन केलेली उपस्थिती वापरा",
    risk_placeholder: "डावीकडे आकडेवारी टाका आणि \"धोका तपासा\" दाबा.",
    risk_score_label: "धोका गुण:", risk_reasons_title: "कारणीभूत घटक", risk_actions_title: "सुचवलेली पावले",
    risk_demo_note: "⚠ हा हॅकेथॉनसाठी बनवलेला डेमो नियम-आधारित निर्देशक आहे, वैद्यकीय भाकीत नाही.",
    career_heading: "करिअर केंद्र", career_sub: "नागपूर परिसरातील ITI, इंटर्नशिप, कौशल्य कार्यक्रम व नोकऱ्यांची डेमो यादी.",
    career_demo_note: "⚠ हा डेमो डेटा आहे. प्रत्यक्षात ही थेट यादीशी जोडली जाईल.",
    career_no_results: "कोणतीही संधी जुळत नाही. फिल्टर काढून पहा.",
    res_heading: "हलक्या डेटातील अभ्यास साहित्य", res_sub: "संथ इंटरनेटवरही चालणाऱ्या संक्षिप्त नोट्स.",
    res_no_results: "कोणतेही साहित्य जुळत नाही.",
    footer_tagline: "विद्यार्थ्यांनी तयार केलेले शिष्यवृत्ती व करिअर शोध व्यासपीठ.",
    footer_note: "हा एक विद्यार्थी हॅकेथॉन प्रोटोटाइप आहे. दाखवलेला सर्व डेटा डेमो आहे.",
  },
};

/* ---------------------------------------------------------
   2. STATE + LOCAL STORAGE HELPERS
--------------------------------------------------------- */
const STORAGE_KEYS = {
  profile: "educonnect_profile",
  attendance: "educonnect_attendance",
  lang: "educonnect_lang",
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn("Could not read from localStorage:", key, e);
    return fallback;
  }
}
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn("Could not write to localStorage:", key, e);
    return false;
  }
}

let state = {
  profile: loadJSON(STORAGE_KEYS.profile, null),
  subjects: loadJSON(STORAGE_KEYS.attendance, []), // [{name, total, attended}]
  lang: loadJSON(STORAGE_KEYS.lang, "en"),
};

/* ---------------------------------------------------------
   3. TOAST NOTIFICATIONS
--------------------------------------------------------- */
let toastTimer = null;
function showToast(message, type) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.className = "toast show" + (type ? " " + type : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = "toast"; }, 2800);
}

/* ---------------------------------------------------------
   4. NAVIGATION (view switching)
--------------------------------------------------------- */
function showView(viewName) {
  const views = document.querySelectorAll(".view");
  views.forEach((v) => v.classList.remove("active"));
  const target = document.getElementById("view-" + viewName);
  if (target) {
    target.classList.add("active");
  } else {
    document.getElementById("view-home").classList.add("active");
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === viewName);
  });

  // Close mobile menu after navigating
  document.getElementById("navLinks").classList.remove("open");
  document.getElementById("hamburgerBtn").setAttribute("aria-expanded", "false");

  window.scrollTo({ top: 0, behavior: "smooth" });
  window.location.hash = viewName;

  // Refresh view-specific content whenever it becomes visible
  if (viewName === "dashboard") renderDashboard();
  if (viewName === "attendance") renderAttendance();
  if (viewName === "career") renderCareer();
  if (viewName === "resources") renderResources();
}

function initNavigation() {
  document.querySelectorAll("[data-view-link]").forEach((el) => {
    el.addEventListener("click", () => showView(el.dataset.viewLink));
  });

  const hamburger = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  const initialView = (window.location.hash || "#home").replace("#", "");
  showView(initialView || "home");
}

/* ---------------------------------------------------------
   5. LANGUAGE SWITCHING
--------------------------------------------------------- */
function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  state.lang = lang;
  saveJSON(STORAGE_KEYS.lang, lang);
}

function initLanguage() {
  const select = document.getElementById("langSelect");
  select.value = state.lang;
  applyLanguage(state.lang);
  select.addEventListener("change", () => applyLanguage(select.value));
}

/* ---------------------------------------------------------
   6. FORM VALIDATION HELPERS
--------------------------------------------------------- */
function setFieldError(inputId, message) {
  const errEl = document.getElementById("err-" + inputId);
  if (errEl) errEl.textContent = message || "";
  const inputEl = document.getElementById(inputId);
  if (inputEl) inputEl.dataset.touched = "true";
}

/** Validates a set of {id, rules} and returns true if all pass. */
function validateFields(fields) {
  let allValid = true;
  fields.forEach(({ id, value, required, min, max, label }) => {
    let error = "";
    if (required && (value === "" || value === null || value === undefined)) {
      error = (label || "This field") + " is required.";
    } else if (min !== undefined && value !== "" && Number(value) < min) {
      error = "Value must be at least " + min + ".";
    } else if (max !== undefined && value !== "" && Number(value) > max) {
      error = "Value must be at most " + max + ".";
    }
    setFieldError(id, error);
    if (error) allValid = false;
  });
  return allValid;
}

/* ---------------------------------------------------------
   7. STUDENT PROFILE (Dashboard form)
--------------------------------------------------------- */
function initProfileForm() {
  const form = document.getElementById("profileForm");

  if (state.profile) fillProfileForm(state.profile);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("profileName").value.trim();
    const studentClass = document.getElementById("profileClass").value;
    const marks = document.getElementById("profileMarks").value;
    const income = document.getElementById("profileIncome").value;
    const category = document.getElementById("profileCategory").value;
    const location = document.getElementById("profileLocation").value.trim();

    const valid = validateFields([
      { id: "profileName", value: name, required: true, label: "Full name" },
      { id: "profileClass", value: studentClass, required: true, label: "Class" },
      { id: "profileMarks", value: marks, required: true, min: 0, max: 100, label: "Marks" },
      { id: "profileIncome", value: income, required: true, min: 0, label: "Income" },
      { id: "profileCategory", value: category, required: true, label: "Category" },
      { id: "profileLocation", value: location, required: true, label: "Location" },
    ]);
    if (!valid) { showToast("Please fix the highlighted fields.", "error"); return; }

    state.profile = {
      name, class: studentClass, marks: Number(marks), income: Number(income), category, location,
    };
    saveJSON(STORAGE_KEYS.profile, state.profile);
    showToast("Profile saved.", "success");
    renderDashboard();
  });

  document.getElementById("clearProfileBtn").addEventListener("click", () => {
    if (!confirm("Clear your saved profile and attendance data from this device?")) return;
    state.profile = null;
    state.subjects = [];
    localStorage.removeItem(STORAGE_KEYS.profile);
    localStorage.removeItem(STORAGE_KEYS.attendance);
    form.reset();
    renderDashboard();
    renderAttendance();
    showToast("Saved data cleared.");
  });
}

function fillProfileForm(profile) {
  document.getElementById("profileName").value = profile.name || "";
  document.getElementById("profileClass").value = profile.class || "";
  document.getElementById("profileMarks").value = profile.marks ?? "";
  document.getElementById("profileIncome").value = profile.income ?? "";
  document.getElementById("profileCategory").value = profile.category || "";
  document.getElementById("profileLocation").value = profile.location || "";
}

/* ---------------------------------------------------------
   8. DASHBOARD RENDERING
--------------------------------------------------------- */
function computeOverallAttendance() {
  const totals = state.subjects.reduce(
    (acc, s) => { acc.total += Number(s.total) || 0; acc.attended += Number(s.attended) || 0; return acc; },
    { total: 0, attended: 0 }
  );
  const pct = totals.total > 0 ? (totals.attended / totals.total) * 100 : null;
  return { ...totals, pct };
}

function countEligibleScholarships(profile) {
  if (!profile) return 0;
  return SCHOLARSHIPS.filter((s) => scholarshipEligibility(s, profile).eligible).length;
}

function renderDashboard() {
  const empty = document.getElementById("dashEmptyState");
  const filled = document.getElementById("dashFilled");

  if (!state.profile) {
    empty.classList.remove("hidden");
    filled.classList.add("hidden");
    return;
  }
  empty.classList.add("hidden");
  filled.classList.remove("hidden");

  const p = state.profile;
  document.getElementById("dashName").textContent = p.name;
  document.getElementById("dashMeta").textContent =
    `Class/course: ${p.class} · Category: ${p.category} · Location: ${p.location}`;

  const att = computeOverallAttendance();
  const attValueEl = document.getElementById("dashAttendanceValue");
  const attBarEl = document.getElementById("dashAttendanceBar");
  if (att.pct === null) {
    attValueEl.textContent = "No data yet";
    attBarEl.style.width = "0%";
  } else {
    attValueEl.textContent = att.pct.toFixed(1) + "%";
    attBarEl.style.width = Math.min(100, att.pct).toFixed(0) + "%";
    attBarEl.style.background = att.pct < 75 ? "var(--danger)" : "var(--accent-2)";
  }

  // Risk preview uses attendance + marks only (a lightweight version of the full risk form)
  const riskInputs = {
    attendance: att.pct !== null ? att.pct : 100,
    absences: 0,
    marks: p.marks,
    assignments: 80,
  };
  const risk = computeDropoutRisk(riskInputs);
  document.getElementById("dashRiskValue").textContent = risk.level;
  document.getElementById("dashRiskValue").style.color =
    risk.level === "High" ? "var(--danger)" : risk.level === "Medium" ? "var(--warn)" : "var(--accent-2)";

  document.getElementById("dashScholarshipValue").textContent = countEligibleScholarships(p);
  document.getElementById("dashCareerValue").textContent = OPPORTUNITIES.length;
}

/* ---------------------------------------------------------
   9. SCHOLARSHIP FINDER
--------------------------------------------------------- */
function scholarshipEligibility(scholarship, student) {
  const reasons = [];
  let score = 0;
  let checks = 0;

  checks++;
  const classOk = scholarship.classes.includes(student.class);
  if (classOk) score++; else reasons.push("Not open to your class/course.");

  checks++;
  const catOk = scholarship.categories.includes(student.category);
  if (catOk) score++; else reasons.push("Category does not match.");

  checks++;
  const incomeOk = Number(student.income) <= scholarship.maxIncome;
  if (incomeOk) score++; else reasons.push("Family income is above the limit.");

  checks++;
  const marksOk = Number(student.marks) >= scholarship.minMarks;
  if (marksOk) score++; else reasons.push(`Needs at least ${scholarship.minMarks}% marks.`);

  checks++;
  let locationOk = true;
  if (Array.isArray(scholarship.locations)) {
    const loc = (student.location || "").toLowerCase();
    locationOk = scholarship.locations.some((l) => loc.includes(l.toLowerCase()) || l.toLowerCase().includes(loc));
    if (!locationOk) reasons.push("Not available in your location.");
    else score++;
  } else {
    score++; // "Any" location
  }

  const eligible = classOk && catOk && incomeOk && marksOk && locationOk;
  const close = !eligible && score >= checks - 1; // missed only one criterion
  return { eligible, close, reasons, score, checks };
}

let lastScholarshipResults = [];

function initScholarshipFinder() {
  const form = document.getElementById("scholarshipForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("schName").value.trim();
    const studentClass = document.getElementById("schClass").value;
    const marks = document.getElementById("schMarks").value;
    const income = document.getElementById("schIncome").value;
    const category = document.getElementById("schCategory").value;
    const location = document.getElementById("schLocation").value.trim();

    const valid = validateFields([
      { id: "schName", value: name, required: true, label: "Full name" },
      { id: "schClass", value: studentClass, required: true, label: "Class" },
      { id: "schMarks", value: marks, required: true, min: 0, max: 100, label: "Marks" },
      { id: "schIncome", value: income, required: true, min: 0, label: "Income" },
      { id: "schCategory", value: category, required: true, label: "Category" },
    ]);
    if (!valid) { showToast("Please fix the highlighted fields.", "error"); return; }

    const student = { name, class: studentClass, marks: Number(marks), income: Number(income), category, location };
    lastScholarshipResults = SCHOLARSHIPS.map((s) => ({ scholarship: s, result: scholarshipEligibility(s, student) }));
    document.getElementById("schSearchInput").disabled = false;
    document.getElementById("schSortSelect").disabled = false;
    document.getElementById("schSearchInput").value = "";
    renderScholarshipResults();
    showToast(`Found ${lastScholarshipResults.filter(r => r.result.eligible).length} matching scholarship(s).`, "success");
  });

  document.getElementById("fillFromProfileBtnSch").addEventListener("click", () => {
    if (!state.profile) { showToast("No saved profile yet. Fill in the Dashboard form first.", "error"); return; }
    const p = state.profile;
    document.getElementById("schName").value = p.name;
    document.getElementById("schClass").value = p.class;
    document.getElementById("schMarks").value = p.marks;
    document.getElementById("schIncome").value = p.income;
    document.getElementById("schCategory").value = p.category;
    document.getElementById("schLocation").value = p.location;
    showToast("Profile details loaded.");
  });

  document.getElementById("schSearchInput").addEventListener("input", renderScholarshipResults);
  document.getElementById("schSortSelect").addEventListener("change", renderScholarshipResults);
}

function renderScholarshipResults() {
  const container = document.getElementById("scholarshipResults");
  const searchTerm = document.getElementById("schSearchInput").value.trim().toLowerCase();
  const sortBy = document.getElementById("schSortSelect").value;

  if (lastScholarshipResults.length === 0) {
    container.innerHTML = '<p class="placeholder-text" data-i18n="sch_placeholder">Fill in the form and click "Find scholarships" to see your matches here.</p>';
    applyLanguage(state.lang);
    return;
  }

  let items = lastScholarshipResults.filter((r) => r.scholarship.name.toLowerCase().includes(searchTerm));

  items.sort((a, b) => {
    if (sortBy === "name") return a.scholarship.name.localeCompare(b.scholarship.name);
    return new Date(a.scholarship.deadline) - new Date(b.scholarship.deadline);
  });
  // Eligible ones always float to the top regardless of sort
  items.sort((a, b) => Number(b.result.eligible) - Number(a.result.eligible));

  if (items.length === 0) {
    container.innerHTML = '<p class="placeholder-text">No scholarships match that search.</p>';
    return;
  }

  container.innerHTML = items.map(({ scholarship: s, result }) => {
    const badgeClass = result.eligible ? "badge-eligible" : result.close ? "badge-close" : "badge-no";
    const badgeText = result.eligible ? "Eligible" : result.close ? "Close match" : "Not eligible";
    const cardClass = result.eligible ? "eligible" : "not-eligible";
    const reasonsHtml = result.eligible
      ? ""
      : `<p><strong>Why not:</strong> ${result.reasons.join(" ")}</p>`;
    return `
      <div class="result-card ${cardClass}">
        <span class="badge ${badgeClass}">${badgeText}</span>
        <h3>${escapeHtml(s.name)}</h3>
        <div class="result-meta">
          <span>💰 ${escapeHtml(s.amount)}</span>
          <span>📅 Deadline: ${formatDate(s.deadline)}</span>
        </div>
        <p>${escapeHtml(s.description)}</p>
        ${reasonsHtml}
      </div>`;
  }).join("");
}

/* ---------------------------------------------------------
   10. ATTENDANCE TRACKER
--------------------------------------------------------- */
function initAttendance() {
  const form = document.getElementById("addSubjectForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("subjectName").value.trim();
    const total = document.getElementById("subjectTotal").value;
    const attended = document.getElementById("subjectAttended").value;

    const valid = validateFields([
      { id: "subjectName", value: name, required: true, label: "Subject name" },
      { id: "subjectTotal", value: total, required: true, min: 1, label: "Total classes" },
      { id: "subjectAttended", value: attended, required: true, min: 0, label: "Classes attended" },
    ]);
    if (!valid) { showToast("Please fix the highlighted fields.", "error"); return; }
    if (Number(attended) > Number(total)) {
      setFieldError("subjectAttended", "Cannot exceed total classes.");
      showToast("Classes attended cannot exceed total classes.", "error");
      return;
    }

    const existingIndex = state.subjects.findIndex((s) => s.name.toLowerCase() === name.toLowerCase());
    const entry = { name, total: Number(total), attended: Number(attended) };
    if (existingIndex >= 0) state.subjects[existingIndex] = entry;
    else state.subjects.push(entry);

    saveJSON(STORAGE_KEYS.attendance, state.subjects);
    form.reset();
    renderAttendance();
    renderDashboard();
    showToast(existingIndex >= 0 ? "Subject updated." : "Subject added.", "success");
  });

  renderAttendance();
}

function renderAttendance() {
  const overall = computeOverallAttendance();
  document.getElementById("attTotalClasses").textContent = overall.total;
  document.getElementById("attAttended").textContent = overall.attended;

  const pct = overall.pct === null ? 0 : overall.pct;
  document.getElementById("attPercentage").textContent = overall.pct === null ? "—" : pct.toFixed(1) + "%";
  const bar = document.getElementById("attProgressBar");
  bar.style.width = Math.min(100, pct) + "%";
  bar.style.background = pct < 75 ? "var(--danger)" : "var(--accent-2)";

  const statusLabel = document.getElementById("attStatusLabel");
  const warningBanner = document.getElementById("attWarning");
  if (overall.pct === null) {
    statusLabel.textContent = "";
    warningBanner.classList.add("hidden");
  } else if (pct < 75) {
    statusLabel.textContent = "Below the usual 75% requirement";
    warningBanner.textContent = `⚠ Overall attendance is ${pct.toFixed(1)}%, below the typical 75% exam-eligibility requirement. Please attend classes regularly.`;
    warningBanner.classList.remove("hidden");
  } else {
    statusLabel.textContent = "Meets the usual 75% requirement";
    warningBanner.classList.add("hidden");
  }

  const list = document.getElementById("subjectAttendanceList");
  const placeholder = document.getElementById("attPlaceholder");
  if (state.subjects.length === 0) {
    list.innerHTML = "";
    list.appendChild(placeholder);
    return;
  }

  list.innerHTML = state.subjects.map((s) => {
    const subjPct = s.total > 0 ? (s.attended / s.total) * 100 : 0;
    const low = subjPct < 75;
    return `
      <div class="subject-card">
        <h4>${escapeHtml(s.name)}</h4>
        <div class="subject-meta">${s.attended} / ${s.total} classes attended</div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${Math.min(100, subjPct)}%; background:${low ? "var(--danger)" : "var(--accent-2)"}"></div>
        </div>
        <div class="subject-meta">${subjPct.toFixed(1)}% ${low ? "— below 75%" : ""}</div>
      </div>`;
  }).join("");
}

/* ---------------------------------------------------------
   11. DROPOUT RISK ALERT (rule-based, transparent scoring)
--------------------------------------------------------- */
function computeDropoutRisk({ attendance, absences, marks, assignments }) {
  let score = 0;
  const reasons = [];

  // Attendance: lower attendance = higher risk (max 35 points)
  if (attendance < 50) { score += 35; reasons.push("Attendance is critically low (below 50%)."); }
  else if (attendance < 65) { score += 25; reasons.push("Attendance is well below the 75% requirement."); }
  else if (attendance < 75) { score += 15; reasons.push("Attendance is below the 75% requirement."); }
  else if (attendance < 85) { score += 5; reasons.push("Attendance is adequate but could improve."); }

  // Recent absences (max 20 points)
  if (absences >= 10) { score += 20; reasons.push("Very high number of absences in the last 30 days."); }
  else if (absences >= 6) { score += 13; reasons.push("Noticeably high absences in the last 30 days."); }
  else if (absences >= 3) { score += 6; reasons.push("A few absences in the last 30 days."); }

  // Academic performance (max 25 points)
  if (marks < 35) { score += 25; reasons.push("Academic performance is failing grade (below 35%)."); }
  else if (marks < 50) { score += 17; reasons.push("Academic performance is weak (below 50%)."); }
  else if (marks < 60) { score += 9; reasons.push("Academic performance is below average."); }

  // Assignment completion (max 20 points)
  if (assignments < 40) { score += 20; reasons.push("Very low assignment/homework completion."); }
  else if (assignments < 60) { score += 12; reasons.push("Assignment completion is below expectation."); }
  else if (assignments < 80) { score += 5; reasons.push("Assignment completion could be more consistent."); }

  score = Math.min(100, score);

  let level = "Low";
  if (score >= 55) level = "High";
  else if (score >= 25) level = "Medium";

  if (reasons.length === 0) reasons.push("No major risk factors detected — keep up the good work.");

  const actions = [];
  if (level === "High") {
    actions.push("Teacher/counsellor to schedule a one-on-one conversation with the student this week.");
    actions.push("Inform parents/guardians and understand any barriers (financial, health, travel, family).");
    actions.push("Create a short-term attendance and assignment recovery plan.");
  } else if (level === "Medium") {
    actions.push("Monitor attendance and assignment submission closely over the next 2–3 weeks.");
    actions.push("Offer extra academic support or peer mentoring in weak subjects.");
  } else {
    actions.push("Continue regular monitoring — no urgent action needed right now.");
  }

  return { score, level, reasons, actions };
}

function initRiskForm() {
  const form = document.getElementById("riskForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const attendance = document.getElementById("riskAttendance").value;
    const absences = document.getElementById("riskAbsences").value;
    const marks = document.getElementById("riskMarks").value;
    const assignments = document.getElementById("riskAssignments").value;

    const valid = validateFields([
      { id: "riskAttendance", value: attendance, required: true, min: 0, max: 100, label: "Attendance" },
      { id: "riskAbsences", value: absences, required: true, min: 0, label: "Absences" },
      { id: "riskMarks", value: marks, required: true, min: 0, max: 100, label: "Marks" },
      { id: "riskAssignments", value: assignments, required: true, min: 0, max: 100, label: "Assignment completion" },
    ]);
    if (!valid) { showToast("Please fix the highlighted fields.", "error"); return; }

    const result = computeDropoutRisk({
      attendance: Number(attendance), absences: Number(absences),
      marks: Number(marks), assignments: Number(assignments),
    });
    renderRiskResult(result);
  });

  document.getElementById("fillFromAttendanceBtn").addEventListener("click", () => {
    const overall = computeOverallAttendance();
    if (overall.pct === null) { showToast("No attendance data saved yet. Add subjects on the Attendance page first.", "error"); return; }
    document.getElementById("riskAttendance").value = overall.pct.toFixed(1);
    if (state.profile) document.getElementById("riskMarks").value = state.profile.marks;
    showToast("Saved attendance loaded.");
  });
}

function renderRiskResult(result) {
  document.getElementById("riskPlaceholder").classList.add("hidden");
  document.getElementById("riskResultContent").classList.remove("hidden");

  const badge = document.getElementById("riskLevelBadge");
  badge.className = "risk-badge " + result.level.toLowerCase();
  document.getElementById("riskLevel").textContent = result.level + " risk";
  document.getElementById("riskScore").textContent = result.score;

  const bar = document.getElementById("riskScoreBar");
  bar.style.width = result.score + "%";
  bar.style.background = result.level === "High" ? "var(--danger)" : result.level === "Medium" ? "var(--warn)" : "var(--accent-2)";

  document.getElementById("riskReasons").innerHTML = result.reasons.map((r) => `<li>${escapeHtml(r)}</li>`).join("");
  document.getElementById("riskActions").innerHTML = result.actions.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
}

/* ---------------------------------------------------------
   12. CAREER & OPPORTUNITY HUB
--------------------------------------------------------- */
function initCareerHub() {
  const locations = Array.from(new Set(OPPORTUNITIES.map((o) => o.location))).sort();
  const locationSelect = document.getElementById("careerLocationFilter");
  locations.forEach((loc) => {
    const opt = document.createElement("option");
    opt.value = loc; opt.textContent = loc;
    locationSelect.appendChild(opt);
  });

  document.getElementById("careerSearchInput").addEventListener("input", renderCareer);
  document.getElementById("careerTypeFilter").addEventListener("change", renderCareer);
  document.getElementById("careerLocationFilter").addEventListener("change", renderCareer);

  renderCareer();
}

function renderCareer() {
  const search = document.getElementById("careerSearchInput").value.trim().toLowerCase();
  const type = document.getElementById("careerTypeFilter").value;
  const location = document.getElementById("careerLocationFilter").value;

  const filtered = OPPORTUNITIES.filter((o) => {
    const matchesSearch = !search || o.title.toLowerCase().includes(search) || o.skills.toLowerCase().includes(search);
    const matchesType = type === "all" || o.type === type;
    const matchesLocation = location === "all" || o.location === location;
    return matchesSearch && matchesType && matchesLocation;
  });

  const container = document.getElementById("careerResults");
  const noResults = document.getElementById("careerNoResults");

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  container.innerHTML = filtered.map((o) => `
    <div class="result-card">
      <span class="badge badge-eligible">${escapeHtml(o.type)}</span>
      <h3>${escapeHtml(o.title)}</h3>
      <div class="result-meta">
        <span>📍 ${escapeHtml(o.location)}</span>
        <span>⏱ ${escapeHtml(o.duration)}</span>
      </div>
      <p><strong>Eligibility:</strong> ${escapeHtml(o.eligibility)}</p>
      <p><strong>Skills:</strong> ${escapeHtml(o.skills)}</p>
      <p>${escapeHtml(o.description)}</p>
    </div>`).join("");
}

/* ---------------------------------------------------------
   13. LOW-DATA LEARNING RESOURCES
--------------------------------------------------------- */
function initResources() {
  const subjects = Array.from(new Set(RESOURCES.map((r) => r.subject))).sort();
  const select = document.getElementById("resourceCategoryFilter");
  subjects.forEach((subj) => {
    const opt = document.createElement("option");
    opt.value = subj; opt.textContent = subj;
    select.appendChild(opt);
  });

  document.getElementById("resourceSearchInput").addEventListener("input", renderResources);
  document.getElementById("resourceCategoryFilter").addEventListener("change", renderResources);

  document.getElementById("resourceModalClose").addEventListener("click", closeResourceModal);
  document.getElementById("resourceModal").addEventListener("click", (e) => {
    if (e.target.id === "resourceModal") closeResourceModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeResourceModal();
  });

  renderResources();
}

function renderResources() {
  const search = document.getElementById("resourceSearchInput").value.trim().toLowerCase();
  const subject = document.getElementById("resourceCategoryFilter").value;

  const filtered = RESOURCES.filter((r) => {
    const matchesSearch = !search || r.title.toLowerCase().includes(search) || r.subject.toLowerCase().includes(search);
    const matchesSubject = subject === "all" || r.subject === subject;
    return matchesSearch && matchesSubject;
  });

  const container = document.getElementById("resourceResults");
  const noResults = document.getElementById("resourceNoResults");

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  container.innerHTML = filtered.map((r) => `
    <div class="result-card">
      <span class="badge badge-eligible">${escapeHtml(r.subject)}</span>
      <h3>${escapeHtml(r.title)}</h3>
      <div class="result-meta">
        <span>📄 ${escapeHtml(r.type)}</span>
        <span>💾 ${escapeHtml(r.size)}</span>
      </div>
      <div class="form-actions" style="margin-top:12px;">
        <button class="btn btn-ghost" data-resource-id="${r.id}" type="button">Read</button>
      </div>
    </div>`).join("");

  container.querySelectorAll("[data-resource-id]").forEach((btn) => {
    btn.addEventListener("click", () => openResourceModal(btn.dataset.resourceId));
  });
}

function openResourceModal(id) {
  const resource = RESOURCES.find((r) => r.id === id);
  if (!resource) return;
  document.getElementById("resourceModalMeta").textContent = `${resource.subject} · ${resource.type} · ${resource.size}`;
  document.getElementById("resourceModalTitle").textContent = resource.title;
  document.getElementById("resourceModalBody").innerHTML = `<p>${escapeHtml(resource.content)}</p>
    <p style="font-size:0.82rem;color:var(--ink-faint);">This is lightweight demo text so the page stays fast on a slow connection. A production version would link to the full note or a downloadable PDF.</p>`;
  document.getElementById("resourceModal").classList.remove("hidden");
}
function closeResourceModal() {
  document.getElementById("resourceModal").classList.add("hidden");
}

/* ---------------------------------------------------------
   14. SMALL UTILITIES
--------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch (e) {
    return iso;
  }
}

/* ---------------------------------------------------------
   15. APP INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  try {
    initNavigation();
    initLanguage();
    initProfileForm();
    initScholarshipFinder();
    initAttendance();
    initRiskForm();
    initCareerHub();
    initResources();
    renderDashboard();
  } catch (err) {
    console.error("EduConnect Nagpur failed to initialise:", err);
    showToast("Something went wrong loading the page. Please refresh.", "error");
  }
});
