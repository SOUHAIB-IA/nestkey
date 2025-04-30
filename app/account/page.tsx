import { Metadata } from "next"
import Link from "next/link"
import { TopBar } from "@/components/layout/TopBar"
import { MainHeader } from "@/components/layout/MainHeader"
import { CategoryNav } from "@/components/navigation/CategoryNav"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountDashboard } from "@/components/account/AccountDashboard"
import { OrderHistory } from "@/components/account/OrderHistory"
import { AccountDetails } from "@/components/account/AccountDetails"
import { DownloadHistory } from "@/components/account/DownloadHistory"

export const metadata: Metadata = {
  title: "My Account | DigitoreKeys",
  description: "Manage your digital products, view order history, and update your account details."
}

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <MainHeader />
      <CategoryNav />

      <main className="flex-1 bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">My Account</h1>
            <div className="text-sm breadcrumbs text-slate-500">
              <ul className="flex gap-2">
                <li><Link href="/">Home</Link> /</li>
                <li>My Account</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm mb-8">
            <Tabs defaultValue="dashboard" className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="md:w-1/4">
                  <TabsList className="flex flex-col w-full bg-transparent space-y-1">
                    <TabsTrigger 
                      value="dashboard" 
                      className="justify-start h-auto py-3 px-4 text-left data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                    >
                      Dashboard
                    </TabsTrigger>
                    <TabsTrigger 
                      value="orders" 
                      className="justify-start h-auto py-3 px-4 text-left data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                    >
                      Orders
                    </TabsTrigger>
                    <TabsTrigger 
                      value="downloads" 
                      className="justify-start h-auto py-3 px-4 text-left data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                    >
                      Downloads
                    </TabsTrigger>
                    <TabsTrigger 
                      value="account-details" 
                      className="justify-start h-auto py-3 px-4 text-left data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                    >
                      Account Details
                    </TabsTrigger>
                    <div className="pt-3 mt-3 border-t">
                      <Button 
                        variant="outline" 
                        className="justify-start w-full h-auto py-3 text-left text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Logout
                      </Button>
                    </div>
                  </TabsList>
                </div>

                {/* Content Area */}
                <div className="md:w-3/4">
                  <TabsContent value="dashboard">
                    <AccountDashboard />
                  </TabsContent>

                  <TabsContent value="orders">
                    <OrderHistory />
                  </TabsContent>

                  <TabsContent value="downloads">
                    <DownloadHistory />
                  </TabsContent>

                  <TabsContent value="account-details">
                    <AccountDetails />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 