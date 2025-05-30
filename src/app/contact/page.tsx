'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative isolate bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
            >
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  프로젝트 문의
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TODAM과 함께 혁신적인 건축 프로젝트를 시작해보세요. 
                  전문가들이 귀하의 프로젝트를 성공적으로 이끌어드립니다.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">주소</span>
                      <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      서울특별시 강남구 테헤란로 123
                      <br />
                      TODAM 빌딩 15층
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">전화</span>
                      <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="tel:+82-2-123-4567">
                        02-123-4567
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="font-semibold text-gray-900">이메일</dt>
                    <dd className="mt-1">
                      <a className="hover:text-gray-900" href="mailto:ingyo98@gmail.com">
                        ingyo98@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
            >
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 