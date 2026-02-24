function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

async function loadStats() {
  const start = performance.now();
  const brands = await fetch('https://lifeofcapo.github.io/car-api/car-brands.json').then(r => r.json());
  const parts = await fetch('https://lifeofcapo.github.io/car-api/car-parts.json').then(r => r.json());
  const end = performance.now();

  document.getElementById('stat-brands').textContent = brands.length + " Brands";
  document.getElementById('stat-models').textContent = brands.reduce((a,b)=>a+b.models.length, 0) + " Models";
  document.getElementById('stat-parts').textContent = parts.length + " Parts";
  document.getElementById('stat-response').textContent = Math.round(end-start) + " ms Response";
}
loadStats();

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

document.getElementById("demo-input").addEventListener("input", async (e) => {
  const q = e.target.value.toLowerCase();
  const data = await fetch('https://lifeofcapo.github.io/car-api/car-brands.json').then(r=>r.json());
  const results = data.filter(b => b.brand.toLowerCase().includes(q));
  document.getElementById("demo-output").textContent = JSON.stringify(results, null, 2);
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});

document.querySelectorAll('.section, .endpoint-card, .feature-card')
        .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });
