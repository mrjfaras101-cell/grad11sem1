const STORAGE_KEY = 'grade11-programming-lab-v1';

const lessonCatalog = [
  {
    id: 'lesson1', number: '01', short: 'مدخل',
    title: 'مقدمة في لغات البرمجة',
    subtitle: 'من الفكرة إلى الخوارزمية',
    description: 'اكتشف كيف تُصنَّف لغات البرمجة، وكيف تتحول الفكرة إلى خوارزمية ومخطط سير قبل كتابة الكود.',
    accent: '#0f766e', soft: '#dff7f1', icon: '</>', duration: 'حصتان · 90 دقيقة', pages: '10–17',
    strategy: 'الاستقصاء بالمقارنة + التعلم التعاوني + التعلم القائم على المشروع',
    idea: 'تعرّف لغات البرمجة وتصنيفاتها، وتقارن بين اللغات عالية ومنخفضة المستوى واللغات الكتلية والنصية، وتوضح العلاقة بين الخوارزميات والبرمجة وتمثيلها بمخططات سير العمليات.',
    concepts: ['لغة البرمجة', 'لغة الآلة', 'لغة التجميع', 'عالية المستوى', 'كتلية ونصية', 'المترجم والمفسر', 'الخوارزمية', 'مخطط سير العمليات'],
    outcomes: [
      'أعرّف المقصود بلغة البرمجة والبرنامج.',
      'أقارن بين لغات البرمجة عالية المستوى ومنخفضة المستوى.',
      'أقارن بين لغة البرمجة الكتلية ولغة البرمجة النصية.',
      'أوضح العلاقة بين الخوارزميات والبرمجة.',
      'أمثل البرامج بالخوارزميات ومخططات سير العمليات.'
    ],
    padlet: 'انشر مقارنة قصيرة بين Scratch ولغة نصية، ثم اكتب: أي نوع تختار لتعليم طفل؟ ولماذا؟',
    guide: {
      preparation: 'بطاقات التصنيف، مثال Scratch ومثال نصي، شاشة العرض، وأداة draw.io أو أي أداة رسم مخططات.',
      evidence: 'تصنيف صحيح لبطاقات اللغات، خوارزمية مرتبة، ومخطط سير يصف لعبة التخمين.',
      differentiation: 'قالب جاهز للمتعثر، ومهمة مقارنة موسعة للمتقدم بين آلية الترجمة والتنفيذ.',
      ethics: 'التأكيد على استخدام البرمجيات المرخصة واحترام حقوق الملكية الفكرية كما ورد في الكتاب.'
    }
  },
  {
    id: 'lesson2', number: '02', short: 'Python',
    title: 'أساسيات لغة البرمجة بايثون',
    subtitle: 'اكتب، توقّع، ثم جرّب',
    description: 'ابنِ أول برنامج تفاعلي، وافهم المتغيرات والأنواع والعوامل وقواعد كتابة الجمل البرمجية في Python.',
    accent: '#7357d8', soft: '#f0edff', icon: 'Py', duration: 'ثلاث حصص · 135 دقيقة', pages: '18–45',
    strategy: 'النمذجة التدريجية: أشاهد ← أتوقع ← أجرّب ← أفسر',
    idea: 'تعرّف لغة البرمجة بايثون، وتتعلم إنشاء برنامج وتنفيذه وحفظه، وتفهم عناصر اللغة والأنواع والتعابير والعوامل وقواعد كتابة الجمل، ثم تستخدم print وinput في برنامج تفاعلي.',
    concepts: ['Python وIDLE', 'print', 'المعرّفات', 'الكلمات المحجوزة', 'الثوابت والمتغيرات', 'int وfloat', 'Strings وBooleans', 'العوامل والأولوية', 'input وint'],
    outcomes: [
      'أعرّف النموذج الأولي للبرنامج.',
      'أبين قواعد كتابة الجملة البرمجية بلغة Python.',
      'أوضح عناصر Python: الثوابت والمتغيرات والرموز والتعابير والعلاقات.',
      'أجري عمليات حسابية وأكتب علاقات وعبارات منطقية.',
      'أتعرف الصيغة العامة لجملة الإدخال input وأستخدمها.'
    ],
    padlet: 'انشر توقعك لناتج مقطع قصير، ثم أرفق تفسيرًا يوضح أثر نوع المتغير أو أولوية العامل.',
    guide: {
      preparation: 'متصفح أو بيئة Python/IDLE، ورقة «توقع ← تنفيذ ← تفسير»، ورابط Python Tutor للتتبع.',
      evidence: 'تمييز الأنواع والمعرّفات، حساب ناتج تعبير مع مراعاة الأولوية، وبناء قائمة لعبة تقرأ خيار المستخدم.',
      differentiation: 'قوالب كود مع فراغات للمتعثر، ومهمة إدخال الاسم والمدينة والعمر أو تعديل القائمة للمتقدم.',
      ethics: 'تحميل Python من الموقع الرسمي، تجنب المصادر غير الموثوقة، ونسب الأكواد إلى مصادرها.'
    }
  },
  {
    id: 'lesson3', number: '03', short: 'قرار',
    title: 'الجمل الشرطية',
    subtitle: 'اجعل البرنامج يتخذ قرارًا',
    description: 'حوّل القواعد إلى قرارات برمجية باستخدام if وelif وelse والمعاملات المنطقية والتفرعات المتداخلة.',
    accent: '#e85d4a', soft: '#ffebe7', icon: 'if', duration: 'حصتان · 90 دقيقة', pages: '46–59',
    strategy: 'التعلم القائم على اللعب + حل المشكلات + البرمجة الثنائية',
    idea: 'تستخدم الجمل الشرطية لتنفيذ أوامر معينة بناءً على شروط يحددها المبرمج، وتطبق ذلك في لعبة البطاقات ثم في تحديث قائمة لعبة تخمين الأرقام.',
    concepts: ['if', 'if / else', 'if / elif', 'if / elif / else', 'المسافة البادئة', 'and', 'or', 'not', 'pass', 'التفرع المتداخل'],
    outcomes: [
      'أكتب جملًا شرطية مركبة ومترابطة باستخدام and وor وnot.',
      'أستخدم Python في إنشاء برامج تتضمن جملًا شرطية.',
      'أتتبع ناتج البرنامج وأنفذه وأكتشف الأخطاء فيه.',
      'أعدل قائمة لعبة نجوم وأقمار لاتخاذ القرار بناءً على إدخال المستخدم.'
    ],
    padlet: 'انشر موقفًا حياتيًا فيه قرار، ثم حوّله إلى if/elif/else أو اشرح خطأً برمجيًا صححته.',
    guide: {
      preparation: 'بطاقات أعداد من 0 إلى 10، بطاقات if/else، أمثلة الكود، وأزواج برمجة صغيرة.',
      evidence: 'اختيار البنية الشرطية الملائمة، توقع المخرج، تصحيح النقطتين والمسافة البادئة، وتحديث قائمة اللعبة.',
      differentiation: 'مخطط قرار مرئي للمتعثر، وتحدي التفرع المتداخل أو إعادة كتابة شرط باستخدام معامل منطقي للمتقدم.',
      ethics: 'التعاون واحترام جهود الزملاء، وتوثيق مصدر أي مقطع برمجي يُعاد استخدامه.'
    }
  }
];

const tabCatalog = [
  { id: 'overview', label: 'خريطة الدرس' },
  { id: 'launch', label: 'ابدأ هنا' },
  { id: 'learn', label: 'افهم' },
  { id: 'practice', label: 'تدرّب' },
  { id: 'extend', label: 'توسّع' },
  { id: 'assess', label: 'قوّم نفسك' },
  { id: 'guide', label: 'دليل التنفيذ' }
];

