"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Head>
        <title>Trivet Project</title>
      </Head>

      <header className="text-center my-8">
        <motion.h1 
          className="text-4xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trivet Project
        </motion.h1>
      </header>

      <main className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-10">
          <motion.h2 
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Advice for Future MECH 200 Students
          </motion.h2>
          <p className="text-gray-600 mt-4">
            The HAAS CNC mill is used to produce the trivet. Future MECH 200B students should be aware that while this project is the quickest to complete, it is not without its challenges. Here are some tips:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Create the G-code in Mastercam as soon as the instructions are available.</li>
            <li>Take detailed notes during the CNC mill demonstration.</li>
            <li>Be cautious of Mastercam’s linear interpolation of curves.</li>
            <li>Spend ample time sanding the stock, working up to 600 grit abrasive paper.</li>
            <li>Handle the trivet with clean hands, especially if bead blasted.</li>
            <li>Consider tumbling for a weathered appearance.</li>
          </ul>
        </section>

        <section className="mb-10">
          <motion.h2 
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cost Estimate to Produce One Trivet
          </motion.h2>
          <p className="text-gray-600 mt-4">
            <strong>Labor cost</strong> (based on national mean hourly wage for machinists):
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>Horizontal band sawing stock - 5 minutes</li>
            <li>End milling trivet to length – 1 hour</li>
            <li>Abrasive paper and bead blasting – 45 minutes</li>
            <li>CNC milling operation - 1 hour</li>
            <li>Stamping initials and cleaning trivet - 30 minutes</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Total labor cost: 3.33 hours * $23.57/hour = $78.57
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Raw material cost</strong>:
          </p>
          <p className="text-gray-600 mt-2">
            One ¼” thick, 6” by 12” 6061-T6 Aluminum Sheet: $6.99
          </p>
          <p className="text-gray-600 mt-2">
            Total trivet price: $85.56
          </p>
        </section>

        <section className="mb-10">
          <motion.h2 
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Improving Production Efficiency
          </motion.h2>
          <p className="text-gray-600 mt-4">
            To produce a trivet more efficiently, keep the stock at a length that allows for multiple trivets to be made simultaneously. Use carbide end mills to double the speeds and feeds, and cut the long sections into individual trivets using a horizontal band saw, ensuring they are milled to an in-tolerance length.
          </p>
        </section>

        <section className="mb-10">
          <motion.h2 
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Production of 10,000 Trivets
          </motion.h2>
          <p className="text-gray-600 mt-4">
            To produce 10,000 trivets, employ the methods outlined above. Bulk orders of raw materials will reduce costs significantly, and with a powerful CNC mill, production can be largely automated. This would bring down the raw material price per trivet to $1.79, a quarter of the original price.
          </p>
        </section>

        <section className="flex justify-center">
          <motion.img 
            src="/therivet.png"
            alt="CNC Mill in Action"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <img
          className='mx-auto'
          src="/therivet-2.png"
          />
        </section>
      </main>
    </div>
  );
}
