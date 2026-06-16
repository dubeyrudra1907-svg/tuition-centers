/* ───── TEACHER DATA ───── */
const teachers = [
  {
    id: 1,
    name: "Smita Rani Biswal",
    initials: "SB",
    color: "#D94F6B",
    location: "Pushp Vihar, Block C",
    experience: "12 yrs",
    fee: "₹1600/mo",
    subjects: [
      { label: "Maths",   bg: "#EDE7F6", fg: "#6A3DB8" },
      { label: "Science", bg: "#E8F5E9", fg: "#2E7D32" },
      { label: "Biology", bg: "#FDEEF2", fg: "#D94F6B" }
    ],
    tags: ["maths","science","biology","class 9","class 10","class 11","class 12"],
    classes: "9–12",
    phone: "98XXXX1101",
    timings: [
      { day: "Mon – Fri", subject: "Maths (Class 9 & 10)",    time: "7:00 AM – 8:30 AM"  },
      { day: "Mon – Fri", subject: "Science (Class 9 & 10)",  time: "5:00 PM – 6:30 PM"  },
      { day: "Sat – Sun", subject: "Maths (Class 11 & 12)",   time: "9:00 AM – 11:00 AM" },
      { day: "Sat – Sun", subject: "Biology (Class 11 & 12)", time: "11:30 AM – 1:00 PM" }
    ],
    notes: [
      { title: "Class 9 – Polynomials",        desc: "Notes on factorisation, remainder theorem & algebraic identities." },
      { title: "Class 10 – Chemical Reactions", desc: "Types of reactions with balancing equations and examples."         },
      { title: "Class 12 – Cell Biology",       desc: "Notes on cell organelles, mitosis and meiosis diagrams."          }
    ],
    assignments: [
      { title: "Maths – Quadratic Equations (Cl. 10)",          due: "Due: 20 Jun 2025" },
      { title: "Science – Life Processes (Cl. 10)",             due: "Due: 22 Jun 2025" },
      { title: "Biology – Reproduction in Organisms (Cl. 12)",  due: "Due: 25 Jun 2025" }
    ]
  },
  {
    id: 2,
    name: "Nihar Biswal",
    initials: "NB",
    color: "#1565C0",
    location: "Pushp Vihar, Block B",
    experience: "19 yrs",
    fee: "₹1500/mo",
    subjects: [
      { label: "Physics",   bg: "#E3F2FD", fg: "#1565C0" },
      { label: "Chemistry", bg: "#FFF3E0", fg: "#E65100" }
    ],
    tags: ["physics","chemistry","class 11","class 12"],
    classes: "11–12",
    phone: "98XXXX1102",
    timings: [
      { day: "Mon / Wed / Fri", subject: "Physics (Class 11)",   time: "6:30 AM – 8:00 AM" },
      { day: "Tue / Thu / Sat", subject: "Chemistry (Class 11)", time: "6:30 AM – 8:00 AM" },
      { day: "Mon / Wed / Fri", subject: "Physics (Class 12)",   time: "5:00 PM – 6:30 PM" },
      { day: "Tue / Thu / Sat", subject: "Chemistry (Class 12)", time: "5:00 PM – 6:30 PM" }
    ],
    notes: [
      { title: "Class 11 – Laws of Motion",   desc: "Newton's laws, free body diagrams, friction and circular motion." },
      { title: "Class 12 – Electrochemistry", desc: "Galvanic cells, Nernst equation, electrolysis and Faraday's laws." }
    ],
    assignments: [
      { title: "Physics – Rotational Motion (Cl. 11)",  due: "Due: 19 Jun 2025" },
      { title: "Chemistry – Chemical Kinetics (Cl. 12)", due: "Due: 23 Jun 2025" }
    ]
  },
  {
    id: 3,
    name: "Dinesh Chandra Das",
    initials: "DD",
    color: "#2A7F7F",
    location: "Pushp Vihar, Block A",
    experience: "17 yrs",
    fee: "₹1100/mo",
    subjects: [
      { label: "Maths", bg: "#EDE7F6", fg: "#6A3DB8" }
    ],
    tags: ["maths","class 7","class 8","class 9","class 10","class 11"],
    classes: "7–11",
    phone: "98XXXX1103",
    timings: [
      { day: "Mon – Sat", subject: "Maths (Class 7 & 8)",  time: "4:00 PM – 5:00 PM" },
      { day: "Mon – Sat", subject: "Maths (Class 9 & 10)", time: "5:00 PM – 6:30 PM" },
      { day: "Mon – Sat", subject: "Maths (Class 11)",     time: "7:00 AM – 8:30 AM" }
    ],
    notes: [
      { title: "Class 7 – Integers & Fractions",        desc: "50+ practice questions on integers, BODMAS and fractions."       },
      { title: "Class 9 – Triangles",                   desc: "Congruence criteria (SSS, SAS, AAS, RHS) with theorem proofs."   },
      { title: "Class 11 – Permutations & Combinations", desc: "Formula sheets with solved examples and shortcut techniques."   }
    ],
    assignments: [
      { title: "Maths – Algebra (Cl. 8)",               due: "Due: 21 Jun 2025" },
      { title: "Maths – Coordinate Geometry (Cl. 9)",   due: "Due: 24 Jun 2025" }
    ]
  },
  {
    id: 4,
    name: "Ashutosh Kumar",
    initials: "AK",
    color: "#E65100",
    location: "Pushp Vihar, Block D",
    experience: "7 yrs",
    fee: "₹1,300/mo",
    subjects: [
      { label: "Science",   bg: "#E8F5E9", fg: "#2E7D32" },
      { label: "Physics",   bg: "#E3F2FD", fg: "#1565C0" },
      { label: "Chemistry", bg: "#FFF3E0", fg: "#E65100" }
    ],
    tags: ["science","physics","chemistry","class 9","class 10","class 11","class 12"],
    classes: "9–12",
    phone: "98XXXX1104",
    timings: [
      { day: "Mon / Wed / Fri", subject: "Science (Class 9 & 10)",   time: "7:00 AM – 8:30 AM" },
      { day: "Tue / Thu / Sat", subject: "Physics (Class 11 & 12)",  time: "6:00 AM – 7:30 AM" },
      { day: "Tue / Thu / Sat", subject: "Chemistry (Class 11 & 12)",time: "4:30 PM – 6:00 PM"  }
    ],
    notes: [
      { title: "Class 10 – Electricity",    desc: "Ohm's law, resistors in series/parallel, power and energy."           },
      { title: "Class 11 – Thermodynamics", desc: "Laws of thermodynamics, entropy, Carnot engine with solved PYQs."     },
      { title: "Class 12 – Optics",         desc: "Ray diagrams for lenses & mirrors, refraction and optical instruments." }
    ],
    assignments: [
      { title: "Science – Light (Cl. 10)",       due: "Due: 18 Jun 2025" },
      { title: "Physics – Waves (Cl. 11)",       due: "Due: 22 Jun 2025" },
      { title: "Chemistry – Polymers (Cl. 12)",  due: "Due: 26 Jun 2025" }
    ]
  }
];

