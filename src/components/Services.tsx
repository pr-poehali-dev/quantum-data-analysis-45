const services = [
  { icon: "🌑", title: "Снятие порчи и сглаза", desc: "Очищение энергетики, защита от негативных воздействий" },
  { icon: "🔮", title: "Расклады Таро", desc: "Ответы на вопросы о судьбе, любви, финансах и здоровье" },
  { icon: "💫", title: "Приворот / Отворот", desc: "Работа с отношениями и любовной сферой" },
  { icon: "🌿", title: "Исцеление", desc: "Восстановление здоровья через энергетические практики и травы" },
  { icon: "🧿", title: "Защита и оберег", desc: "Создание индивидуального оберега для вас и вашего дома" },
  { icon: "🌙", title: "Работа с родом", desc: "Снятие родовых проклятий, исцеление родовых программ" },
];

export default function Services() {
  return (
    <div id="services" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-widest text-neutral-400 text-sm mb-4 text-center">Чем я могу помочь</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight">УСЛУГИ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {services.map((s) => (
            <div key={s.title} className="bg-neutral-950 p-8 flex flex-col gap-3 hover:bg-neutral-900 transition-colors duration-300">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-neutral-400 text-sm flex-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border border-neutral-700 py-10 px-6">
          <p className="text-neutral-400 uppercase tracking-widest text-sm mb-3">Запись на приём</p>
          <a
            href="tel:89009079997"
            className="text-white text-4xl md:text-5xl font-bold tracking-tight hover:text-neutral-300 transition-colors duration-300"
          >
            8 900 907-99-97
          </a>
          <p className="text-neutral-500 text-sm mt-3">Звоните — отвечу лично</p>
        </div>
      </div>
    </div>
  );
}
