
const translations = {
    ar: {
        loading: "جارٍ التحميل...",
        siteTitle: "الفن المسيحي المبكر",
        nav: { home: "الرئيسية", gallery: "المعرض", timeline: "التاريخ", courses: "الكورسات" },
        hero: { subtitle: "اكتشف جمال الإيمان", title: "الفن المسيحي المبكر", desc: "رحلة عبر الزمن لاستكشاف أقدم الأعمال الفنية المسيحية من القرن الثاني حتى السابع الميلادي. من الكاتاكومب الرومانية إلى أيقونات سيناء، اكتشف كيف عبر المؤمنون الأوائل عن إيمانهم بالفن.", explore: "استكشف المعرض", coursesBtn: "الكورسات" },
        gallery: { label: "المعرض", title: "صور مسيحية قديمة", desc: "مجموعة من أهم الأعمال الفنية المسيحية من العصور الأولى", all: "الكل", catacomb: "الكاتاكومب", icon: "أيقونات", mosaic: "فسيفساء", sarcophagus: "توابيت" },
        timeline: { label: "التاريخ", title: "خط الزمن", desc: "رحلة تطور الفن المسيحي عبر العصور" },
        courses: { label: "التعلم", title: "كورسات الفن المسيحي", desc: "مصادر تعليمية لتعمق فهمك في تاريخ الفن المسيحي", free: "مجاني", start: "ابدأ الآن", details: "التفاصيل" },
        footer: { text: "استكشاف جمال وعمق الفن المسيحي منذ القرن الثاني الميلادي. مصدر تعليمي مفتوح لكل من يرغب في فهم تاريخ الإيمان عبر الفن." },
        lightbox: { close: "إغلاق" }
    },
    en: {
        loading: "Loading...",
        siteTitle: "Early Christian Art",
        nav: { home: "Home", gallery: "Gallery", timeline: "Timeline", courses: "Courses" },
        hero: { subtitle: "Discover the Beauty of Faith", title: "Early Christian Art", desc: "A journey through time to explore the earliest Christian artworks from the 2nd to the 7th century. From the Roman catacombs to the icons of Sinai, discover how the first believers expressed their faith through art.", explore: "Explore Gallery", coursesBtn: "Courses" },
        gallery: { label: "Gallery", title: "Ancient Christian Images", desc: "A collection of the most important Christian artworks from the early ages", all: "All", catacomb: "Catacombs", icon: "Icons", mosaic: "Mosaics", sarcophagus: "Sarcophagi" },
        timeline: { label: "History", title: "Timeline", desc: "A journey through the evolution of Christian art across the ages" },
        courses: { label: "Learning", title: "Christian Art Courses", desc: "Educational resources to deepen your understanding of Christian art history", free: "Free", start: "Start Now", details: "Details" },
        footer: { text: "Exploring the beauty and depth of Christian art since the 2nd century. An open educational resource for anyone wishing to understand the history of faith through art." },
        lightbox: { close: "Close" }
    }
};

let currentLang = 'ar';

