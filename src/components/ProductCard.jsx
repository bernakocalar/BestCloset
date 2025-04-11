export default function ProductCard({ src, price }){

    return <div className="border rounded-lg p-4 shadow-md text-center">
    <img src={src} alt="" className="w-full object-cover rounded" />
    <p className="font-semibold mt-2">Graphic Design</p>
    <p className="text-gray-500">English Department</p>
  </div>
}