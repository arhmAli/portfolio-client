"use client"
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="p-6 md:p-12 lg:p-20 bg-gray-50 min-h-screen">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Screwdriver Project
      </motion.h1>

      <section className="mb-12">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lessons Learned
        </motion.h2>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          When I started the screwdriver project, I wish I had known the importance of meticulous planning and patience. 
          One key lesson is to always measure twice and cut once to avoid costly mistakes. Additionally, understanding the 
          properties of different materials can save a lot of time and effort. I would advise future students to start early, 
          stay organized, and not hesitate to ask for help when needed.
        </motion.p>
      </section>

      <section className="mb-12">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Cost Estimate to Make One Screwdriver
        </motion.h2>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          The cost estimate to make one screwdriver includes raw materials and labor. Here are the details:
          <ul className="list-disc list-inside ml-4">
            <li>Steel Rod: $5.00</li>
            <li>Plastic Handle: $2.50</li>
            <li>Miscellaneous Fasteners: $1.00</li>
            <li>Labor: 3 hours at $25/hour = $75.00</li>
          </ul>
          <strong>Total Cost: $83.50</strong>
        </motion.p>
      </section>

      <section className="mb-12">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Proposal to Improve Production Efficiency
        </motion.h2>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          To improve the efficiency of screwdriver production, modern machining processes such as CNC machining 
          and injection molding can be leveraged. CNC machines can significantly reduce the time required to shape 
          the metal parts with high precision. Injection molding can be used to produce plastic handles quickly and 
          consistently. Implementing automated assembly lines with robotic arms can further reduce manual labor, 
          increasing overall productivity and reducing costs.
        </motion.p>
      </section>

      <section className="mb-12">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Cost Estimate to Make 10,000 Screwdrivers
        </motion.h2>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          Assuming an automated system with no labor costs, the cost estimate to produce 10,000 screwdrivers includes only 
          raw materials and operational costs. Here are the details:
          <ul className="list-disc list-inside ml-4">
            <li>Steel Rods (bulk purchase): $40,000</li>
            <li>Plastic Handles (bulk purchase): $20,000</li>
            <li>Miscellaneous Fasteners (bulk purchase): $10,000</li>
            <li>Operational Costs: $10,000</li>
          </ul>
          <strong>Total Cost: $80,000</strong>

          Compared to the manual process in the EMEC:
          <ul className="list-disc list-inside ml-4">
            <li>Labor: 3 hours per screwdriver x 10,000 screwdrivers = 30,000 hours at $25/hour = $750,000</li>
            <li>Raw Materials: $83.50 per screwdriver x 10,000 screwdrivers = $835,000</li>
          </ul>
          <strong>Total Cost: $1,585,000</strong>
        </motion.p>
      </section>

      <section className="mb-12">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Production Stages and Final Product
        </motion.h2>
        <img
        className='mx-auto'
        src="screw-1.png"
        />
        <br/>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          This is the screwdriver that MECH 200 students receive at the beginning of the project. From here, students face and center 
          drill the end of the handle on a manual lathe. Center drilling allows for a live center to support the screwdriver during its 
          time in the CNC lathe. Without support from a tailstock and live center, the handle mass and spindle speed of the lathe would 
          cause immense (and potentially dangerous) forces that will bend the screwdriver. The CNC lathe turns down the radius of the 
          handle and cuts chamfers on each end of the handle.
        </motion.p>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          The next step in the process is to knurl the screwdriver handle on a manual lathe using a knurling tool. From there, an 
          oxygen-acetylene torch is used to heat the steel tip, so that a drop forge can form the screwdriver tip. The oxygen-acetylene 
          torch also allows for heat treatment of the screwdriver tip, but this is the last process before the finishing processes.
        </motion.p>
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <strong>Drop forge and torch:</strong> The drop forge shapes the tip of the screwdriver, while the belt grinder removes excess 
          material and shapes the tip into its final form.
        </motion.p>
        <img
        className='mx-auto'
        src="screw-3.png"
        />
        <motion.p
          className="mb-6 text-lg md:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          >
          <strong>Final Product:</strong> The finished screwdriver is the result of precise machining and careful attention to detail 
          at each stage of the production process. The handle is ergonomically designed and the tip is heat-treated for durability, 
          ensuring a high-quality tool for use.
        </motion.p>
        <img
        className='mx-auto'
        src='screw-4.png'
        />
      </section>
    </div>
  );
}