const defaultState = {
  theme: 'light',
  padletUrl: '',
  completed: {},
  answers: {},
  notes: {}
};
let state = loadState();
let currentLessonId = null;
let currentTab = 'overview';
let toastTimer = null;
let dragged = null;
let selectedDrag = null;
let selectedSort = null;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return { ...defaultState, ...stored, completed: stored.completed || {}, answers: stored.answers || {}, notes: stored.notes || {} };
  } catch {
    return { ...defaultState };
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* local storage may be unavailable */ }
}
function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}
function getLesson(id) { return lessonCatalog.find(lesson => lesson.id === id) || lessonCatalog[0]; }
function padletHref() { return /^https?:\/\//i.test(state.padletUrl) ? state.padletUrl : 'https://padlet.com/'; }
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2900);
}
function applyTheme() {
  document.body.classList.toggle('theme-dark', state.theme === 'dark');
}
function completionCount() { return lessonCatalog.filter(lesson => state.completed[lesson.id]).length; }
function currentLessonComplete(id) { return Boolean(state.completed[id]); }
function setView(home) {
  document.getElementById('homeView').classList.toggle('is-hidden', !home);
  document.getElementById('lessonView').classList.toggle('is-hidden', home);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
  const progress = Math.round((completionCount() / lessonCatalog.length) * 100);
  const degrees = `${progress * 3.6}deg`;
  const home = document.getElementById('homeView');
  home.innerHTML = `
    <section class="teacher-banner" aria-label="بيانات معلم المادة">
      <div class="teacher-profile-mark" aria-hidden="true">ب</div>
      <div class="teacher-profile-copy">
        <span>بيانات معلم المادة</span>
        <h2>باسم النعيمي</h2>
        <p>معلم المادة · مدرسة صويلح الثانوية</p>
      </div>
      <div class="teacher-academic-meta">
        <div><small>الفصل الدراسي</small><strong>الأول</strong></div>
        <div><small>العام الدراسي</small><strong>2026/2027</strong></div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-copy">
        <span class="hero-kicker"><i></i> مسار تعلّم تفاعلي · مبني على الكتاب</span>
        <h1 id="homeTitle">تعلّم البرمجة، <em>ثم جرّبها</em></h1>
        <p class="hero-lead">ثلاثة دروس مصممة على هيئة رحلة قصيرة: سؤال يفتح التفكير، شرح واضح، نشاط يثبت الفهم، ثم مشروع صغير يجعل الطالب شريكًا في التعلم.</p>
        <div class="hero-actions">
          <button class="primary-button" data-action="open-lesson" data-lesson="lesson1">ابدأ من الدرس الأول <span>←</span></button>
          <button class="ghost-button" data-action="open-guide">دليل تنفيذ المعلم</button>
        </div>
      </div>
      <aside class="progress-card" aria-label="تقدم الطالب">
        <div class="card-eyebrow"><span class="pulse">لوحة التقدم</span><span>محلي على هذا الجهاز</span></div>
        <div class="progress-row">
          <div class="progress-ring" style="--progress:${degrees}"><div><strong>${progress}%</strong><small>من المسار</small></div></div>
          <div class="progress-text"><h3>${progress === 100 ? 'أحسنت! اكتمل المسار' : 'رحلتك تبدأ بخطوة'}</h3><p>أنجز الدرس ثم انتقل إلى التالي. يمكن متابعة التقدم دون إنشاء حساب.</p></div>
        </div>
        <div class="mini-stats">
          <div class="mini-stat"><strong>${completionCount()}/3</strong><span>دروس مكتملة</span></div>
          <div class="mini-stat"><strong>17</strong><span>نشاطًا تفاعليًا</span></div>
          <div class="mini-stat"><strong>1</strong><span>مشروع ممتد</span></div>
        </div>
      </aside>
    </section>

    <div class="section-heading"><div><h2>مسار الوحدة</h2><p>اختر درسًا، وتقدم على إيقاعك.</p></div><button class="section-link" data-action="reset-progress">إعادة التقدم</button></div>
    <section class="lesson-grid" aria-label="دروس الوحدة">
      ${lessonCatalog.map(renderLessonCard).join('')}
    </section>

    <div class="section-heading"><div><h2>كيف تسير الحصة؟</h2><p>نمط ثابت يساعد الطالب على التوقع والمشاركة.</p></div></div>
    <section class="path-card">
      <div class="path-line">
        <div class="path-step"><div class="path-dot">01</div><div><h4>سؤال وتهيئة</h4><p>نستدعي المعرفة السابقة ونربطها بموقف مألوف.</p></div></div>
        <div class="path-step"><div class="path-dot">02</div><div><h4>شرح وتجريب</h4><p>نقرأ المثال، نتوقع الناتج، ثم نختبر الفكرة بأنفسنا.</p></div></div>
        <div class="path-step"><div class="path-dot">03</div><div><h4>توسّع وتقويم</h4><p>ننشر أثر التعلم في Padlet ونثبت الفهم بسؤال متنوع.</p></div></div>
      </div>
    </section>

    <div class="section-heading"><div><h2>أدوات المعلّم والطالب</h2><p>روابط مساعدة قابلة للتخصيص قبل النشر.</p></div></div>
    <section class="tool-grid">
      <article class="tool-card">
        <h3>لوحة Padlet الخاصة بالصف</h3>
        <p>ألصق رابط اللوحة ليظهر في نهاية كل درس مع سؤال مشاركة وواجب قصير.</p>
        <div class="padlet-form"><input id="padletInput" value="${escapeHtml(state.padletUrl)}" placeholder="https://padlet.com/your-board" aria-label="رابط لوحة Padlet"><button class="primary-button" data-action="save-padlet">حفظ الرابط</button></div>
        <div class="saved-note" id="padletSavedNote">${state.padletUrl ? 'تم حفظ رابط اللوحة على هذا الجهاز.' : 'لم يُضف رابط مخصص بعد؛ سيُفتح الموقع العام.'}</div>
      </article>
      <article class="tool-card">
        <h3>روابط التتبع والبناء</h3>
        <p>استخدم Python Tutor لتتبع تنفيذ الكود، وdraw.io لبناء مخطط سير العملية.</p>
        <div class="resource-links">
          <a class="resource-link" href="https://pythontutor.com" target="_blank" rel="noopener"><span><strong>Python Tutor</strong><small> تتبع البرنامج خطوة بخطوة</small></span><b>↗</b></a>
          <a class="resource-link" href="https://app.diagrams.net/" target="_blank" rel="noopener"><span><strong>draw.io</strong><small> رسم مخطط سير اللعبة</small></span><b>↗</b></a>
          <a class="resource-link" href="https://www.python.org/" target="_blank" rel="noopener"><span><strong>Python الرسمي</strong><small> التحميل والمصادر الموثوقة</small></span><b>↗</b></a>
        </div>
      </article>
    </section>
  `;
}

function renderLessonCard(lesson) {
  const done = currentLessonComplete(lesson.id);
  return `<article class="lesson-card" style="--accent:${lesson.accent};--accent-soft:${lesson.soft}">
    <div class="card-top"><span class="lesson-number">LESSON ${lesson.number}</span><span class="lesson-icon">${lesson.icon}</span></div>
    <h3>${lesson.title}</h3><p class="card-description">${lesson.description}</p>
    <div class="card-tags"><span class="tag">◷ ${lesson.duration}</span><span class="tag">ص ${lesson.pages}</span></div>
    <div class="lesson-card-footer"><span class="status-text ${done ? 'done' : ''}">${done ? '✓ مكتمل' : 'لم يبدأ بعد'}</span><button class="card-arrow" data-action="open-lesson" data-lesson="${lesson.id}" aria-label="فتح ${lesson.title}">←</button></div>
  </article>`;
}

function renderLesson(id, tab = 'overview') {
  const lesson = getLesson(id);
  currentLessonId = lesson.id;
  currentTab = tab;
  const view = document.getElementById('lessonView');
  view.style.setProperty('--lesson', lesson.accent);
  view.style.setProperty('--lesson-soft', lesson.soft);
  view.innerHTML = `
    <div class="lesson-page-head">
      <div class="breadcrumb"><button data-action="home">الصفحة الرئيسة</button><span>←</span><span>${lesson.title}</span></div>
      <section class="lesson-hero">
        <div class="lesson-hero-copy"><span class="lesson-hero-kicker"><i></i> الدرس ${lesson.number} · ${lesson.short}</span><h1 id="lessonTitle">${lesson.title}</h1><p>${lesson.idea}</p></div>
        <div class="lesson-stats"><div class="lesson-stat"><span>المدة</span><strong>${lesson.duration}</strong></div><div class="lesson-stat"><span>مرجع الكتاب</span><strong>ص ${lesson.pages}</strong></div><div class="lesson-stat"><span>الحالة</span><strong>${currentLessonComplete(lesson.id) ? 'مكتمل' : 'قيد التعلم'}</strong></div></div>
      </section>
    </div>
    <nav class="lesson-nav" aria-label="أجزاء الدرس">
      ${tabCatalog.map(item => `<button class="${item.id === currentTab ? 'active' : ''}" data-action="set-tab" data-tab="${item.id}">${item.label}</button>`).join('')}
    </nav>
    <div class="lesson-content">${renderTab(lesson, currentTab)}</div>
    <div class="lesson-bottom-nav"><button class="ghost-button" data-action="home">← كل الدروس</button><button class="secondary-button" data-action="open-guide">▤ دليل التنفيذ العام</button></div>
  `;
  setView(false);
  hydrateSavedAnswers();
}

function renderTab(lesson, tab) {
  const fn = {
    overview: renderOverview,
    launch: renderLaunch,
    learn: renderLearn,
    practice: renderPractice,
    extend: renderExtend,
    assess: renderAssess,
    guide: renderGuide
  }[tab] || renderOverview;
  return fn(lesson);
}

function contentHeading(title, text) { return `<div class="content-heading"><h2>${title}</h2><p>${text}</p></div>`; }
function sourceNote(lesson) { return `<div class="source-note"><span>▣</span><span>متوافق مع محتوى الكتاب المرفق · <b>الصفحات ${lesson.pages}</b></span></div>`; }
function renderStepper() {
  const steps = [
    ['01', 'سؤال افتتاحي', 'استدعاء الخبرة'],
    ['02', 'تهيئة', 'سياق واقعي'],
    ['03', 'عرض وشرح', 'مفهوم + مثال'],
    ['04', 'تدريب', 'تفاعل وتطبيق'],
    ['05', 'توسّع', 'Padlet / مشروع'],
    ['06', 'تقويم', 'أثبت فهمك']
  ];
  return `<div class="stepper">${steps.map(s => `<div class="step"><div class="step-number">${s[0]}</div><strong>${s[1]}</strong><small>${s[2]}</small></div>`).join('')}</div>`;
}
function renderOverview(lesson) {
  return `${contentHeading('خريطة الدرس', 'ابدأ بالصورة الكبيرة، ثم افتح الأجزاء بالتتابع. كل نشاط صُمم ليجعل الطالب يفكر قبل أن يختار.')}
    ${renderStepper()}
    <div class="overview-grid">
      <div>
        <article class="content-card accent-card"><h3>الفكرة الرئيسة</h3><p>${lesson.idea}</p><div class="concept-list">${lesson.concepts.map(c => `<span class="tag">${c}</span>`).join('')}</div>${sourceNote(lesson)}</article>
        <article class="content-card"><h3>نتاجات التعلم</h3><ul class="outcomes">${lesson.outcomes.map(o => `<li>${o}</li>`).join('')}</ul></article>
      </div>
      <div>
        <article class="content-card"><h3>الاستراتيجية المقترحة</h3><div class="strategy-box"><div class="strategy-icon">✦</div><div><strong>${lesson.strategy}</strong><span>اسأل أولًا، اجعل الطالب يشرح سبب اختياره، ثم انتقل إلى المثال والتطبيق. لا تجعل النتيجة الرقمية بديلًا عن التفسير.</span></div></div></article>
        <article class="content-card"><h3>المنتج النهائي</h3><p>${lesson.id === 'lesson1' ? 'مخطط وعرض قصير يصفان مشكلة لعبة نجوم وأقمار وقواعدها وخوارزميتها.' : lesson.id === 'lesson2' ? 'برنامج يطبع رسالة الترحيب وخيارات القائمة الرئيسة ويقرأ خيار اللاعب.' : 'تعديل القائمة باستخدام الجمل الشرطية لاتخاذ قرار مناسب لكل خيار.'}</p><div class="callout tip" style="margin-top:15px"><b>↗</b><span>انتقل إلى «توسّع» لتجهيز المنتج ومشاركته في Padlet.</span></div></article>
      </div>
    </div>`;
}

