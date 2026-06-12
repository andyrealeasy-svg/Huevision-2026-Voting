const participants = [
  { id: 1, countryRu: 'Кимляндия', countryEn: 'Kimland', artist: 'Dollova', song: 'BIKINI', iconColor: 'text-pink-400', icon: 'sparkles' },
  { id: 2, countryRu: 'Воронеж', countryEn: 'Voronezh', artist: 'Pavlova Cookie', song: 'даяизворонежа', iconColor: 'text-amber-500', icon: 'cookie' },
  { id: 3, countryRu: 'Ревостан', countryEn: 'Revostan', artist: 'SiCka', song: 'Revō', iconColor: 'text-yellow-400', icon: 'star' },
  { id: 4, countryRu: 'Геншинляндия', countryEn: 'Genshinland', artist: 'Ksivat', song: 'Song #1', iconColor: 'text-blue-400', icon: 'sword' }
];

const icons = {
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 drop-shadow-lg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  cookie: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 drop-shadow-lg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 drop-shadow-lg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  sword: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 drop-shadow-lg"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/></svg>`,
  mic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-400"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  music: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-400"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  minus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M5 12h14"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  checkCircle2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-red-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`
};

let votes = { 1: 0, 2: 0, 3: 0, 4: 0 };
let submitted = false;
const maxVotes = 40;

