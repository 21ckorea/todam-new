'use client';

import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { UsersIcon } from '@heroicons/react/24/outline';

const stats = [
  { label: '설립연도', value: '2024' },
  { label: '완공 프로젝트', value: '50+' },
  { label: '전문 인력', value: '30+' },
  { label: '수상 실적', value: '15+' },
];

const values = [
  {
    title: '혁신',
    description: '최신 기술과 디자인 트렌드를 접목하여 미래지향적인 건축을 실현합니다.',
  },
  {
    title: '지속가능성',
    description: '환경을 생각하는 친환경 건축으로 더 나은 미래를 만들어갑니다.',
  },
  {
    title: '고객 중심',
    description: '고객의 니즈를 최우선으로 생각하며, 만족스러운 결과물을 제공합니다.',
  },
];

const departments = [
  {
    name: '대표이사',
    role: 'CEO',
    children: [
      {
        name: '영업부',
        role: 'SALES DEPT.',
      },
      {
        name: '건축부',
        role: 'ARCHITECTURE DEPT.',
      },
      {
        name: '토목부',
        role: 'CIVIL ENGINEERING DEPT.',
      },
      {
        name: '공무부',
        role: 'CONSTRUCTION DEPT.',
      },
      {
        name: '관리부',
        role: 'ADMINISTRATION DEPT.',
      },
      {
        name: '기계,전기부',
        role: 'MECHANICAL, ELECTRICITY DEPT.',
      },
    ],
  },
];

const subDepartments = [
  {
    name: 'CM 감리본부',
    role: 'CM SUPERVISION',
    children: []
  },
  {
    name: '설계본부',
    role: 'DESIGN',
    children: [
      { name: '1소', role: 'TEAM 1' },
      { name: '2소', role: 'TEAM 2' },
      { name: '3소', role: 'TEAM 3' },
      { name: '전략기획실', role: 'STRATEGIC PLANNING' }
    ]
  },
  {
    name: '기술개발본부',
    role: 'R&D',
    children: [
      { name: '연구소', role: 'RESEARCH CENTER' },
      { name: '기술지원', role: 'TECHNICAL SUPPORT' }
    ]
  }
];

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative sm:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
                alt="Modern architecture"
                fill
                className="object-cover brightness-50"
              />
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center text-white"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                About TODAM
              </h1>
              <p className="mt-6 text-lg leading-8">
                혁신적인 건축 설계로 더 나은 미래를 만들어가는 종합 건축 회사입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TODAM은 혁신적인 건축 설계와 완벽한 시공으로 고객의 꿈을 실현합니다. 
                우리는 단순한 건물이 아닌, 사람들의 삶을 풍요롭게 만드는 공간을 창조합니다.
                지속 가능한 미래를 위한 친환경 건축을 선도하며, 도시의 새로운 가치를 창출합니다.
              </p>
            </motion.div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <dt className="text-xl font-semibold leading-7 text-gray-900">
                      {value.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Organization Chart Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                조직도
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-16">
                전문성과 열정을 갖춘 TODAM의 조직은 고객의 프로젝트를 성공으로 이끄는 핵심입니다
              </p>
            </motion.div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-6xl">
                {/* CEO Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 mx-auto w-24"
                >
                  <div className="bg-blue-800 rounded-[15px] rotate-45 aspect-square">
                    <div className="absolute inset-0 -rotate-45 flex items-center justify-center text-center text-white">
                      <div>
                        <p className="text-base font-bold">CEO</p>
                        <p className="text-xs">(대표이사)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Lines Container */}
                <div className="relative mt-12">
                  <div className="relative">
                    {/* Vertical Line from CEO */}
                    <div className="absolute left-1/2 -translate-x-px -top-8 w-[1px] h-8 bg-gray-300" />
                    
                    {/* Horizontal Line */}
                    <div className="absolute left-0 right-0 top-0 h-[1px] bg-gray-300" />
                    
                    {/* Department Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 pt-12">
                      {departments[0].children.map((dept, index) => (
                        <motion.div
                          key={dept.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative group"
                        >
                          <div className="absolute left-1/2 -translate-x-px -top-12 w-[1px] h-12 bg-gray-300 
                            hidden sm:block group-hover:bg-blue-400 transition-colors" />
                          
                          <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200
                            hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-sm font-semibold text-gray-900">{dept.name}</h4>
                            <p className="text-xs text-gray-500 mt-1">{dept.role}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 sm:py-32 bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base leading-7 text-blue-100">{stat.label}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                      {stat.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                건축, 디자인, 엔지니어링 분야의 최고 전문가들이 모여 
                혁신적인 건축 솔루션을 제시합니다. 
                각자의 전문성과 창의력을 바탕으로 최고의 결과물을 만들어냅니다.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 