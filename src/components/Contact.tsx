import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              프로젝트에 대해 상담하고 싶으신가요? 언제든 연락주세요.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <PhoneIcon className="absolute left-0 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                전화
              </dt>
              <dd className="inline ml-2">02-123-4567</dd>
            </div>
            <div className="relative mt-4 pl-9">
              <dt className="inline font-semibold text-gray-900">
                <EnvelopeIcon className="absolute left-0 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                이메일
              </dt>
              <dd className="inline ml-2">ingyo98@gmail.com</dd>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <MapPinIcon className="absolute left-0 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                주소
              </dt>
              <dd className="inline ml-2">서울특별시 강남구 테헤란로 123</dd>
            </div>
            <div className="mt-4 space-y-1 text-gray-600 pl-9">
              <p>TODAM 빌딩 15층</p>
              <p>(지하철 2호선 강남역 도보 5분)</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900">영업시간</dt>
              <dd className="mt-2">
                <ul className="space-y-2 text-gray-600">
                  <li>월요일 - 금요일: 09:00 - 18:00</li>
                  <li>토요일: 10:00 - 15:00 (예약제)</li>
                  <li>일요일 및 공휴일: 휴무</li>
                </ul>
              </dd>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 