const galleryData = [
    {
        id: 1, category: "icon",
        title: { ar: "المسيح بانتوكراتور", en: "Christ Pantocrator" },
        date: { ar: "القرن السادس الميلادي", en: "6th Century AD" },
        location: { ar: "دير سانت كاترين، جبل سيناء", en: "St. Catherine's Monastery, Mount Sinai" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Christ_Pantocrator_-_Saint_Catherine%27s_Monastery.jpg/800px-Christ_Pantocrator_-_Saint_Catherine%27s_Monastery.jpg",
        desc: { ar: "أقدم أيقونة مسيحية معروفة على الإطلاق، مرسومة بالشمع (الإنكوستيك) على لوح خشبي. تظهر وجه المسيح بانقسام مميز: نصف يعبّر عن اللاهوتية والنصف الآخر عن الإنسانية.", en: "The oldest known Christian icon, painted in encaustic on a wooden panel. It shows Christ's face with a distinctive split: one half expressing divinity and the other humanity." }
    },
    {
        id: 2, category: "catacomb",
        title: { ar: "الراعي الصالح", en: "The Good Shepherd" },
        date: { ar: "250-300 م", en: "250-300 AD" },
        location: { ar: "كاتاكومب بريسيلا، روما", en: "Catacomb of Priscilla, Rome" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Good_Shepherd_Catacomb_of_Priscilla.jpg/800px-Good_Shepherd_Catacomb_of_Priscilla.jpg",
        desc: { ar: "أشهر رموز المسيحية المبكرة، يصوّر يسوع شابا بلا لحية يحمل خروفا على كتفيه. مستوحى من الفن الروماني الكلاسيكي ويعبّر عن الرعاية الإلهية.", en: "The most famous symbol of early Christianity, depicting Jesus as a beardless young man carrying a sheep on his shoulders. Inspired by classical Roman art, it expresses divine care." }
    },
    {
        id: 3, category: "catacomb",
        title: { ar: "يسوع يشفي المفلوج", en: "Jesus Healing the Paralytic" },
        date: { ar: "235 م", en: "235 AD" },
        location: { ar: "كنيسة دورا أوروبوس، سوريا", en: "Dura-Europos Church, Syria" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dura-Europos_christian_painting.jpg/800px-Dura-Europos_christian_painting.jpg",
        desc: { ar: "أقدم تصوير معروف ليسوع في فن مسيحي، يظهره شابا قصير الشعر يحمل عصا سحرية (عصا موسى) ويشفي المفلوج. من كنيسة دورا أوروبوس، أقدم كنيسة مسيحية معروفة.", en: "The oldest known depiction of Jesus in Christian art, showing him as a short-haired young man holding a magic wand (Moses' staff) and healing the paralytic. From Dura-Europos, the oldest known Christian church." }
    },
    {
        id: 4, category: "sarcophagus",
        title: { ar: "تابوت يونيوس باسوس", en: "Sarcophagus of Junius Bassus" },
        date: { ar: "359 م", en: "359 AD" },
        location: { ar: "كاتدرائية القديس بطرس، الفاتيكان", en: "St. Peter's Basilica, Vatican" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sarcophagus_of_Junius_Bassus.jpg/800px-Sarcophagus_of_Junius_Bassus.jpg",
        desc: { ar: "تابوت رخامي فاخر لروماني اعتنق المسيحية قبل وفاته. يحتوي على نقوش معقدة تصور مشاهد من العهدين القديم والجديد، من أهم آثار الفن المسيحي المبكر.", en: "A luxurious marble sarcophagus for a Roman who converted to Christianity before his death. It contains intricate carvings depicting scenes from both the Old and New Testaments, one of the most important artifacts of early Christian art." }
    },
    {
        id: 5, category: "catacomb",
        title: { ar: "إحياء لعازر", en: "The Raising of Lazarus" },
        date: { ar: "القرن الثالث الميلادي", en: "3rd Century AD" },
        location: { ar: "كاتاكومب الجورداني، روما", en: "Catacomb of the Jordani, Rome" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Raising_of_Lazarus_catacomb.jpg/800px-Raising_of_Lazarus_catacomb.jpg",
        desc: { ar: "جدارية من الكاتاكومب تصور معجزة إحياء لعازر. يظهر يسوع وهو يحمل عصا (فيرجا) مشيرا إليها، وهو تقليد روماني في تصوير المعجزات.", en: "A catacomb fresco depicting the miracle of raising Lazarus. Jesus is shown holding a staff (virga) pointing at it, a Roman tradition in depicting miracles." }
    },
    {
        id: 6, category: "sarcophagus",
        title: { ar: "صندوق بريشيا", en: "Brescia Casket" },
        date: { ar: "القرن الرابع الميلادي", en: "4th Century AD" },
        location: { ar: "متحف بريشيا، إيطاليا", en: "Brescia Museum, Italy" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Brescia_Casket.jpg/800px-Brescia_Casket.jpg",
        desc: { ar: "صندوق عاجي منحوت ببراعة يحتوي على مشاهد من حياة المسيح. يعتقد أنه من إنتاج عهد القديس أمبروسيوس في ميلانو، مقر البلاط الإمبراطوري آنذاك.", en: "A masterfully carved ivory casket containing scenes from the life of Christ. Believed to be from the era of St. Ambrose in Milan, the seat of the imperial court at the time." }
    },
    {
        id: 7, category: "mosaic",
        title: { ar: "فسيفساء العذراء والطفل", en: "Virgin and Child Mosaic" },
        date: { ar: "432 م", en: "432 AD" },
        location: { ar: "سانتا ماريا ماجيوري، روما", en: "Santa Maria Maggiore, Rome" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Santa_Maria_Maggiore_mosaic.jpg/800px-Santa_Maria_Maggiore_mosaic.jpg",
        desc: { ar: "من أقدم الفسيفساء المسيحية في روما، تزين جدران كنيسة سانتا ماريا ماجيوري. تظهر تطور الفن المسيحي بعد مرسوم ميلانو وشرعنة المسيحية.", en: "Among the oldest Christian mosaics in Rome, adorning the walls of Santa Maria Maggiore. It shows the development of Christian art after the Edict of Milan and the legalization of Christianity." }
    },
    {
        id: 8, category: "catacomb",
        title: { ar: "يونس والحوت", en: "Jonah and the Whale" },
        date: { ar: "القرن الثالث الميلادي", en: "3rd Century AD" },
        location: { ar: "كاتاكومب روما", en: "Catacombs of Rome" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jonah_and_the_Whale_catacomb.jpg/800px-Jonah_and_the_Whale_catacomb.jpg",
        desc: { ar: "أحد أكثر الرموز شيوعا في الفن المسيحي المبكر. يعبّر يونس المبتلع من الحوت عن قيامة المسيح بعد ثلاثة أيام، وهو رمز قوي للخلاص والحياة الأبدية.", en: "One of the most common symbols in early Christian art. Jonah swallowed by the whale represents Christ's resurrection after three days, a powerful symbol of salvation and eternal life." }
    },
    {
        id: 9, category: "catacomb",
        title: { ar: "الشباب الثلاثة في الأتون", en: "Three Youths in the Fiery Furnace" },
        date: { ar: "القرن الثالث الميلادي", en: "3rd Century AD" },
        location: { ar: "كاتاكومب بريسيلا، روما", en: "Catacomb of Priscilla, Rome" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Three_Youths_Fiery_Furnace.jpg/800px-Three_Youths_Fiery_Furnace.jpg",
        desc: { ar: "جدارية تصور قصة الشباب الثلاثة من سفر دانيال. رمز مسيحي مبكر للخلاص والحماية الإلهية في وجه الاضطهاد الروماني.", en: "A fresco depicting the story of the three youths from the Book of Daniel. An early Christian symbol of salvation and divine protection in the face of Roman persecution." }
    }
];

const timelineData = [
    {
        date: { ar: "القرن الثاني الميلادي", en: "2nd Century AD" },
        text: { ar: "أولى الأعمال الفنية المسيحية تظهر في كاتاكومب روما، مستخدمة رموزا سرية مثل السمكة (إخثوس) والطاووس.", en: "The first Christian artworks appear in the Roman catacombs, using secret symbols such as the fish (Ichthys) and the peacock." }
    },
    {
        date: { ar: "235 م - كنيسة دورا أوروبوس", en: "235 AD - Dura-Europos Church" },
        text: { ar: "أقدم كنيسة مسيحية معروفة في سوريا، تحتوي على جداريات تصور يسوع شافي المفلوج.", en: "The oldest known Christian church in Syria, containing frescoes depicting Jesus healing the paralytic." }
    },
    {
        date: { ar: "313 م - مرسوم ميلانو", en: "313 AD - Edict of Milan" },
        text: { ar: "قسطنطين يشرع المسيحية، مما يسمح ببناء الكنائس العامة وازدهار الفن المسيحي.", en: "Constantine legalizes Christianity, allowing the construction of public churches and the flourishing of Christian art." }
    },
    {
        date: { ar: "القرن الرابع", en: "4th Century" },
        text: { ar: "ظهور التوابيت المنحوتة مثل تابوت يونيوس باسوس (359 م) والفسيفساء الذهبية.", en: "The appearance of carved sarcophagi such as the Sarcophagus of Junius Bassus (359 AD) and golden mosaics." }
    },
    {
        date: { ar: "القرن السادس", en: "6th Century" },
        text: { ar: "أقدم أيقونة مسيحية معروفة: المسيح بانتوكراتور من دير سانت كاترين بجبل سيناء.", en: "The oldest known Christian icon: Christ Pantocrator from St. Catherine's Monastery at Mount Sinai." }
    }
];

const coursesData = [
    {
        id: 1,
        title: { ar: "تاريخ ولاهوت الأيقونة", en: "History & Theology of the Icon" },
        provider: "iconography.online",
        icon: "fas fa-palette",
        desc: { ar: "كورس نظري متكامل يغطي تاريخ الفن المسيحي من القرون الأولى، يتضمن 6 محاضرات فيديو تفاعلية مع مناقشات حية.", en: "A comprehensive theoretical course covering the history of Christian art from the early centuries, including 6 interactive video lectures with live discussions." },
        duration: { ar: "6 أسابيع", en: "6 Weeks" },
        lectures: { ar: "6 محاضرات", en: "6 Lectures" },
        level: { ar: "جميع المستويات", en: "All Levels" },
        price: "$80",
        free: false,
        link: "https://iconography.online/theology-of-icon.html",
        badge: { ar: "أونلاين", en: "Online" }
    },
    {
        id: 2,
        title: { ar: "جمال الإيمان - تاريخ الفن المسيحي", en: "Beauty of Faith - Christian Art History" },
        provider: "Institute of Catholic Culture",
        icon: "fas fa-church",
        desc: { ar: "كورس مجاني أونلاين يستكشف جمال الفن المقدس عبر العصور. يتناول تطور الأيقونات والفن المسيحي منذ البدايات حتى العصر الحديث.", en: "A free online course exploring the beauty of sacred art through the ages. It covers the evolution of icons and Christian art from the beginnings to the modern era." },
        duration: { ar: "فصل دراسي كامل", en: "Full Semester" },
        lectures: { ar: "محاضرات مسجلة", en: "Recorded Lectures" },
        level: { ar: "مبتدئ", en: "Beginner" },
        price: { ar: "مجاني", en: "Free" },
        free: true,
        link: "https://instituteofcatholicculture.org/the-beauty-of-faith",
        badge: { ar: "مجاني", en: "Free" }
    },
    {
        id: 3,
        title: { ar: "الفن المسيحي المبكر والبيزنطي", en: "Early Christian & Byzantine Art" },
        provider: "Smarthistory (Khan Academy)",
        icon: "fas fa-landmark",
        desc: { ar: "مقالات وفيديوهات تعليمية مجانية تغطي الفن المسيحي من الكاتاكومب حتى الفن البيزنطي. يتضمن تحليلا مفصلا للأعمال الفنية الرئيسية.", en: "Free educational articles and videos covering Christian art from the catacombs to Byzantine art. Includes detailed analysis of major artworks." },
        duration: { ar: "ذاتي السرعة", en: "Self-Paced" },
        lectures: { ar: "مقالات + فيديو", en: "Articles + Video" },
        level: { ar: "جميع المستويات", en: "All Levels" },
        price: { ar: "مجاني", en: "Free" },
        free: true,
        link: "https://smarthistory.org/early-christian-art/",
        badge: { ar: "مجاني", en: "Free" }
    },
    {
        id: 4,
        title: { ar: "Early Christian Art & Architecture", en: "Early Christian Art & Architecture" },
        provider: "George Mason University",
        icon: "fas fa-university",
        desc: { ar: "كورس أكاديمي جامعي يدرس الفن المسيحي والبيزنطي بعد سقوط الإمبراطورية الرومانية. يتناول العمارة والأيقونات والجدل حول الصور.", en: "An academic university course studying Christian and Byzantine art after the fall of the Roman Empire. Covers architecture, icons, and the iconoclastic controversy." },
        duration: { ar: "فصل دراسي", en: "Semester" },
        lectures: { ar: "3 ساعات معتمدة", en: "3 Credit Hours" },
        level: { ar: "جامعي", en: "University" },
        price: { ar: "جامعي", en: "University" },
        free: false,
        link: "http://historyarthistory.gmu.edu/courses/arth333",
        badge: { ar: "أكاديمي", en: "Academic" }
    },
    {
        id: 5,
        title: { ar: "Early Christian Art - Video Lesson", en: "Early Christian Art - Video Lesson" },
        provider: "Study.com",
        icon: "fas fa-video",
        desc: { ar: "درس فيديو مكثف يغطي تاريخ الفن المسيحي المبكر، الرموز، والأعمال الفنية الرئيسية. مناسب للمراجعة السريعة أو التعلم الذاتي.", en: "An intensive video lesson covering the history of early Christian art, symbols, and major artworks. Suitable for quick review or self-study." },
        duration: { ar: "درس واحد", en: "One Lesson" },
        lectures: { ar: "فيديو + اختبار", en: "Video + Quiz" },
        level: { ar: "مبتدئ", en: "Beginner" },
        price: { ar: "اشتراك", en: "Subscription" },
        free: false,
        link: "https://study.com/academy/lesson/video/early-christian-art-and-architecture.html",
        badge: { ar: "فيديو", en: "Video" }
    },
    {
        id: 6,
        title: { ar: "الأيقونات وتفسيرها", en: "Icons and Their Interpretation" },
        provider: "Russian Icons Blog",
        icon: "fas fa-book-open",
        desc: { ar: "مدونة تعليمية متخصصة في تاريخ الأيقونات والفن المسيحي. تقدم تحليلا عميقا لتطور الأيقونات من الفن المسيحي المبكر حتى العصر البيزنطي.", en: "An educational blog specializing in the history of icons and Christian art. Offers deep analysis of the evolution of icons from early Christian art to the Byzantine era." },
        duration: { ar: "مقالات متعددة", en: "Multiple Articles" },
        lectures: { ar: "محتوى مستمر", en: "Ongoing Content" },
        level: { ar: "متوسط", en: "Intermediate" },
        price: { ar: "مجاني", en: "Free" },
        free: true,
        link: "https://russianicons.wordpress.com/tag/early-christian-art/",
        badge: { ar: "مدونة", en: "Blog" }
    }
];

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
    localStorage.setItem('eca_lang', currentLang);
}

function applyLanguage() {
    const html = document.documentElement;
    const body = document.body;
    const langLabel = document.getElementById('langLabel');

    if (currentLang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.setAttribute('dir', 'ltr');
        langLabel.textContent = 'العربية';
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.setAttribute('dir', 'rtl');
        langLabel.textContent = 'English';
    }

    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = el.getAttribute('data-' + currentLang);
        } else {
            el.textContent = el.getAttribute('data-' + currentLang);
        }
    });

    renderGallery(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
    renderTimeline();
    renderCourses();
}

function getText(obj) {
    return typeof obj === 'object' ? obj[currentLang] : obj;
}

function getCategoryName(cat) {
    const names = {
        ar: { catacomb: 'كاتاكومب', icon: 'أيقونة', mosaic: 'فسيفساء', sarcophagus: 'تابوت' },
        en: { catacomb: 'Catacomb', icon: 'Icon', mosaic: 'Mosaic', sarcophagus: 'Sarcophagus' }
    };
    return names[currentLang][cat] || cat;
}

function renderGallery(filter) {
    const grid = document.getElementById('galleryGrid');
    const items = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

    grid.innerHTML = items.map(item => {
        const title = getText(item.title);
        const date = getText(item.date);
        const location = getText(item.location);
        return '<div class="gallery-item fade-in" data-id="' + item.id + '">' +
            '<img src="' + item.image + '" alt="' + title + '" loading="lazy">' +
            '<span class="gallery-tag">' + getCategoryName(item.category) + '</span>' +
            '<div class="gallery-overlay">' +
            '<h3 class="gallery-title">' + title + '</h3>' +
            '<div class="gallery-meta">' + date + ' | ' + location + '</div>' +
            '</div></div>';
    }).join('');

    grid.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(parseInt(item.dataset.id)));
    });

    setTimeout(() => {
        grid.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    }, 100);
}

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });
}