function quizCard({ id, type = 'اختر', question, options, correct, explanation, wide = false, assessment = false }) {
  return `<article class="quiz-card ${wide ? 'wide' : ''}" data-quiz-id="${id}" data-correct="${correct}" data-explanation="${escapeHtml(explanation || '')}" data-assessment="${assessment}">
    <div class="quiz-meta"><span class="quiz-type">${type}</span><span>سؤال تفاعلي</span></div><h3>${question}</h3>
    <div class="option-list">${options.map((option, index) => `<button class="option-button" data-option="${index}">${option}</button>`).join('')}</div>
    <div class="quiz-actions"><button class="check-button" data-action="check-quiz">تحقق من إجابتي</button><span class="answer-chip">اختر ثم تحقق</span></div><div class="quiz-feedback" aria-live="polite"></div>
  </article>`;
}
function multiQuizCard({ id, type = 'ضع دائرة', question, options, correct, explanation, wide = false, assessment = false }) {
  return `<article class="quiz-card ${wide ? 'wide' : ''}" data-multi-id="${id}" data-correct="${JSON.stringify(correct)}" data-explanation="${escapeHtml(explanation || '')}" data-assessment="${assessment}">
    <div class="quiz-meta"><span class="quiz-type">${type}</span><span>يمكن اختيار أكثر من إجابة</span></div><h3>${question}</h3>
    <div class="option-list">${options.map((option, index) => `<button class="option-button" data-multi-option="${index}">${option}</button>`).join('')}</div>
    <div class="quiz-actions"><button class="check-button" data-action="check-multi">تحقق من إجابتي</button><span class="answer-chip">اختر كل المناسب</span></div><div class="quiz-feedback" aria-live="polite"></div>
  </article>`;
}
function trueFalseCard({ id, question, correct, explanation, assessment = false }) {
  return quizCard({ id, type: 'صح أم خطأ', question, options: ['صح', 'خطأ'], correct, explanation, assessment });
}

function renderLaunch(lesson) {
  if (lesson.id === 'lesson1') {
    return `${contentHeading('ابدأ هنا', 'لا نبدأ بالمصطلح؛ نبدأ بما تعرفه. أجب بسرعة، ثم عد إلى إجابتك بعد الشرح.')}
      <div class="question-grid">
        ${quizCard({ id: 'l1-launch-1', type: 'اختيار بسيط', question: 'أي عبارة تصف برنامج الحاسوب بدقة؟', options: ['مجموعة أوامر تُكتب بلغة برمجة لحل مشكلة أو أداء مهمة.', 'جهاز إلكتروني لا يحتاج إلى أوامر.', 'رسم جميل لا يحتوي على خطوات.', 'لغة بشرية تُفهم مباشرة من الحاسوب.'], correct: 0, explanation: 'البرنامج مجموعة من الأوامر والتعليمات المكتوبة بإحدى لغات البرمجة بهدف حل مشكلة أو أداء مهمة.' })}
        ${quizCard({ id: 'l1-launch-2', type: 'استدعاء سابق', question: 'أي مما يأتي مثال على لغة برمجة كتلية؟', options: ['Scratch', 'Python', 'لغة الآلة', 'Assembly'], correct: 0, explanation: 'لغة البرمجة الكتلية تمثل أجزاء البرنامج بكتل رسومية، ومن أمثلتها Scratch.' })}
        ${trueFalseCard({ id: 'l1-launch-3', question: 'يفهم الحاسوب لغة الإنسان مباشرة بالطريقة نفسها التي يفهم بها لغة الآلة.', correct: 1, explanation: 'لغة الآلة هي التي يفهمها الحاسوب مباشرة؛ أما اللغات عالية المستوى فتحتاج إلى ترجمة أو تفسير.' })}
      </div>
      <div class="callout info" style="margin-top:17px"><b>؟</b><span>اكتب في دفترك: ما الفرق بين كتابة خطوات الحل وبين كتابة برنامج ينفذها؟ سنعود إلى الإجابة عند الخوارزميات.</span></div>`;
  }
  if (lesson.id === 'lesson2') {
    return `${contentHeading('ابدأ هنا', 'اختبار صغير قبل فتح محرر Python: ماذا تتوقع أن يحدث؟')}
      <div class="question-grid">
        ${quizCard({ id: 'l2-launch-1', type: 'اختيار بسيط', question: 'أي دالة تُستخدم لطباعة مخرجات على الشاشة؟', options: ['input()', 'print()', 'type()', 'int()'], correct: 1, explanation: 'تستخدم print لطباعة المخرجات، بينما input لقراءة إدخال المستخدم.' })}
        ${quizCard({ id: 'l2-launch-2', type: 'نوع بيانات', question: 'ما النوع المتوقع للقيمة 2.5 في Python؟', options: ['int', 'float', 'String', 'Boolean'], correct: 1, explanation: 'العدد الذي يحوي فاصلة عشرية يكون من النوع float، أما العدد الصحيح فمن النوع int.' })}
        ${trueFalseCard({ id: 'l2-launch-3', question: 'تعيد input القيمة على هيئة نص حتى لو أدخل المستخدم عددًا.', correct: 0, explanation: 'تقرأ input مدخلات المستخدم بوصفها نصًا، ونستخدم int() عند الحاجة إلى عدد صحيح.' })}
      </div>
      <div class="callout tip" style="margin-top:17px"><b>◉</b><span>قاعدة المسار: قبل تشغيل أي كود، اكتب مخرجك المتوقع. الخطأ المتوقع فرصة للتعلم وليس علامة فشل.</span></div>`;
  }
  return `${contentHeading('ابدأ هنا', 'جرّب قرارًا من الحياة اليومية، ثم لاحظ كيف يمكن تحويله إلى جملة شرطية.')}
    <div class="activity-layout">
      <article class="activity-card"><h3>لعبة البطاقات الشرطية</h3><p>اختر بطاقة من 0 إلى 10 واتبع القواعد الواردة في الكتاب. ماذا يحدث للدور؟</p><div class="choice-row card-number-row">${Array.from({ length: 11 }, (_, i) => `<button class="choice-pill" data-card-number="${i}">${i}</button>`).join('')}</div><div class="callout info" style="margin-top:15px"><b>↳</b><span id="cardGameResult">اختر رقمًا لترى القرار.</span></div></article>
      <article class="activity-card"><h3>فكّر قبل الكود</h3><p>ما الجزء الذي يتغير في كل مرة؟ الشرط، أم الأوامر، أم كلاهما؟</p>${quizCard({ id: 'l3-launch-1', type: 'اختيار بسيط', question: 'الجملة الشرطية تُستخدم لتنفيذ أوامر بناءً على…', options: ['لون الشاشة', 'شروط يحددها المبرمج', 'اسم الملف فقط', 'عدد أسطر البرنامج'], correct: 1, explanation: 'تنفذ الجمل الشرطية مجموعة أوامر بناءً على تحقق شروط يحددها المبرمج.' })}</article>
    </div>
    <div class="callout tip" style="margin-top:17px"><b>!</b><span>بعد اللعب، اشرح لزميلك قاعدة واحدة بصيغة «إذا… فإن…». هذه هي البذرة اللغوية للجملة الشرطية.</span></div>`;
}

function codeBlock(id, label, code, output = '', extra = '') {
  return `<div class="code-card" data-code-id="${id}"><div class="code-head"><span>${label}</span><span class="code-dots"><i></i><i></i><i></i></span></div><pre>${escapeHtml(code)}</pre>${output ? `<div class="code-output" id="output-${id}">${escapeHtml(output)}</div><div class="code-actions"><button data-action="show-output" data-code="${id}">إظهار الناتج المتوقع</button>${extra}</div>` : ''}</div>`;
}

