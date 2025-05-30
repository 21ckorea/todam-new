'use client';

import { motion } from 'framer-motion';
import {
  HomeIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: '주거 건축',
    description: '현대적이고 편안한 주거 공간을 설계하여 삶의 질을 높입니다.',
    icon: HomeIcon,
  },
  {
    title: '상업 건축',
    description: '브랜드 가치를 높이는 매력적인 상업 공간을 창출합니다.',
    icon: BuildingOffice2Icon,
  },
  {
    title: '공공 건축',
    description: '지역 사회와 조화를 이루는 공공 건축물을 설계합니다.',
    icon: BuildingLibraryIcon,
  },
  {
    title: '리모델링',
    description: '기존 건물에 새로운 가치를 불어넣어 공간을 재창조합니다.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              혁신적인 설계와 완벽한 시공으로 고객의 꿈을 실현합니다
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 transform -translate-y-1/2">
                  <div className="inline-flex p-3 bg-blue-600 rounded-xl">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 