// ─── Site Strings (English only) ─────────────────────────────────────────────
const t = {
    loading: "Loading...",
    start: "Start Now",
    details: "Details"
};

// ─── Gallery Data ─────────────────────────────────────────────────────────────
const galleryData = [
    {
        id: 1, category: "icon",
        title: "Christ Pantocrator",
        date: "6th Century AD",
        location: "St. Catherine's Monastery, Mount Sinai",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Christ_Pantocrator_-_Saint_Catherine%27s_Monastery.jpg/800px-Christ_Pantocrator_-_Saint_Catherine%27s_Monastery.jpg",
        desc: "The oldest known Christian icon, painted in encaustic on a wooden panel. It shows Christ's face with a distinctive split: one half expressing divinity and the other humanity."
    },
    {
        id: 2, category: "catacomb",
        title: "The Good Shepherd",
        date: "250-300 AD",
        location: "Catacomb of Priscilla, Rome",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Good_Shepherd_Catacomb_of_Priscilla.jpg/800px-Good_Shepherd_Catacomb_of_Priscilla.jpg",
        desc: "The most famous symbol of early Christianity, depicting Jesus as a beardless young man carrying a sheep on his shoulders. Inspired by classical Roman art, it expresses divine care."
    },
    {
        id: 3, category: "catacomb",
        title: "Jesus Healing the Paralytic",
        date: "235 AD",
        location: "Dura-Europos Church, Syria",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dura-Europos_christian_painting.jpg/800px-Dura-Europos_christian_painting.jpg",
        desc: "The oldest known depiction of Jesus in Christian art, showing him as a short-haired young man holding a magic wand (Moses' staff) and healing the paralytic. From Dura-Europos, the oldest known Christian church."
    },
    {
        id: 4, category: "sarcophagus",
        title: "Sarcophagus of Junius Bassus",
        date: "359 AD",
        location: "St. Peter's Basilica, Vatican",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sarcophagus_of_Junius_Bassus.jpg/800px-Sarcophagus_of_Junius_Bassus.jpg",
        desc: "A luxurious marble sarcophagus for a Roman who converted to Christianity before his death. It contains intricate carvings depicting scenes from both the Old and New Testaments."
    },
    {
        id: 5, category: "catacomb",
        title: "The Raising of Lazarus",
        date: "3rd Century AD",
        location: "Catacomb of the Jordani, Rome",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Raising_of_Lazarus_catacomb.jpg/800px-Raising_of_Lazarus_catacomb.jpg",
        desc: "A catacomb fresco depicting the miracle of raising Lazarus. Jesus is shown holding a staff (virga) pointing at it, a Roman tradition in depicting miracles."
    },
    {
        id: 6, category: "sarcophagus",
        title: "Brescia Casket",
        date: "4th Century AD",
        location: "Brescia Museum, Italy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Brescia_Casket.jpg/800px-Brescia_Casket.jpg",
        desc: "A masterfully carved ivory casket containing scenes from the life of Christ. Believed to be from the era of St. Ambrose in Milan, the seat of the imperial court at the time."
    },
    {
        id: 7, category: "mosaic",
        title: "Virgin and Child Mosaic",
        date: "432 AD",
        location: "Santa Maria Maggiore, Rome",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Santa_Maria_Maggiore_mosaic.jpg/800px-Santa_Maria_Maggiore_mosaic.jpg",
        desc: "Among the oldest Christian mosaics in Rome, adorning the walls of Santa Maria Maggiore. It shows the development of Christian art after the Edict of Milan and the legalization of Christianity."
    },
    {
        id: 8, category: "catacomb",
        title: "Jonah and the Whale",
        date: "3rd Century AD",
        location: "Catacombs of Rome",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jonah_and_the_Whale_catacomb.jpg/800px-Jonah_and_the_Whale_catacomb.jpg",
        desc: "One of the most common symbols in early Christian art. Jonah swallowed by the whale represents Christ's resurrection after three days, a powerful symbol of salvation and eternal life."
    },
    {
        id: 9, category: "catacomb",
        title: "Three Youths in the Fiery Furnace",
        date: "3rd Century AD",
        location: "Catacomb of Priscilla, Rome",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Three_Youths_Fiery_Furnace.jpg/800px-Three_Youths_Fiery_Furnace.jpg",
        desc: "A fresco depicting the story of the three youths from the Book of Daniel. An early Christian symbol of salvation and divine protection in the face of Roman persecution."
    }
];

// ─── Timeline Data ────────────────────────────────────────────────────────────
const timelineData = [
    {
        date: "The Flight into Egypt",
        text: "To escape the persecution of King Herod, the Holy Family—Jesus Christ, the Virgin Mary, and Saint Joseph—fled to Egypt following God’s guidance through an angel. Egypt became a place of safety and refuge, fulfilling the biblical prophecy: “Out of Egypt I called My Son” (Matthew 2:15)."
    },
    {
        date: "The Journey Across Egypt",
        text: "The Holy Family traveled through many cities and villages across Egypt, leaving behind a remarkable spiritual and cultural legacy. Their route included Sinai, the Nile Delta, Cairo, Middle Egypt, and Upper Egypt, where many churches, monasteries, and historic landmarks commemorate their visit."
    },
    {
        date: "A Blessing for Egypt",
        text: "According to Coptic tradition, the Holy Family blessed the land wherever they stayed. Their presence transformed Egypt into a sacred destination, and many of the places they visited remain important pilgrimage sites that welcome visitors from around the world."
    },
    {
        date: "The Birth of Coptic Heritage",
        text: "The journey of the Holy Family through Egypt lasted for more than three years and a half. During this time, they sought refuge in caves, palm groves, and humble homes, always protected by God's providence and the care of St. Joseph. This period later became a foundational chapter in the history of the Coptic Church."
    },
    {
        date: "A Living Legacy Today",
        text: "The Holy Family's journey continues to inspire people across generations. It represents hope, peace, hospitality, and resilience. Through the Coptic Orthodox Cultural Center Taiwan, we seek to share this extraordinary heritage and build bridges of friendship and cultural understanding between Egypt, Taiwan, and the world."
    }
];

