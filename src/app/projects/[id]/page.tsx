import ProjectDetailClient from './ProjectDetailClient';

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

// 정적 경로 생성을 위한 함수
export async function generateStaticParams() {
  // 실제 프로젝트에서는 데이터베이스나 API에서 모든 프로젝트 ID를 가져와야 합니다
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  return <ProjectDetailClient projectDetails={projectDetails} />;
} 