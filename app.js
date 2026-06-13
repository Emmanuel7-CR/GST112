/* ============================================================
   GST112 — Quiz App  (v2 — confirm-before-submit)
   Reads from CHAPTERS (defined in questions.js)
   ============================================================

   Answer flow:
     1. Student clicks an option  → it highlights as "selected"
        (no other options are locked yet)
     2. A "Confirm Answer" button appears
     3. Student clicks Confirm   → answer is evaluated, all
        options lock, feedback appears, Next button shows
     4. Student clicks Next      → advance to next question
   ============================================================ */

(function () {
  "use strict";

  // ── DOM refs ──
  const screens = {
    home:    document.getElementById("screen-home"),
    quiz:    document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results"),
  };

  const $  = (id) => document.getElementById(id);
  const chapterList     = $("chapter-list");
  const quizChapterLbl  = $("quiz-chapter-label");
  const progressText    = $("progress-text");
  const progressFill    = $("progress-bar-fill");
  const questionNumber  = $("question-number");
  const questionText    = $("question-text");
  const optionsGrid     = $("options-grid");
  const feedbackBox     = $("feedback-box");
  const feedbackIcon    = $("feedback-icon");
  const feedbackMsg     = $("feedback-msg");
  const btnConfirm      = $("btn-confirm");
  const btnNext         = $("btn-next");
  const btnBack         = $("btn-back");
  const scoreNum        = $("score-num");
  const scoreDenom      = $("score-denom");
  const ringFill        = $("ring-fill");
  const resultHeading   = $("result-heading");
  const resultSub       = $("result-sub");
  const btnRestart      = $("btn-restart");
  const btnHome         = $("btn-home");

  // ── State ──
  let activeChapter  = null;
  let questions      = [];
  let currentIndex   = 0;
  let score          = 0;
  let selectedIndex  = null;   // option the student has highlighted
  let confirmed      = false;  // true once Confirm is clicked

  // ── Utility ──
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo(0, 0);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Home screen ──
  function buildChapterList() {
    chapterList.innerHTML = "";
    CHAPTERS.forEach((chapter, idx) => {
      const card = document.createElement("button");
      card.className = "chapter-card";
      card.setAttribute("aria-label", `Start ${chapter.title}`);
      card.innerHTML = `
        <div class="chapter-num">${String(idx + 1).padStart(2, "0")}</div>
        <div class="chapter-info">
          <div class="chapter-title">${chapter.title.replace(/^Chapter \d+: /, "")}</div>
          <div class="chapter-meta">${chapter.questions.length} questions</div>
        </div>
        <svg class="chapter-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      `;
      card.addEventListener("click", () => startChapter(chapter));
      chapterList.appendChild(card);
    });
  }

  // ── Quiz logic ──
  function startChapter(chapter) {
    activeChapter = chapter;
    questions     = shuffle(chapter.questions);
    currentIndex  = 0;
    score         = 0;
    quizChapterLbl.textContent = chapter.title.replace(/^Chapter \d+: /, "");
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    selectedIndex = null;
    confirmed     = false;

    const q   = questions[currentIndex];
    const num = currentIndex + 1;
    const tot = questions.length;

    // Progress
    progressText.textContent = `Question ${num} of ${tot}`;
    progressFill.style.width = `${((num - 1) / tot) * 100}%`;

    // Question header
    questionNumber.textContent = String(num).padStart(2, "0");
    questionText.textContent   = q.question;

    // Build options
    optionsGrid.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.dataset.index = i;
      btn.innerHTML = `
        <span class="option-letter">${letters[i]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.addEventListener("click", () => selectOption(i));
      optionsGrid.appendChild(btn);
    });

    // Reset UI
    feedbackBox.hidden    = true;
    feedbackBox.className = "feedback-box";
    btnConfirm.hidden     = true;
    btnConfirm.disabled   = false;
    btnNext.hidden        = true;
    btnNext.textContent   = num < tot ? "Next question →" : "See my results →";
  }

  // Step 1 — student selects an option
  function selectOption(i) {
    if (confirmed) return;

    selectedIndex = i;

    // Highlight selected, clear others
    optionsGrid.querySelectorAll(".option-btn").forEach(b => {
      b.classList.toggle("selected", parseInt(b.dataset.index, 10) === i);
    });

    // Show confirm button
    btnConfirm.hidden = false;
  }

  // Step 2 — student confirms their selection
  btnConfirm.addEventListener("click", () => {
    if (selectedIndex === null || confirmed) return;
    confirmed = true;
    btnConfirm.hidden = true;

    const q          = questions[currentIndex];
    const correct    = q.answer;
    const correctText = q.options[correct];
    const isCorrect  = selectedIndex === correct;

    if (isCorrect) score++;

    // Lock and colour all options
    optionsGrid.querySelectorAll(".option-btn").forEach(b => {
      b.disabled = true;
      b.classList.remove("selected");
      const idx = parseInt(b.dataset.index, 10);
      if (idx === correct) {
        b.classList.add("correct");
      } else if (idx === selectedIndex && !isCorrect) {
        b.classList.add("incorrect");
      } else {
        b.classList.add("dimmed");
      }
    });

    // Feedback
    feedbackBox.hidden    = false;
    feedbackBox.className = `feedback-box ${isCorrect ? "is-correct" : "is-incorrect"}`;
    feedbackIcon.textContent = isCorrect ? "✓" : "✗";
    feedbackMsg.innerHTML    = isCorrect
      ? `<strong>Correct!</strong> Well done.`
      : `<strong>Not quite.</strong> The correct answer is: <strong>${correctText}</strong>`;

    // Update progress bar to reflect answered question
    progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

    // Show Next
    btnNext.hidden = false;
  });

  // Step 3 — advance
  btnNext.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  });

  btnBack.addEventListener("click", () => showScreen("home"));

  // ── Results ──
  function showResults() {
    const total = questions.length;
    const pct   = score / total;

    scoreNum.textContent   = score;
    scoreDenom.textContent = `/${total}`;

    const circ  = 2 * Math.PI * 52;
    const offset = circ * (1 - pct);
    requestAnimationFrame(() => {
      ringFill.style.strokeDasharray  = circ;
      ringFill.style.strokeDashoffset = circ;
      requestAnimationFrame(() => {
        ringFill.style.strokeDashoffset = offset;
      });
    });

    if (pct >= 0.7)       ringFill.style.stroke = "var(--leaf)";
    else if (pct >= 0.4)  ringFill.style.stroke = "var(--amber)";
    else                  ringFill.style.stroke = "var(--rust)";

    if (pct === 1) {
      resultHeading.textContent = "Perfect score! 🎉";
      resultSub.textContent     = `You answered all ${total} questions correctly. Exceptional work!`;
    } else if (pct >= 0.7) {
      resultHeading.textContent = "Great work!";
      resultSub.textContent     = `You got ${score} out of ${total} correct. A solid understanding — review the ones you missed.`;
    } else if (pct >= 0.4) {
      resultHeading.textContent = "Keep studying!";
      resultSub.textContent     = `You got ${score} out of ${total}. Go over your notes and try again.`;
    } else {
      resultHeading.textContent = "Give it another go";
      resultSub.textContent     = `You got ${score} out of ${total}. Review the material carefully and try again.`;
    }

    showScreen("results");
  }

  btnRestart.addEventListener("click", () => startChapter(activeChapter));
  btnHome.addEventListener("click",    () => showScreen("home"));

  // ── Boot ──
  buildChapterList();
  showScreen("home");

})();