function init() {
  try {
    const saved = localStorage.getItem('huevision_voted');
    if (saved) {
      submitted = true;
      votes = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Не удалось получить доступ к localStorage', e);
  }
  render();
}

window.handleAdd = function(id) {
  const totalUsed = Object.values(votes).reduce((a, b) => a + b, 0);
  const remainingVotes = maxVotes - totalUsed;
  if (!submitted && remainingVotes > 0) {
    votes[id]++;
    render();
  }
};

window.handleSub = function(id) {
  if (!submitted && votes[id] > 0) {
    votes[id]--;
    render();
  }
};

window.handleSubmitClick = function() {
  const totalUsed = Object.values(votes).reduce((a, b) => a + b, 0);
  if (totalUsed > 0) {
    render(true);
  }
};

window.handleConfirmSubmit = function() {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGGpHxhynNwXYMs0JN9P99d1oe4FO5P5Y8Zf4RcPIa7nccCoEeYah4D3WTCT7vLuk8/exec';

  const payload = {
    track1: votes[1],
    track2: votes[2],
    track3: votes[3],
    track4: votes[4]
  };

  const btn = document.getElementById('confirm-submit-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Отправка...';
  }

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(() => {
    try {
      localStorage.setItem('huevision_voted', JSON.stringify(votes));
    } catch (e) {
      console.error('Ошибка сохранения в localStorage', e);
    }
    submitted = true;
    render(false, true);
  })
  .catch(err => {
    console.error('Ошибка отправки:', err);
    alert('Что-то пошло не так при отправке.');
    if (btn) {
      btn.disabled = false;
      btn.innerText = 'Отправить';
    }
  });
};

window.closeSuccessModal = function() {
  render();
};

window.closeConfirmModal = function() {
  render();
};

function render(showConfirmModal = false, showSuccessModal = false) {
  const totalUsed = Object.values(votes).reduce((a, b) => a + b, 0);
  const remainingVotes = maxVotes - totalUsed;

  const app = document.getElementById('app');

  let html = `
    <header class="w-full flex flex-col items-center justify-center pt-8 pb-6 px-4">
      <h1 class="text-3xl sm:text-4xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 uppercase text-center mb-2">
        HUEVISION
      </h1>
      <h2 class="text-xl sm:text-2xl font-display font-bold tracking-[0.2em] text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] uppercase text-center mb-3">
        CONTEST
      </h2>
      <div class="flex items-center gap-4">
        <div class="h-[2px] w-12 bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
        <span class="text-xl sm:text-2xl font-bold text-red-600 tracking-widest drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">2026</span>
        <div class="h-[2px] w-12 bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
      </div>
    </header>

    <div class="sticky top-0 z-40 w-full mb-6">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      <div class="relative flex flex-col items-center justify-center py-4 border-y border-red-900/50 shadow-[0_0_15px_rgba(255,0,0,0.15)]">
        ${submitted ? `
          <div class="flex items-center gap-2 text-red-500 font-bold text-lg animate-pulse">
            ${icons.checkCircle2}
            ГОЛОСА ОТПРАВЛЕНЫ
          </div>
        ` : `
          <div class="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Доступно голосов</div>
          <div class="text-4xl font-black text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]">
            ${remainingVotes}
          </div>
        `}
      </div>
    </div>

    <main class="w-full max-w-md px-4 pb-48 flex flex-col gap-6 w-full">
      ${participants.map(p => `
        <div class="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 p-5 shadow-lg transition-all duration-300">
          <div class="absolute top-0 right-0 bottom-0 left-0 border-2 rounded-2xl pointer-events-none transition-opacity duration-300 ${votes[p.id] > 0 ? 'border-red-600/30 opacity-100' : 'opacity-0'}"></div>
          
          <div class="flex justify-between items-start mb-4 relative z-10">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-red-500 font-black text-xl drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">#${p.id}</span>
                <h3 class="font-bold text-lg sm:text-xl text-gray-100">${p.countryRu}</h3>
              </div>
              <p class="text-gray-500 text-xs uppercase tracking-wider mb-2">${p.countryEn}</p>
              <div class="mt-3 flex flex-col gap-1.5">
                <div class="text-gray-300 font-medium flex items-center gap-2">
                  ${icons.mic} ${p.artist}
                </div>
                <div class="text-gray-400 text-sm flex items-center gap-2">
                  ${icons.music} ${p.song}
                </div>
              </div>
            </div>
            <div class="opacity-90 flex items-center justify-center p-2">
              <div class="${p.iconColor}">${icons[p.icon]}</div>
            </div>
          </div>

          <div class="bg-black/50 rounded-xl p-2 flex items-center justify-between relative z-10 w-full">
            <button 
              onclick="handleSub(${p.id})"
              ${(votes[p.id] === 0 || submitted) ? 'disabled' : ''}
              class="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-gray-300 active:scale-95 disabled:opacity-30 disabled:active:scale-100 transition-all hover:bg-zinc-700 cursor-pointer"
            >
              ${icons.minus}
            </button>
            
            <div class="flex flex-col items-center justify-center w-20">
              <span class="text-3xl font-black ${votes[p.id] > 0 ? 'text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]' : 'text-gray-500'}">
                ${votes[p.id]}
              </span>
            </div>
            
            <button 
              onclick="handleAdd(${p.id})"
              ${(remainingVotes === 0 || submitted) ? 'disabled' : ''}
              class="w-12 h-12 rounded-lg bg-red-950/40 border border-red-900 flex items-center justify-center text-red-500 active:scale-95 disabled:opacity-30 disabled:active:scale-100 transition-all hover:bg-red-900/60 cursor-pointer"
            >
              ${icons.plus}
            </button>
          </div>
        </div>
      `).join('')}
    </main>

    ${!submitted ? `
      <div class="fixed bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black via-black/90 to-transparent flex justify-center pb-8 z-50 pointer-events-none">
        <button 
          onclick="handleSubmitClick()"
          ${totalUsed === 0 ? 'disabled' : ''}
          class="w-full max-w-md bg-red-600 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.4)] disabled:opacity-50 disabled:shadow-none transition-all active:scale-[0.98] hover:bg-red-500 uppercase tracking-widest pointer-events-auto cursor-pointer"
        >
          Отправить голоса
        </button>
      </div>
    ` : ''}

    ${showConfirmModal ? `
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto">
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-red-950/50 rounded-full flex items-center justify-center mb-4">
              ${icons.alertTriangle}
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-display uppercase">Вы уверены?</h3>
            <p class="text-gray-400 mb-6 font-sans">После отправки голоса нельзя будет изменить.</p>
            
            <div class="flex w-full gap-3">
              <button 
                onclick="closeConfirmModal()"
                class="flex-1 py-3 px-4 rounded-xl font-bold font-sans bg-zinc-800 text-white hover:bg-zinc-700 transition cursor-pointer"
              >
                Отмена
              </button>
              <button 
                id="confirm-submit-btn"
                onclick="handleConfirmSubmit()"
                class="flex-1 py-3 px-4 rounded-xl font-bold font-sans bg-red-600 text-white hover:bg-red-500 transition shadow-[0_0_15px_rgba(255,0,0,0.4)] cursor-pointer"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    ${showSuccessModal ? `
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto">
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl relative animate-in fade-in zoom-in duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-green-950/50 rounded-full flex items-center justify-center mb-4">
              ${icons.checkCircle}
            </div>
            <h3 class="text-xl font-bold text-white mb-2 font-display uppercase">Успешно!</h3>
            <p class="text-gray-400 mb-6 font-sans">Ваши голоса учтены! Вы можете закрыть страницу.</p>
            
            <button 
              onclick="closeSuccessModal()"
              class="w-full py-3 px-4 rounded-xl font-bold font-sans bg-zinc-800 text-white hover:bg-zinc-700 transition cursor-pointer"
            >
              ОК
            </button>
          </div>
        </div>
      </div>
    ` : ''}
  `;

  app.innerHTML = html;
}

init();
