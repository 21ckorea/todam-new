'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  HomeIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: '주거 건축',
    description: '삶의 가치를 높이는 혁신적인 주거 공간을 설계합니다. 현대적인 디자인과 실용성의 완벽한 조화를 추구합니다.',
    icon: HomeIcon,
    features: [
      '맞춤형 주택 설계 및 컨설팅',
      '스마트홈 시스템 통합 설계',
      '친환경 주거 공간 설계',
      '고급 인테리어 디자인',
    ],
  },
  {
    title: '상업 건축',
    description: '브랜드 가치를 극대화하는 매력적인 상업 공간을 창출합니다. 비즈니스 성공을 위한 최적의 공간 솔루션을 제공합니다.',
    icon: BuildingOffice2Icon,
    features: [
      '오피스 빌딩 설계 및 시공',
      '상업시설 공간 최적화',
      '호텔 및 리조트 특화 설계',
      '브랜드 아이덴티티 반영 설계',
    ],
  },
  {
    title: '공공 건축',
    description: '지역 사회와 조화를 이루는 지속 가능한 공공 건축물을 설계합니다. 시민들의 삶의 질 향상에 기여합니다.',
    icon: BuildingLibraryIcon,
    features: [
      '교육 및 문화시설 설계',
      '친환경 공공시설 설계',
      '도시 재생 프로젝트',
      '커뮤니티 중심 설계',
    ],
  },
  {
    title: '리모델링',
    description: '기존 건물에 새로운 가치를 불어넣어 현대적이고 효율적인 공간으로 재탄생시킵니다.',
    icon: WrenchScrewdriverIcon,
    features: [
      '건물 가치 상승 리모델링',
      '에너지 효율화 개선',
      '공간 활용도 최적화',
      '구조 안전성 강화',
    ],
  },
];

const processSteps = [
  {
    title: '초기 상담',
    description: '고객의 니즈와 프로젝트 목표를 정확히 파악합니다.',
  },
  {
    title: '기획 및 설계',
    description: '전문가 팀이 최적의 설계안을 제안합니다.',
  },
  {
    title: '시공 및 관리',
    description: '철저한 품질 관리로 완벽한 시공을 보장합니다.',
  },
  {
    title: '사후 관리',
    description: '준공 이후에도 지속적인 관리를 제공합니다.',
  },
];

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center text-white"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                혁신적인 건축 서비스
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                혁신적인 설계와 완벽한 시공으로 고객의 꿈을 실현합니다.
                TODAM만의 차별화된 전문성으로 최고의 가치를 제공합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">{service.description}</p>
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-x-3 text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                프로젝트 진행 과정
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                체계적이고 전문적인 프로세스로 프로젝트의 성공을 보장합니다
              </p>
            </motion.div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-center text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 bg-blue-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                프로젝트 문의하기
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                TODAM과 함께 혁신적인 건축 프로젝트를 시작해보세요.
                전문가들이 귀하의 프로젝트를 성공적으로 이끌어드립니다.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <a
                  href="/contact"
                  className="rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 
                    shadow-sm hover:bg-gray-50 transition-colors inline-flex items-center"
                >
                  문의하기
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 