function renderLearn(lesson) {
  if (lesson.id === 'lesson1') {
    return `${contentHeading('افهم الفكرة', 'المفاهيم في الكتاب مترابطة: نختار اللغة، نكتب الخوارزمية، ثم نمثل الحل وننفذه.')}
      <article class="content-card accent-card"><h3>1 · ما لغة البرمجة؟</h3><p>لغة البرمجة مجموعة من الأوامر والتعليمات تُستخدم في كتابة البرامج والتطبيقات وفق قواعد محددة، وهي أداة المبرمج للتفاعل مع الحاسوب وتوجيهه لتنفيذ مهام معينة.</p><div class="definition-grid"><div class="definition-card"><div class="definition-icon">01</div><h4>البرنامج</h4><p>مجموعة أوامر تُكتب بإحدى لغات البرمجة لحل مشكلة أو أداء مهمة باستخدام الحاسوب.</p></div><div class="definition-card"><div class="definition-icon">02</div><h4>الخوارزمية</h4><p>خطوات مرتبة ومحددة تصف طريقة حل المشكلة قبل تحويلها إلى برنامج.</p></div><div class="definition-card"><div class="definition-icon">03</div><h4>شبه الرمزية</h4><p>وصف شبه رمزي للحل يجمع وضوح اللغة الطبيعية ومنطق خطوات البرمجة.</p></div><div class="definition-card"><div class="definition-icon">04</div><h4>مخطط سير العمليات</h4><p>تمثيل بصري لتتابع الخطوات والقرارات والمدخلات والمخرجات.</p></div></div></article>
      <article class="content-card"><h3>2 · تصنيف اللغات</h3><p class="muted">يصنف الكتاب اللغات وفق قربها من لغة الإنسان، ووفق طريقة تمثيل أجزاء البرنامج.</p><table class="compare-table"><thead><tr><th>التصنيف</th><th>الفكرة</th><th>مثال أو ملاحظة</th></tr></thead><tbody><tr><td><strong>منخفضة المستوى</strong></td><td>قريبة من لغة الآلة وبعيدة عن لغة الإنسان.</td><td>لغة الآلة ولغة التجميع.</td></tr><tr><td><strong>عالية المستوى</strong></td><td>أقرب إلى لغة الإنسان، وملائمة لأنواع مختلفة من الأجهزة وأنظمة التشغيل.</td><td>Python وJava وC وC#.</td></tr><tr><td><strong>كتلية</strong></td><td>تمثل أجزاء البرنامج بكتل رسومية بدل النصوص.</td><td>Scratch.</td></tr><tr><td><strong>نصية</strong></td><td>تمثل أجزاء البرنامج بالنصوص البرمجية.</td><td>JavaScript.</td></tr></tbody></table></article>
      <article class="content-card"><h3>3 · المترجم والمفسر</h3><p>كلاهما يحول البرنامج المكتوب بلغة عالية المستوى إلى أوامر يفهمها الحاسوب، لكن طريقة العمل تختلف.</p><div class="diagram"><div class="diagram-node"><strong>برنامج مصدري</strong><span>لغة عالية المستوى</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>مترجم</strong><span>يفحص البرنامج كاملًا</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>برنامج هدف</strong><span>لغة آلة</span></div></div><div class="diagram" style="margin-top:10px"><div class="diagram-node"><strong>تعليمة</strong><span>جزء من البرنامج</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>مفسر</strong><span>يحول وينفذ أمرًا بأمر</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>توقف عند الخطأ</strong><span>لا يكمل الأجزاء المتبقية</span></div></div><div class="callout info" style="margin-top:15px"><b>مقارنة</b><span><strong>المترجم:</strong> فحص كامل وترجمة قبل التنفيذ. <strong>المفسر:</strong> تحويل وتنفيذ الأجزاء تباعًا، وقد يتوقف عند أمر خطأ.</span></div></article>
      <article class="content-card"><h3>4 · من المشكلة إلى البرنامج</h3><p>ابدأ بفهم المشكلة، ثم اكتب خطوات الحل، ثم مثلها بصريًا، وبعد ذلك ابدأ البرمجة والاختبار.</p>${codeBlock('l1-pseudocode', 'شبه رمزية · لعبة تخمين الأرقام', 'ابدأ\nاعرض تعليمات اللعبة\nاطلب اسمَي اللاعبين\nاختر عددًا عشوائيًا من أربع منازل\nكرّر حتى 10 محاولات أو حتى التخمين الصحيح\n    اقرأ التخمين\n    احسب النجوم والأقمار\n    اعرض التلميح\nانتهِ', 'الخوارزمية تصف ماذا يحدث بترتيب واضح، ولا تزال مستقلة عن صياغة Python.')}</article>`;
  }
  if (lesson.id === 'lesson2') {
    return `${contentHeading('افهم الفكرة', 'في هذا الدرس تتدرج من نافذة Python إلى برنامج يتفاعل مع المستخدم.')}
      <article class="content-card accent-card"><h3>1 · أول برنامج ومحرر النصوص</h3><p>تُعد IDLE بيئة تطوير وتعلم متكاملة مدمجة افتراضيًا مع Python، وتوفر نافذة Shell لتنفيذ الأوامر ومحرر نصوص لكتابة البرامج وحفظها وتشغيلها.</p>${codeBlock('l2-print', 'print · طباعة مخرج', 'print("Hello")', 'Hello')}</article>
      <article class="content-card"><h3>2 · عناصر لغة Python</h3><div class="definition-grid"><div class="definition-card"><div class="definition-icon">#</div><h4>التعليقات</h4><p>لا تؤثر في التنفيذ، وتساعد على توثيق البرنامج وتحسين مقروئيته. تبدأ غالبًا بالرمز #.</p></div><div class="definition-card"><div class="definition-icon">id</div><h4>المعرّفات</h4><p>أسماء المتغيرات والدوال والكائنات؛ تبدأ بحرف أو شرطة سفلية ولا تبدأ بعدد ولا تكون كلمة محجوزة.</p></div><div class="definition-card"><div class="definition-icon">=</div><h4>المتغيرات</h4><p>مساحات تخزينية ترتبط بقيم، ويحدد مفسر Python نوع المتغير تلقائيًا حسب القيمة المسندة إليه.</p></div><div class="definition-card"><div class="definition-icon">{ }</div><h4>الكتل والمسافات</h4><p>تستخدم المسافات البادئة في Python لتحديد الجمل التي تنتمي إلى كتلة برمجية.</p></div></div><div class="callout tip" style="margin-top:15px"><b>تنبيه</b><span>Python تميز حالة الأحرف: <code>days</code> و<code>Days</code> اسمان مختلفان.</span></div></article>
      <article class="content-card"><h3>3 · أنواع القيم الأساسية</h3><table class="compare-table"><thead><tr><th>النوع</th><th>يخزن</th><th>مثال</th></tr></thead><tbody><tr><td><strong>int</strong></td><td>عددًا صحيحًا</td><td><code>age = 16</code></td></tr><tr><td><strong>float</strong></td><td>عددًا يحوي فاصلة عشرية</td><td><code>height = 1.75</code></td></tr><tr><td><strong>String</strong></td><td>نصًا بين علامات اقتباس</td><td><code>name = "Basem"</code></td></tr><tr><td><strong>Boolean</strong></td><td>قيمة منطقية: True أو False</td><td><code>passed = True</code></td></tr></tbody></table>${codeBlock('l2-types', 'type() · اكتشاف النوع', "age = 16\nname = 'Basem'\npassed = True\nprint(type(age))\nprint(type(name))\nprint(type(passed))", "<class 'int'>\n<class 'str'>\n<class 'bool'>")}</article>
      <article class="content-card"><h3>4 · العوامل والتعابير والإدخال</h3><p>التعبير سلسلة من قيم ومتغيرات وعوامل ينتج منها قيمة معينة. من العوامل الحسابية: + و- و* و/ و% و** و//، ومن عوامل المقارنة: == و!= و&gt; و&lt; و&gt;= و&lt;=، ومن العوامل المنطقية: and وor وnot.</p>${codeBlock('l2-precedence', 'أولوية الأقواس ثم الضرب ثم الجمع', 'print(2 + 3 * 4)\nprint((2 + 3) * 4)', '14\n20')}${codeBlock('l2-input', 'input وint · إدخال عدد', 'x = int(input("Enter x: "))\ny = int(input("Enter y: "))\nprint("x + y =", x + y)', 'إذا أدخل المستخدم 2 ثم 3\nالناتج: x + y = 5')}</article>
      <article class="content-card"><h3>5 · رموز وأنواع أخرى</h3><p>يقدم الكتاب أيضًا الرموز النصية والحرفية والعددية والمنطقية، ويشير إلى أنواع أساسية أخرى في Python: القوائم Lists، الصفوف Tuples، المجموعات Sets، والقواميس Dictionaries. الفكرة هنا أن نوع القيمة يحدد طريقة التعامل معها.</p><div class="concept-list"><span class="tag">String literals</span><span class="tag">Character literals</span><span class="tag">Numeric literals</span><span class="tag">Boolean literals</span><span class="tag">Lists</span><span class="tag">Tuples</span><span class="tag">Sets</span><span class="tag">Dictionaries</span></div><div class="callout info" style="margin-top:15px"><b>تذكّر</b><span>التعبير ينتج قيمة مثل <code>2 + 3</code>، أما الجملة فهي أصغر جزء من البرنامج يقبل التنفيذ مثل جملة الإسناد أو الطباعة.</span></div></article>`;
  }
  return `${contentHeading('افهم الفكرة', 'الجملة الشرطية لا تطبع دائمًا؛ إنها تختار مسارًا بناءً على تحقق الشرط.')}
    <article class="content-card accent-card"><h3>1 · أشكال الجمل الشرطية</h3><div class="definition-grid"><div class="definition-card"><div class="definition-icon">if</div><h4>if</h4><p>تنفذ الكتلة إذا تحقق الشرط، ولا يوجد مسار بديل في هذه الصيغة.</p></div><div class="definition-card"><div class="definition-icon">if/else</div><h4>if … else</h4><p>مسار عند تحقق الشرط، ومسار آخر عند عدم تحققه.</p></div><div class="definition-card"><div class="definition-icon">elif</div><h4>if … elif</h4><p>تفحص شروطًا متتابعة، وتنقذ أوامر الشرط الذي يتحقق.</p></div><div class="definition-card"><div class="definition-icon">↳</div><h4>التداخل</h4><p>يمكن وضع جملة if داخل جملة شرطية أخرى، مع المحافظة على المسافة البادئة.</p></div></div>${codeBlock('l3-forms', 'if / elif / else', 'if grade > 84:\n    print("Excellent grade.")\nelif grade > 76:\n    print("Very good grade.")\nelse:\n    print("You failed the course.")', 'ينفذ مسارًا واحدًا بحسب قيمة grade')}</article>
    <article class="content-card"><h3>2 · النقطتان والمسافة البادئة</h3><p>بعد الشرط توضع النقطتان (:)، وتبدأ الأوامر التابعة للشرط بمسافة بادئة متسقة. حذف النقطتين أو كسر المسافة البادئة يسبب خطأ في البرنامج.</p>${codeBlock('l3-indent', 'كتلة شرطية صحيحة', 'x = 20\ny = 5\nif x > y:\n    print("x is greater than y")', 'x is greater than y')}<div class="callout info" style="margin-top:15px"><b>pass</b><span>إذا كانت كتلة if فارغة مؤقتًا، يمكن وضع pass لتجنب رسالة الخطأ.</span></div></article>
    <article class="content-card"><h3>3 · المعاملات المنطقية</h3><table class="compare-table"><thead><tr><th>المعامل</th><th>المعنى</th><th>مثال الفكرة</th></tr></thead><tbody><tr><td><strong>and</strong></td><td>تحقق الشرطين معًا.</td><td>المعدل ≥ 90 <strong>and</strong> المعدل ≤ 100</td></tr><tr><td><strong>or</strong></td><td>تحقق أحد الشرطين.</td><td>x == 1 <strong>or</strong> x == 2</td></tr><tr><td><strong>not</strong></td><td>نفي التعبير المنطقي.</td><td><strong>not</strong> (Avg ≥ 50)</td></tr></tbody></table>${codeBlock('l3-logic', 'شرطان معًا', 'Avg = 95\nif Avg >= 90 and Avg <= 100:\n    print("Excellent")', 'Excellent')}</article>`;
}

function dragActivity({ id, title, description, items, zones }) {
  return `<article class="activity-card" data-drag-activity="${id}"><h3>${title}</h3><p>${description}</p><span class="activity-label">اسحب البطاقة إلى التصنيف المناسب — ويمكن النقر بدل السحب على الهاتف.</span><div class="drag-board"><div class="drag-items" data-drag-source="${id}">${items.map(item => `<div class="drag-item" draggable="true" data-drag-group="${id}" data-drag-value="${item.value}">${item.label}</div>`).join('')}</div><div class="drop-grid">${zones.map(zone => `<div class="drop-zone" data-drag-group="${id}" data-drop-target="${zone.value}"><strong>${zone.label}</strong><small>${zone.hint}</small><span class="placed"></span></div>`).join('')}</div><div class="drag-feedback" data-drag-feedback="${id}">لم توضع بطاقات بعد.</div><button class="secondary-button" data-action="check-drag" data-drag-check="${id}">تحقق من التصنيف</button></div></article>`;
}
function sortActivity({ id, title, description, items }) {
  return `<article class="activity-card" data-sort-activity="${id}"><h3>${title}</h3><p>${description}</p><span class="activity-label">رتب الأسطر من الأعلى إلى الأسفل بالسحب.</span><div class="sort-list" data-sort-list="${id}">${items.map((item, i) => `<div class="sort-item" draggable="true" data-sort-key="${item.key}"><b>${i + 1}</b><span>${escapeHtml(item.label)}</span></div>`).join('')}</div><div class="drag-feedback" data-sort-feedback="${id}">التنفيذ يقرأ الأسطر من الأعلى إلى الأسفل.</div><button class="secondary-button" data-action="check-sort" data-sort-check="${id}">تحقق من الترتيب</button></article>`;
}

