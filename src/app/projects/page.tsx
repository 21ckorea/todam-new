'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const categories = ['전체', '주거 건축', '상업 건축', '공공 건축', '리모델링'];

const projects = [
  {
    id: 1,
    title: '현대적인 주거 공간',
    category: '주거 건축',
    location: '서울시 강남구',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
    description: '도심 속 휴식을 위한 현대적인 주거 공간',
  },
  {
    id: 2,
    title: '도심 속 복합 문화 공간',
    category: '상업 건축',
    location: '서울시 성동구',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3',
    description: '문화와 소통이 어우러진 복합 상업 공간',
  },
  {
    id: 3,
    title: '친환경 공공 도서관',
    category: '공공 건축',
    location: '경기도 성남시',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3',
    description: '자연과 조화를 이루는 친환경 도서관',
  },
  {
    id: 4,
    title: '도시형 주거 단지',
    category: '주거 건축',
    location: '인천시 송도구',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3',
    description: '현대인의 라이프스타일을 반영한 주거 단지',
  },
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative sm:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-4.0.3"
                alt="Architecture projects"
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
                Our Projects
              </h1>
              <p className="mt-6 text-lg leading-8">
                혁신적인 디자인과 기술력으로 완성한 TODAM의 프로젝트들을 소개합니다.
                각각의 프로젝트에는 우리의 열정과 전문성이 깃들어 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-semibold text-gray-900">프로젝트 카테고리</h2>
              <p className="mt-2 text-gray-600">
                TODAM이 전문성을 가진 다양한 건축 분야를 확인해보세요
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-6 py-2 text-sm font-medium 
                    bg-white border-2 border-gray-200 text-gray-700
                    hover:border-blue-500 hover:text-blue-500 transition-all"
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden
                    hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 
                          text-sm font-medium text-blue-700">{project.category}</span>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{project.description}</p>
                      <div className="mt-4 flex items-center text-blue-600">
                        <span className="text-sm font-medium">자세히 보기</span>
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                새로운 프로젝트를 시작하세요
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                TODAM과 함께라면 당신의 건축 프로젝트가 더욱 특별해집니다.
                혁신적인 디자인과 전문적인 기술력으로 프로젝트를 성공으로 이끌어드립니다.
                지금 바로 TODAM과 함께 미래를 설계해보세요.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 
                    shadow-sm hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  프로젝트 문의하기
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 