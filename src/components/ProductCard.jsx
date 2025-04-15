export default function ProductCard({ src, price }){
  const colors = ['blue-500', 'green-500', 'blue-500', 'green-500'];
    return <div className="border rounded-lg p-4 shadow-md text-center space-y-2">
    <img src={src} alt="" className="w-full object-cover rounded" />
    <p className="font-semibold mt-2">Graphic Design</p>
    <p className="text-gray-500">English Department</p>
    <div className="flex space-x-1 justify-center">
    <p className="text-gray-500">$16.48</p>
    <p className="text-[#23856D]">$6.48</p>
    </div>
    <div className="flex space-x-2 justify-center">
    {colors.map((color, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full bg-${color}`}
        />
      ))}
      </div>
    </div>
}