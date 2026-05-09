import { useState } from 'react'

export default function BillingSoftwareDemo() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-72 bg-black text-white p-6">
        <h1 className="text-3xl font-bold">MetaBlock ERP</h1>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold mb-6">
          GST Billing Software
        </h2>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Create Invoice
        </button>

        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">
            Inventory
          </h3>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">SKU</th>
                <th className="p-3 text-left">Price</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Optical Lens</td>
                <td className="p-3">LEN-1001</td>
                <td className="p-3">₹1200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
