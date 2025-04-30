import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

type Order = {
  id: string
  number: string
  date: string
  status: 'completed' | 'processing' | 'cancelled'
  total: number
  items: number
}

export function OrderHistory() {
  // Mock orders data - in a real app, this would come from API or state
  const orders: Order[] = [
    {
      id: "1",
      number: "ORD-2023-1234",
      date: "June 12, 2023",
      status: "completed",
      total: 159.98,
      items: 2
    },
    {
      id: "2",
      number: "ORD-2023-1186",
      date: "May 28, 2023",
      status: "completed",
      total: 79.99,
      items: 1
    },
    {
      id: "3",
      number: "ORD-2023-0954",
      date: "April 15, 2023",
      status: "completed",
      total: 99.99,
      items: 1
    },
    {
      id: "4",
      number: "ORD-2023-0832",
      date: "March 7, 2023",
      status: "cancelled",
      total: 149.99,
      items: 1
    },
    {
      id: "5",
      number: "ORD-2023-0705",
      date: "February 22, 2023",
      status: "completed",
      total: 199.98,
      items: 2
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 text-sm text-slate-500">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Order #</th>
                <th className="py-3 px-4 text-left font-medium">Date</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
                <th className="py-3 px-4 text-left font-medium">Items</th>
                <th className="py-3 px-4 text-right font-medium">Total</th>
                <th className="py-3 px-4 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-3 px-4 text-sm font-medium">#{order.number}</td>
                  <td className="py-3 px-4 text-sm">{order.date}</td>
                  <td className="py-3 px-4">
                    {order.status === 'completed' && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        Completed
                      </span>
                    )}
                    {order.status === 'processing' && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        Processing
                      </span>
                    )}
                    {order.status === 'cancelled' && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                        Cancelled
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm">{order.items}</td>
                  <td className="py-3 px-4 text-right font-medium">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="outline" className="h-8 px-2">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {order.status === 'completed' && (
                        <Button size="sm" variant="outline" className="h-8 px-2">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {orders.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-slate-500 mb-4">You haven't placed any orders yet.</p>
            <Link href="/shop">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Browse Products
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{orders.length}</span> of <span className="font-medium">{orders.length}</span> orders
        </div>
        
        <div className="join">
          <button className="join-item btn btn-sm btn-disabled">Previous</button>
          <button className="join-item btn btn-sm bg-blue-600 text-white hover:bg-blue-700">1</button>
          <button className="join-item btn btn-sm btn-disabled">Next</button>
        </div>
      </div>
    </div>
  )
} 