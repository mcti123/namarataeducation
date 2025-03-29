import { Question, Test } from '@/lib/data';
import { 
  DifficultyLevel, 
  scienceEasyQuestions, 
  scienceMediumQuestions, 
  scienceIntermediateQuestions, 
  scienceHardQuestions 
} from './testData';

// Sanskrit questions in different difficulty levels
export const sanskritEasyQuestions: Question[] = [
  {
    id: "sanskrit-easy-1",
    text: "अहम् ______ छात्रः अस्मि।",
    options: ["एकः", "एका", "एकम्", "एकाः"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "पुल्लिंग एकवचन में 'एकः' का प्रयोग होता है।"
  },
  {
    id: "sanskrit-easy-2",
    text: "'फलम्' शब्द का लिंग क्या है?",
    options: ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "कोई नहीं"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "'फलम्' नपुंसकलिंग शब्द है।"
  },
  {
    id: "sanskrit-easy-3",
    text: "'पठति' क्रिया का अर्थ है",
    options: ["पढ़ता है", "खेलता है", "चलता है", "हँसता है"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "'पठति' का अर्थ है 'पढ़ता है'।"
  },
  {
    id: "sanskrit-easy-4",
    text: "'विद्यालयः' का अर्थ है",
    options: ["घर", "विद्यालय", "बाज़ार", "उद्यान"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "'विद्यालयः' का अर्थ है 'विद्यालय' या 'स्कूल'।"
  },
  {
    id: "sanskrit-easy-5",
    text: "'अहम्' का अर्थ है",
    options: ["मैं", "तुम", "वह", "हम"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "'अहम्' का अर्थ है 'मैं'।"
  }
];

export const sanskritMediumQuestions: Question[] = [
  {
    id: "sanskrit-medium-1",
    text: "निम्न में से कौन सा 'स्त्री' शब्द का बहुवचन रूप है?",
    options: ["स्त्री", "स्त्रियः", "स्त्रीभिः", "स्त्रीणाम्"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "'स्त्रियः' 'स्त्री' शब्द का बहुवचन प्रथमा विभक्ति रूप है।"
  },
  {
    id: "sanskrit-medium-2",
    text: "'गच्छामि' में कौन सा पुरुष है?",
    options: ["प्रथम पुरुष", "द्वितीय पुरुष", "उत्तम पुरुष", "कोई नहीं"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "'गच्छामि' में उत्तम पुरुष (First person) है।"
  },
  {
    id: "sanskrit-medium-3",
    text: "'वृक्षः' शब्द का पञ्चमी विभक्ति एकवचन रूप है",
    options: ["वृक्षात्", "वृक्षस्य", "वृक्षे", "वृक्षम्"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "'वृक्षात्' 'वृक्षः' शब्द का पञ्चमी विभक्ति एकवचन रूप है।"
  },
  {
    id: "sanskrit-medium-4",
    text: "'बालिका' शब्द का प्रथमा बहुवचन रूप है",
    options: ["बालिका", "बालिकाः", "बालिकाम्", "बालिकायाः"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "'बालिकाः' 'बालिका' शब्द का प्रथमा बहुवचन रूप है।"
  },
  {
    id: "sanskrit-medium-5",
    text: "संस्कृत में 'पुस्तकालय' के लिए क्या शब्द है?",
    options: ["विद्यालयः", "पुस्तकालयः", "ग्रन्थालयः", "क्रीडाङ्गणम्"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "संस्कृत में 'पुस्तकालय' के लिए 'ग्रन्थालयः' शब्द का प्रयोग होता है।"
  }
];

export const sanskritIntermediateQuestions: Question[] = [
  {
    id: "sanskrit-intermediate-1",
    text: "निम्न में से शुद्ध वाक्य कौन सा है?",
    options: [
      "बालकः विद्यालयं गच्छति।", 
      "बालकः विद्यालये गच्छति।", 
      "बालकः विद्यालय गच्छति।", 
      "बालकः विद्यालयः गच्छति।"
    ],
    correctAnswer: 0,
    difficulty: "intermediate",
    explanation: "'बालकः विद्यालयं गच्छति।' शुद्ध वाक्य है, जिसमें द्वितीया विभक्ति का प्रयोग सही है।"
  },
  {
    id: "sanskrit-intermediate-2",
    text: "'धातु' शब्द का अर्थ है",
    options: ["संज्ञा", "क्रिया का मूल रूप", "विशेषण", "सर्वनाम"],
    correctAnswer: 1,
    difficulty: "intermediate",
    explanation: "'धातु' शब्द का अर्थ है 'क्रिया का मूल रूप' जैसे पठ्, गम् आदि।"
  },
  {
    id: "sanskrit-intermediate-3",
    text: "निम्न में से कौन सा सही वाक्य है?",
    options: [
      "अहं पुस्तकं पठामि।", 
      "अहं पुस्तकं पठसि।", 
      "अहं पुस्तकं पठति।", 
      "अहं पुस्तकं पठथ।"
    ],
    correctAnswer: 0,
    difficulty: "intermediate",
    explanation: "'अहं पुस्तकं पठामि।' सही वाक्य है जिसमें 'अहम्' के साथ 'पठामि' (उत्तम पुरुष एकवचन) का प्रयोग सही है।"
  },
  {
    id: "sanskrit-intermediate-4",
    text: "'रामः वनं गच्छति।' वाक्य में कर्ता कौन है?",
    options: ["रामः", "वनम्", "गच्छति", "कोई नहीं"],
    correctAnswer: 0,
    difficulty: "intermediate",
    explanation: "'रामः वनं गच्छति।' वाक्य में 'रामः' कर्ता है।"
  },
  {
    id: "sanskrit-intermediate-5",
    text: "'त्वं कुत्र गच्छसि?' वाक्य में क्या पूछा जा रहा है?",
    options: ["तुम क्या करते हो?", "तुम कहाँ जाते हो?", "तुम कब जाते हो?", "तुम क्यों जाते हो?"],
    correctAnswer: 1,
    difficulty: "intermediate",
    explanation: "'त्वं कुत्र गच्छसि?' वाक्य में 'तुम कहाँ जाते हो?' पूछा जा रहा है।"
  }
];

export const sanskritHardQuestions: Question[] = [
  {
    id: "sanskrit-hard-1",
    text: "निम्न श्लोक में 'वसुधा' शब्द का अर्थ क्या है? 'अयं निजः परो वेति गणना लघुचेतसाम्। उदारचरितानां तु वसुधैव कुटुम्बकम्॥'",
    options: ["कुटुंब", "पृथ्वी", "धन", "समाज"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "इस श्लोक में 'वसुधा' शब्द का अर्थ 'पृथ्वी' है, अर्थात 'पूरी पृथ्वी ही परिवार है'।"
  },
  {
    id: "sanskrit-hard-2",
    text: "निम्न में से कौन सा सन्धि-विच्छेद सही है? 'महेश्वरः'",
    options: ["महा + ईश्वरः", "महा + इश्वरः", "महा + एश्वरः", "महा + श्वरः"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "'महेश्वरः' का सन्धि-विच्छेद 'महा + ईश्वरः' है।"
  },
  {
    id: "sanskrit-hard-3",
    text: "'सः वनम् अगच्छत्।' वाक्य का अनुवाद है",
    options: ["वह वन जाता है।", "वह वन जाएगा।", "वह वन गया।", "वह वन जाना चाहता है।"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "'सः वनम् अगच्छत्।' वाक्य का अनुवाद 'वह वन गया।' होता है।"
  },
  {
    id: "sanskrit-hard-4",
    text: "'अनुवादः' शब्द में कौन सा उपसर्ग है?",
    options: ["अनु", "अन", "अनुवा", "इनमें से कोई नहीं"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "'अनुवादः' शब्द में 'अनु' उपसर्ग है।"
  },
  {
    id: "sanskrit-hard-5",
    text: "निम्न में से 'आत्मनेपदी' धातु कौन सी है?",
    options: ["पठ्", "कृ", "लभ्", "इनमें से कोई नहीं"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "'लभ्' 'आत्मनेपदी' धातु है।"
  }
];

// Hindi questions in different difficulty levels
export const hindiEasyQuestions: Question[] = [
  {
    id: "hindi-easy-1",
    text: "'वह चिड़िया जो' कविता के कवि कौन हैं?",
    options: ["सुमित्रानंदन पंत", "महादेवी वर्मा", "रामधारी सिंह 'दिनकर'", "जयशंकर प्रसाद"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "'वह चिड़िया जो' कविता के कवि सुमित्रानंदन पंत हैं।"
  },
  {
    id: "hindi-easy-2",
    text: "'बचपन' पाठ में लेखक किसके बचपन का वर्णन करते हैं?",
    options: ["अपने", "अपने मित्र के", "विश्वनाथ प्रसाद तिवारी के", "किसी अनजान बच्चे के"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "'बचपन' पाठ में लेखक अपने बचपन का वर्णन करते हैं।"
  },
  {
    id: "hindi-easy-3",
    text: "'नादान दोस्त' कहानी में बच्चों ने गिलहरी के बच्चों को क्या खिलाया?",
    options: ["दूध", "फल", "रोटी के टुकड़े", "मिठाई"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "'नादान दोस्त' कहानी में बच्चों ने गिलहरी के बच्चों को रोटी के टुकड़े खिलाए।"
  },
  {
    id: "hindi-easy-4",
    text: "'चाँद से थोड़ी सी गप्पें' पाठ में लेखक चाँद से क्या करते हैं?",
    options: ["बातें", "झगड़ा", "मित्रता", "गाना"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "'चाँद से थोड़ी सी गप्पें' पाठ में लेखक चाँद से बातें करते हैं।"
  },
  {
    id: "hindi-easy-5",
    text: "'साथी हाथ बढ़ाना' कविता का मूल भाव क्या है?",
    options: ["परिश्रम का महत्व", "मित्रता", "सहयोग और एकता", "प्रेम और करुणा"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "'साथी हाथ बढ़ाना' कविता का मूल भाव सहयोग और एकता है।"
  }
];

export const hindiMediumQuestions: Question[] = [
  {
    id: "hindi-medium-1",
    text: "'चाँद से थोड़ी सी गप्पें' पाठ के लेखक कौन हैं?",
    options: ["कृष्णा सोबती", "विष्णु खरे", "गुरदयाल सिंह", "प्रेमचंद"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "'चाँद से थोड़ी सी गप्पें' पाठ के लेखक विष्णु खरे हैं।"
  },
  {
    id: "hindi-medium-2",
    text: "'अक्षरों का महत्व' पाठ में किसके महत्व पर प्रकाश डाला गया है?",
    options: ["पुस्तकों के", "भाषा के", "लिपि के", "शब्दों के"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "'अक्षरों का महत्व' पाठ में लिपि के महत्व पर प्रकाश डाला गया है।"
  },
  {
    id: "hindi-medium-3",
    text: "'झाँसी की रानी' कविता किनके द्वारा लिखी गई है?",
    options: ["महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "मैथिलीशरण गुप्त", "जयशंकर प्रसाद"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "'झाँसी की रानी' कविता सुभद्रा कुमारी चौहान द्वारा लिखी गई है।"
  },
  {
    id: "hindi-medium-4",
    text: "'टिकट-अलबम' कहानी में मुख्य पात्र का क्या शौक है?",
    options: ["चित्रकारी", "टिकट इकट्ठा करना", "संगीत", "खेलकूद"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "'टिकट-अलबम' कहानी में मुख्य पात्र का शौक टिकट इकट्ठा करना है।"
  },
  {
    id: "hindi-medium-5",
    text: "'नादान दोस्त' कहानी का मूल संदेश क्या है?",
    options: ["मित्रता का महत्व", "प्रकृति की सुंदरता", "अनजाने में की गई गलती", "परिश्रम का महत्व"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "'नादान दोस्त' कहानी का मूल संदेश अनजाने में की गई गलती और उसके परिणाम हैं।"
  }
];

export const hindiIntermediateQuestions: Question[] = [
  {
    id: "hindi-intermediate-1",
    text: "'वह चिड़िया जो' कविता में चिड़िया के माध्यम से किस भाव को व्यक्त किया गया है?",
    options: ["स्वतंत्रता का महत्व", "प्रकृति प्रेम", "परिश्रम का महत्व", "उपरोक्त सभी"],
    correctAnswer: 3,
    difficulty: "intermediate",
    explanation: "'वह चिड़िया जो' कविता में चिड़िया के माध्यम से स्वतंत्रता, प्रकृति प्रेम और परिश्रम तीनों भावों को व्यक्त किया गया है।"
  },
  {
    id: "hindi-intermediate-2",
    text: "'जो देखकर भी नहीं देखते' पाठ किस विषय पर केंद्रित है?",
    options: ["अंधविश्वास", "सामाजिक भेदभाव", "संवेदनहीनता", "प्राकृतिक आपदाएँ"],
    correctAnswer: 2,
    difficulty: "intermediate",
    explanation: "'जो देखकर भी नहीं देखते' पाठ संवेदनहीनता और लोगों की उदासीनता पर केंद्रित है।"
  },
  {
    id: "hindi-intermediate-3",
    text: "'संसार पुस्तक है' पाठ का मुख्य विचार क्या है?",
    options: ["पुस्तकों का महत्व", "अनुभव से सीखना", "विद्या का महत्व", "पाठशाला का महत्व"],
    correctAnswer: 1,
    difficulty: "intermediate",
    explanation: "'संसार पुस्तक है' पाठ का मुख्य विचार यह है कि अनुभव से सीखना महत्वपूर्ण है।"
  },
  {
    id: "hindi-intermediate-4",
    text: "'मैं सबसे छोटी होऊँ' कविता में कवयित्री क्या इच्छा व्यक्त करती है?",
    options: ["छोटी होकर सबका प्यार पाने की", "छोटी होकर निर्दोष रहने की", "छोटी होकर मासूम बनने की", "छोटी होकर परिवार के नज़दीक रहने की"],
    correctAnswer: 0,
    difficulty: "intermediate",
    explanation: "'मैं सबसे छोटी होऊँ' कविता में कवयित्री छोटी होकर सबका प्यार पाने की इच्छा व्यक्त करती है।"
  },
  {
    id: "hindi-intermediate-5",
    text: "'पार नज़र के' पाठ में लेखक किस पर बल देता है?",
    options: ["विज्ञान की प्रगति", "आधुनिक तकनीक", "दृष्टि की सीमाएँ", "कल्पना की शक्ति"],
    correctAnswer: 3,
    difficulty: "intermediate",
    explanation: "'पार नज़र के' पाठ में लेखक कल्पना की शक्ति पर बल देता है।"
  }
];

export const hindiHardQuestions: Question[] = [
  {
    id: "hindi-hard-1",
    text: "'साँस-साँस में बाँस' पाठ में बांस की कौन-सी विशेषता पर प्रकाश डाला गया है?",
    options: ["लचीलापन", "बहुआयामी उपयोगिता", "सौंदर्य", "मजबूती"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "'साँस-साँस में बाँस' पाठ में बांस की बहुआयामी उपयोगिता पर प्रकाश डाला गया है।"
  },
  {
    id: "hindi-hard-2",
    text: "'जो देखकर भी नहीं देखते' पाठ किस विधा में लिखा गया है?",
    options: ["कहानी", "निबंध", "संस्मरण", "व्यंग्य"],
    correctAnswer: 3,
    difficulty: "hard",
    explanation: "'जो देखकर भी नहीं देखते' पाठ व्यंग्य विधा में लिखा गया है।"
  },
  {
    id: "hindi-hard-3",
    text: "'झाँसी की रानी' कविता में 'खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी' पंक्ति में कौन सा अलंकार है?",
    options: ["अनुप्रास", "यमक", "पुनरुक्तिप्रकाश", "रूपक"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "'खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी' पंक्ति में 'ल' और 'र' वर्णों की आवृत्ति के कारण अनुप्रास अलंकार है।"
  },
  {
    id: "hindi-hard-4",
    text: "'वह चिड़िया जो' कविता में 'नीले नभ की सीमा पर' का क्या अर्थ है?",
    options: ["आकाश के किनारे", "पक्षियों के घोंसले में", "कल्पना की उड़ान में", "दूरदृष्टि में"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "'नीले नभ की सीमा पर' का अर्थ आकाश के किनारे है।"
  },
  {
    id: "hindi-hard-5",
    text: "'लोकगीत' पाठ में लोकगीतों की क्या विशेषता बताई गई है?",
    options: ["श्रुतिपरक होना", "लिखित परंपरा का होना", "व्यक्तिगत रचनाएँ होना", "शहरी संस्कृति से जुड़ा होना"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "'लोकगीत' पाठ में लोकगीतों की विशेषता श्रुतिपरक (मौखिक परंपरा) में होना बताई गई है।"
  }
];

// Social Studies questions in different difficulty levels
export const socialEasyQuestions: Question[] = [
  {
    id: "social-easy-1",
    text: "भारत के किस राज्य में कोणार्क का सूर्य मंदिर स्थित है?",
    options: ["बिहार", "ओडिशा", "मध्य प्रदेश", "राजस्थान"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "कोणार्क का सूर्य मंदिर ओडिशा राज्य में स्थित है।"
  },
  {
    id: "social-easy-2",
    text: "तक्षशिला विश्वविद्यालय अब किस देश में स्थित है?",
    options: ["भारत", "पाकिस्तान", "नेपाल", "बांग्लादेश"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "तक्षशिला विश्वविद्यालय अब पाकिस्तान में स्थित है।"
  },
  {
    id: "social-easy-3",
    text: "हड़प्पा सभ्यता की खोज किस नदी के किनारे हुई थी?",
    options: ["गंगा", "ब्रह्मपुत्र", "सिंधु", "कावेरी"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "हड़प्पा सभ्यता की खोज सिंधु नदी के किनारे हुई थी।"
  },
  {
    id: "social-easy-4",
    text: "पृथ्वी किस आकार की है?",
    options: ["बिल्कुल गोल", "चपटी", "थोड़ी चपटी गेंद जैसी", "अंडाकार"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "पृथ्वी थोड़ी चपटी गेंद के आकार की है, जिसे भूपटीय गोला (Geoid) कहा जाता है।"
  },
  {
    id: "social-easy-5",
    text: "पंचायती राज व्यवस्था किस स्तर पर कार्य करती है?",
    options: ["केंद्र सरकार", "राज्य सरकार", "स्थानीय सरकार", "अंतर्राष्ट्रीय स्तर"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "पंचायती राज व्यवस्था स्थानीय सरकार के स्तर पर कार्य करती है।"
  }
];

export const socialMediumQuestions: Question[] = [
  {
    id: "social-medium-1",
    text: "मोहनजोदड़ो का अर्थ क्या है?",
    options: ["मृतकों का टीला", "बड़ा किला", "विशाल नगर", "मंदिरों का शहर"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "मोहनजोदड़ो का अर्थ 'मृतकों का टीला' है। यह सिंधु घाटी सभ्यता का एक प्रमुख शहर था।"
  },
  {
    id: "social-medium-2",
    text: "विषुव दिन (Equinox) क्या है?",
    options: [
      "जब दिन और रात बराबर होते हैं", 
      "जब दिन सबसे छोटा होता है", 
      "जब दिन सबसे लंबा होता है", 
      "जब सूर्य और चंद्रमा एक सीध में आते हैं"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "विषुव दिन वे दिन होते हैं जब पृथ्वी पर दिन और रात लगभग बराबर होते हैं।"
  },
  {
    id: "social-medium-3",
    text: "अशोक के अधिकांश शिलालेख किस लिपि में लिखे गए हैं?",
    options: ["संस्कृत", "पाली", "ब्राह्मी", "खरोष्ठी"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation: "अशोक के अधिकांश शिलालेख ब्राह्मी लिपि में लिखे गए हैं।"
  },
  {
    id: "social-medium-4",
    text: "भारतीय संविधान में कितनी अनुसूचियां हैं?",
    options: ["10", "12", "14", "22"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "भारतीय संविधान में वर्तमान में 12 अनुसूचियां हैं।"
  },
  {
    id: "social-medium-5",
    text: "स्थानीय सरकार की तीन-स्तरीय प्रणाली में कौन से स्तर शामिल हैं?",
    options: [
      "ग्राम पंचायत, पंचायत समिति, जिला परिषद", 
      "ग्राम सभा, नगर पालिका, नगर निगम", 
      "ग्राम पंचायत, नगर पंचायत, नगर परिषद", 
      "ग्राम सभा, पंचायत समिति, नगर निगम"
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "स्थानीय सरकार की तीन-स्तरीय प्रणाली में ग्राम पंचायत, पंचायत समिति (या क्षेत्र पंचायत) और जिला परिषद शामिल हैं।"
  }
];

export const socialIntermediateQuestions: Question[] = [
  {
    id: "social-intermediate-1", 
    text: "हड़प्पा सभ्यता के नगर योजना की क्या विशेषता थी?",
    options: [
      "अनियोजित सड़क व्यवस्था", 
      "ग्रिड पद्धति पर आधारित नगर", 
      "गोलाकार नगर रचना", 
      "नदी के मध्य में बसे हुए नगर"
    ],
    correctAnswer: 1,
    difficulty: "intermediate",
    explanation: "हड़प्पा सभ्यता के नगर 'ग्रिड पद्धति' पर आधारित थे, जिसमें सड़कें एक-दूसरे को समकोण पर काटती थीं।"
  },
  {
    id: "social-intermediate-2",
    text: "महाजनपद काल में कितने प्रमुख महाजनपद थे?",
    options: ["10", "12", "16", "24"],
    correctAnswer: 2,
    difficulty: "intermediate",
    explanation: "महाजनपद काल में 16 प्रमुख महाजनपद थे। जैसे मगध, कोसल, अंग, वज्जि आदि।"
  },
  {
    id: "social-intermediate-3",
    text: "चंद्रगुप्त मौर्य के शासनकाल में कौन सा यूनानी राजदूत भारत आया था?",
    options: ["मेगस्थनीज", "प्लूटार्क", "अरिस्टोटल", "सेल्यूकस"],
    correctAnswer: 0,
    difficulty: "intermediate",
    explanation: "मेगस्थनीज चंद्रगुप्त मौर्य के शासनकाल में यूनानी राजदूत के रूप में भारत आया था। उसने 'इंडिका' नामक पुस्तक लिखी।"
  },
  {
    id: "social-intermediate-4",
    text: "अक्षांश और देशांतर रेखाओं का क्या उपयोग है?",
    options: [
      "केवल दिशा निर्धारण के लिए", 
      "केवल समय निर्धारण के लिए", 
      "पृथ्वी पर स्थिति निर्धारित करने के लिए", 
      "केवल मानचित्र बनाने के लिए"
    ],
    correctAnswer: 2,
    difficulty: "intermediate",
    explanation: "अक्षांश और देशांतर रेखाओं का उपयोग पृथ्वी पर किसी भी स्थान की सटीक स्थिति निर्धारित करने के लिए किया जाता है।"
  },
  {
    id: "social-intermediate-5",
    text: "ग्रामसभा का क्या अधिकार है?",
    options: [
      "केवल चुनाव करवाना", 
      "ग्राम पंचायत के कार्यों की निगरानी और अनुमोदन", 
      "केवल कर निर्धारित करना", 
      "केवल विकास योजनाएँ बनाना"
    ],
    correctAnswer: 1,
    difficulty: "intermediate",
    explanation: "ग्रामसभा ग्राम पंचायत के कार्यों की निगरानी और अनुमोदन का अधिकार रखती है। यह एक महत्वपूर्ण जनतांत्रिक संस्था है।"
  }
];

export const socialHardQuestions: Question[] = [
  {
    id: "social-hard-1",
    text: "पृथ्वी की परिक्रमा और घूर्णन के बीच क्या अंतर है?",
    options: [
      "परिक्रमा सूर्य के चारों ओर होती है, घूर्णन अपनी अक्ष पर", 
      "परिक्रमा अपनी अक्ष पर होती है, घूर्णन सूर्य के चारों ओर", 
      "परिक्रमा दिन-रात बनाती है, घूर्णन ऋतु परिवर्तन", 
      "परिक्रमा एक वर्ष में पूरी होती है, घूर्णन 24 घंटे में"
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "पृथ्वी की परिक्रमा सूर्य के चारों ओर होती है (एक वर्ष में), जबकि घूर्णन अपनी अक्ष पर होता है (24 घंटे में)।"
  },
  {
    id: "social-hard-2",
    text: "कलिंग युद्ध के बाद अशोक ने कौन सा धर्म अपनाया?",
    options: ["हिन्दू धर्म", "जैन धर्म", "बौद्ध धर्म", "वैदिक धर्म"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "कलिंग युद्ध के बाद अशोक ने बौद्ध धर्म अपनाया और अहिंसा का प्रचार किया।"
  },
  {
    id: "social-hard-3",
    text: "कौनसी नदी सिंधु घाटी सभ्यता का 'जीवन रेखा' मानी जाती थी?",
    options: ["गंगा", "सिंधु", "सरस्वती", "ब्रह्मपुत्र"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation: "सिंधु नदी को सिंधु घाटी सभ्यता का 'जीवन रेखा' माना जाता था, क्योंकि अधिकांश बस्तियां इसी नदी के किनारे बसी थीं।"
  },
  {
    id: "social-hard-4",
    text: "मौर्य साम्राज्य के पतन के बाद कौन सा राजवंश शक्तिशाली हुआ?",
    options: ["गुप्त वंश", "कुषाण वंश", "शुंग वंश", "सातवाहन वंश"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "मौर्य साम्राज्य के पतन के बाद शुंग वंश सत्ता में आया, जिसकी स्थापना पुष्यमित्र शुंग ने की थी।"
  },
  {
    id: "social-hard-5",
    text: "'ध्रुव तारा' (पोलर स्टार) निम्न में से किस दिशा का संकेत करता है?",
    options: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation: "'ध्रुव तारा' हमेशा उत्तर दिशा की ओर होता है और इसका उपयोग दिशा निर्धारण के लिए किया जाता है।"
  }
];

// Math Chapters based on NCERT 6th class syllabus
export const mathChapters = [
  "Chapter 1: Knowing Our Numbers",
  "Chapter 2: Whole Numbers",
  "Chapter 3: Playing with Numbers",
  "Chapter 4: Basic Geometrical Ideas",
  "Chapter 5: Understanding Elementary Shapes",
  "Chapter 6: Integers",
  "Chapter 7: Fractions",
  "Chapter 8: Decimals",
  "Chapter 9: Data Handling",
  "Chapter 10: Mensuration",
  "Chapter 11: Algebra",
  "Chapter 12: Ratio and Proportion",
  "Chapter 13: Symmetry",
  "Chapter 14: Practical Geometry",
];

// Science Chapters based on NCERT 6th class syllabus
export const scienceChapters = [
  "Chapter 1: Food: Where Does It Come From?",
  "Chapter 2: Components of Food",
  "Chapter 3: Fibre to Fabric",
  "Chapter 4: Sorting Materials into Groups",
  "Chapter 5: Separation of Substances",
  "Chapter 6: Changes Around Us",
  "Chapter 7: Getting to Know Plants",
  "Chapter 8: Body Movements",
  "Chapter 9: The Living Organisms and Their Surroundings",
  "Chapter 10: Motion and Measurement of Distances",
  "Chapter 11: Light, Shadows and Reflections",
  "Chapter 12: Electricity and Circuits",
  "Chapter 13: Fun with Magnets",
  "Chapter 14: Water",
  "Chapter 15: Air Around Us",
  "Chapter 16: Garbage In, Garbage Out",
];

// English Chapters based on NCERT 6th class syllabus (from Honeysuckle textbook)
export const englishChapters = [
  "Chapter 1: Who Did Patrick's Homework?",
  "Chapter 2: How the Dog Found Himself a New Master!",
  "Chapter 3: Taro's Reward",
  "Chapter 4: An Indian-American Woman in Space: Kalpana Chawla",
  "Chapter 5: A Different Kind of School",
  "Chapter 6: Who I Am",
  "Chapter 7: Fair Play",
  "Chapter 8: A Game of Chance",
  "Chapter 9: Desert Animals",
  "Chapter 10: The Banyan Tree",
  "Poetry: A House, A Home",
  "Poetry: The Kite",
  "Poetry: The Quarrel",
  "Poetry: Beauty",
  "Poetry: Where Do All the Teachers Go?",
  "Poetry: The Wonderful Words",
];

// Hindi Chapters based on NCERT 6th class syllabus (from Vasant)
export const hindiChapters = [
  "पाठ 1: वह चिड़िया जो",
  "पाठ 2: बचपन",
  "पाठ 3: नादान दोस्त",
  "पाठ 4: चाँद से थोड़ी सी गप्पें",
  "पाठ 5: अक्षरों का महत्व",
  "पाठ 6: पार नज़र के",
  "पाठ 7: साथी हाथ बढ़ाना",
  "पाठ 8: ऐसे-ऐसे",
  "पाठ 9: टिकट-अलबम",
  "पाठ 10: झाँसी की रानी",
  "पाठ 11: जो देखकर भी नहीं देखते",
  "पाठ 12: संसार पुस्तक है",
  "पाठ 13: मैं सबसे छोटी होऊँ",
  "पाठ 14: लोकगीत",
  "पाठ 15: नौकर",
  "पाठ 16: वन के मार्ग में",
  "पाठ 17: साँस-साँस में बाँस",
];

// Social Studies Chapters based on NCERT 6th class syllabus
export const socialChapters = [
  // History (Our Pasts)
  "Chapter 1: What, Where, How and When?",
  "Chapter 2: On the Trail of the Earliest People",
  "Chapter 3: From Gathering to Growing Food",
  "Chapter 4: In the Earliest Cities",
  "Chapter 5: What Books and Burials Tell Us",
  "Chapter 6: Kingdoms, Kings and an Early Republic",
  "Chapter 7: New Questions and Ideas",
  "Chapter 8: Ashoka, the Emperor Who Gave Up War",
  "Chapter 9: Vital Villages, Thriving Towns",
  "Chapter 10: Traders, Kings and Pilgrims",
  "Chapter 11: New Empires and Kingdoms",
  // Geography (The Earth: Our Habitat)
  "Chapter 1: The Earth in the Solar System",
  "Chapter 2: Globe: Latitudes and Longitudes",
  "Chapter 3: Motions of the Earth",
  "Chapter 4: Maps",
  "Chapter 5: Major Domains of the Earth",
  "Chapter 6: Major Landforms of the Earth",
  "Chapter 7: Our Country – India",
  "Chapter 8: India: Climate, Vegetation and Wildlife",
  // Civics (Social and Political Life)
  "Chapter 1: Understanding Diversity",
  "Chapter 2: Diversity and Discrimination",
  "Chapter 3: What is Government?",
  "Chapter 4: Key Elements of a Democratic Government",
  "Chapter 5: Panchayati Raj",
  "Chapter 6: Rural Administration",
  "Chapter 7: Urban Administration",
  "Chapter 8: Rural Livelihoods",
  "Chapter 9: Urban Livelihoods",
];

// Sanskrit Chapters based on NCERT 6th class syllabus
export const sanskritChapters = [
  "पाठ 1: शब्द परिचयः",
  "पाठ 2: अकारान्त-पुँल्लिङ्गः",
  "पाठ 3: आकारान्त-स्त्रीलिङ्गः",
  "पाठ 4: अकारान्त-नपुंसकलिङ्गः",
  "पाठ 5: सर्वनाम-परिचयः",
  "पाठ 6: धातु-परिचयः (वर्तमानकालः)",
  "पाठ 7: मम विद्यालयः",
  "पाठ 8: मम परिवारः",
  "पाठ 9: मम दिनचर्या",
  "पाठ 10: वृक्षाः",
  "पाठ 11: सन्तोष: परमं सुखम्",
  "पाठ 12: अस्माकं प्रिय: देशः",
  "पाठ 13: विद्या धनम्",
  "पाठ 14: अहम् खादामि",
  "पाठ 15: किम् करोति कः",
];

// Math Questions based on NCERT 6th class syllabus
export const mathEasyQuestions: Question[] = [
  {
    id: 'math-easy-q1',
    text: 'What is the place value of 5 in 7,654,321?',
    options: ['5', '50', '5,000', '50,000'],
    correctAnswer: 3,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The place value of 5 in 7,654,321 is 50,000 (5 × 10,000).'
  },
  {
    id: 'math-easy-q2',
    text: 'Which of the following is the successor of 9999?',
    options: ['9998', '9990', '10000', '10001'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The successor of a number is the number that comes immediately after it. So the successor of 9999 is 10000.'
  },
  {
    id: 'math-easy-q3',
    text: 'What is the sum of 325 + 457?',
    options: ['682', '782', '772', '872'],
    correctAnswer: 1,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '325 + 457 = 782'
  },
  {
    id: 'math-easy-q4',
    text: 'Which is the smallest whole number?',
    options: ['0', '1', '-1', 'None of these'],
    correctAnswer: 0,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'Zero (0) is the smallest whole number.'
  },
  {
    id: 'math-easy-q5',
    text: 'How many lines of symmetry does a rectangle have?',
    options: ['1', '2', '4', 'Infinite'],
    correctAnswer: 1,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'A rectangle has 2 lines of symmetry - one horizontal through the middle and one vertical through the middle.'
  },
];

export const mathMediumQuestions: Question[] = [
  {
    id: 'math-medium-q1',
    text: 'What is the HCF of 24 and 36?',
    options: ['6', '12', '18', '24'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36. The highest common factor is 12.'
  },
  {
    id: 'math-medium-q2',
    text: 'Simplify: -5 + 8',
    options: ['3', '-3', '13', '-13'],
    correctAnswer: 0,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '-5 + 8 = 3'
  },
  {
    id: 'math-medium-q3',
    text: 'Express 3/5 as a decimal.',
    options: ['0.3', '0.6', '0.35', '0.6 repeating'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '3/5 = 3 ÷ 5 = 0.6'
  },
  {
    id: 'math-medium-q4',
    text: 'What is the perimeter of a square with side 7 cm?',
    options: ['14 cm', '21 cm', '28 cm', '49 cm'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The perimeter of a square = 4 × side = 4 × 7 = 28 cm'
  },
  {
    id: 'math-medium-q5',
    text: 'If the cost of 5 pens is ₹75, what is the cost of 8 pens?',
    options: ['₹90', '₹100', '₹120', '₹125'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Cost of 1 pen = ₹75 ÷ 5 = ₹15, Cost of 8 pens = 8 × ₹15 = ₹120'
  },
];

export const mathIntermediateQuestions: Question[] = [
  {
    id: 'math-intermediate-q1',
    text: 'Solve for x: 3x - 7 = 14',
    options: ['5', '7', '9', '21'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: '3x - 7 = 14, 3x = 21, x = 7'
  },
  {
    id: 'math-intermediate-q2',
    text: 'If a train covers 240 km in 4 hours, how much distance will it cover in 7 hours at the same speed?',
    options: ['380 km', '400 km', '420 km', '440 km'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Speed = 240 ÷ 4 = 60 km/hr, Distance in 7 hours = 60 × 7 = 420 km'
  },
  {
    id: 'math-intermediate-q3',
    text: 'What is the area of a triangle with base 12 cm and height 8 cm?',
    options: ['24 cm²', '48 cm²', '72 cm²', '96 cm²'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Area of a triangle = (1/2) × base × height = (1/2) × 12 × 8 = 48 cm²'
  },
  {
    id: 'math-intermediate-q4',
    text: 'Find the value of x in the proportion 8:12 :: 20:x',
    options: ['15', '24', '30', '36'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: '8:12 :: 20:x, so 8/12 = 20/x, Cross multiply: 8x = 12 × 20, 8x = 240, x = 30'
  },
  {
    id: 'math-intermediate-q5',
    text: 'A box contains 3 red balls, 5 green balls, and 2 blue balls. If a ball is drawn at random, what is the probability of getting a green ball?',
    options: ['3/10', '5/10', '2/10', '8/10'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Total number of balls = 3 + 5 + 2 = 10, Probability of green ball = 5/10 = 1/2'
  },
];

export const mathHardQuestions: Question[] = [
  {
    id: 'math-hard-q1',
    text: 'Find the value of x: 2x + 5 = 3(x - 2)',
    options: ['7', '9', '11', '13'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: '2x + 5 = 3(x - 2), 2x + 5 = 3x - 6, 2x - 3x = -6 - 5, -x = -11, x = 11'
  },
  {
    id: 'math-hard-q2',
    text: 'If a car travels 280 km in 4 hours and a bike travels 120 km in 3 hours, how much faster is the car than the bike?',
    options: ['15 km/h', '30 km/h', '40 km/h', '70 km/h'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Speed of car = 280 ÷ 4 = 70 km/h, Speed of bike = 120 ÷ 3 = 40 km/h, Difference = 70 - 40 = 30 km/h'
  },
  {
    id: 'math-hard-q3',
    text: 'If the diagonal of a square is 8√2 cm, what is its area?',
    options: ['32 cm²', '64 cm²', '128 cm²', '256 cm²'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Diagonal = 8√2 cm, Side = diagonal/√2 = (8√2)/√2 = 8 cm, Area = side² = 8² = 64 cm²'
  },
  {
    id: 'math-hard-q4',
    text: 'Two numbers are in the ratio 3:5. If their sum is 120, find the larger number.',
    options: ['45', '72', '75', '80'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Let the numbers be 3x and 5x. Then 3x + 5x = 120, 8x = 120, x = 15. Larger number = 5x = 5 × 15 = 75'
  },
  {
    id: 'math-hard-q5',
    text: 'What is the average of all odd numbers from 1 to 100?',
    options: ['49', '50', '50.5', '51'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'There are 50 odd numbers from 1 to 100. The average is the same as the middle value between 1 and 99, which is 50.'
  },
];

// English Questions based on NCERT 6th class syllabus
export const englishEasyQuestions: Question[] = [
  {
    id: 'english-easy-q1',
    text: 'Who did Patrick\'s homework in the story "Who Did Patrick\'s Homework?"',
    options: ['His mother', 'His friend', 'An elf', 'His teacher'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'In the story, an elf did Patrick\'s homework.'
  },
  {
    id: 'english-easy-q2',
    text: 'What is an antonym for "happy"?',
    options: ['Sad', 'Glad', 'Joyful', 'Merry'],
    correctAnswer: 0,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '"Sad" is an antonym (opposite) of "happy".'
  },
  {
    id: 'english-easy-q3',
    text: 'Identify the noun in this sentence: "The children played in the park."',
    options: ['The', 'Played', 'Children', 'Park'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '"Children" is a noun - it names a person, place, thing, or idea.'
  },
  {
    id: 'english-easy-q4',
    text: 'Which of these is a proper noun?',
    options: ['Book', 'Car', 'London', 'House'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: '"London" is a proper noun - it names a specific place and begins with a capital letter.'
  },
  {
    id: 'english-easy-q5',
    text: 'What is the plural of "child"?',
    options: ['Childs', 'Childen', 'Children', 'Childes'],
    correctAnswer: 2,
    difficulty: 'easy' as DifficultyLevel,
    explanation: 'The plural of "child" is "children". It\'s an irregular plural noun.'
  },
];

export const englishMediumQuestions: Question[] = [
  {
    id: 'english-medium-q1',
    text: 'What was Taro\'s reward in the story "Taro\'s Reward"?',
    options: ['Gold', 'A magical stream', 'A beautiful garden', 'A new house'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'In the story, Taro was rewarded with a magical stream that gave sake (wine) instead of water.'
  },
  {
    id: 'english-medium-q2',
    text: 'Identify the verb in this sentence: "She quickly wrote the letter."',
    options: ['She', 'Quickly', 'Wrote', 'Letter'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '"Wrote" is the verb - it shows action.'
  },
  {
    id: 'english-medium-q3',
    text: 'What is the past tense of "go"?',
    options: ['Goed', 'Gone', 'Went', 'Going'],
    correctAnswer: 2,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'The past tense of "go" is "went". "Gone" is the past participle.'
  },
  {
    id: 'english-medium-q4',
    text: 'Identify the adjective in this sentence: "The old man walked slowly."',
    options: ['Old', 'Man', 'Walked', 'Slowly'],
    correctAnswer: 0,
    difficulty: 'medium' as DifficultyLevel,
    explanation: '"Old" is an adjective - it describes the noun "man".'
  },
  {
    id: 'english-medium-q5',
    text: 'Which sentence uses the correct form of punctuation?',
    options: ['Where are you going.', 'Where are you going?', 'Where are you going!', 'Where are you going,'],
    correctAnswer: 1,
    difficulty: 'medium' as DifficultyLevel,
    explanation: 'Questions should end with a question mark (?)'
  },
];

export const englishIntermediateQuestions: Question[] = [
  {
    id: 'english-intermediate-q1',
    text: 'What type of text is "The Banyan Tree" from your textbook?',
    options: ['A poem', 'A biography', 'A short story', 'A play'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: '"The Banyan Tree" is a short story in the NCERT Class 6 textbook.'
  },
  {
    id: 'english-intermediate-q2',
    text: 'In the poem "The Kite," what makes the kite rise?',
    options: ['The sun', 'The wind', 'The rain', 'Magic'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'In the poem "The Kite," it is the wind that makes the kite rise in the sky.'
  },
  {
    id: 'english-intermediate-q3',
    text: 'Which of these is a compound sentence?',
    options: ['He ran quickly.', 'He ran quickly and he won the race.', 'Running quickly, he won the race.', 'He won the race because he ran quickly.'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'A compound sentence contains two independent clauses joined by a conjunction. "He ran quickly and he won the race" has two independent clauses.'
  },
  {
    id: 'english-intermediate-q4',
    text: 'What is alliteration?',
    options: ['Repetition of same sounds at the end of words', 'Repetition of consonant sounds at the beginning of words', 'Comparison using "like" or "as"', 'Exaggeration for effect'],
    correctAnswer: 1,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'Alliteration is the repetition of consonant sounds at the beginning of words, like "Peter Piper picked a peck of pickled peppers."'
  },
  {
    id: 'english-intermediate-q5',
    text: 'What is the correct meaning of the idiom "a piece of cake"?',
    options: ['A dessert', 'Something very sweet', 'Something very easy', 'A small portion'],
    correctAnswer: 2,
    difficulty: 'intermediate' as DifficultyLevel,
    explanation: 'The idiom "a piece of cake" means that something is very easy to do.'
  },
];

export const englishHardQuestions: Question[] = [
  {
    id: 'english-hard-q1',
    text: 'In the story "Who I Am," what talent does the author\'s grandmother have?',
    options: ['Painting', 'Storytelling', 'Cooking', 'Gardening'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'In the story "Who I Am," the author\'s grandmother has a talent for storytelling.'
  },
  {
    id: 'english-hard-q2',
    text: 'What is a metaphor?',
    options: ['A comparison using "like" or "as"', 'A direct comparison where one thing is said to be another', 'The main idea of a story', 'Repetition of sounds'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'A metaphor is a figure of speech that directly compares one thing to another, without using words like "like" or "as".'
  },
  {
    id: 'english-hard-q3',
    text: 'Identify the type of pronoun in this sentence: "She gave herself a day off."',
    options: ['Personal pronoun', 'Possessive pronoun', 'Reflexive pronoun', 'Relative pronoun'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: '"Herself" is a reflexive pronoun - it refers back to the subject "she".'
  },
  {
    id: 'english-hard-q4',
    text: 'What is the difference between "its" and "it\'s"?',
    options: ['"Its" is a verb, "it\'s" is a noun', '"Its" is a possessive, "it\'s" is a contraction', '"Its" is a contraction, "it\'s" is a possessive', 'They are different spellings of the same word'],
    correctAnswer: 1,
    difficulty: 'hard' as DifficultyLevel,
    explanation: '"Its" is a possessive pronoun showing ownership. "It\'s" is a contraction of "it is" or "it has".'
  },
  {
    id: 'english-hard-q5',
    text: 'Which literary device is used in this sentence: "The stars danced in the night sky"?',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctAnswer: 2,
    difficulty: 'hard' as DifficultyLevel,
    explanation: 'Personification is used here - giving human qualities (dancing) to non-human things (stars).'
  },
];

// Function to generate test for a specific subject
export function generateSubjectTest(subjectId: string, difficulty: DifficultyLevel, chapterId?: string): Test {
  // Create timestamp for unique ID
  const timestamp = Date.now();
  
  // Select questions based on subject
  let easyQuestions: Question[] = [];
  let mediumQuestions: Question[] = [];
  let intermediateQuestions: Question[] = [];
  let hardQuestions: Question[] = [];
  let subjectName = '';
  let chapters: string[] = [];
  let icon = '';
  
  switch(subjectId) {
    case 'math':
      easyQuestions = mathEasyQuestions;
      mediumQuestions = mathMediumQuestions;
      intermediateQuestions = mathIntermediateQuestions;
      hardQuestions = mathHardQuestions;
      subjectName = 'Mathematics';
      chapters = mathChapters;
      icon = 'fa-calculator';
      break;
    case 'english':
      easyQuestions = englishEasyQuestions;
      mediumQuestions = englishMediumQuestions;
      intermediateQuestions = englishIntermediateQuestions;
      hardQuestions = englishHardQuestions;
      subjectName = 'English';
      chapters = englishChapters;
      icon = 'fa-book';
      break;
    case 'hindi':
      easyQuestions = hindiEasyQuestions;
      mediumQuestions = hindiMediumQuestions;
      intermediateQuestions = hindiIntermediateQuestions;
      hardQuestions = hindiHardQuestions;
      subjectName = 'हिंदी';
      chapters = hindiChapters;
      icon = 'fa-language';
      break;
    case 'sanskrit':
      easyQuestions = sanskritEasyQuestions;
      mediumQuestions = sanskritMediumQuestions;
      intermediateQuestions = sanskritIntermediateQuestions;
      hardQuestions = sanskritHardQuestions;
      subjectName = 'संस्कृत';
      chapters = sanskritChapters;
      icon = 'fa-om';
      break;
    case 'social':
      easyQuestions = socialEasyQuestions;
      mediumQuestions = socialMediumQuestions;
      intermediateQuestions = socialIntermediateQuestions;
      hardQuestions = socialHardQuestions;
      subjectName = 'Social Studies';
      chapters = socialChapters;
      icon = 'fa-globe';
      break;
    case 'science':
    default:
      // Use existing science questions from testData.ts
      easyQuestions = scienceEasyQuestions;
      mediumQuestions = scienceMediumQuestions;
      intermediateQuestions = scienceIntermediateQuestions;
      hardQuestions = scienceHardQuestions;
      subjectName = 'Science';
      chapters = scienceChapters;
      icon = 'fa-atom';
  }
  
  // Shuffle all question arrays to ensure randomness
  const shuffledEasy = [...easyQuestions].sort(() => Math.random() - 0.5);
  const shuffledMedium = [...mediumQuestions].sort(() => Math.random() - 0.5);
  const shuffledIntermediate = [...intermediateQuestions].sort(() => Math.random() - 0.5);
  const shuffledHard = [...hardQuestions].sort(() => Math.random() - 0.5);
  
  // Create unique IDs for questions to ensure they're treated as new
  const uniqueId = timestamp.toString();
  
  // Select questions based on difficulty
  const testQuestions: Question[] = [];
  
  switch(difficulty) {
    case 'easy':
      testQuestions.push(...shuffledEasy.slice(0, 7).map((q, i) => ({...q, id: `${uniqueId}-easy-${i}`})));
      testQuestions.push(...shuffledMedium.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      break;
    case 'medium':
      testQuestions.push(...shuffledEasy.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-easy-${i}`})));
      testQuestions.push(...shuffledMedium.slice(0, 5).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      testQuestions.push(...shuffledIntermediate.slice(0, 2).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
      break;
    case 'intermediate':
      testQuestions.push(...shuffledMedium.slice(0, 3).map((q, i) => ({...q, id: `${uniqueId}-medium-${i}`})));
      testQuestions.push(...shuffledIntermediate.slice(0, 5).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
      testQuestions.push(...shuffledHard.slice(0, 2).map((q, i) => ({...q, id: `${uniqueId}-hard-${i}`})));
      break;
    case 'hard':
      testQuestions.push(...shuffledIntermediate.slice(0, 2).map((q, i) => ({...q, id: `${uniqueId}-intermediate-${i}`})));
      testQuestions.push(...shuffledHard.slice(0, 8).map((q, i) => ({...q, id: `${uniqueId}-hard-${i}`})));
      break;
  }
  
  // Take exactly 10 questions or pad with medium questions if needed
  let finalQuestions = testQuestions;
  if (testQuestions.length > 10) {
    finalQuestions = testQuestions.slice(0, 10);
  } else if (testQuestions.length < 10) {
    const additionalQuestions = [...shuffledMedium]
      .filter(q => !testQuestions.some(existing => existing.id === q.id))
      .slice(0, 10 - testQuestions.length)
      .map((q, i) => ({...q, id: `${uniqueId}-additional-${i}`}));
    finalQuestions = [...testQuestions, ...additionalQuestions];
  }
  
  // Get a chapter based on chapterId or select random chapter
  let selectedChapter = '';
  
  if (chapterId && !isNaN(parseInt(chapterId))) {
    const index = parseInt(chapterId) - 1;
    if (index >= 0 && index < chapters.length) {
      selectedChapter = chapters[index];
    } else {
      selectedChapter = chapters[0];
    }
  } else {
    selectedChapter = chapters[Math.floor(Math.random() * chapters.length)];
  }
  
  // Final shuffle of questions
  const shuffled = [...finalQuestions].sort(() => Math.random() - 0.5);
  
  return {
    id: `${subjectId}-test-${timestamp}`,
    subjectId,
    title: `${subjectName} ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Test`,
    chapter: selectedChapter,
    icon,
    duration: 300, // 5 minutes
    difficulty,
    generatedBy: 'ai' as const,
    questions: shuffled
  };
}

// Get available chapters for a subject
export function getChaptersForSubject(subjectId: string): string[] {
  switch(subjectId) {
    case 'math':
      return mathChapters;
    case 'english':
      return englishChapters;
    case 'hindi':
      return hindiChapters;
    case 'social':
      return socialChapters;
    case 'sanskrit':
      return sanskritChapters;
    case 'science':
    default:
      return scienceChapters;
  }
}