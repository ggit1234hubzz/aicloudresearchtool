import { DemoResult } from '../types/results';

export const demoResults: DemoResult[] = [
  {
    id: '1',
    title: 'Document Analysis Results',
    topics: [
      { label: 'Technology', value: 35, color: '#3B82F6' },
      { label: 'Healthcare', value: 25, color: '#10B981' },
      { label: 'Education', value: 20, color: '#F59E0B' },
      { label: 'Finance', value: 15, color: '#8B5CF6' },
      { label: 'Others', value: 5, color: '#6B7280' }
    ],
    sentiment: [
      { label: 'Positive', value: 68, color: '#10B981' },
      { label: 'Neutral', value: 24, color: '#6B7280' },
      { label: 'Negative', value: 8, color: '#EF4444' }
    ],
    trends: [
      { label: 'Jan', value: 35 },
      { label: 'Feb', value: 45 },
      { label: 'Mar', value: 38 },
      { label: 'Apr', value: 50 },
      { label: 'May', value: 65 },
      { label: 'Jun', value: 60 },
      { label: 'Jul', value: 75 },
      { label: 'Aug', value: 85 }
    ],
    entities: [
      { name: 'Microsoft', type: 'Organization', confidence: 92 },
      { name: 'WHO', type: 'Organization', confidence: 89 },
      { name: 'UNESCO', type: 'Organization', confidence: 87 },
      { name: 'New York', type: 'Location', confidence: 95 },
      { name: 'Tokyo', type: 'Location', confidence: 93 },
      { name: 'John Smith', type: 'Person', confidence: 82 }
    ],
    recommendations: [
      'Consider focusing more on the healthcare section where sentiment is most positive',
      'Address the financing concerns in section 3 where negative sentiment is highest',
      'Expand on educational trends which show consistent growth over time',
      'Reference additional data sources for more comprehensive entity analysis'
    ]
  }
];