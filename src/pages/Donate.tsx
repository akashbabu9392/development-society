import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    console.log({
      amount: donationAmount,
      type: donationType,
      name,
      email,
      phone
    });
    // Here you would typically integrate with a payment gateway
    alert('Thank you for your donation! You will be redirected to the payment gateway.');
  };

  return (
    <Layout>
      <Breadcrumb title="Donate" />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#f15a24] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Make a Donation</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generous donation will help us continue our mission to support those in need. Every contribution makes a difference.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Donation Form */}
              <div className="p-8 md:w-2/3">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Donation Amount (INR)</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                      {[500, 1000, 2000, 5000, 10000].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setDonationAmount(amount.toString())}
                          className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                            donationAmount === amount.toString()
                              ? 'border-[#f15a24] bg-[#f15a24] text-white'
                              : 'border-gray-200 hover:border-[#f15a24] text-gray-700'
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          placeholder="Other amount"
                          className="w-full py-3 pl-8 pr-4 border-2 border-gray-200 rounded-lg focus:border-[#f15a24] focus:ring-1 focus:ring-[#f15a24] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Donation Type</h2>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="donationType"
                          checked={donationType === 'one-time'}
                          onChange={() => setDonationType('one-time')}
                          className="h-4 w-4 text-[#f15a24] focus:ring-[#f15a24] border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">One-time</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="donationType"
                          checked={donationType === 'monthly'}
                          onChange={() => setDonationType('monthly')}
                          className="h-4 w-4 text-[#f15a24] focus:ring-[#f15a24] border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Monthly</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] outline-none"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#f15a24] focus:border-[#f15a24] outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      className="w-full py-6 text-lg bg-[#f15a24] hover:bg-[#e04f1a] transition-colors"
                    >
                      Donate Now
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Your donation is secure and encrypted. We respect your privacy.
                    </p>
                  </div>
                </form>
              </div>

              {/* Donation Info */}
              <div className="bg-gray-50 p-8 md:w-1/3">
                <h2 className="text-xl font-semibold mb-4">How your donation helps</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#f15a24] rounded-full p-1 mr-3 mt-1">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <span>Provide education for underprivileged children</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f15a24] rounded-full p-1 mr-3 mt-1">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <span>Support healthcare initiatives in rural areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f15a24] rounded-full p-1 mr-3 mt-1">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <span>Empower women through skill development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f15a24] rounded-full p-1 mr-3 mt-1">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <span>Provide shelter and care for the elderly</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-medium mb-2">Tax Benefits</h3>
                  <p className="text-sm text-gray-600">
                    Donations to our organization are eligible for tax exemption under Section 80G of the Income Tax Act.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>For other ways to donate or for any questions, please contact us at:</p>
            <p className="font-medium mt-1">donate@poordevelopment.org | +91 98765 43210</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