// ─── Courses Data ─────────────────────────────────────────────────────────────
const coursesData = [
    {
        id: 1,
        title: "Historical",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-landmark",
        bgImage: "./img/photo-1.jpeg",      /* ← change to your own image */
        desc: "Explore the rich historical heritage of Coptic art and culture across the centuries.",
        duration: "8 Weeks",
        lectures: "12 Sessions",
        level: "All Levels",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "History"
    },
    {
        id: 2,
        title: "Icon",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-palette",
        bgImage: "./img/photo-2.jpeg",      /* ← change to your own image */
        desc: "Dive deep into the theology, symbolism and technique behind sacred Christian iconography.",
        duration: "6 Weeks",
        lectures: "8 Sessions",
        level: "Beginner",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "Icons"
    },
    {
        id: 3,
        title: "Food",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-utensils",
        bgImage: "./img/food.webp",       /* ← change to your own image */
        desc: "Discover the traditional Coptic cuisine — recipes, fasting traditions and culinary heritage.",
        duration: "4 Weeks",
        lectures: "6 Sessions",
        level: "Beginner",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "Cuisine"
    },
    {
        id: 4,
        title: "Knitting",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-cut",
        bgImage: "./img/Knitting.jfif",
        desc: "Learn the art of traditional Coptic knitting patterns passed down through generations.",
        duration: "5 Weeks",
        lectures: "7 Sessions",
        level: "Intermediate",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "Crafts"
    },
    {
        id: 5,
        title: "Church History",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-church",
        bgImage: "./img/WhatsApp Image 2026-07-18 at 1.33.38 AM (4).jpeg",
        desc: "A comprehensive study of church history, architecture and the lives of the saints.",
        duration: "10 Weeks",
        lectures: "15 Sessions",
        level: "All Levels",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "Church"
    },
    {
        id: 6,
        title: "Iota",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-music",
        bgImage: "img/images.jfif",
        desc: "Explore Coptic hymns and liturgical music — from ancient melodies to modern arrangements.",
        duration: "6 Weeks",
        lectures: "9 Sessions",
        level: "All Levels",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "Music"
    },
    {
        id: 7,
        title: "DIY Workshops",
        provider: "Sn. Paul Cultural Centre",
        icon: "fas fa-tools",
        bgImage: "img/images (1).jfif",
        desc: "Hands-on workshops crafting traditional Coptic art — icons, candles, mosaics and more.",
        duration: "Ongoing",
        lectures: "Monthly",
        level: "All Levels",
        price: "Free",
        free: true,
        link: "#courses",
        badge: "DIY"
    }
];

// ─── Renderers ────────────────────────────────────────────────────────────────
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    container.innerHTML = timelineData.map(item =>
        '<div class="timeline-item fade-in">' +
        '<div class="timeline-dot"></div>' +
        '<div class="timeline-content">' +
        '<div class="timeline-date">' + item.date + '</div>' +
        '<div class="timeline-text">' + item.text + '</div>' +
        '</div>' +
        '</div>'
    ).join('');
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    grid.innerHTML = coursesData.map(course =>
        '<div class="course-card fade-in">' +
        '<div class="course-image-banner" style="background-image: url(\'' + course.bgImage + '\')">' +
        (course.badge ? '<span class="course-badge">' + course.badge + '</span>' : '') +
        '<div class="course-icon-wrap"><i class="' + course.icon + '"></i></div>' +
        '</div>' +
        '<div class="course-header">' +
        '<h3 class="course-title">' + course.title + '</h3>' +
        '<div class="course-provider">' + course.provider + '</div>' +
        '</div>' +
        '<div class="course-body">' +
        '<p class="course-desc">' + course.desc + '</p>' +
        '<div class="course-meta">' +
        '<div class="course-meta-item"><i class="fas fa-clock"></i><span>' + course.duration + '</span></div>' +
        '<div class="course-meta-item"><i class="fas fa-book"></i><span>' + course.lectures + '</span></div>' +
        '<div class="course-meta-item"><i class="fas fa-signal"></i><span>' + course.level + '</span></div>' +
        '</div>' +
        '</div>' +
        '<div class="course-footer">' +
        '<div class="course-price ' + (course.free ? 'free' : '') + '">' + course.price + '</div>' +
        '<a href="' + course.link + '" class="course-link">' +
        (course.free ? t.start : t.details) +
        ' <i class="fas fa-arrow-right"></i>' +
        '</a>' +
        '</div>' +
        '</div>'
    ).join('');
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function setupNavigation() {
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    links.forEach(link => {
        link.addEventListener('click', e => {
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
            if (scrollY >= section.offsetTop - 100) {
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

// ─── Scroll Animations ────────────────────────────────────────────────────────
function setupScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navLinks');
    if (!btn || !nav) return;

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

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderCourses();
    setupNavigation();
    setupScrollAnimations();
    setupMobileMenu();

    // Trigger fade-in for statically rendered elements
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    }, 200);

    // Hide loading overlay
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) loading.classList.add('hidden');
    }, 1000);
});