/* ───── STATE ───── */
let activeFilter = 'all';

/* ───── RENDER CARDS ───── */
function renderCards(list) {
  const grid  = document.getElementById('teacherGrid');
  const none  = document.getElementById('noResults');
  const count = document.getElementById('resultCount');

  if (list.length === 0) {
    grid.innerHTML = '';
    none.classList.add('show');
    count.textContent = '0 teachers found';
    return;
  }
  none.classList.remove('show');
  count.textContent = `${list.length} teacher${list.length > 1 ? 's' : ''} found`;

  const PIN_SVG = `<svg width="11" height="13" viewBox="0 0 11 13" fill="none">
    <path d="M5.5 0A4.5 4.5 0 0 0 1 4.5C1 7.875 5.5 13 5.5 13S10 7.875 10 4.5A4.5 4.5 0 0 0 5.5 0Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#9aabcc"/>
  </svg>`;

  grid.innerHTML = list.map(t => `
    <div class="card" id="card-${t.id}">
      <div class="card-header">
        <div class="avatar" style="background:${t.color}">${t.initials}</div>
        <div>
          <div class="card-name">${t.name}</div>
          <div class="card-location">${PIN_SVG} ${t.location}</div>
        </div>
      </div>
      <div class="subjects-row">
        ${t.subjects.map(s => `<span class="badge" style="background:${s.bg};color:${s.fg}">${s.label}</span>`).join('')}
        <span class="badge" style="background:#F0F4FF;color:#3355AA">Class ${t.classes}</span>
      </div>
      <div class="card-divider"></div>
      <div class="card-meta">
        <div class="meta-item"><strong>${t.experience}</strong>Experience</div>
        <div class="meta-item"><strong>${t.fee}</strong>Starting Fee</div>
        <div class="meta-item"><strong>${t.timings.length} Batches</strong>Available</div>
      </div>
      <div class="card-actions">
        <button class="btn-primary" onclick="openModal(${t.id})">View Full Profile</button>
        <button class="btn-outline" onclick="alert('Enquiry sent for ${t.name}! The teacher will contact you shortly.')">Enquire</button>
      </div>
    </div>
  `).join('');
}