function renderPractice(lesson) {
  if (lesson.id === 'lesson1') {
    return `${contentHeading('تدرّب', 'حوّل المقارنة إلى قرار، ثم اختبر فهمك للخوارزمية وطريقة التنفيذ.')}
      <div class="activity-layout">${dragActivity({ id: 'l1-classify', title: 'مختبر التصنيف', description: 'صنّف الأمثلة وفق التصنيف المطلوب في البطاقات.', items: [{ value: 'high', label: 'Python · عالية المستوى' }, { value: 'low', label: 'لغة الآلة · منخفضة' }, { value: 'block', label: 'Scratch · كتلية' }, { value: 'text', label: 'JavaScript · نصية' }], zones: [{ value: 'high', label: 'عالية المستوى', hint: 'قريبة من لغة الإنسان' }, { value: 'low', label: 'منخفضة المستوى', hint: 'قريبة من لغة الآلة' }, { value: 'block', label: 'كتلية', hint: 'كتل رسومية' }, { value: 'text', label: 'نصية', hint: 'نصوص برمجية' }] })}
      <article class="activity-card"><h3>مَن يترجم كيف؟</h3><p>اختر الوصف الذي يطابق كل أداة، ثم فسّر اختيارك.</p>${quizCard({ id: 'l1-practice-1', type: 'ضع دائرة', question: 'أي عبارة تصف المفسر؟', options: ['يفحص البرنامج كاملًا ثم يترجمه قبل التنفيذ.', 'يحوّل وينفذ أجزاء البرنامج أمرًا بأمر وقد يتوقف عند الخطأ.', 'يستخدم كتلًا رسومية بدل النصوص.', 'يكتب الخوارزمية دون تنفيذها.'], correct: 1, explanation: 'المفسر يحول أجزاء البرنامج وينفذها تباعًا، ويتوقف عندما يجد أمرًا خطأ.' })}${trueFalseCard({ id: 'l1-practice-2', question: 'لغة التجميع أسهل قراءة من لغة الآلة لأنها تحتوي على بعض مفردات اللغة الإنجليزية.', correct: 0, explanation: 'هذا من أسباب سهولة لغة التجميع مقارنة بلغة الآلة، مع كون تنفيذها أبطأ من لغة الآلة.' })}</article></div>
      <article class="content-card" style="margin-top:17px"><h3>رتّب مسار الحل</h3><p class="muted">قبل كتابة لعبة التخمين، ما التسلسل المنطقي للعمل؟</p>${sortActivity({ id: 'l1-sequence', title: 'ترتيب مراحل المشروع', description: 'اسحب العناصر حتى تصبح خوارزمية العمل منطقية.', items: [{ key: 'problem', label: 'تحديد المشكلة والجمهور والهدف' }, { key: 'rules', label: 'وصف السيناريو وقواعد اللعبة' }, { key: 'algorithm', label: 'كتابة الخوارزمية وشبه الرمزية' }, { key: 'flowchart', label: 'رسم مخطط سير العمليات' }, { key: 'code', label: 'البدء بكتابة البرنامج واختباره' }] })}</article>`;
  }
  if (lesson.id === 'lesson2') {
    return `${contentHeading('تدرّب', 'لا تكتفِ بحفظ النوع أو العامل؛ اقرأ الكود كما يقرأه المفسر.')}
      <div class="activity-layout">${dragActivity({ id: 'l2-types', title: 'صنّف قيمة المتغير', description: 'اسحب كل متغير إلى نوع القيمة الذي يمثله.', items: [{ value: 'int', label: 'age = 16' }, { value: 'float', label: 'height = 1.75' }, { value: 'str', label: "name = 'Basem'" }, { value: 'bool', label: 'passed = True' }], zones: [{ value: 'int', label: 'int', hint: 'عدد صحيح' }, { value: 'float', label: 'float', hint: 'عدد عشري' }, { value: 'str', label: 'String', hint: 'نص بين اقتباس' }, { value: 'bool', label: 'Boolean', hint: 'True أو False' }] })}
      <article class="activity-card"><h3>توقع الناتج</h3><p>ضع دائرة حول المخرج الصحيح، ثم اضغط تحقق.</p>${quizCard({ id: 'l2-practice-1', type: 'توقع الناتج', question: 'ما الناتج الذي تطبعه الجملة؟ <code>print(2 + 3 * 4)</code>', options: ['20', '14', '24', '9'], correct: 1, explanation: 'الضرب له أولوية أعلى من الجمع: 3 × 4 = 12 ثم 2 + 12 = 14.' })}${quizCard({ id: 'l2-practice-2', type: 'توقع الناتج', question: 'ما الناتج الذي تطبعه الجملة؟ <code>print((2 + 3) * 4)</code>', options: ['14', '20', '9', '24'], correct: 1, explanation: 'الأقواس لها الأولوية: (2 + 3) × 4 = 20.' })}</article></div>
      <div class="question-grid" style="margin-top:17px">${multiQuizCard({ id: 'l2-practice-3', type: 'ضع دائرة', question: 'أي المعرّفات الآتية مقبولة في Python؟', options: ['average_score', '2nd_name', 'class', 'student_name'], correct: [0, 3], explanation: 'يبدأ المعرّف بحرف أو شرطة سفلية، ولا يكون كلمة محجوزة ولا يبدأ بعدد.' })}${trueFalseCard({ id: 'l2-practice-4', question: 'العامل = للمقارنة بين قيمتين، والعامل == لإسناد قيمة.', correct: 1, explanation: 'العكس: = للإسناد، و== للمقارنة بين قيمتين.' })}</div>
      <article class="content-card" style="margin-top:17px"><h3>رتّب برنامج قائمة اللعبة</h3><p class="muted">رتب الأسطر كما وردت فكرة المشروع في الكتاب، ثم اقرأ الخيار في النهاية.</p>${sortActivity({ id: 'l2-menu', title: 'من الترحيب إلى الإدخال', description: 'ابدأ بعرض العنوان والخيارات، ثم اطلب من اللاعب اختيارًا.', items: [{ key: 'option', label: 'option = input("Please select an option (1, 2, 3): ")' }, { key: 'start', label: 'print("2. Start Game")' }, { key: 'welcome', label: 'print("Welcome to Stars and Moons")' }, { key: 'exit', label: 'print("3. Exit")' }, { key: 'instructions', label: 'print("1. Instructions")' }] })}</article>`;
  }
  return `${contentHeading('تدرّب', 'اختبر القرار نفسه على أكثر من قيمة، ثم تعلّم كيف يكتشف المبرمج الخطأ.')}
    <div class="activity-layout"><article class="activity-card"><h3>محاكي المقارنة</h3><p>أدخل قيمتين؛ سيحدد البرنامج الفرع الذي سيعمل في مثال الكتاب.</p><div class="form-grid"><div class="form-field"><label for="branchX">قيمة x</label><input class="text-input" id="branchX" type="number" value="3"></div><div class="form-field"><label for="branchY">قيمة y</label><input class="text-input" id="branchY" type="number" value="20"></div></div><button class="primary-button" data-action="run-branch" style="margin-top:13px">شغّل القرار</button><div class="callout success" style="margin-top:13px"><b>→</b><span id="branchResult">ستظهر نتيجة المقارنة هنا.</span></div>${codeBlock('l3-branch', 'المثال البرمجي', 'x = 3\ny = 20\nif y > x:\n    print("y is greater than x")\nelse:\n    print("x is greater than y")')}</article><article class="activity-card"><h3>اكتشف الخطأ</h3><p>اختر الإصلاح الضروري للمقطع التالي:</p>${codeBlock('l3-error', 'مقطع يحتاج تصحيحًا', 'if grade >= 85\n    print("A")')}${quizCard({ id: 'l3-practice-1', type: 'محقق الأخطاء', question: 'ما التعديل الضروري في المقطع؟', options: ['إضافة النقطتين بعد الشرط ومسافة بادئة للطباعة.', 'تغيير اسم grade إلى number فقط.', 'حذف print.', 'إضافة قوس مربع حول الشرط.'], correct: 0, explanation: 'يجب وضع : بعد الشرط، وتكون جملة print داخل الكتلة بمسافة بادئة.' })}</article></div>
    <div class="question-grid" style="margin-top:17px">${quizCard({ id: 'l3-practice-2', type: 'اختيار بسيط', question: 'متى نستخدم and؟', options: ['عندما يكفي تحقق أحد الشرطين.', 'عندما نريد تحقق الشرطين معًا.', 'لنفي الشرط.', 'لطباعة النص.'], correct: 1, explanation: 'and تربط شرطين بحيث يلزم تحققهما معًا.' })}${quizCard({ id: 'l3-practice-3', type: 'اختيار بسيط', question: 'إذا كانت قيمة x = 68، ماذا يطبع المثال المتداخل الذي يفحص x > 10 ثم x > 60؟', options: ['Above ten, and also above 60.', 'but not above 60.', 'لا يطبع شيئًا.', 'خطأ لأن x عدد.'], correct: 0, explanation: '68 أكبر من 10 وأكبر من 60، لذلك يتحقق الشرطان المتتاليان.' })}</div>`;
}

