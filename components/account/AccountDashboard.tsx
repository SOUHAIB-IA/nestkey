import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package, Download, UserCog, Clock } from "lucide-react"

export function AccountDashboard() {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    lastLogin: new Date().toLocaleString(),
    orderCount: 5,
    downloadCount: 12
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <UserCog className="h-8 w-8 text-blue-700" />
          </div>
          <div>
            <p className="text-lg font-medium">Welcome back, {user.name}!</p>
            <p className="text-sm text-slate-500">
              <Clock className="h-4 w-4 inline-block mr-1" />
              Last login: {user.lastLogin}
            </p>
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-purple-700" />
            </div>
            <div>
              <h3 className="font-bold">Orders</h3>
              <p className="text-sm text-slate-500">View your order history</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">{user.orderCount}</span>
            <Link href="#orders">
              <Button variant="outline" size="sm">
                View Orders
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Download className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h3 className="font-bold">Downloads</h3>
              <p className="text-sm text-slate-500">Access your digital products</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">{user.downloadCount}</span>
            <Link href="#downloads">
              <Button variant="outline" size="sm">
                View Downloads
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Recent Orders */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Recent Orders</h3>
          <Link href="#orders" className="text-blue-600 text-sm hover:underline">
            View All
          </Link>
        </div>
        
        <div className="bg-white border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 text-sm text-slate-500">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Order</th>
                <th className="py-3 px-4 text-left font-medium">Date</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
                <th className="py-3 px-4 text-right font-medium">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 text-sm">#ORD-2023-1234</td>
                <td className="py-3 px-4 text-sm">Jun 12, 2023</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-medium">$159.98</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm">#ORD-2023-1186</td>
                <td className="py-3 px-4 text-sm">May 28, 2023</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-medium">$79.99</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm">#ORD-2023-0954</td>
                <td className="py-3 px-4 text-sm">Apr 15, 2023</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Completed
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-medium">$99.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 