function openLightbox(id) {
    const item = galleryData.find(g => g.id === id);
    if (!item) return;

    document.getElementById('lightboxImg').src = item.image;
    document.getElementById('lightboxTitle').textContent = getText(item.title);
    document.getElementById('lightboxMeta').textContent = getText(item.date) + ' | ' + getText(item.location) + ' | ' + getCategoryName(item.category);
    document.getElementById('lightboxDesc').textContent = getText(item.desc);
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function setupLightbox() {
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = timelineData.map((item, index) => {
        const date = getText(item.date);
        const text = getText(item.text);
        return '<div class="timeline-item fade-in">' +
            '<div class="timeline-dot"></div>' +
            '<div class="timeline-content">' +
            '<div class="timeline-date">' + date + '</div>' +
            '<div class="timeline-text">' + text + '</div>' +
            '</div></div>';
    }).join('');
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    const t = translations[currentLang].courses;
    grid.innerHTML = coursesData.map(course => {
        const title = getText(course.title);
        const desc = getText(course.desc);
        const duration = getText(course.duration);
        const lectures = getText(course.lectures);
        const level = getText(course.level);
        const price = getText(course.price);
        const badge = getText(course.badge);
        return '<div class="course-card fade-in">' +
            (badge ? '<span class="course-badge">' + badge + '</span>' : '') +
            '<div class="course-header">' +
            '<div class="course-icon"><i class="' + course.icon + '"></i></div>' +
            '<h3 class="course-title">' + title + '</h3>' +
            '<div class="course-provider">' + course.provider + '</div>' +
            '</div>' +
            '<div class="course-body">' +
            '<p class="course-desc">' + desc + '</p>' +
            '<div class="course-meta">' +
            '<div class="course-meta-item"><i class="fas fa-clock"></i><span>' + duration + '</span></div>' +
            '<div class="course-meta-item"><i class="fas fa-book"></i><span>' + lectures + '</span></div>' +
            '<div class="course-meta-item"><i class="fas fa-signal"></i><span>' + level + '</span></div>' +
            '</div></div>' +
            '<div class="course-footer">' +
            '<div class="course-price ' + (course.free ? 'free' : '') + '">' + price + '</div>' +
            '<a href="' + course.link + '" target="_blank" class="course-link">' +
            (course.free ? t.start : t.details) +
            ' <i class="fas fa-arrow-left"></i></a>' +
            '</div></div>';
    }).join('');
}

function setupNavigation() {
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navLinks');

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = btn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = btn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('eca_lang');
    if (savedLang && savedLang !== currentLang) {
        currentLang = savedLang;
        applyLanguage();
    }

    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);

    renderGallery('all');
    renderTimeline();
    renderCourses();
    setupFilters();
    setupLightbox();
    setupNavigation();
    setupScrollAnimations();
    setupMobileMenu();
});