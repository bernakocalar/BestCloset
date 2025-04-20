export default function EditorsPick() {
  return (
    <section className="flex flex-col items-center w-full justify-center py-12 px-4">
      {/* Başlık kısmı */}
      <div className="w-full md:w-8/12 text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">EDITOR’S PICK</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid kısmı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-8/12">
        {/* 2 kolon kaplayan ilk resim */}
        <div className="md:col-span-2 h-auto">
          <img
            src="/assets/card-item.png"
            alt="card-item"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 1 kolon kaplayan ikinci resim */}
        <div className="h-auto">
          <img
            src="/assets/filter.png"
            alt="filter 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 1 kolon kaplayan, içinde alt alta iki resim */}
        <div className="flex flex-col gap-2 h-auto">
          <img
            src="/assets/filter (2).png"
            alt="filter 2"
            className="w-full object-cover"
          />
          <img
            src="/assets/filter (1).png"
            alt="filter"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
