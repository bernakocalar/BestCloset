export default function EditorsPick() {
    return (
      <section className="flex flex-col items-center w-full h-[770px] justify-center">
        {/* Başlık kısmı */}
        <div className="w-8/12 text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">EDITOR’S PICK</h2>
          <p className="text-gray-600">Problems trying to resolve the conflict between</p>
        </div>
  
        {/* Grid kısmı */}
        <div className="grid grid-cols-4 w-8/12 gap-4">
          {/* 2 kolon kaplayan ilk resim */}
          <div className="col-span-2 h-[500px]">
            <img src="src/assets/card-item.png" alt="card-item" />
          </div>
  
          {/* 1 kolon kaplayan ikinci resim */}
          <div className="h-[500px]" >
            <img src="src/assets/filter.png" alt="filter 1" />
          </div>
  
          {/* 1 kolon kaplayan, içinde alt alta iki resim */}
          <div className="flex flex-col gap-2 h-[500px]">
            <img src="src/assets/filter (2).png" alt="filter 2" />
            <img src="src/assets/filter (1).png" alt="filter" />
          </div>
        </div>
      </section>
    );
  }
  