function renderPadletBox(lesson) {
  return `<div class="padlet-box"><div><h4>مساحة المشاركة في Padlet</h4><p>${lesson.padlet}</p></div><a class="primary-button" href="${escapeHtml(padletHref())}" target="_blank" rel="noopener">افتح لوحة Padlet ↗</a></div>`;
}
function renderExtend(lesson) {
  if (lesson.id === 'lesson1') {
    const saved = state.notes.lesson1 || {};
    return `${contentHeading('توسّع ومشروع', 'انقل الفكرة من الورق إلى مخطط واضح، ثم شاركها مع مجموعتك.')}
      <div class="activity-layout"><article class="activity-card"><h3>مسودة «نجوم وأقمار»</h3><p>املأ مخططًا أوليًا قبل رسمه في draw.io أو تحويله إلى عرض.</p><div class="form-grid"><div class="form-field full"><label for="l1-problem">المشكلة التي تحلها اللعبة</label><textarea id="l1-problem" placeholder="مثال: نريد لعبة تخمين تعطي اللاعب تلميحًا مفهومًا...">${escapeHtml(saved.problem || '')}</textarea></div><div class="form-field"><label for="l1-audience">الجمهور المستهدف</label><input class="text-input" id="l1-audience" value="${escapeHtml(saved.audience || '')}" placeholder="لاعبان / طلاب الصف"></div><div class="form-field"><label for="l1-goal">الهدف</label><input class="text-input" id="l1-goal" value="${escapeHtml(saved.goal || '')}" placeholder="تخمين عدد من أربع منازل"></div><div class="form-field full"><label for="l1-rules">قواعد اللعب</label><textarea id="l1-rules" placeholder="النجمة، القمر، عدد المحاولات...">${escapeHtml(saved.rules || '')}</textarea></div></div><button class="primary-button" data-action="save-l1-draft">حفظ المسودة</button> <span class="saved-note" id="l1-draft-note"></span></article><article class="activity-card"><h3>خط سير مقترح</h3><p>استخدم هذه النواة عند الرسم، ثم ناقش ما ينقصها.</p><div class="diagram"><div class="diagram-node"><strong>ابدأ</strong><span>عرض التعليمات</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>إدخال</strong><span>اسم اللاعب والتخمين</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>قرار</strong><span>نجوم / أقمار</span></div><div class="diagram-arrow">←</div><div class="diagram-node"><strong>نهاية</strong><span>فوز أو 10 محاولات</span></div></div><div class="resource-links" style="margin-top:15px"><a class="resource-link" href="https://app.diagrams.net/" target="_blank" rel="noopener"><span><strong>ارسم في draw.io</strong><small>مخطط سير العمليات</small></span><b>↗</b></a><a class="resource-link" href="https://slides.google.com/" target="_blank" rel="noopener"><span><strong>جهّز عرضًا</strong><small>المشكلة والهدف والسيناريو والقواعد</small></span><b>↗</b></a></div></article></div>${renderPadletBox(lesson)}`;
  }
  if (lesson.id === 'lesson2') {
    return `${contentHeading('توسّع ومشروع', 'ابنِ الجزء الأول من لعبة التخمين: الترحيب، خيارات القائمة، ثم قراءة اختيار اللاعب.')}
      <div class="activity-layout"><article class="activity-card"><h3>محرر القائمة</h3><p>عدّل النص إن رغبت، ثم انسخه إلى Python أو افتحه في Python Tutor.</p><div class="code-editor"><textarea id="l2-editor">print("Welcome to Stars and Moons")
print("1. Instructions")
print("2. Start Game")
print("3. Exit")
option = input("Please select an option (1, 2, 3): ")</textarea><div class="copy-row"><button class="primary-button" data-action="copy-editor" data-editor="l2-editor">نسخ الكود</button><a class="secondary-button" href="https://pythontutor.com" target="_blank" rel="noopener">افتح Python Tutor ↗</a><span class="hint" id="copyHint"></span></div></div></article><article class="activity-card"><h3>تحدي قصير</h3><p>اكتب في Padlet إجابة السؤالين:</p><div class="callout info"><b>1</b><span>لماذا نحتاج <code>int(input(...))</code> عندما نريد إجراء عملية حسابية على مدخل المستخدم؟</span></div><div class="callout tip" style="margin-top:10px"><b>2</b><span>ما الفرق بين <code>=</code> و<code>==</code> بمثال من اللعبة؟</span></div><div class="callout success" style="margin-top:10px"><b>3</b><span>تتبع الكود في Python Tutor وسجل أول قيمة تظهر في نافذة التنفيذ.</span></div></article></div>${renderPadletBox(lesson)}`;
  }
  return `${contentHeading('توسّع ومشروع', 'أضف القرار إلى قائمة اللعبة كما طلب المشروع في الكتاب، ثم اختبر إدخالات مختلفة.')}
    <div class="activity-layout"><article class="activity-card"><h3>تعديل قائمة اللعبة</h3><p>هذا الهيكل يحقق المطلوب: تعليمات للخيار 1، ورسالة مؤقتة للخيارين 2 أو 3، ورسالة للإدخال غير المعروف.</p>${codeBlock('l3-project', 'مشروع · الخيارات الشرطية', 'option = input("Please select an option (1, 2, 3): ")\nif option == "1":\n    print("Game instructions")\nelif option == "2" or option == "3":\n    print("This feature has not been implemented yet")\nelse:\n    print("Unknown option. Enter 1, 2 or 3")', 'جرّب 1 ثم 2 ثم 3 ثم قيمة أخرى في Python Tutor.')}</article><article class="activity-card"><h3>مهمة الفريق</h3><p>وزّع الأدوار ثم سجل خطة التنفيذ.</p><div class="form-grid"><div class="form-field"><label for="l3-role1">كاتب الكود</label><input class="text-input" id="l3-role1" placeholder="اسم الطالب"></div><div class="form-field"><label for="l3-role2">متتبع التنفيذ</label><input class="text-input" id="l3-role2" placeholder="اسم الطالب"></div><div class="form-field full"><label for="l3-plan">ما الاختبار الذي ستجرونه؟</label><textarea id="l3-plan" placeholder="سنختبر الخيار 1 والخيار 2 وقيمة غير معروفة..."></textarea></div></div><div class="callout tip" style="margin-top:13px"><b>↗</b><span>بعد التصحيح، احتفظوا بالملف داخل المجموعة ليستكمل في الخطوات القادمة.</span></div></article></div>${renderPadletBox(lesson)}`;
}

function renderAssess(lesson) {
  const completeLabel = currentLessonComplete(lesson.id) ? 'تم تعليم الدرس مكتملًا ✓' : 'أكملت التقويم — علّم الدرس مكتملًا';
  let questions = '';
  if (lesson.id === 'lesson1') {
    questions = `<div class="question-grid">${quizCard({ id: 'l1-assess-1', type: 'صح أم خطأ', question: 'المترجم يفحص البرنامج كاملًا ويترجمه إلى برنامج هدف قبل بدء التنفيذ.', correct: 0, explanation: 'هذه هي الفكرة الأساسية لعمل المترجم كما ورد في الكتاب.', assessment: true })}${quizCard({ id: 'l1-assess-2', type: 'اختيار', question: 'أي مقارنة أدق بين الكتلية والنصية؟', options: ['الكتلية تستخدم كتلًا رسومية، والنصية تستخدم نصوصًا برمجية.', 'الكتلية منخفضة المستوى، والنصية لغة آلة.', 'لا فرق بينهما في تمثيل الأوامر.', 'النصية لا تحتاج إلى قواعد كتابة.'], correct: 0, explanation: 'الفرق في طريقة تمثيل أجزاء البرنامج: كتل رسومية مقابل نصوص.', assessment: true })}${multiQuizCard({ id: 'l1-assess-3', type: 'ضع دائرة', question: 'أي عناصر يمكن أن تظهر في وصف لعبة التخمين؟', options: ['الهدف والجمهور', 'قواعد الفوز والنهاية', 'مخطط سير العمليات', 'لون خلفية جهاز المعلم فقط'], correct: [0, 1, 2], explanation: 'هذه عناصر التخطيط والتحليل المطلوبة للمشروع.', assessment: true, wide: true })}</div>`;
  } else if (lesson.id === 'lesson2') {
    questions = `<div class="question-grid">${quizCard({ id: 'l2-assess-1', type: 'اختيار', question: 'أي عبارة صحيحة عن input؟', options: ['تعيد عددًا صحيحًا دائمًا.', 'تقرأ مدخل المستخدم نصًا، ويمكن تحويله بـ int().', 'تطبع المخرجات فقط.', 'تعرّف متغيرًا دون قيمة.'], correct: 1, explanation: 'input تعيد نصًا، ونستخدم int() إذا أردنا عددًا صحيحًا.', assessment: true })}${quizCard({ id: 'l2-assess-2', type: 'حساب', question: 'ما ناتج <code>print(5 * 2 // 3)</code>؟', options: ['10', '3', '3.33', '0'], correct: 1, explanation: 'ينفذ الضرب أولًا: 10، ثم القسمة التحتية على 3 تعيد أقرب عدد صحيح أقل أو يساوي الناتج: 3.', assessment: true })}${trueFalseCard({ id: 'l2-assess-3', question: 'يمكن أن يبدأ اسم المتغير بعدد مثل 2nd_name.', correct: 1, explanation: 'لا يجوز أن يبدأ المعرّف بعدد.', assessment: true })}${quizCard({ id: 'l2-assess-4', type: 'تمييز', question: 'أي زوج يوضح الفرق الصحيح؟', options: ['= للمقارنة و== للإسناد', '= للإسناد و== للمقارنة', 'كلاهما للطباعة', 'كلاهما لتحويل النص إلى عدد'], correct: 1, explanation: '= للإسناد، و== للمقارنة.', assessment: true })}</div>`;
  } else {
    questions = `<div class="question-grid">${quizCard({ id: 'l3-assess-1', type: 'اختيار', question: 'أي بنية تناسب ثلاثة مسارات: شرط أول، شرط ثانٍ، وإلا؟', options: ['if فقط', 'if / else', 'if / elif / else', 'print فقط'], correct: 2, explanation: 'تستخدم if/elif/else لفحص شروط متتابعة ثم المسار البديل.', assessment: true })}${trueFalseCard({ id: 'l3-assess-2', question: 'يجب أن تكون جمل الكتلة الشرطية ذات مسافة بادئة متسقة.', correct: 0, explanation: 'المسافة البادئة تحدد الكتلة البرمجية في Python.', assessment: true })}${multiQuizCard({ id: 'l3-assess-3', type: 'ضع دائرة', question: 'أي العبارات صحيحة عن المعاملات المنطقية؟', options: ['and يتطلب تحقق الشرطين.', 'or يكفي معه تحقق أحد الشرطين.', 'not ينفي التعبير.', 'and يطبع النص تلقائيًا.'], correct: [0, 1, 2], explanation: 'هذه وظائف and وor وnot؛ الخيار الرابع غير صحيح.', assessment: true, wide: true })}${quizCard({ id: 'l3-assess-4', type: 'تتبع', question: 'إذا كانت x = 20 وy = 5، فهل يتحقق الشرط <code>not x <= y and x < 30</code>؟', options: ['نعم، وتنفذ كتلة الشرط.', 'لا، لأن not يلغي كل البرنامج.', 'لا، لأن x عدد.', 'لا يمكن معرفة ذلك.'], correct: 0, explanation: 'x <= y خطأ، ونفيه صحيح؛ وx < 30 صحيح، إذن and صحيح.', assessment: true })}</div>`;
  }
  return `${contentHeading('قوّم نفسك', 'حل الأسئلة ثم اضغط تحقق. بعد ذلك اشرح لزميلك إجابة واحدة بصوتك.')}
    <div class="score-banner"><div><h3>بطاقة الخروج</h3><p>لا يكفي اختيار الإجابة؛ راجع التغذية الراجعة وسجل ما ستطبقه في المشروع.</p></div><div class="score-number" id="assessmentScore">—<small>نتيجتك الحالية</small></div></div>${questions}<div class="assessment-footer"><span class="status-text">${completeLabel}</span><button class="primary-button" data-action="complete-lesson" data-lesson="${lesson.id}">${completeLabel}</button></div>`;
}