/* ───── FILTER ───── */
function filterTeachers() {
  const q = document.getElementById('heroSearch').value.toLowerCase().trim();
  const filtered = teachers.filter(t => {
    const matchFilter = activeFilter === 'all' || t.tags.some(tag => tag.includes(activeFilter));
    const matchSearch = !q
      || t.name.toLowerCase().includes(q)
      || t.subjects.some(s => s.label.toLowerCase().includes(q))
      || t.tags.some(tag => tag.includes(q));
    return matchFilter && matchSearch;
  });
  renderCards(filtered);
}

function setFilter(key, el) {
  activeFilter = key;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filterTeachers();
}

/* ───── MODAL ───── */
function openModal(id) {
  const t = teachers.find(x => x.id === id);
  const PIN_SVG = `<svg width="11" height="13" viewBox="0 0 11 13" fill="none">
    <path d="M5.5 0A4.5 4.5 0 0 0 1 4.5C1 7.875 5.5 13 5.5 13S10 7.875 10 4.5A4.5 4.5 0 0 0 5.5 0Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#9aabcc"/>
  </svg>`;

  document.getElementById('modal').innerHTML = `
    <div class="modal-header">
      <div class="avatar" style="background:${t.color};width:52px;height:52px;font-size:1.2rem">${t.initials}</div>
      <div>
        <div class="card-name" style="font-size:1.1rem">${t.name}</div>
        <div class="card-location" style="margin-top:3px;">
          ${PIN_SVG} ${t.location} &nbsp;·&nbsp; ${t.experience} experience &nbsp;·&nbsp; ${t.fee}
        </div>
      </div>
      <button class="modal-close" onclick="closeModalBtn()">✕</button>
    </div>
    <div class="modal-body">

      <div class="modal-section">
        <h3>🕐 Class Timings</h3>
        <table class="timetable">
          <thead><tr><th>Days</th><th>Subject &amp; Class</th><th>Time</th></tr></thead>
          <tbody>
            ${t.timings.map(r => `
              <tr><td>${r.day}</td><td>${r.subject}</td><td>${r.time}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="modal-section">
        <h3>📄 Study Notes</h3>
        ${t.notes.map(n => `
          <div class="note-card"><strong>${n.title}</strong>${n.desc}</div>
        `).join('')}
      </div>

      <div class="modal-section">
        <h3>📝 Assignments</h3>
        ${t.assignments.map(a => `
          <div class="assignment-card">
            <strong>${a.title}</strong>
            Contact teacher to receive the assignment sheet.
            <div class="due">${a.due}</div>
          </div>
        `).join('')}
      </div>

      <div class="modal-section">
        <h3>📞 Contact</h3>
        <div class="contact-grid">
          <div class="contact-item">📱 +91 ${t.phone}</div>
          <div class="contact-item">📍 ${t.location}</div>
          <div class="contact-item">🕐 Classes: ${t.classes}</div>
        </div>
      </div>

    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModalBtn() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target === document.getElementById('overlay')) closeModalBtn();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
});

/* ───── INIT ───── */
renderCards(teachers);
