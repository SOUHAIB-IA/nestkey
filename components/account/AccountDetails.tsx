import { Button } from "@/components/ui/button"

export function AccountDetails() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Account Details</h2>
      
      <div className="bg-white border rounded-lg p-6 mb-8">
        <form>
          {/* Personal Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-medium border-b pb-2">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block mb-2 text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  defaultValue="John"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="last-name" className="block mb-2 text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  defaultValue="Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="display-name" className="block mb-2 text-sm font-medium">
                  Display Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="display-name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  defaultValue="John Doe"
                  required
                />
                <p className="mt-1 text-xs text-slate-500">
                  This will be how your name will be displayed in the account section and in reviews.
                </p>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  defaultValue="john.doe@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Save Changes
              </Button>
            </div>
          </div>
          
          {/* Password Change */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium border-b pb-2">Password Change</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="current-password" className="block mb-2 text-sm font-medium">
                  Current Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="current-password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="new-password" className="block mb-2 text-sm font-medium">
                  New Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="new-password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <p className="mb-4 text-sm text-slate-500">
                  <strong>Password requirements:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>At least 8 characters long</li>
                    <li>Include at least one uppercase letter</li>
                    <li>Include at least one number</li>
                    <li>Include at least one special character</li>
                  </ul>
                </p>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      {/* Delete Account */}
      <div className="bg-red-50 border border-red-100 rounded-lg p-6">
        <h3 className="text-lg font-medium text-red-800 mb-2">Delete Account</h3>
        <p className="text-sm text-red-700 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
          Delete My Account
        </Button>
      </div>
    </div>
  )
} 