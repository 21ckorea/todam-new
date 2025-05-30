import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

// 실제 프로젝트에서는 데이터베이스나 API에서 가져올 데이터입니다
const projectDetails = {
  id: 1,
  title: '현대적인 주거 공간',
  category: '주거 건축',
  location: '서울시 강남구',
  year: '2024',
  client: '개인',
  area: '500㎡',
  description: `도심 속 휴식을 위한 현대적인 주거 공간으로, 자연광을 최대한 활용하고 
                효율적인 공간 배치를 통해 삶의 질을 높이는 것을 목표로 했습니다.
                
                친환경 자재를 사용하고 에너지 효율을 고려한 설계로, 지속 가능한 
                주거 환경을 구현했습니다.`,
  images: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3',
  ],
  features: [
    '자연광을 최대한 활용한 설계',
    '친환경 자재 사용',
    '스마트 홈 시스템 적용',
    '에너지 효율적인 설비',
  ],
};

export default function ProjectDetail() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <Image
              src={projectDetails.images[0]}
              alt={projectDetails.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {projectDetails.title}
                </h1>
                <div className="mt-6 flex items-center gap-x-6 text-white">
                  <div className="flex items-center gap-x-2">
                    <MapPinIcon className="h-5 w-5" />
                    <span>{projectDetails.location}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <CalendarIcon className="h-5 w-5" />
                    <span>{projectDetails.year}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  프로젝트 개요
                </h2>
                <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10">
                  <div>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      카테고리
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-7 text-gray-900">
                      {projectDetails.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      클라이언트
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-7 text-gray-900">
                      {projectDetails.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      면적
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-7 text-gray-900">
                      {projectDetails.area}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      완공연도
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-7 text-gray-900">
                      {projectDetails.year}
                    </dd>
                  </div>
                </dl>
                <div className="mt-10 border-t border-gray-900/10 pt-10">
                  <h3 className="text-sm font-semibold leading-6 text-gray-600">
                    주요 특징
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {projectDetails.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-base leading-7 text-gray-600"
                      >
                        • {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:pl-8"
              >
                <div className="space-y-6">
                  {projectDetails.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold tracking-tight text-gray-900 mb-12"
            >
              프로젝트 갤러리
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projectDetails.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 