function renderGuide(lesson) {
  return `${contentHeading('دليل تنفيذ الدرس', 'خطة عملية مختصرة للمعلم مع دليل تحقق ومراعاة للفروق الفردية.')}
    <div class="teacher-guide"><article class="content-card"><h3>بطاقة المعلم</h3><div class="strategy-box"><div class="strategy-icon">✦</div><div><strong>${lesson.strategy}</strong><span>استثمر الخطأ المتوقع كسؤال جديد، واطلب من الطالب تفسير القرار قبل عرض الإجابة.</span></div></div><h4>قبل الحصة</h4><p>${lesson.guide.preparation}</p><h4>دليل التعلم</h4><p>${lesson.guide.evidence}</p><h4>مراعاة الفروق</h4><p>${lesson.guide.differentiation}</p><h4>المواطنة الرقمية</h4><p>${lesson.guide.ethics}</p></article><article class="content-card"><h3>توزيع زمني مقترح</h3><div class="table-wrap"><table class="guide-table"><thead><tr><th>الجزء</th><th>الزمن</th><th>الإجراء</th><th>أثر التعلم</th></tr></thead><tbody><tr><td>استهلال</td><td>5–8 د</td><td>سؤال أو لعبة قصيرة دون كشف الحل.</td><td>توقع أولي.</td></tr><tr><td>تهيئة</td><td>8–10 د</td><td>ربط المفهوم بسياق اللعبة.</td><td>سؤال «لماذا؟».</td></tr><tr><td>شرح</td><td>15–25 د</td><td>مفهوم واحد، مثال من الكتاب، تحقق سريع.</td><td>ملاحظة أو إجابة.</td></tr><tr><td>تطبيق</td><td>10–20 د</td><td>سحب/إفلات أو تتبع كود أو تصحيح خطأ.</td><td>منتج قابل للملاحظة.</td></tr><tr><td>توسع</td><td>5–10 د</td><td>Padlet، مشروع المجموعة، أو Python Tutor.</td><td>تفسير أو مشاركة.</td></tr><tr><td>تقويم</td><td>5–10 د</td><td>تنويع: اختيار، صح/خطأ، دائرة، ترتيب.</td><td>بطاقة خروج.</td></tr></tbody></table></div><div class="rubric"><div class="rubric-item"><strong>فهم</strong><span>يعرّف المفهوم بلغته.</span></div><div class="rubric-item"><strong>تطبيق</strong><span>يستخدم المفهوم في مثال.</span></div><div class="rubric-item"><strong>تتبع</strong><span>يتوقع الناتج ويبرره.</span></div><div class="rubric-item"><strong>تعاون</strong><span>يشارك ويحترم المصدر.</span></div></div></article></div>${renderPadletBox(lesson)}`;
}

function hydrateSavedAnswers() {
  document.querySelectorAll('[data-quiz-id]').forEach(card => {
    const saved = state.answers[card.dataset.quizId];
    if (!saved) return;
    const button = card.querySelector(`[data-option="${saved.selected}"]`);
    if (button) button.classList.add('selected');
    if (saved.checked) showQuizResult(card, saved.correct, saved.selected);
  });
  document.querySelectorAll('[data-multi-id]').forEach(card => {
    const saved = state.answers[card.dataset.multiId];
    if (!saved) return;
    (saved.selected || []).forEach(index => card.querySelector(`[data-multi-option="${index}"]`)?.classList.add('selected'));
    if (saved.checked) showMultiResult(card, saved.correct, saved.selected || []);
  });
  updateAssessmentScore();
}
function showQuizResult(card, isCorrect, selected) {
  const correct = Number(card.dataset.correct);
  card.querySelectorAll('.option-button').forEach((button, index) => {
    button.classList.remove('correct', 'incorrect');
    if (index === correct) button.classList.add('correct');
    if (index === Number(selected) && !isCorrect) button.classList.add('incorrect');
  });
  const feedback = card.querySelector('.quiz-feedback');
  feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  feedback.textContent = isCorrect ? `إجابة صحيحة. ${card.dataset.explanation || ''}` : `ليست الإجابة الأدق. ${card.dataset.explanation || ''}`;
}
function showMultiResult(card, isCorrect, selected) {
  const correct = JSON.parse(card.dataset.correct || '[]');
  card.querySelectorAll('.option-button').forEach((button, index) => {
    button.classList.remove('correct', 'incorrect');
    if (correct.includes(index)) button.classList.add('correct');
    if (selected.includes(index) && !correct.includes(index)) button.classList.add('incorrect');
  });
  const feedback = card.querySelector('.quiz-feedback');
  feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  feedback.textContent = isCorrect ? `إجابة صحيحة. ${card.dataset.explanation || ''}` : `راجع الاختيارات المظللة. ${card.dataset.explanation || ''}`;
}
function updateAssessmentScore() {
  const el = document.getElementById('assessmentScore');
  if (!el || !currentLessonId) return;
  const cards = [...document.querySelectorAll('[data-assessment="true"]')];
  const answered = cards.filter(card => state.answers[card.dataset.quizId || card.dataset.multiId]?.checked);
  const correct = answered.filter(card => state.answers[card.dataset.quizId || card.dataset.multiId]?.correct).length;
  el.innerHTML = `${correct}/${cards.length}<small>${answered.length ? 'إجابات صحيحة / كل الأسئلة' : 'لم تُجب بعد'}</small>`;
}

function placeDrag(source, zone) {
  if (!source || !zone || source.dataset.dragGroup !== zone.dataset.dragGroup) return;
  const existing = zone.dataset.placed;
  if (existing) {
    const old = document.querySelector(`[data-drag-value="${CSS.escape(existing)}"][data-drag-group="${CSS.escape(zone.dataset.dragGroup)}"]`);
    old?.classList.remove('drag-selected');
  }
  zone.dataset.placed = source.dataset.dragValue;
  const placed = zone.querySelector('.placed');
  placed.textContent = source.textContent;
  document.querySelectorAll(`[data-drag-group="${zone.dataset.dragGroup}"]`).forEach(item => item.classList.remove('drag-selected'));
  source.classList.add('drag-selected');
  const activity = zone.parentElement?.parentElement?.parentElement;
  const feedback = activity ? activity.querySelector(`[data-drag-feedback="${activity.dataset.dragActivity}"]`) : null;
  if (feedback) feedback.textContent = `وُضعت بطاقة «${source.textContent}» في خانة «${zone.querySelector('strong').textContent}».`;
}
function checkDrag(id) {
  const root = document.querySelector(`[data-drag-activity="${id}"]`);
  if (!root) return;
  const zones = [...root.querySelectorAll('.drop-zone')];
  const filled = zones.every(zone => zone.dataset.placed);
  const right = filled && zones.every(zone => zone.dataset.placed === zone.dataset.dropTarget);
  const feedback = root.querySelector(`[data-drag-feedback="${id}"]`);
  feedback.className = `drag-feedback ${right ? 'correct' : ''}`;
  feedback.textContent = right ? 'ممتاز! كل البطاقات في التصنيف المناسب.' : filled ? 'بعض البطاقات ليست في مكانها. راجع معنى كل تصنيف.' : 'أكمل وضع البطاقات الأربع أولًا.';
  if (right) showToast('تصنيف صحيح — واصل التدريب.');
}
function checkSort(id) {
  const root = document.querySelector(`[data-sort-activity="${id}"]`);
  if (!root) return;
  const expected = id === 'l1-sequence' ? ['problem', 'rules', 'algorithm', 'flowchart', 'code'] : ['welcome', 'instructions', 'start', 'exit', 'option'];
  const actual = [...root.querySelectorAll('.sort-item')].map(item => item.dataset.sortKey);
  const right = expected.join('|') === actual.join('|');
  const feedback = root.querySelector(`[data-sort-feedback="${id}"]`);
  feedback.className = `drag-feedback ${right ? 'correct' : ''}`;
  feedback.textContent = right ? 'ترتيب صحيح! لاحظ كيف يبدأ الحل بالمشكلة وينتهي بالتنفيذ.' : 'لم يكتمل الترتيب. اقرأ العناصر من الأعلى إلى الأسفل واسأل: ماذا يجب أن يعرف البرنامج أولًا؟';
  root.querySelectorAll('.sort-item b').forEach((number, index) => number.textContent = index + 1);
}

function saveL1Draft() {
  state.notes.lesson1 = {
    problem: document.getElementById('l1-problem')?.value || '',
    audience: document.getElementById('l1-audience')?.value || '',
    goal: document.getElementById('l1-goal')?.value || '',
    rules: document.getElementById('l1-rules')?.value || ''
  };
  saveState();
  document.getElementById('l1-draft-note').textContent = 'حُفظت المسودة على هذا الجهاز.';
  showToast('تم حفظ مسودة المشروع.');
}
function copyText(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); return Promise.resolve();
}

