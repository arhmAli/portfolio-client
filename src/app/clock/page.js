"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../main.css';
export default function Page() {
  return (
    <>
    <div className="home-page-links">
    <Link href="/">
        <span>Home</span>
        </Link>
      
        <Link href="/clock">
        <span>Clock Project</span>
        </Link>
        <Link href="/therivet">
        <span>the rivet Project</span>
        </Link>
        <Link href="/screwdriver">
        <span>screwdriver Project</span>
        </Link>
      </div>
    <div className="p-6 md:p-12 lg:p-20 bg-gray-50 min-h-screen">
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Clock Project
      </motion.h1>

      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Advice for Future MECH 200 Students:
      </motion.h2>

      <motion.p 
        className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        One of 5 manual lathes in CSU's EMEC. Lathes are used to turn and drill the pen and pencil holders.
        To begin, I highly recommend taking detailed notes during the lab demonstrations of various machines. 
        Your notes will give you an overview of the processes and may contain important tips not mentioned in the 
        MECHCELLS process sheets.
      </motion.p>

      <motion.p 
        className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Another piece of advice for future Mech 200B students is to start the clock project early. Students who 
        have not taken this course previously will not realize how much work goes into producing a single clock 
        within specifications. As a result, procrastination will most likely lead to failure of this project and course. 
        Personally, I began grinding my lathe tool the day after the tutorial was published. Like anything in the machine shop, 
        nothing is produced quickly. The lathe tool took me several hours to complete, and I was required to buy three tools 
        in total due to mistakes. Producing a fine lathe tool is worth the time because it will result in the most quality cut 
        during turning operations, and it is necessary to have throughout the entirety of the course.
      </motion.p>

      <motion.p 
        className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Additionally, maintaining a positive, growth mindset will be crucial. It’s easy to become overwhelmed after failing or 
        receiving criticism about a part, but one must be able to overcome and learn from mistakes. Plus, if you start your project early, 
        any failed parts can be remade with time to spare! In my case, I had to purchase two brass pieces due to turning them out of 
        tolerance on the lathe. However, making mistakes is part of learning. After getting comfortable using the machines, reproducing parts 
        is much more efficient.
      </motion.p>

      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Cost Estimate to Produce One Clock
      </motion.h2>

      <motion.table 
        className="table-auto w-full mb-8 border-collapse border border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100">Item</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100">Hours</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Lathe Tool</td>
            <td className="border px-4 py-2">4.5 hours</td>
            <td className="border px-4 py-2">$105.07</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Brass Nut</td>
            <td className="border px-4 py-2">0.75 hours</td>
            <td className="border px-4 py-2">$17.68</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Pen Holder</td>
            <td className="border px-4 py-2">5 hours</td>
            <td className="border px-4 py-2">$117.85</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Pencil Holder</td>
            <td className="border px-4 py-2">2 hours</td>
            <td className="border px-4 py-2">$47.14</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Base</td>
            <td className="border px-4 py-2">3 hours</td>
            <td className="border px-4 py-2">$70.71</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Face</td>
            <td className="border px-4 py-2">2 hours</td>
            <td className="border px-4 py-2">$47.14</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Total</td>
            <td className="border px-4 py-2 font-bold">17.25 hours</td>
            <td className="border px-4 py-2 font-bold">$406.58</td>
          </tr>
        </tbody>
      </motion.table>

      <motion.p 
        className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <strong>Raw material cost:</strong>
        <ul className="list-disc list-inside ml-4">
          <li>One 1/8” Clear Acrylic, 6” * 12”: $5.70, used roughly 43% of total stock, $5.70 * 0.43 = $2.47</li>
          <li>One 6061 Aluminum Rectangle Bar, .375” * 2” * 12”: $9.77, used roughly 2/3 of stock, $9.77 * (2/3) = $6.51</li>
          <li>One Kelly Green felt with adhesive backing, 9” * 12”: $0.64. Used about 1 square inch, or roughly 0.9% of total stock, $0.64 * 0.009 = $0.005</li>
          <li>One 5/8” 1018 Cold Rolled Steel, 12”: $4.80. Used roughly 17% of stock, $4.80 * 0.17 = $0.82</li>
          <li>One 9/16” C360 Brass Hex Bar, 12”: $21.49. Used roughly 2% of stock, $21.49 * 0.02 = $0.43</li>
          <li>One 5/8” C360 Brass Round Bar, 12”: $18.95. Used roughly 20% of stock, $18.95 * 0.20 = $3.70</li>
          <li>One Klockkit 10043: $9.99 (battery not included)</li>
        </ul>
        <strong>Total raw material cost:</strong> $23.92
      </motion.p>

      <motion.p 
        className="mb-6 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        TOTAL CLOCK PRICE: $430.50
      </motion.p>
      <h1 className=' mb-6 text-xl'> Final Product :</h1>
      <img 
      className='mx-auto'
      src='clock.png'/>
    </div>
    </>
  );
}