function openGuideModal() {
  const modalRoot = document.getElementById('modalRoot');
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="guideModalTitle" data-modal-inner><div class="modal-head"><div><h2 id="guideModalTitle">دليل تنفيذ مختصر</h2><p>إطار موحد للحصة، مع حرية تعديل الزمن حسب مستوى الصف.</p></div><button class="close-modal" data-action="close-modal" aria-label="إغلاق">×</button></div><div class="modal-section"><h3>روتين التعلّم</h3><ul><li>ابدأ بسؤال سهل لاختبار الخبرة السابقة.</li><li>اعرض المفهوم في بطاقة قصيرة مع مثال من الكتاب.</li><li>اطلب توقعًا فرديًا قبل التفاعل أو التشغيل.</li><li>اجعل الطالب يشرح سبب اختياره لزميله.</li><li>اختم بتقويم متنوع وبطاقة خروج في Padlet.</li></ul></div><div class="modal-section"><h3>دور المعلم أثناء النشاط</h3><p>لا تقدم الإجابة فورًا. استخدم أسئلة مثل: ما المعطى؟ ما القرار؟ ما الذي تتوقعه؟ أين يبدأ الخطأ؟ ثم اطلب من الطالب تعديل توقعه وتوثيق ما تعلمه.</p></div><div class="modal-section"><h3>المرجع الرقمي المقترح</h3><p><a href="https://pythontutor.com" target="_blank" rel="noopener">Python Tutor</a> لتتبع تنفيذ الأمثلة، و<a href="https://app.diagrams.net/" target="_blank" rel="noopener">draw.io</a> لمخطط سير لعبة «نجوم وأقمار».</p></div><div class="modal-section"><button class="primary-button" data-action="close-modal">فهمت، أعود للدرس</button></div></div></div>`;
}

function handleClick(event) {
  const actionElement = event.target.closest('[data-action]');
  if (actionElement) {
    const action = actionElement.dataset.action;
    if (action === 'home') { currentLessonId = null; renderHome(); setView(true); history.replaceState(null, '', '#home'); return; }
    if (action === 'open-lesson') { const id = actionElement.dataset.lesson; renderLesson(id, 'overview'); history.replaceState(null, '', `#${id}`); return; }
    if (action === 'set-tab') { renderLesson(currentLessonId, actionElement.dataset.tab); history.replaceState(null, '', `#${currentLessonId}/${actionElement.dataset.tab}`); return; }
    if (action === 'toggle-theme') { state.theme = state.theme === 'dark' ? 'light' : 'dark'; saveState(); applyTheme(); return; }
    if (action === 'open-guide') { openGuideModal(); return; }
    if (action === 'close-modal') { if (!event.target.closest('[data-modal-inner]') || event.target.closest('.close-modal') || actionElement.tagName === 'BUTTON') document.getElementById('modalRoot').innerHTML = ''; return; }
    if (action === 'reset-progress') { if (confirm('هل تريد إعادة حالة الدروس والتقويم إلى البداية؟')) { state.completed = {}; state.answers = {}; saveState(); renderHome(); showToast('أعيد التقدم إلى البداية.'); } return; }
    if (action === 'save-padlet') { const input = document.getElementById('padletInput'); state.padletUrl = input?.value.trim() || ''; saveState(); const note = document.getElementById('padletSavedNote'); if (note) note.textContent = state.padletUrl ? 'تم حفظ رابط اللوحة على هذا الجهاز.' : 'لم يُضف رابط مخصص بعد.'; showToast(state.padletUrl ? 'تم حفظ رابط Padlet.' : 'تم حذف الرابط المخصص.'); return; }
    if (action === 'check-quiz') { checkQuiz(actionElement.closest('[data-quiz-id]')); return; }
    if (action === 'check-multi') { checkMulti(actionElement.closest('[data-multi-id]')); return; }
    if (action === 'check-drag') { checkDrag(actionElement.dataset.dragCheck); return; }
    if (action === 'check-sort') { checkSort(actionElement.dataset.sortCheck); return; }
    if (action === 'show-output') { document.getElementById(`output-${actionElement.dataset.code}`)?.classList.toggle('show'); actionElement.textContent = actionElement.textContent.includes('إظهار') ? 'إخفاء الناتج' : 'إظهار الناتج المتوقع'; return; }
    if (action === 'save-l1-draft') { saveL1Draft(); return; }
    if (action === 'copy-editor') { const value = document.getElementById(actionElement.dataset.editor)?.value || ''; copyText(value).then(() => { const hint = document.getElementById('copyHint'); if (hint) hint.textContent = 'تم نسخ الكود.'; showToast('تم نسخ الكود إلى الحافظة.'); }); return; }
    if (action === 'run-branch') { runBranch(); return; }
    if (action === 'complete-lesson') { state.completed[actionElement.dataset.lesson] = true; saveState(); renderLesson(actionElement.dataset.lesson, 'assess'); showToast('أحسنت! تم حفظ إكمال الدرس.'); return; }
  }

  const option = event.target.closest('[data-option]');
  if (option) {
    const card = option.closest('[data-quiz-id]');
    if (!card) return;
    card.querySelectorAll('.option-button').forEach(button => button.classList.remove('selected'));
    option.classList.add('selected');
    const id = card.dataset.quizId;
    state.answers[id] = { ...(state.answers[id] || {}), selected: Number(option.dataset.option), checked: false };
    saveState();
    return;
  }
  const multiOption = event.target.closest('[data-multi-option]');
  if (multiOption) {
    multiOption.classList.toggle('selected');
    const card = multiOption.closest('[data-multi-id]');
    const selected = [...card.querySelectorAll('.option-button.selected')].map(button => Number(button.dataset.multiOption));
    state.answers[card.dataset.multiId] = { ...(state.answers[card.dataset.multiId] || {}), selected, checked: false };
    saveState();
    return;
  }
  const dragItem = event.target.closest('.drag-item');
  if (dragItem) {
    const group = dragItem.dataset.dragGroup;
    document.querySelectorAll(`[data-drag-group="${group}"]`).forEach(item => item.classList.remove('drag-selected'));
    dragItem.classList.add('drag-selected');
    selectedDrag = dragItem;
    showToast('اختر الآن خانة التصنيف.');
    return;
  }
  const sortItem = event.target.closest('.sort-item');
  if (sortItem) {
    if (!selectedSort) {
      selectedSort = sortItem;
      sortItem.classList.add('drag-selected');
      showToast('اختر بطاقة ثانية لتبديل الترتيب.');
    } else if (selectedSort === sortItem) {
      selectedSort.classList.remove('drag-selected');
      selectedSort = null;
    } else if (selectedSort.parentElement === sortItem.parentElement) {
      const list = sortItem.parentElement;
      const first = selectedSort;
      const second = sortItem;
      const items = [...list.querySelectorAll('.sort-item')];
      const firstIndex = items.indexOf(first);
      const secondIndex = items.indexOf(second);
      [items[firstIndex], items[secondIndex]] = [items[secondIndex], items[firstIndex]];
      items.forEach(item => list.appendChild(item));
      list.querySelectorAll('.sort-item b').forEach((number, index) => number.textContent = index + 1);
      first.classList.remove('drag-selected');
      selectedSort = null;
      showToast('تم تبديل السطرين.');
    }
    return;
  }
  const dropZone = event.target.closest('.drop-zone');
  if (dropZone && selectedDrag) { placeDrag(selectedDrag, dropZone); selectedDrag = null; return; }
  const cardNumber = event.target.closest('[data-card-number]');
  if (cardNumber) { runCardGame(Number(cardNumber.dataset.cardNumber)); return; }
}

function checkQuiz(card) {
  if (!card) return;
  const selected = card.querySelector('.option-button.selected');
  const feedback = card.querySelector('.quiz-feedback');
  if (!selected) { feedback.className = 'quiz-feedback incorrect'; feedback.textContent = 'اختر إجابة أولًا ثم تحقق.'; return; }
  const index = Number(selected.dataset.option);
  const correct = index === Number(card.dataset.correct);
  state.answers[card.dataset.quizId] = { selected: index, correct, checked: true };
  saveState();
  showQuizResult(card, correct, index);
  updateAssessmentScore();
}
function checkMulti(card) {
  if (!card) return;
  const selected = [...card.querySelectorAll('.option-button.selected')].map(button => Number(button.dataset.multiOption)).sort((a, b) => a - b);
  const feedback = card.querySelector('.quiz-feedback');
  if (!selected.length) { feedback.className = 'quiz-feedback incorrect'; feedback.textContent = 'اختر إجابة واحدة على الأقل ثم تحقق.'; return; }
  const correctValues = JSON.parse(card.dataset.correct || '[]').sort((a, b) => a - b);
  const correct = selected.join('|') === correctValues.join('|');
  state.answers[card.dataset.multiId] = { selected, correct, checked: true };
  saveState();
  showMultiResult(card, correct, selected);
  updateAssessmentScore();
}
function runCardGame(number) {
  const result = document.getElementById('cardGameResult');
  document.querySelectorAll('[data-card-number]').forEach(button => button.classList.toggle('selected', Number(button.dataset.cardNumber) === number));
  if (number === 0) result.textContent = 'العدد 0: تخرج المجموعة من اللعبة.';
  else if (number < 5) result.textContent = 'العدد أقل من 5: اسحب بطاقة أخرى.';
  else if (number % 2 === 0) result.textContent = 'العدد أكبر من 5 وزوجي: ينتقل الدور إلى زميل آخر في المجموعة.';
  else result.textContent = 'العدد أكبر من 5 وفردي: ينتقل الدور إلى مجموعة أخرى.';
}
function runBranch() {
  const x = Number(document.getElementById('branchX')?.value);
  const y = Number(document.getElementById('branchY')?.value);
  const result = document.getElementById('branchResult');
  if (!Number.isFinite(x) || !Number.isFinite(y)) { result.textContent = 'أدخل عددين أولًا.'; return; }
  result.textContent = y > x ? 'ينفذ الفرع الأول: y is greater than x' : 'ينفذ الفرع البديل: x is greater than or equal to y';
}

function handleDragStart(event) {
  const item = event.target.closest('.drag-item, .sort-item');
  if (!item) return;
  dragged = item;
  item.classList.add('drag-selected');
  event.dataTransfer?.setData('text/plain', item.dataset.dragValue || item.dataset.sortKey || '');
  if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
}
function handleDragOver(event) {
  const zone = event.target.closest('.drop-zone, .sort-item');
  if (!zone) return;
  event.preventDefault();
  zone.classList.add('over');
}
function handleDragLeave(event) {
  const zone = event.target.closest('.drop-zone, .sort-item');
  zone?.classList.remove('over');
}
function handleDrop(event) {
  const zone = event.target.closest('.drop-zone');
  const sortTarget = event.target.closest('.sort-item');
  if (zone && dragged?.classList.contains('drag-item')) { event.preventDefault(); placeDrag(dragged, zone); }
  if (sortTarget && dragged?.classList.contains('sort-item') && dragged !== sortTarget) { event.preventDefault(); const list = sortTarget.parentElement; const rect = sortTarget.getBoundingClientRect(); const before = event.clientY < rect.top + rect.height / 2; list.insertBefore(dragged, before ? sortTarget : sortTarget.nextSibling); list.querySelectorAll('.sort-item b').forEach((num, i) => num.textContent = i + 1); }
  document.querySelectorAll('.over').forEach(element => element.classList.remove('over'));
}
function handleDragEnd() { document.querySelectorAll('.drag-selected, .over').forEach(element => element.classList.remove('drag-selected', 'over')); dragged = null; }

function initFromHash() {
  const hash = location.hash.replace('#', '');
  if (hash.startsWith('lesson')) {
    const [id, tab] = hash.split('/');
    renderLesson(getLesson(id).id, tabCatalog.some(item => item.id === tab) ? tab : 'overview');
  } else { renderHome(); setView(true); }
}

document.addEventListener('click', handleClick);
document.addEventListener('dragstart', handleDragStart);
document.addEventListener('dragover', handleDragOver);
document.addEventListener('dragleave', handleDragLeave);
document.addEventListener('drop', handleDrop);
document.addEventListener('dragend', handleDragEnd);
window.addEventListener('hashchange', initFromHash);
applyTheme();
initFromHash();
